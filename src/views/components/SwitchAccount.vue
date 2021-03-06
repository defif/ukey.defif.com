<template>
  <v-dialog v-model="d_show" width="500" persistent>
    <v-card>
      <v-card-title class="subtitle-1 font-weight-regular white--text bg-switch">
        <v-icon color="#fff" class="mr-2">mdi-wallet-outline</v-icon>
        {{ $t('Switch Account') }}
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text style="min-height: 350px;">
        <template v-if="addressList.length === 5">
          <v-row v-for="(item, index) in addressList" :key="index">
            <v-col cols="12">
              <v-checkbox v-model="item.selected" @click="selectedAddress(index)" color="primary" hide-details>
                <template v-slot:label>
                  <div class="subtitle-2 same-width" :class="item.selected ? 'primary--text' : 'black--text'">{{ item.address }}</div>
                </template>
              </v-checkbox>
            </v-col>
          </v-row>
        </template>
        <template v-else>
          <div class="d-flex flex-column justify-center align-center" style="min-height: 350px; width: 100%;">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </div>
        </template>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey" text @click="close">
          {{ $t('Close') }}
        </v-btn>
        <v-btn color="primary" text @click="confirm">
          {{ $t('Confirm') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    currentAddress: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      addressList: [],
      d_show: false,
      currentSelect: 0
    }
  },
  created() {
    this.d_show = this.$props.show
    this.currentSelect = this.c_account
    this.initAddressList()
  },
  computed: {
    c_coinInfo: vm => vm.$store.__s('coinInfo'),
    c_trop: vm => vm.$store.__s('trop'),
    c_eth: vm => vm.$store.__s('eth'),
    c_account() {
      const type = this.c_coinInfo.symbol
      switch (type) {
        case 'eth':
        case 'usdt':
          return this.c_eth.account
        case 'trop':
        case 'tusdt':
          return this.c_trop.account
        default:
          return this.c_trop.account
      }
    }
  },
  methods: {
    async initAddressList() {
      this.addressList = []
      for (let i = 0; i < 5; i++) {
        const result = await this.$usb.cmd('EthereumGetAddress', {
          address_n: [(44 | 0x80000000) >>> 0, (this.c_coinInfo.slip44 | 0x80000000) >>> 0, (0 | 0x80000000) >>> 0, 0, i],
          show_display: false
        })
        const temp = { address: result.data.address, selected: this.c_account === i }
        if (this.c_account === i) {
          this.currentSelect = i
        }
        this.addressList.push(temp)
      }
    },
    selectedAddress(index) {
      this.addressList.splice(this.currentSelect, 1, { ...this.addressList[this.currentSelect], selected: false })
      this.addressList.splice(index, 1, { ...this.addressList[index], selected: true })
      this.currentSelect = index
    },
    confirm() {
      if (this.currentSelect !== this.c_account) {
        this.$emit('on-change', this.currentSelect)
      } else {
        this.close()
      }
    },
    close() {
      this.$emit('on-close')
    }
  },
  i18n: {
    messages: {
      zhCN: {
        'Switch Account': '切换账户'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.same-width {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;
}
.bg-switch {
  background-image: linear-gradient(-180deg, rgba(44, 115, 210, 1), rgba(44, 115, 210, 0.8));
}
</style>

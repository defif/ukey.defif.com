import UnitHelper from '@abckey/unit-helper';
<template>
  <v-container class="d-flex justify-center align-center" style="height: calc(100vh - 100px);">
    <v-btn color="success" @click="getAddressList">开始</v-btn>
  </v-container>
</template>

<script>
import UnitHelper from '@abckey/unit-helper'
export default {
  data() {
    return {
      addressList: []
    }
  },
  created() {
    console.log(this.getFees())
  },
  methods: {
    getFees() {
      const sizeIn = UnitHelper(1).times(148)
      const sizeOut = UnitHelper(10000).times(34)
      const sat = UnitHelper(sizeIn)
        .plus(sizeOut)
        .plus(10)
        .times(5)
      return UnitHelper(sat, 'sat_btc').toString()
    },
    async getAddressList() {
      console.time('get add start')
      for (let i = 0; i < 10000; i++) {
        this.addressList.push(await this.getAddr(i))
      }
      console.timeEnd('get add start')
      console.log('地址列表', this.addressList)
    },
    async getAddr(i) {
      const result = await this.$usb.cmd('GetAddress', {
        coin_name: 'Bitcoin',
        address_n: [(this.c_protocol | 0x80000000) >>> 0, (0 | 0x80000000) >>> 0, (0 | 0x80000000) >>> 0, 0, i],
        script_type: 'SPENDP2SHWITNESS',
        show_display: false
      })
      return result.data.address
    }
  }
}
</script>

<style lang="scss" scoped></style>

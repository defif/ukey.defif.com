<template>
  <v-container fill-height class="d-flex flex-column justify-center text-center align-center" style="width:100%;">
    <v-alert prominent width="80%" type="error" v-show="!d_usb">
      <v-row align="center">
        <v-col class="grow">{{ $t('Your browser is not support webusb.') }}</v-col>
      </v-row>
    </v-alert>
    <div class="content">
      <div class="d-flex flex-column justify-center align-center">
        <img :src="require(`@/assets/${this.c_brand.logo}`)" height="90" />
        <h1 class="title">{{ c_brand.name === 'abckey' ? $t('Please Connect ABCKEY') : $t('Please Connect DF_UKey...') }}</h1>
      </div>
      <v-btn dark rounded color="primary" :disabled="d_usb ? false : true" @click="connect" class="mt-6">
        <v-icon size="20" color="#fff">mdi-usb</v-icon>
        <span class="subtitle-2 pl-2">{{ $t('Check For Device') }}</span>
      </v-btn>
    </div>
    <div class="footer">
      <span class="subtitle-2">&copy; {{ c_brand.domain }}</span>
    </div>
    <div class="language-wrap">
      <div class="d-flex">
        <v-btn text color="primary" @click="$store.__s('dialog.language', true)"><v-icon size="medium" class="pr-4">mdi-translate</v-icon>{{ $t('name') }}</v-btn>
        <v-btn text color="warning" @click="resetAll">{{ $t('Reset') }}</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Connect',
  data() {
    return {
      d_usb: ''
    }
  },
  computed: {
    c_connect: vm => vm.$store.__s('usb.connect'),
    c_brand: vm => vm.$store.__s('brand')
  },
  mounted() {
    this.d_usb = window.navigator.usb
  },
  methods: {
    /**
     * @method  connect - usbdevice
     * @return void
     */
    async connect() {
      await this.$usb.add()
    },
    resetAll() {
      localStorage.removeItem('vuex')
      this.$message.success(this.$t('Reset successful'))
    }
  },
  i18n: {
    messages: {
      zhCN: {
        Reset: '重置应用',
        'Reset successful': '重置应用成功',
        'Please Connect ABCKEY...': '等待连接',
        'Please Connect DF_UKey...': '迪富U盾未连接...',
        'Check For Device': '连接设备',
        'Please change Google Chrome, because the current browser does not support connecting devices': '当前浏览器不支持连接设备，建议使用谷歌浏览器打开！'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.language-wrap {
  position: absolute;
  width: 100%;
  top: 0;
  padding: 10px 0;
  padding-right: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-end;
}
.content {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  margin-top: -100px;
}
.footer {
  height: 80px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
}
</style>

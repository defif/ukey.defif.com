<template>
  <v-alert prominent type="error" v-if="c_needsBackup" class="ma-2">
    <v-row align="center">
      <v-col class="grow">{{ $t('Your device is not backed up. To ensure the safety of your funds, please backup immediately!') }}</v-col>
      <v-col class="shrink">
        <v-btn rounded @click="m_backupDevice">👉{{ $t('Backup Now') }}</v-btn>
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
import UsbMixin from '@/mixins/usb'
export default {
  mixins: [UsbMixin],
  computed: {
    c_needsBackup: vm => vm.$store.__s('usb.needsBackup')
  },
  i18n: {
    messages: {
      zhCN: {
        'Your device is not backed up. To ensure the safety of your funds, please backup immediately!': '您的设备未备份。 为了确保您的资金安全，请立即备份！',
        'Backup Now': ' 立即备份 '
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

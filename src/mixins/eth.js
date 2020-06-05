import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['eth', 'coinInfo', 'trop'])
  },
  methods: {
    async ethGetPublicKey() {
      if (!this.c_addressN) return (this.d_response = 'path error')
      const proto = {
        address_n: this.c_addressN,
        show_display: this.d_showDisplay
      }
      console.log(proto)
      await this.$usb.cmd('EthereumGetPublicKey', proto, true)
    },
    async ethGetAddress() {
      const type = this.coinInfo.symbol
      let account = 0
      switch (type) {
        case 'eth':
        case 'usdt':
          account = this.eth.account
          break
        case 'trop':
        case 'tusdt':
          account = this.trop.account
          break
        default:
          account = this.eth.account
      }
      const result = await this.$usb.cmd('EthereumGetAddress', {
        address_n: [(44 | 0x80000000) >>> 0, (this.c_coinInfo.slip44 | 0x80000000) >>> 0, (0 | 0x80000000) >>> 0, 0, account],
        show_display: false
      })
      return result.data.address
    }
  }
}

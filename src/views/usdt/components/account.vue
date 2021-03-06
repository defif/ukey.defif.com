<template>
  <v-container class="pa-0 text-left" fluid>
    <switch-account v-if="d_switchAccountShow" :show="d_switchAccountShow" :currentAddress="c_address" @on-close="d_switchAccountShow = false" @on-change="switchAccount" />
    <v-card class="px-3 mb-3">
      <v-row justify="center" align="center">
        <v-col cols="2">
          <span class="subtitle-2">{{ $t('Current Account') }}</span>
        </v-col>
        <v-col cols="1">
          <v-divider vertical style="height: 30px;" />
        </v-col>
        <v-col cols="6">
          <span class="subtitle-2">{{ c_address }}</span>
        </v-col>
        <v-col cols="1">
          <v-divider vertical style="height: 30px;" />
        </v-col>
        <v-col cols="2" class="">
          <v-btn class="subtitle-2" color="primary" text @click="changeAccount">{{ $t('Change') }}</v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="px-3">
      <v-row>
        <v-col class="text-center">
          <v-btn @click="upBalance()" text>
            <span>{{ $t('Balance') }}</span>
            <v-icon :class="['ml-1', d_loading.upBalance && 'rotate']" size="16" color="primary">mdi-cached</v-icon>
          </v-btn>
          <div :class="['mt-1', d_loading.upBalance && 'blur']">
            <span class="title font-weight-bold">{{ UnitHelper(d_balance).div(1000000).toString(10) }}</span>
            <span class="text-uppercase caption">&nbsp;{{ coin }}</span>
          </div>
        </v-col>
        <v-col class="text-center">
          <v-btn @click="upAll()" text>
            <span>{{ $t('Convert') }}</span>
            <v-icon :class="['ml-1', (d_loading.upBalance || d_loading.upRate) && 'rotate']" size="16" color="primary">mdi-cached</v-icon>
          </v-btn>
          <div :class="['mt-1', (d_loading.upBalance || d_loading.upRate) && 'blur']">
            <span class="title font-weight-bold">{{ UnitHelper(d_balance).div(1000000).times(this.d_rate).toFixed(8).toString(10) }}</span>
            <span class="text-uppercase caption">&nbsp;{{ cash }}</span>
          </div>
        </v-col>
        <v-col class="text-center">
          <v-btn @click="upRate()" text>
            <span>{{ $t('Rate') }}</span>
            <v-icon :class="['ml-1', d_loading.upRate && 'rotate']" size="16" color="primary">mdi-cached</v-icon>
          </v-btn>
          <div :class="['mt-1', d_loading.upRate && 'blur']">
            <span class="title font-weight-bold">{{ cash2str(d_rate) }}</span>
            <span class="text-uppercase caption">&nbsp;{{ cash }}/{{ coin }}</span>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-expansion-panels :value="0" class="mt-3">
      <v-expansion-panel v-if="d_txs.length === 0" readonly>
        <v-expansion-panel-header expand-icon="">
          <span>
            <v-btn @click="upBalance()" text>
              <b>{{ $t('Transaction details need to be refreshed.') }}</b>
              <v-icon right :class="['ml-1', d_loading.upBalance && 'rotate']" size="16" color="primary">mdi-cached</v-icon>
            </v-btn>
          </span>
        </v-expansion-panel-header>
      </v-expansion-panel>
      <v-expansion-panel v-for="(item, i) in d_txs" :key="i">
        <v-overlay :value="item.status === -1" absolute>
          <span class="caption">{{ $t('Unconfirm transaction') }}</span>
        </v-overlay>
        <v-expansion-panel-header>
          <v-row align="center" no-gutters>
            <v-col cols="4">
              <span class="caption grey--text">{{ new Date(item.blockTime * 1000).toLocaleString() }}</span>
              <span v-if="item.from.toLowerCase() === c_address.toLowerCase()" class="ml-2 caption grey--text">nonce:{{ item.nonce }}</span>
            </v-col>
            <v-col cols="4">
              <v-tooltip :disabled="!item.value" top>
                <template v-slot:activator="{ on }">
                  <v-chip v-on="on" :color="item.from.toLowerCase() === c_address.toLowerCase() ? 'red' : 'green'" small label outlined>
                    <v-icon left size="18">{{ item.from.toLowerCase() !== c_address.toLowerCase() ? 'mdi-plus' : 'mdi-minus' }}</v-icon>
                    <span>{{ UnitHelper(item.value).div(1000000).toString() }}</span>
                    <span class="text-uppercase caption ml-1">{{ coin }}</span>
                  </v-chip>
                </template>
                <span>
                  <span>{{ item.from !== c_address.toLowerCase() ? $t('Received') : $t('Spent') }}</span>
                  <b>&nbsp;{{ UnitHelper(item.value).div(1000000).times(d_rate).toString(10) }}</b>
                  <span class="text-uppercase caption">&nbsp;{{ cash }}</span>
                </span>
              </v-tooltip>
            </v-col>
            <v-col cols="4">
              <v-tooltip :disabled="!item.value" top>
                <template v-slot:activator="{ on }">
                  <v-chip v-on="on" small label outlined>
                    <v-icon left color="grey" size="22">mdi-wallet-outline</v-icon>
                    <span>{{ UnitHelper(d_balance).div(1000000).toString(10) }}</span>
                    <span class="text-uppercase caption ml-1">{{ coin }}</span>
                  </v-chip>
                </template>
                <span>
                  <span>{{ $t('Balance') }}</span>
                  <b>&nbsp;{{ UnitHelper(d_balance).times(d_rate).div(1000000).toString(10) }}</b>
                  <span class="text-uppercase caption">&nbsp;{{ cash }}</span>
                </span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-simple-table dense>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td class="caption">{{ $t('Hash') }}</td>
                  <td>
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <span class="number caption" v-on="on">
                          <!--  {{ item.txid.replace(/^(.......).+(.......)$/g, '$1 ######### $2') }} -->
                          {{ item.txid }}
                        </span>
                      </template>
                      <span>
                        <span class="caption">{{ item.txid }}</span>
                      </span>
                    </v-tooltip>
                  </td>
                </tr>
                <tr>
                  <td class="caption">{{ $t('Block') }}</td>
                  <td class="caption">{{ item.blockHeight }}</td>
                </tr>
                <tr>
                  <td class="caption">{{ $t('Time') }}</td>
                  <td class="caption">{{ new Date(item.blockTime * 1000).toLocaleString() }}</td>
                </tr>
                <tr>
                  <td class="caption">{{ $t('Token Address') }}</td>
                  <td class="caption">{{ item.token }}</td>
                </tr>
                <tr>
                  <td class="caption">{{ $t('Token Name') }}</td>
                  <td class="caption">{{ item.type }}</td>
                </tr>
                <tr>
                  <td class="caption">{{ $t('Value') }}</td>
                  <td class="caption">{{ UnitHelper(item.value).div(1000000).toString() }} USDT</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-row>
            <v-col cols="6">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">{{ $t('Input') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption number">
                        <span v-if="item.value">
                          <v-icon size="16" :color="item.from.toLowerCase() === c_address.toLowerCase() ? 'blue' : 'gray'">mdi-key</v-icon>
                          <span :class="item.from.toLowerCase() === c_address.toLowerCase() ? 'blue--text' : 'gray--text'">&nbsp;{{ item.from }}</span>
                        </span>
                        <v-tooltip top v-else>
                          <template v-slot:activator="{ on }">
                            <span v-on="on">
                              <v-icon size="16" :color="item.from.toLowerCase() === c_address.toLowerCase() ? 'blue' : 'gray'">mdi-key</v-icon>
                              <span :class="item.from.toLowerCase() === c_address.toLowerCase() ? 'blue--text' : 'gray--text'">&nbsp;{{ item.from }}</span>
                            </span>
                          </template>
                          <span>
                            <b>{{ item.value }}</b>
                            <span class="text-uppercase caption">&nbsp;{{ coin }}</span>
                            <span>&nbsp;≈&nbsp;</span>
                            <b>{{ UnitHelper(item.value).times(this.d_rate).toString(10) }}</b>
                            <span class="text-uppercase caption">&nbsp;{{ cash }}</span>
                          </span>
                        </v-tooltip>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
            <v-col cols="6">
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">{{ $t('Output') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption number">
                        <v-icon size="16" :color="item.to.toLowerCase() === c_address.toLowerCase() ? 'blue' : 'gray'">mdi-key</v-icon>
                        <span :class="item.to.toLowerCase() === c_address.toLowerCase() ? 'blue--text' : 'gray--text'">&nbsp;{{ item.to }}</span>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <p class="mt-3 mb-7 grey--text text-center">
      <span class="caption">
        {{ $t('Only the latest 1000 data is displayed.') }}
        <a :href="`https://blockchair.com/${c_coinInfo.name.toLowerCase()}/address/${c_address}`" target="_blank">{{ $t('See more') }}</a>
      </span>
    </p>
  </v-container>
</template>

<script>
import * as HTTP from '@/http'
import ETH from '@/mixins/eth'
import UnitHelper from '@abckey/unit-helper'
import { utc2Beijing } from '../../../utils/common'
import SwitchAccount from '@/views/components/SwitchAccount'
export default {
  components: {
    SwitchAccount
  },
  props: {
    coin: {
      default: 'btc',
      type: String
    },
    cash: {
      default: 'usd',
      type: String
    },
    xpub: {
      default: '',
      type: String
    }
  },
  data: () => ({
    d_switchAccountShow: false,
    utc2Beijing,
    UnitHelper,
    d_balance: 0,
    d_rate: 0,
    summary: {
      spent: 0,
      received: 0,
      last_seen_spending: '',
      last_seen_receive: ''
    },
    transactions: [],
    d_totalReceived: 0,
    d_totalSent: 0,
    d_unconfirmedBalance: 0,
    d_unconfirmedTxs: 0,
    d_transactionCount: 0,
    d_addressCount: 0,
    d_address: '',
    d_txs: [],
    d_loading: {
      upBalance: false,
      upRate: false
    }
  }),
  watch: {
    coin() {
      this.upAll()
    },
    cash() {
      this.upAll()
    },
    xpub(val) {
      if (!val) return
      this.upAll()
    }
  },
  mixins: [ETH],
  computed: {
    c_coinInfo: (vm) => vm.$store.__s('coinInfo'),
    c_protocol: (vm) => vm.$store.__s('coinProtocol'),
    c_address: (vm) => vm.$store.__s('eth.address')
  },
  async created() {
    const path = this.$route.path
    for (;;) {
      if (this.$route.path !== path) break
      this.upAll()
      await new Promise((resolve) => setTimeout(resolve, 7700 * 1000))
    }
  },
  methods: {
    changeAccount() {
      this.d_switchAccountShow = true
    },
    switchAccount(account) {
      this.$store.__s('eth.account', account)
      this.d_txs = []
      this.upBalance()
      this.$message.success(this.$t('Switch account success.'))
      this.d_switchAccountShow = false
    },
    async getEthResult() {
      this.d_address = await this.ethGetAddress()
      this.$store.__s('eth.address', this.d_address)
      const data = await HTTP.Transaction.HistoryByContract({ coinName: 'eth', address: this.d_address, contract: this.c_coinInfo.contract })
      if (data?.tokens?.length) {
        this.summary = data.tokens[0]
      } else {
        this.summary = { balance: 0, contract: '0xdAC17F958D2ee523a2206206994597C13D831ec7', decimals: 6, name: 'Tether USD', symbol: 'USDT', transfers: 0, type: 'ERC20' }
      }
      this.transactions = data.transactions ? data.transactions : []
      this.$store.__s('eth.balance', this.summary.balance ? this.summary.balance : 0)
      this.$store.__s('balance', UnitHelper(this.summary.balance).div(1000000).toString())
      return data
    },

    upAll() {
      this.upBalance()
      this.upRate()
    },
    async upBalance() {
      this.d_loading.upBalance = true
      const result = await this.getEthResult()
      this.d_balance = this.summary.balance
      if (!result?.tokens?.length) {
        this.d_loading.upBalance = false
        return
      }
      this.d_loading.upBalance = false
      this._fixTxs(this.transactions)
    },
    async upRate() {
      this.d_loading.upRate = true
      const data = await HTTP.Market.Coin2Cash({ coinName: this.c_coinInfo.symbol, cashName: this.cash })
      if (data.error) return
      this.d_rate = data
      this.d_loading.upRate = false
    },
    sat2btc: (sat) => UnitHelper(sat).div(1000000000000000000).toNumber(),
    btc2str: (btc) => UnitHelper(btc).dp(8, 1).toFormat(),
    cash2str: (num) => UnitHelper(num).dp(8, 1).toFormat(),
    btc2cash: (sat, rate) => UnitHelper(sat).times(rate).dp(2, 1).toFormat(),
    unix2utc: (time) => new Date(time * 1000).toLocaleString(),
    _fixTxs(txs) {
      this.d_txs = []
      if (!txs?.length) return
      for (let i = 0; i < txs?.length; i++) {
        const item = { ...txs[i].tokenTransfers[0], ...txs[i].ethereumSpecific, blockTime: txs[i].blockTime, txid: txs[i].txid, fees: txs[i].fees, blockHeight: txs[i].blockHeight }
        txs[i].value = UnitHelper(txs[i].value).div(1000000).toString(10)
        this.d_txs.push(item)
      }
    },
    _isOwnAddr() {
      return true
    }
  },
  i18n: {
    messages: {
      zhCN: {
        'Last Seen Receiving': '最近接收',
        'Last Seen Spending': '最近发送',
        'Tips:Currently only supports a single account': '目前仅支持单一账户,多用户尚未开放',
        Change: '切换账号',
        'Current Account': '当前账号',
        Balance: '余额',
        Convert: '折合',
        Hash: '交易哈希',
        Block: '区块ID',
        Time: '时间',
        Rate: '汇率',
        'Token Address': '合约地址',
        'Token Name': '代币名',
        Value: '数量',
        Received: '收入',
        Spent: '花费',
        Confirmations: '确认',
        Fees: '费用',
        Input: '输入',
        Output: '输出',
        Refresh: '刷新',
        'See more': '查看更多',
        'Transaction details need to be refreshed.': '交易明细有待刷新。',
        'Only the latest 1000 data is displayed.': '仅显示最新 1000 条数据。',
        'Click to copy': '点击复制',
        'Total Received': '累计收入',
        'Total Spent': '累计转出',
        'Address Count': '地址计数',
        'Transaction Count': '交易计数',
        'Unconfirmed Balance': '未确认余额',
        'Unconfirmed Txs': '未确认交易计数',
        'Unconfirm transaction': '该笔交易暂未确认'
      }
    }
  }
}
</script>

<style lang="scss">
.account {
  width: inherit;
}

.blur {
  filter: blur(2px);
}
</style>

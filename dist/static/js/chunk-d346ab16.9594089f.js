(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d346ab16"],{"4bbe":function(t,e,s){(e=s("24fb")(!1)).push([t.i,".account-wrap[data-v-59c3767e]{margin:20px auto;max-width:960px}",""]),t.exports=e},"4d83":function(t,e,s){(e=s("24fb")(!1)).push([t.i,".account{width:inherit}.blur{-webkit-filter:blur(2px);filter:blur(2px)}",""]),t.exports=e},"65e6":function(t,e,s){"use strict";var a=s("6971");s.n(a).a},6971:function(t,e,s){var a=s("8b32");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,s("499e").default)("8662cf1a",a,!0,{sourceMap:!1,shadowMode:!1})},"6ca7":function(t,e,s){var a=s("dd75");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,s("499e").default)("27ca4fa0",a,!0,{sourceMap:!1,shadowMode:!1})},"6ea4":function(t,e,s){"use strict";var a=s("a563");s.n(a).a},7457:function(t,e,s){"use strict";var a=s("c171");s.n(a).a},"80f5":function(t,e,s){"use strict";s.r(e);var a=(s("4de4"),s("b680"),s("d3b7"),s("25f0"),s("96cf"),s("1da1")),n=s("c947"),r=s("26ca"),c=s("c9c7"),i=s.n(c),o={components:{SwitchAccount:s("83a5").a},props:{coin:{default:"btc",type:String},cash:{default:"usd",type:String},xpub:{default:"",type:String}},data:function(){return{UnitHelper:i.a,d_switchAccountShow:!1,d_balance:0,d_rate:0,d_totalReceived:0,d_totalSent:0,d_unconfirmedBalance:0,d_unconfirmedTxs:0,d_transactionCount:0,d_addressCount:0,d_address:"",d_txs:[],d_loading:{upBalance:!1,upRate:!1}}},watch:{coin:function(){this.upAll()},cash:function(){this.upAll()},xpub:function(t){t&&this.upAll()}},mixins:[r.a],computed:{c_coinInfo:function(t){return t.$store.__s("coinInfo")},c_protocol:function(t){return t.$store.__s("coinProtocol")},c_address:function(t){return t.$store.__s("eth.address")},c_balance:function(t){return t.$store.__s("balance")}},created:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=t.$route.path;case 1:if(t.$route.path===s){e.next=3;break}return e.abrupt("break",8);case 3:return t.upAll(),e.next=6,new Promise((function(t){return setTimeout(t,77e3)}));case 6:e.next=1;break;case 8:case"end":return e.stop()}}),e)})))()},methods:{switchAccount:function(t){this.$store.__s("eth.account",t),this.d_txs=[],this.upBalance(),this.$message.success(this.$t("Switch account success.")),this.d_switchAccountShow=!1},changeAccount:function(){this.d_switchAccountShow=!0},getEthResult:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.ethGetAddress();case 2:return t.d_address=e.sent,t.$store.__s("eth.address",t.d_address),e.next=6,n.b.HistoryByAddress({coinName:t.c_coinInfo.symbol,address:t.d_address});case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})))()},upAll:function(){this.upBalance(),this.upRate()},upBalance:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.d_loading.upBalance=!0,e.next=3,t.getEthResult();case 3:if(!(s=e.sent).error){e.next=6;break}return e.abrupt("return");case 6:a=s,t.d_balance=a.balance,t.$store.__s("balance",i()(t.d_balance,"wei_eth").toFixed(6).toString()),t.$store.__s("eth.balance",a.balance),t.d_unconfirmedBalance=a.unconfirmedBalance,t.d_unconfirmedTxs=a.unconfirmedTxs,t.d_transactionCount=a.txs,t.d_loading.upBalance=!1,t._fixTxs(a.transactions);case 15:case"end":return e.stop()}}),e)})))()},upRate:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.d_loading.upRate=!0,e.next=3,n.a.Coin2Cash({coinName:t.coin,cashName:t.cash});case 3:if(!(s=e.sent).error){e.next=6;break}return e.abrupt("return");case 6:t.d_rate=s,t.d_loading.upRate=!1;case 8:case"end":return e.stop()}}),e)})))()},sat2btc:function(t){return i()(t).div(1e18).toNumber()},btc2str:function(t){return i()(t).dp(8,1).toFormat()},cash2str:function(t){return i()(t).dp(8,1).toFormat()},btc2cash:function(t,e){return i()(t).times(e).dp(2,1).toFormat()},unix2utc:function(t){return new Date(1e3*t).toLocaleString()},_fixTxs:function(t){if(t){for(var e=0;e<(null==t?void 0:t.length);e++){var s=e+1===t.length?0:t[e+1].value;t[e].nonce=t[e].ethereumSpecific.nonce,t[e].gasLimit=t[e].ethereumSpecific.gasLimit,t[e].gasPrice=t[e].ethereumSpecific.gasPrice,t[e].gasUsed=t[e].ethereumSpecific.gasUsed,t[e].status=t[e].ethereumSpecific.status,t[e].valueChanged=i()(t[e].value-s,"wei_eth").toString(10),t[e].value=i()(t[e].value,"wei_eth").toString(10),t[e].fees=i()(t[e].fees,"wei_eth").toString(10);for(var a=0;a<(null===(n=t[e])||void 0===n||null===(r=n.vin)||void 0===r?void 0:r.length);a++){var n,r;t[e].vin[a].value=i()(t[e].vin[a].value,"wei_eth").toString(10),t[e].vin[a].own=this._isOwnAddr(t[e].vin[a].addresses[0])}for(var c=0;c<(null===(o=t[e])||void 0===o||null===(u=o.vout)||void 0===u?void 0:u.length);c++){var o,u;t[e].vout[c].value=i()(t[e].vout[c].value,"wei_eth").toString(10),t[e].vout[c].own=this._isOwnAddr(t[e].vout[c].addresses[0])}}this.d_txs=t.filter((function(t){return"0"!==t.value}))}},_isOwnAddr:function(t){return t.toLowerCase()===this.c_address.toLowerCase()}},i18n:{messages:{zhCN:{"Tips:Currently only supports a single account":"目前仅支持单一账户,多用户尚未开放",Change:"切换账号","Current Account":"当前账号",Balance:"余额",Convert:"折合",Rate:"汇率",Received:"收入",Spent:"花费",Hash:"哈希",Block:"区块",Confirmations:"确认",Fees:"费用",Input:"输入",Output:"输出",Refresh:"刷新","See more":"查看更多","Transaction details need to be refreshed.":"交易明细有待刷新。","Only the latest 1000 data is displayed.":"仅显示最新 1000 条数据。","Click to copy":"点击复制","Total Received":"累计收入","Total Spent":"累计转出","Address Count":"地址计数","Transaction Count":"交易计数","Unconfirmed Balance":"未确认余额","Unconfirmed Txs":"未确认交易计数","Switch account success.":"切换账户成功","Unconfirm transation":"该笔交易暂未确认"}}}},u=(s("6ea4"),s("2877")),d=s("6544"),l=s.n(d),p=s("8336"),_=s("b0af"),v=s("cc20"),f=s("62ad"),h=s("a523"),m=s("ce7e"),b=s("cd55"),g=s("49e2"),x=s("c865"),w=s("0393"),C=s("132d"),y=s("a797"),k=s("0fd9"),S=s("1f4f"),$=s("3a2f"),A=Object(u.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"pa-0 text-left",attrs:{fluid:""}},[t.d_switchAccountShow?s("switch-account",{attrs:{show:t.d_switchAccountShow,currentAddress:t.c_address},on:{"on-close":function(e){t.d_switchAccountShow=!1},"on-change":t.switchAccount}}):t._e(),s("v-card",{staticClass:"px-3 mb-3"},[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"2"}},[s("span",{staticClass:"subtitle-2"},[t._v(t._s(t.$t("Current Account")))])]),s("v-col",{attrs:{cols:"1"}},[s("v-divider",{staticStyle:{height:"30px"},attrs:{vertical:""}})],1),s("v-col",{attrs:{cols:"6"}},[s("span",{staticClass:"subtitle-2"},[t._v(t._s(t.c_address))])]),s("v-col",{attrs:{cols:"1"}},[s("v-divider",{staticStyle:{height:"30px"},attrs:{vertical:""}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-btn",{staticClass:"subtitle-2",attrs:{color:"primary",text:""},on:{click:t.changeAccount}},[t._v(t._s(t.$t("Change")))])],1)],1)],1),s("v-card",{staticClass:"px-3"},[s("v-row",[s("v-col",{staticClass:"text-center"},[s("v-btn",{attrs:{text:""},on:{click:function(e){return t.upBalance()}}},[s("span",[t._v(t._s(t.$t("Balance")))]),s("v-icon",{class:["ml-1",t.d_loading.upBalance&&"rotate"],attrs:{size:"16",color:"primary"}},[t._v("mdi-cached")])],1),s("div",{class:["mt-1",t.d_loading.upBalance&&"blur"]},[s("span",{staticClass:"title font-weight-bold"},[t._v(t._s(t.UnitHelper(t.d_balance,"wei_eth").toFixed(8).toString(10)))]),s("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.coin))])])],1),s("v-col",{staticClass:"text-center"},[s("v-btn",{attrs:{text:""},on:{click:function(e){return t.upAll()}}},[s("span",[t._v(t._s(t.$t("Convert")))]),s("v-icon",{class:["ml-1",(t.d_loading.upBalance||t.d_loading.upRate)&&"rotate"],attrs:{size:"16",color:"primary"}},[t._v("mdi-cached")])],1),s("div",{class:["mt-1",(t.d_loading.upBalance||t.d_loading.upRate)&&"blur"]},[s("span",{staticClass:"title font-weight-bold"},[t._v(t._s(t.UnitHelper(t.d_balance,"wei_eth").times(t.d_rate).toFixed(8).toString(10)))]),s("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.cash))])])],1),s("v-col",{staticClass:"text-center"},[s("v-btn",{attrs:{text:""},on:{click:function(e){return t.upRate()}}},[s("span",[t._v(t._s(t.$t("Rate")))]),s("v-icon",{class:["ml-1",t.d_loading.upRate&&"rotate"],attrs:{size:"16",color:"primary"}},[t._v("mdi-cached")])],1),s("div",{class:["mt-1",t.d_loading.upRate&&"blur"]},[s("span",{staticClass:"title font-weight-bold"},[t._v(t._s(t.cash2str(t.d_rate)))]),s("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.cash)+"/"+t._s(t.coin))])])],1)],1)],1),s("v-card",{staticClass:"px-3 mt-3"},[s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("tbody",[s("tr",[s("td",{staticClass:"caption"},[t._v(t._s(t.$t("Address Count")))]),s("td",{staticClass:"text-right"},[s("span",{class:[t.d_loading.upBalance&&"blur"]},[s("b",[t._v(t._s(t.d_addressCount?t.d_addressCount:0))])])])]),s("tr",[s("td",{staticClass:"caption"},[t._v(t._s(t.$t("Unconfirmed Balance")))]),s("td",{staticClass:"text-right"},[s("v-tooltip",{attrs:{disabled:!t.d_unconfirmedBalance,top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("span",t._g({class:[t.d_loading.upBalance&&"blur"]},a),[s("b",[t._v(t._s(t.UnitHelper(t.d_unconfirmedBalance,"wei_eth").toString(10)))]),s("span",{staticClass:"text-uppercase caption grey--text"},[t._v(" "+t._s(t.coin))])])]}}])},[s("span",[s("b",[t._v(t._s(t.btc2cash(t.d_unconfirmedBalance,t.d_rate)))]),s("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.cash))])])])],1)])])]},proxy:!0}])})],1),s("v-col",{attrs:{cols:"6"}},[s("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("tbody",[s("tr",[s("td",{staticClass:"caption"},[t._v(t._s(t.$t("Transaction Count")))]),s("td",{staticClass:"text-right"},[s("span",{class:[t.d_loading.upBalance&&"blur"]},[s("b",[t._v(t._s(t.d_transactionCount))])])])]),s("tr",[s("td",{staticClass:"caption"},[t._v(t._s(t.$t("Unconfirmed Txs")))]),s("td",{staticClass:"text-right"},[s("span",{class:[t.d_loading.upBalance&&"blur"]},[s("b",[t._v(t._s(t.d_unconfirmedTxs))])])])])])]},proxy:!0}])})],1)],1)],1),s("v-expansion-panels",{staticClass:"mt-3",attrs:{value:0}},[0===t.d_txs.length?s("v-expansion-panel",{attrs:{readonly:""}},[s("v-expansion-panel-header",{attrs:{"expand-icon":""}},[s("span",[s("v-btn",{attrs:{text:""},on:{click:function(e){return t.upBalance()}}},[s("b",[t._v(t._s(t.$t("Transaction details need to be refreshed.")))]),s("v-icon",{class:["ml-1",t.d_loading.upBalance&&"rotate"],attrs:{right:"",size:"16",color:"primary"}},[t._v("mdi-cached")])],1)],1)])],1):t._e(),t._l(t.d_txs,(function(e,a){return s("v-expansion-panel",{key:a},[s("v-overlay",{attrs:{value:-1===e.status,absolute:""}},[s("span",{staticClass:"caption"},[t._v(t._s(t.$t("Unconfirm transaction")))])]),s("v-expansion-panel-header",[s("v-row",{attrs:{align:"center","no-gutters":""}},[s("v-col",{attrs:{cols:"4"}},[s("span",{staticClass:"caption grey--text"},[t._v(t._s(t.unix2utc(e.blockTime)))]),e.vin[0].addresses[0].toLowerCase()===t.c_address.toLowerCase()?s("span",{staticClass:"ml-2 caption grey--text"},[t._v("nonce:"+t._s(e.nonce))]):t._e()]),s("v-col",{attrs:{cols:"4"}},[s("v-tooltip",{attrs:{disabled:!e.valueChanged,top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[s("v-chip",t._g({attrs:{color:e.vin[0].addresses.includes(t.c_address)?"red":"green",small:"",label:"",outlined:""}},n),[s("v-icon",{attrs:{left:"",size:"18"}},[t._v(t._s(e.vin[0].addresses.includes(t.c_address)?"mdi-minus":"mdi-plus"))]),s("span",[t._v(t._s(t.btc2str(Math.abs(e.value))))]),s("span",{staticClass:"text-uppercase caption ml-1"},[t._v(t._s(t.coin))])],1)]}}],null,!0)},[s("span",[s("span",[t._v(t._s(e.valueChanged>0?t.$t("Received"):t.$t("Spent")))]),s("b",[t._v(" "+t._s(t.btc2cash(Math.abs(e.value),t.d_rate)))]),s("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.cash))])])])],1),s("v-col",{attrs:{cols:"4"}},[s("v-tooltip",{attrs:{disabled:!e.value,top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-chip",t._g({attrs:{small:"",label:"",outlined:""}},a),[s("v-icon",{attrs:{left:"",color:"grey",size:"22"}},[t._v("mdi-wallet-outline")]),s("span",[t._v(t._s(t.c_balance))]),s("span",{staticClass:"text-uppercase caption ml-1"},[t._v(t._s(t.coin))])],1)]}}],null,!0)},[s("span",[s("span",[t._v(t._s(t.$t("Balance")))]),s("b",[t._v(" "+t._s(t.UnitHelper(t.c_balance).times(t.d_rate).toString()))]),s("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.cash))])])])],1)],1)],1),s("v-expansion-panel-content",[s("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("tbody",[s("tr",[s("td",{staticClass:"caption"},[t._v(t._s(t.$t("Hash")))]),s("td",[s("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[s("span",t._g({staticClass:"number"},n),[t._v(" "+t._s(e.txid)+" ")])]}}],null,!0)},[s("span",[s("span",[t._v(t._s(e.txid))])])])],1)]),s("tr",[s("td",{staticClass:"caption"},[t._v(t._s(t.$t("Block")))]),s("td",[t._v(t._s(e.blockHeight))])]),s("tr",[s("td",{staticClass:"caption"},[t._v(t._s(t.$t("Gas Price")))]),s("td",[t._v(t._s(t.UnitHelper(e.gasPrice,"wei_eth").toString(10))+" ETH")])]),s("tr",[s("td",{staticClass:"caption"},[t._v(t._s(t.$t("Gas Limit")))]),s("td",[t._v(t._s(e.gasLimit))])]),s("tr",[s("td",{staticClass:"caption"},[t._v(t._s(t.$t("Gas Used")))]),s("td",[t._v(t._s(e.gasUsed))])]),s("tr",[s("td",{staticClass:"caption"},[t._v(t._s(t.$t("Confirmations")))]),s("td",[t._v(t._s(e.confirmations))])]),s("tr",[s("td",{staticClass:"caption"},[t._v(t._s(t.$t("Fees")))]),s("td",[s("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[s("span",t._g({},n),[s("span",[t._v(t._s(t.btc2str(e.fees)))]),s("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.coin))])])]}}],null,!0)},[s("span",[s("b",[t._v(t._s(t.btc2cash(e.fees,t.d_rate)))]),s("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.cash))])])])],1)])])]},proxy:!0}],null,!0)}),s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v(t._s(t.$t("Input"))+"("+t._s(e.vin.length)+")")])])]),s("tbody",t._l(e.vin,(function(e,a){return s("tr",{key:a},[s("td",{staticClass:"caption number"},[e.value?s("span",[s("v-icon",{attrs:{size:"16",color:e.addresses[0].toLowerCase()===t.c_address.toLowerCase()?"bluet":"grey"}},[t._v("mdi-key")]),s("span",{class:e.addresses[0].toLowerCase()===t.c_address.toLowerCase()?"blue--text":"grey--text"},[t._v(" "+t._s(e.addresses[0]))])],1):s("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[s("span",t._g({class:[e.own&&"blue--text"]},n),[s("v-icon",{attrs:{size:"16",color:e.addresses[0].toLowerCase()===t.c_address.toLowerCase()?"bluet":"grey"}},[t._v("mdi-key")]),s("span",{class:e.addresses[0].toLowerCase()===t.c_address.toLowerCase()?"blue--text":"grey--text"},[t._v(" "+t._s(e.addresses[0]))])],1)]}}],null,!0)},[s("span",[s("b",[t._v(t._s(e.value))]),s("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.coin))]),s("span",[t._v(" ≈ ")]),s("b",[t._v(t._s(t.btc2cash(e.value,t.d_rate)))]),s("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.cash))])])])],1)])})),0)]},proxy:!0}],null,!0)})],1),s("v-col",{attrs:{cols:"6"}},[s("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v(t._s(t.$t("Output"))+"("+t._s(e.vout.length)+")")])])]),s("tbody",t._l(e.vout,(function(e,a){return s("tr",{key:a},[s("td",{staticClass:"caption number"},[s("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[s("span",t._g({class:[e.own&&"blue--text"]},n),[s("v-icon",{attrs:{size:"16",color:e.addresses[0].toLowerCase()===t.c_address.toLowerCase()?"blue":"grey"}},[t._v("mdi-key")]),s("span",{class:e.addresses[0].toLowerCase()===t.c_address.toLowerCase()?"blue--text":"grey--text"},[t._v(" "+t._s(e.addresses[0]))])],1)]}}],null,!0)},[e.own?s("span",[s("b",[t._v(t._s(e.value))]),s("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.coin))]),s("span",[t._v(" ≈ ")]),s("b",[t._v(t._s(t.btc2cash(e.value,t.d_rate)))]),s("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.cash))])]):t._e()])],1)])})),0)]},proxy:!0}],null,!0)})],1)],1)],1)],1)}))],2),s("p",{staticClass:"mt-3 mb-7 grey--text text-center"},[s("span",{staticClass:"caption"},[t._v(" "+t._s(t.$t("Only the latest 1000 data is displayed."))+" "),s("a",{attrs:{href:"https://blockchair.com/"+t.c_coinInfo.name.toLowerCase()+"/address/"+t.c_address,target:"_blank"}},[t._v(t._s(t.$t("See more")))])])])],1)}),[],!1,null,null,null),R=A.exports;l()(A,{VBtn:p.a,VCard:_.a,VChip:v.a,VCol:f.a,VContainer:h.a,VDivider:m.a,VExpansionPanel:b.a,VExpansionPanelContent:g.a,VExpansionPanelHeader:x.a,VExpansionPanels:w.a,VIcon:C.a,VOverlay:y.a,VRow:k.a,VSimpleTable:S.a,VTooltip:$.a});var L={name:"Account",components:{ethAccount:R},computed:{c_xpub:function(t){return t.$store.__s("usb.xpub")},c_cashUnit:function(t){return t.$store.__s("cashUnit")},c_cashUnitItems:function(t){return t.$store.__s("cashUnitItems")},c_cashUnitIndex:function(t){return t.$store.__s("cashUnitIndex")},c_coinInfo:function(t){return t.$store.__s("coinInfo")}}},B=(s("7457"),Object(u.a)(L,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"account-wrap"},[s("eth-account",{attrs:{coin:t.c_coinInfo.symbol,cash:t.c_cashUnit,xpub:t.c_xpub}})],1)}),[],!1,null,"59c3767e",null));e.default=B.exports,l()(B,{VContainer:h.a})},"83a5":function(t,e,s){"use strict";var a=(s("a434"),s("5530")),n=(s("96cf"),s("1da1")),r={props:{show:{type:Boolean,default:!1},currentAddress:{type:String,default:""}},data:function(){return{addressList:[],d_show:!1,currentSelect:0}},created:function(){this.d_show=this.$props.show,this.currentSelect=this.$store.__s("eth.account"),this.initAddressList()},methods:{initAddressList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var s,a,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.addressList=[],!(s=JSON.parse(localStorage.getItem(t.currentAddress)))){e.next=5;break}return t.addressList=s,e.abrupt("return");case 5:a=0;case 6:if(!(a<5)){e.next=15;break}return e.next=9,t.$usb.cmd("EthereumGetAddress",{address_n:[2147483692,2147483708,2147483648,0,a],show_display:!1});case 9:n=e.sent,r={address:n.data.address,selected:t.currentAddress===n.data.address},t.addressList.push(r);case 12:a++,e.next=6;break;case 15:localStorage.setItem(t.currentAddress,JSON.stringify(t.addressList));case 16:case"end":return e.stop()}}),e)})))()},selectedAddress:function(t){this.addressList.splice(this.currentSelect,1,Object(a.a)(Object(a.a)({},this.addressList[this.currentSelect]),{},{selected:!1})),this.addressList.splice(t,1,Object(a.a)(Object(a.a)({},this.addressList[t]),{},{selected:!0})),this.currentSelect=t},confirm:function(){this.currentSelect!==this.$store.__s("eth.account")?this.$emit("on-change",this.currentSelect):this.close()},close:function(){this.$emit("on-close")}},i18n:{messages:{zhCN:{"Switch Account":"切换账户"}}}},c=(s("65e6"),s("2877")),i=s("6544"),o=s.n(i),u=s("8336"),d=s("b0af"),l=s("99d9"),p=(s("d3b7"),s("25f0"),s("6ca7"),s("ec29"),s("9d26")),_=s("c37a"),v=s("fe09").a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(a.a)(Object(a.a)({},_.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(p.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(a.a)(Object(a.a)({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),f=s("62ad"),h=s("169a"),m=s("ce7e"),b=s("132d"),g=s("490a"),x=s("0fd9"),w=s("2fa4"),C=Object(c.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.d_show,callback:function(e){t.d_show=e},expression:"d_show"}},[s("v-card",[s("v-card-title",{staticClass:"subtitle-1 font-weight-regular white--text bg-switch"},[s("v-icon",{staticClass:"mr-2",attrs:{color:"#fff"}},[t._v("mdi-wallet-outline")]),t._v(" "+t._s(t.$t("Switch Account"))+" ")],1),s("v-divider"),s("v-card-text",{staticStyle:{"min-height":"350px"}},[5===t.addressList.length?t._l(t.addressList,(function(e,a){return s("v-row",{key:a},[s("v-col",{attrs:{cols:"12"}},[s("v-checkbox",{attrs:{color:"primary","hide-details":""},on:{click:function(e){return t.selectedAddress(a)}},scopedSlots:t._u([{key:"label",fn:function(){return[s("div",{staticClass:"subtitle-2 same-width",class:e.selected?"primary--text":"black--text"},[t._v(t._s(e.address))])]},proxy:!0}],null,!0),model:{value:e.selected,callback:function(s){t.$set(e,"selected",s)},expression:"item.selected"}})],1)],1)})):[s("div",{staticClass:"d-flex flex-column justify-center align-center",staticStyle:{"min-height":"350px",width:"100%"}},[s("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]],2),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"grey",text:""},on:{click:t.close}},[t._v(" "+t._s(t.$t("Close"))+" ")]),s("v-btn",{attrs:{color:"primary",text:""},on:{click:t.confirm}},[t._v(" "+t._s(t.$t("Confirm"))+" ")])],1)],1)],1)}),[],!1,null,"9bf03e50",null);e.a=C.exports,o()(C,{VBtn:u.a,VCard:d.a,VCardActions:l.a,VCardText:l.b,VCardTitle:l.c,VCheckbox:v,VCol:f.a,VDialog:h.a,VDivider:m.a,VIcon:b.a,VProgressCircular:g.a,VRow:x.a,VSpacer:w.a})},"8b32":function(t,e,s){(e=s("24fb")(!1)).push([t.i,".same-width[data-v-9bf03e50]{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace!important}.bg-switch[data-v-9bf03e50]{background-image:-webkit-gradient(linear,left top,left bottom,from(#2c73d2),to(rgba(44,115,210,.8)));background-image:linear-gradient(-180deg,#2c73d2,rgba(44,115,210,.8))}",""]),t.exports=e},a563:function(t,e,s){var a=s("4d83");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,s("499e").default)("0770d68e",a,!0,{sourceMap:!1,shadowMode:!1})},c171:function(t,e,s){var a=s("4bbe");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,s("499e").default)("650f3723",a,!0,{sourceMap:!1,shadowMode:!1})},c947:function(t,e,s){"use strict";s.d(e,"b",(function(){return a})),s.d(e,"a",(function(){return n}));var a={};s.r(a),s.d(a,"HistoryByXpub",(function(){return p})),s.d(a,"TxSpecific",(function(){return _})),s.d(a,"HistoryByAddress",(function(){return v})),s.d(a,"HistoryByContract",(function(){return f})),s.d(a,"GetUtxoByXpub",(function(){return h})),s.d(a,"GetTxDetial",(function(){return m})),s.d(a,"GetRecommendFee",(function(){return b})),s.d(a,"BalanceByAddress",(function(){return g}));var n={};s.r(n),s.d(n,"Coin2Cash",(function(){return x})),s("99af"),s("c975"),s("d3b7"),s("96cf");var r=s("1da1"),c=s("cebe"),i=s.n(c),o=s("0613"),u=function(t){var e="Request Error";switch(t.status){case 400:e="Request Error";break;case 401:e="Unauthorized, please login";break;case 403:e="Access denied";break;case 404:e="Request address error";break;case 408:e="Request timeout";break;case 500:e="Internal server error";break;case 501:e="Service not implemented";break;case 502:e="Gateway error";break;case 503:e="Service is not available";break;case 504:e="Gateway timeout";break;case 505:e="HTTP version is not supported"}return e},d=i.a.create({baseURL:"https://api.abckey.com",timeout:1e4});d.interceptors.request.use(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(navigator.onLine){t.next=3;break}return o.a.__s("httpMessage","Request Error"),t.abrupt("return",Promise.reject(new Error("Request Error")));case 3:return t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),d.interceptors.response.use(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200!==e.status){t.next=8;break}if(!e){t.next=5;break}return t.abrupt("return",Promise.resolve(e));case 5:return t.abrupt("return",Promise.reject(e));case 6:t.next=11;break;case 8:return s=u(e),o.a.__s("httpMessage",s),t.abrupt("return",Promise.reject(e));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t){var e,s,a=t.message||"";if(t.message&&(a=t.message),t.response&&(a=t.response.data.msg),a.indexOf("timeout")>=0&&(a="timeout"),o.a.__s("httpMessage",a),401!==(null==t||null===(e=t.response)||void 0===e||null===(s=e.data)||void 0===s?void 0:s.code))return Promise.reject(t)}));var l=d,p=function(t){return l.get("/".concat(t.coinName,"/xpub/").concat(t.xpub),{params:{t:(new Date).getTime(),details:"txs",tokens:"used"}}).then((function(t){return t.data}))},_=function(t){return l.get("/".concat(t.coinName,"/tx-specific/").concat(t.txid),{params:{t:(new Date).getTime()}}).then((function(t){return t.data}))},v=function(t){return l.get("/".concat(t.coinName,"/address/").concat(t.address),{params:{t:(new Date).getTime(),details:"txs",page:1,pageSize:1e3}}).then((function(t){return t.data}))},f=function(t){return l.get("/".concat(t.coinName,"/address/").concat(t.address),{params:{t:(new Date).getTime(),details:"txs",contract:t.contract}}).then((function(t){return t.data}))},h=function(t){return l.get("/".concat(t.coinName,"/utxo/").concat(t.xpub),{params:{t:(new Date).getTime(),confirme:!0}}).then((function(t){return t.data}))},m=function(t){return l.get("/".concat(t.coinName,"/tx/").concat(t.txid),{params:{t:(new Date).getTime()}}).then((function(t){return t.data}))},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"btc";return"btc"!==(t=t.toLowerCase())?l.get("https://api.abckey.com/fees/".concat(t),{params:{t:(new Date).getTime()}}).then((function(t){return t.data})):l.get("https://bitcoinfees.earn.com/api/v1/fees/recommended",{params:{t:(new Date).getTime()}}).then((function(t){return t.data}))},g=function(t){return l.get("/".concat(t.coinName,"/address/").concat(t.address),{params:{t:(new Date).getTime(),details:"basic"}}).then((function(t){return t.data}))},x=function(t){var e="";switch(t.coinName.toLowerCase()){case"tbtc":e="btc";break;case"trop":e="eth";break;case"tusdt":e="usdt";break;default:e=t.coinName.toLowerCase()}return l.get("/market/".concat(e,"/").concat(t.cashName.toLowerCase()),{params:{t:(new Date).getTime()}}).then((function(t){return t.data}))}},dd75:function(t,e,s){(e=s("24fb")(!1)).push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""]),t.exports=e}}]);
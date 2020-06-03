import Vue from 'vue'
import Store from '@/store'
import Usb from '@abckey/webusb'

class UsbDevice extends Usb {
  syncVuex(e?: any): void {
    Store.__s('usb.connect', Boolean(e))
    Store.__s('usb.vendorId', e ? e.vendorId : 0)
    Store.__s('usb.productId', e ? e.productId : 0)
    Store.__s('usb.manufacturer', e ? e.manufacturerName : '')
    Store.__s('usb.product', e ? e.productName : '')
    Store.__s('usb.serialNumber', e ? e.serialNumber : 0)
    Store.__s('usb.msg', e ? e.msg : null)
  }
}

const webusb: any = new UsbDevice({
  debug: true
})

/**
 * @method onAdd - add device
 */
webusb.onAdd(e => {
  webusb.syncVuex(e)
})

/**
 * @method onConnect - device has reconnected
 */

/**
 * @method onErr - device has something wrong
 */
webusb.onErr(e => {
  Store.__s('usb.err', e)
})

/**
 * @method onMsg - when device send message
 */
webusb.onMsg(e => {
  Store.__s('usb.msg', JSON.parse(JSON.stringify(e)))
  if (e.type === 'Features') {
    Store.__s('usb.majorVersion', e.data.major_version)
    Store.__s('usb.minorVersion', e.data.minor_version)
    Store.__s('usb.patchVersion', e.data.patch_version)
    Store.__s('usb.label', e.data.label)
    Store.__s('usb.passphraseProtection', e.data.passphrase_protection)
    Store.__s('usb.initialized', e.data.initialized)
    Store.__s('usb.needsBackup', e.data.needs_backup)
    Store.__s('usb.bootloaderMode', e ? e.data.bootloader_mode : '')
    Store.__s('usb.firmwarePresent', e ? e.data.firmware_present : '')
  }
  if ((e.type === 'Success' || e.data.message === 'Device successfully initialized') && Store.__s('usb.bootloaderMode') !== true) window.location.replace(process.env.NODE_ENV === 'production' ? Store.__s('brand.buildPath') : '/')
  if (e.type === 'PublicKey' || e.type === 'EthereumPublicKey') Store.__s('usb.xpub', e.data.xpub)
})

Vue.prototype.$usb = webusb

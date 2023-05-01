import { getKeyData } from './data_keys';
import createElement from './utils';
import { KEYS_RU_CLASSES, KEYS_EN_CLASSES } from './data_classes';

export default class Key {
  constructor(os, code) {
    this.os = os;
    this.code = code;
  }

  generateKeySymbols = (lang) => {
    const keyData = getKeyData(this.code);
    let classes;
    let symbols;
    if (lang === 'en') {
      classes = KEYS_EN_CLASSES;
      symbols = keyData.keysEn;
      if ((this.os === 'mac') && (Object.prototype.hasOwnProperty.call(keyData, 'keysMacEn'))) {
        symbols = keyData.keysMacEn;
      }
    } else {
      classes = KEYS_RU_CLASSES;
      symbols = keyData.keysRu;
      if ((this.os === 'mac') && (Object.prototype.hasOwnProperty.call(keyData, 'keysMacRu'))) {
        symbols = keyData.keysMacRu;
      }
    }
    const {
      key, keyBasic, keyShift, keyCaps, keyCapsShift,
    } = classes;

    const {
      basic, shift, caps, capsShift,
    } = symbols;
    const keySymbols = createElement('div', [key]);
    const symbolBasic = createElement('div', [keyBasic]);
    symbolBasic.innerText = basic;
    const symbolShift = createElement('div', [keyShift]);
    symbolShift.innerText = shift;
    const symbolCaps = createElement('div', [keyCaps]);
    symbolCaps.innerText = caps;
    const symbolCapsShift = createElement('div', [keyCapsShift]);
    symbolCapsShift.innerText = capsShift;
    keySymbols.append(symbolBasic);
    keySymbols.append(symbolShift);
    keySymbols.append(symbolCaps);
    keySymbols.append(symbolCapsShift);
    return keySymbols;
  };

  buildKeyElement = () => {
    const key = createElement('div', ['keyboard__key', 'key', this.code]);
    const keyEn = this.generateKeySymbols('en');
    const keyRu = this.generateKeySymbols('ru');
    key.append(keyEn);
    key.append(keyRu);
    return key;
  };
}

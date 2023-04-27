import { keysInLines } from './data_keys';
import { KEYS_RU_CLASSES, KEYS_EN_CLASSES } from './data_classes';
import { createElement } from './utils';
import { Key } from './key';

const KEYBOARD_STATE = {
  basic: 0,
  shift: 1,
  caps: 2,
  capsShift: 3
};

export class KeyboardApp {
  constructor(lang) {
    this.body = document.body;
    this.lang = lang;
    this.isShift = false;
    this.isCaps = false;
    this.state = KEYBOARD_STATE.basic;
  }

  initKeyboard = () => {
    this.generateHeader();
    this.generateApp();
    this.updateKeyboardSymbolsByState();
    this.body.addEventListener('keydown', (e) => {
      console.log(e.code);
      // this.textarea.value += this.textarea.value + e
    })
  };

  updateKeyboardSymbolsByState = () => {
    this.hideKeysText();
    this.showCurKeysText();
  };

  showCurKeysText = () => {
    const keyClasses = (this.lang === 'en') ? KEYS_EN_CLASSES : KEYS_RU_CLASSES;
    const blockSymbolClass = keyClasses.key;
    let symbolClass;
    switch (this.state) {
      case 1: symbolClass = keyClasses.keyShift;
        break;
      case 2: symbolClass = keyClasses.keyCaps;
        break;
      case 3: symbolClass = keyClasses.keyCaps;
        break;
      default: symbolClass = keyClasses.keyBasic;
    }
    this.showElementsByClass(blockSymbolClass);
    this.showElementsByClass(symbolClass);
  };

  generateHeader = () => {
    const header = createElement('header', ['header']);
    const wrapper = createElement('div', ['wrapper']);
    const title = createElement('h1', ['header__title']);
    title.innerText = 'Virtual keyboard RSS';
    wrapper.append(title);
    header.append(wrapper);
    this.body.append(header);
  };

  generateKeyboard = () => {
    const keyboard = createElement('div', ['keyboard']);
    keysInLines.forEach(item => {
      const row = createElement('div', ['keyboard__row']);
      item.forEach(code => {
        const key = new Key(code);
        row.append(key.buildKeyElement());
      });
      keyboard.append(row);
    });
    return keyboard;
  };

  hideElementsByClass = (className) => {
    const elements = this.body.querySelectorAll(`.${className}`);
    elements.forEach(element => element.classList.add('hidden'));
  };

  showElementsByClass = (className) => {
    const elements = this.body.querySelectorAll(`.${className}`);
    elements.forEach(element => element.classList.remove('hidden'));
  };

  hideKeysText = () => {
    const ruClasses = Object.values(KEYS_RU_CLASSES);
    ruClasses.forEach(className => this.hideElementsByClass(className));
    const enClasses = Object.values(KEYS_EN_CLASSES);
    enClasses.forEach(className => this.hideElementsByClass(className));
  };

  generateApp = () => {
    const main = createElement('main', ['main']);
    const wrapper = createElement('div', ['wrapper']);
    this.textarea = createElement('textarea', ['textarea']);
    this.textarea.cols = 30;
    this.textarea.rows = 6;
    wrapper.append(this.textarea);
    const keyboard = this.generateKeyboard();
    wrapper.append(keyboard);
    main.append(wrapper);
    this.body.append(main);
  };
}

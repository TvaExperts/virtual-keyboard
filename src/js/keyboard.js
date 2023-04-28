import { keysInLines, getKeyData } from './data_keys';
import { KEYS_RU_CLASSES, KEYS_EN_CLASSES } from './data_classes';
import createElement from './utils';
import Key from './key';

export default class KeyboardApp {
  constructor(lang) {
    this.body = document.body;
    this.lang = lang;
    this.isShift = false;
    this.isCaps = false;
    this.state = this.KEYBOARD_STATE.basic;
  }

  KEYBOARD_STATE = {
    basic: 0,
    shift: 1,
    caps: 2,
    capsShift: 3,
  };

  ADDITIONAL_KEYS = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp'];

  initKeyboard = () => {
    this.buildHeader();
    this.buildApp();
    this.updateKeyboardSymbolsByState();
    this.body.addEventListener('keydown', this.keydownKeyboardHandler);
    this.body.addEventListener('keyup', this.keyupKeyboardHandler);
    this.buildFooter();
  };

  buildHeader = () => {
    const header = createElement('header', ['header']);
    const wrapper = createElement('div', ['wrapper']);
    const title = createElement('h1', ['header__title']);
    title.innerText = 'Virtual keyboard RSS';
    wrapper.append(title);
    header.append(wrapper);
    this.body.append(header);
  };

  buildApp = () => {
    const main = createElement('main', ['main']);
    const wrapper = createElement('div', ['wrapper']);
    this.textarea = createElement('textarea', ['textarea']);
    this.textarea.cols = 30;
    this.textarea.rows = 6;
    wrapper.append(this.textarea);
    const keyboard = this.buildKeyboard();
    wrapper.append(keyboard);
    main.append(wrapper);
    this.body.append(main);
  };

  buildKeyboard = () => {
    this.keyboard = createElement('div', ['keyboard']);
    keysInLines.forEach((item) => {
      const row = createElement('div', ['keyboard__row']);
      item.forEach((code) => {
        const key = new Key(code);
        row.append(key.buildKeyElement());
      });
      this.keyboard.append(row);
    });
    return this.keyboard;
  };

  // Keydown методы

  keydownKeyboardHandler = (event) => {
    const isActivated = this.activateKeyByCode(event.code);
    if (!isActivated) {
      console.log('Клавиша не поддерживается пока!');
      return;
    }
    if (!this.isKeyAdditional(event.code)) {
      if (document.activeElement !== this.textarea) {
        this.addTextInTextareaByCode(event.code);
      }
    } else {
      this.keydownAdditionalKeys(event);
    }
  };

  activateKeyByCode = (code) => {
    if (!code) return false;
    const keyElement = this.body.querySelector(`.${code}`);
    if (!keyElement) return false;
    keyElement.classList.add('active');
    return true;
  };

  isKeyAdditional = (code) => this.ADDITIONAL_KEYS.includes(code);

  addTextInTextareaByCode = (code) => {
    const keyData = getKeyData(code);
    const keys = (this.lang === 'en') ? keyData.keysEn : keyData.keysRu;
    const symbol = Object.values(keys)[this.state];
    this.addTextInTextArea(symbol);
  };

  addTextInTextArea = (text) => {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    this.textarea.value = `${this.textarea.value.substring(0, start)}${text}${this.textarea.value.substring(end)}`;
    this.textarea.selectionEnd = end + text.length;
  };

  keydownAdditionalKeys = (event) => {
    switch (event.code) {
      case 'CapsLock': if (!event.repeat) this.toggleCaps();
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.turnOnShift();
        break;
      case 'ControlLeft':
      case 'ControlRight':
        this.turnOnControl();
        break;
      case 'AltLeft':
      case 'AltRight':
        this.turnOnAlt();
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        this.addTextInTextareaByCode(event.code);
        break;
      case 'Tab':
        event.preventDefault();
        this.addTextInTextArea('    ');
        break;
      default: this.addTextInTextArea('\n');
    }
  };

  toggleCaps = () => {
    this.isCaps = !this.isCaps;
    this.state = this.getNewKeyboardState();
    this.updateKeyboardSymbolsByState();
  };

  getNewKeyboardState = () => {
    if (this.isCaps) {
      if (this.isShift) {
        return this.KEYBOARD_STATE.capsShift;
      }
      return this.KEYBOARD_STATE.caps;
    }
    if (this.isShift) {
      return this.KEYBOARD_STATE.shift;
    }
    return this.KEYBOARD_STATE.basic;
  };

  turnOnShift = () => {
    this.isShift = true;
    this.state = this.getNewKeyboardState();
    this.updateKeyboardSymbolsByState();
  };

  turnOnControl = () => {
    this.isControl = true;
  };

  turnOnAlt = () => {
    this.isAlt = true;
  };

  updateKeyboardSymbolsByState = () => {
    this.hideKeysText();
    this.showCurKeysText();
  };

  hideKeysText = () => {
    const ruClasses = Object.values(KEYS_RU_CLASSES);
    ruClasses.forEach((className) => this.hideElementsByClass(className));
    const enClasses = Object.values(KEYS_EN_CLASSES);
    enClasses.forEach((className) => this.hideElementsByClass(className));
  };

  hideElementsByClass = (className) => {
    const elements = this.body.querySelectorAll(`.${className}`);
    elements.forEach((element) => element.classList.add('hidden'));
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
      case 3: symbolClass = keyClasses.keyCapsShift;
        break;
      default: symbolClass = keyClasses.keyBasic;
    }
    this.showElementsByClass(blockSymbolClass);
    this.showElementsByClass(symbolClass);
  };

  showElementsByClass = (className) => {
    const elements = this.body.querySelectorAll(`.${className}`);
    elements.forEach((element) => element.classList.remove('hidden'));
  };

  keyupKeyboardHandler = (event) => {
    const isGood = this.deactivateKeyByCode(event.code);
    if (!isGood) {
      console.log('Пока не особо:', event.code);
      return;
    }
    this.keyupAdditionalKeys(event.code);
  };

  keyupAdditionalKeys = (code) => {
    switch (code) {
      case 'CapsLock': if (this.isCaps) this.activateKeyByCode(code);
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.turnOffShift();
        break;
      case 'ControlLeft':
      case 'ControlRight':
        this.turnOffControl();
        break;
      case 'AltLeft':
      case 'AltRight':
        this.turnOffAlt();
        break;
      default: console.log(code);
    }
  };

  turnOffShift = () => {
    this.isShift = false;
    this.state = this.getNewKeyboardState();
    this.updateKeyboardSymbolsByState();
  };

  turnOffControl = () => {
    this.isControl = false;
  };

  turnOffAlt = () => {
    this.isAlt = false;
  };

  deactivateKeyByCode = (code) => {
    if (!code) return false;
    const keyElement = this.body.querySelector(`.${code}`);
    if (!keyElement) return false;
    keyElement.classList.remove('active');
    return true;
  };

  buildFooter = () => {
    const footer = createElement('footer', ['footer']);
    const wrapper = createElement('div', ['wrapper', 'footer__wrapper']);
    const gitElement = createElement('div', ['footer__git']);
    gitElement.innerHTML = '<a class="footer__link" href="https://github.com/TvaExperts/" target="_blank">github</a>';
    const explanationsElement = createElement('div', ['footer__explanations']);
    explanationsElement.innerHTML = '<p class="footer__text">Клавиатура создана в ОС Windows</p><p class="footer__text">Для переключения языка: левыe ctrl + alt</p>';
    const schoolLogoElement = createElement('div', ['footer__school-logo']);
    schoolLogoElement.innerHTML = '<a href="https://rs.school/js/" target="_blank"><img class="footer__img" src="./assets/rs_school_js.svg" alt="RS School Logo"></a>';
    wrapper.append(gitElement);
    wrapper.append(explanationsElement);
    wrapper.append(schoolLogoElement);
    footer.append(wrapper);
    this.body.append(footer);
  };
}

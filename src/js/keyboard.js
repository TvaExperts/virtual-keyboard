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

  ADDITIONAL_KEYS = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft',
    'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight',
    'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp'];

  initKeyboard = () => {
    this.buildHeader();
    this.buildApp();
    this.updateKeyboardSymbolsByState();
    window.addEventListener('keydown', this.keydownKeyboardHandler);
    window.addEventListener('keyup', this.keyupKeyboardHandler);
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
    this.checkOS();
    keysInLines[this.os].forEach((item) => {
      const row = createElement('div', ['keyboard__row']);
      item.forEach((code) => {
        const key = new Key(this.os, code);
        row.append(key.buildKeyElement());
      });
      this.keyboard.append(row);
    });
    if (this.os === 'mac') this.buildMacArrows();
    this.keyboard.addEventListener('mousedown', this.mousedownClickHandler);
    document.addEventListener('mouseup', this.mouseupClickHandler);
    return this.keyboard;
  };

  checkOS = () => {
    const { platform } = window.navigator.userAgentData;
    if (platform.includes('mac')) {
      this.os = 'mac';
      this.body.classList.add('mac');
    } else {
      this.os = 'win';
    }
  };

  mousedownClickHandler = (event) => {
    const clickedKey = event.target.closest('.key');
    if (clickedKey) {
      const codeOfKey = clickedKey.classList[2];
      this.lastMouseClickDownKeyCode = codeOfKey;
      this.handleDownEventByCode(codeOfKey);
    } else {
      this.lastMouseClickDownKeyCode = '';
    }
  };

  buildMacArrows = () => {
    const keyLeft = new Key('mac', 'ArrowLeft');
    const keyRight = new Key('mac', 'ArrowRight');
    const upDownWrapper = createElement('div', ['arrow-wrap']);
    const keyUp = new Key('mac', 'ArrowUp');
    const keyDown = new Key('mac', 'ArrowDown');
    upDownWrapper.append(keyUp.buildKeyElement());
    upDownWrapper.append(keyDown.buildKeyElement());
    const rows = this.keyboard.querySelectorAll('.keyboard__row');
    const row = rows[rows.length - 1];
    row.append(keyLeft.buildKeyElement());
    row.append(upDownWrapper);
    row.append(keyRight.buildKeyElement());
  };

  keydownKeyboardHandler = (event) => {
    this.isRepeat = event.repeat;
    event.preventDefault();
    this.handleDownEventByCode(event.code);
  };

  handleDownEventByCode = (code) => {
    this.activateKeyByCode(code);
    if (!this.isKeyAdditional(code)) {
      this.addTextInTextareaByCode(code);
    } else {
      this.keydownAdditionalKeys(code);
    }
  };

  activateKeyByCode = (code) => {
    if (!code) return;
    const keyElement = this.body.querySelector(`.${code}`);
    if (!keyElement) return;
    keyElement.classList.add('active');
  };

  isKeyAdditional = (code) => this.ADDITIONAL_KEYS.includes(code);

  addTextInTextareaByCode = (code) => {
    const keyData = getKeyData(code);
    if (!keyData) return;
    let keys;
    if (this.lang === 'en') {
      keys = keyData.keysEn;
      if ((this.os === 'mac') && (Object.prototype.hasOwnProperty.call(keyData, 'keysMacEn'))) keys = keyData.keysMacEn;
    } else {
      keys = keyData.keysRu;
      if ((this.os === 'mac') && (Object.prototype.hasOwnProperty.call(keyData, 'keysMacRu'))) keys = keyData.keysMacRu;
    }
    const symbol = Object.values(keys)[this.state];
    this.addTextInTextArea(symbol);
  };

  addTextInTextArea = (text) => {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    this.textarea.value = `${this.textarea.value.slice(0, start)}${text}${this.textarea.value.slice(end)}`;
    this.textarea.selectionEnd = start + text.length;
    this.textarea.selectionStart = start + text.length;
  };

  keydownAdditionalKeys = (code) => {
    switch (code) {
      case 'CapsLock': if (!this.isRepeat) this.toggleCaps();
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
        this.addTextInTextareaByCode(code);
        break;
      case 'Tab':
        this.addTextInTextArea('    ');
        break;
      case 'Backspace':
        this.handleBackspaceTextarea();
        break;
      case 'Enter':
        this.addTextInTextArea('\n');
        break;
      case 'Delete':
        this.handleDelTextarea();
        break;
      default:
    }
  };

  handleBackspaceTextarea = () => {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    if (start > 0) {
      if (start === end) {
        this.textarea.value = `${this.textarea.value.substring(0, start - 1)}${this.textarea.value.substring(end)}`;
        this.textarea.selectionEnd = start - 1;
        this.textarea.selectionStart = start - 1;
      } else {
        this.textarea.value = `${this.textarea.value.substring(0, start)}${this.textarea.value.substring(end)}`;
        this.textarea.selectionEnd = start;
        this.textarea.selectionStart = start;
      }
    }
  };

  handleDelTextarea = () => {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    if (start < this.textarea.value.length) {
      if (start === end) {
        this.textarea.value = `${this.textarea.value.substring(0, start)}${this.textarea.value.substring(end + 1)}`;
      } else {
        this.textarea.value = `${this.textarea.value.substring(0, start)}${this.textarea.value.substring(end)}`;
      }
      this.textarea.selectionEnd = start;
      this.textarea.selectionStart = start;
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
    this.handleUpEventByCode(event.code);
  };

  mouseupClickHandler = () => {
    if (this.lastMouseClickDownKeyCode) {
      this.handleUpEventByCode(this.lastMouseClickDownKeyCode);
    }
  };

  handleUpEventByCode = (code) => {
    this.deactivateKeyByCode(code);
    if (this.isKeyAdditional(code)) {
      this.keyupAdditionalKeys(code);
    }
    this.textarea.focus();
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
        if (this.isAlt) {
          this.changeLanguage();
          this.updateKeyboardSymbolsByState();
        }
        this.isControl = false;
        break;
      case 'ControlRight':
        this.isControl = false;
        break;
      case 'AltLeft':
        if (this.isControl) {
          this.changeLanguage();
          this.updateKeyboardSymbolsByState();
        }
        this.isAlt = false;
        break;
      case 'AltRight':
        this.isAlt = false;
        break;
      default:
    }
  };

  changeLanguage = () => {
    if (this.lang === 'en') {
      this.lang = 'ru';
    } else {
      this.lang = 'en';
    }
  };

  turnOffShift = () => {
    this.isShift = false;
    this.state = this.getNewKeyboardState();
    this.updateKeyboardSymbolsByState();
  };

  deactivateKeyByCode = (code) => {
    if (!code) return;
    const keyElement = this.body.querySelector(`.${code}`);
    if (!keyElement) return;
    keyElement.classList.remove('active');
  };

  buildFooter = () => {
    const footer = createElement('footer', ['footer']);
    const wrapper = createElement('div', ['wrapper', 'footer__wrapper']);
    const gitElement = createElement('div', ['footer__git']);
    gitElement.innerHTML = '<a class="footer__link" href="https://github.com/TvaExperts/" target="_blank">github</a>';
    const explanationsElement = createElement('div', ['footer__explanations']);
    if (this.os === 'mac') {
      explanationsElement.innerHTML = '<p class="footer__text">Клавиатура под ОС MAC</p><p class="footer__text">Для переключения языка: левыe control + option</p>';
    } else {
      explanationsElement.innerHTML = '<p class="footer__text">Клавиатура под ОС Windows</p><p class="footer__text">Для переключения языка: левыe ctrl + alt</p>';
    }
    const schoolLogoElement = createElement('div', ['footer__school-logo']);
    schoolLogoElement.innerHTML = '<a href="https://rs.school/js/" target="_blank"><img class="footer__img" src="./assets/rs_school_js.svg" alt="RS School Logo"></a>';
    wrapper.append(gitElement);
    wrapper.append(explanationsElement);
    wrapper.append(schoolLogoElement);
    footer.append(wrapper);
    this.body.append(footer);
  };
}

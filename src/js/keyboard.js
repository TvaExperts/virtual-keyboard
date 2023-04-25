import { keysInLines, dataKeys } from './data_keys';
import { createElement } from './utils';

const generateHeader = () => {
  const header = createElement('header', ['header']);
  const wrapper = createElement('div', ['wrapper']);
  const title = createElement('h1', ['header__title']);
  title.innerText = 'Virtual keyboard RSS';
  wrapper.append(title);
  header.append(wrapper);
  return header;
};

const getKeyDataByCode = (code) => {
  return dataKeys.filter(item => item.code === code)[0];
};

const generateLangKeyTextByCode = (code, lang) => {
  const keyData = getKeyDataByCode(code);
  const keysLang = (lang === 'en') ? 'keysEn' : 'keysRu';
  const keyText = createElement('div', [`key__${lang}`]);
  const keyBasic = createElement('div', [`key__${lang}-basic`]);
  keyBasic.innerText = keyData[keysLang].basic;
  const keyShift = createElement('div', [`key__${lang}-shift`]);
  keyShift.innerText = keyData[keysLang].shift;
  const keyCaps = createElement('div', [`key__${lang}-caps`]);
  keyCaps.innerText = keyData[keysLang].caps;
  const keyCapsShift = createElement('div', [`key__${lang}-caps-shift`]);
  keyCapsShift.innerText = keyData[keysLang].capsShift;
  keyText.append(keyBasic);
  keyText.append(keyShift);
  keyText.append(keyCaps);
  keyText.append(keyCapsShift);
  return keyText;
};

const generateKeyByCode = (code) => {
  const key = createElement('div', ['keyboard__key', 'key', code]);
  const keyEn = generateLangKeyTextByCode(code, 'en');
  const keyRu = generateLangKeyTextByCode(code, 'ru');
  key.append(keyEn);
  key.append(keyRu);
  return key;
};

const generateKeyboard = () => {
  const keyboard = createElement('div', ['keyboard']);
  keysInLines.forEach(item => {
    const row = createElement('div', ['keyboard__row']);
    item.forEach(code => {
      row.append(generateKeyByCode(code));
    });
    keyboard.append(row);
  });
  return keyboard;
};

const hideElementsByclasses = (classes) => {
  const elements = document.querySelectorAll(classes);
  elements.forEach(element => element.classList.add('hidden'));
};

const hideKeysText = () => {
  hideElementsByclasses('.key__ru');
  hideElementsByclasses('.key__ru-basic');
  hideElementsByclasses('.key__ru-shift');
  hideElementsByclasses('.key__ru-caps');
  hideElementsByclasses('.key__ru-caps-shift');
  hideElementsByclasses('.key__en-shift');
  hideElementsByclasses('.key__en-caps');
  hideElementsByclasses('.key__en-caps-shift');
};

const generateApp = () => {
  const main = createElement('main', ['main']);
  const wrapper = createElement('div', ['wrapper']);
  const textarea = createElement('textarea', ['textarea']);
  textarea.cols = 30;
  textarea.rows = 6;
  wrapper.append(textarea);
  const keyboard = generateKeyboard();
  wrapper.append(keyboard);
  main.append(wrapper);
  return main;
};

const initKeyboard = () => {
  document.body.append(generateHeader());
  document.body.append(generateApp());
  hideKeysText();
};

export { initKeyboard };

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/data_classes.js":
/*!********************************!*\
  !*** ./src/js/data_classes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYS_EN_CLASSES": () => (/* binding */ KEYS_EN_CLASSES),
/* harmony export */   "KEYS_RU_CLASSES": () => (/* binding */ KEYS_RU_CLASSES)
/* harmony export */ });
const KEYS_RU_CLASSES = {
  key: 'key__ru',
  keyBasic: 'key__ru-basic',
  keyShift: 'key__ru-shift',
  keyCaps: 'key__ru-caps',
  keyCapsShift: 'key__ru-caps-shift',
};

const KEYS_EN_CLASSES = {
  key: 'key__en',
  keyBasic: 'key__en-basic',
  keyShift: 'key__en-caps',
  keyCaps: 'key__en-shift',
  keyCapsShift: 'key__en-caps-shift',
};




/***/ }),

/***/ "./src/js/data_keys.js":
/*!*****************************!*\
  !*** ./src/js/data_keys.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getKeyData": () => (/* binding */ getKeyData),
/* harmony export */   "keysInLines": () => (/* binding */ keysInLines)
/* harmony export */ });
const keysInLines = {
  win: [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']],
  mac: [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
    ['ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight']],
};

const dataKeys = [{
  code: 'Backquote',
  keysEn: {
    basic: '\'',
    shift: '~',
    caps: '\'',
    capsShift: '~',
  },
  keysRu: {
    basic: 'ё',
    shift: 'Ё',
    caps: 'Ё',
    capsShift: 'ё',
  },
  keysMacEn: {
    basic: '§',
    shift: '±',
    caps: '§',
    capsShift: '±',
  },
  keysMacRu: {
    basic: '>',
    shift: '<',
    caps: '>',
    capsShift: '<',
  },
},
{
  code: 'Digit1',
  keysEn: {
    basic: '1',
    shift: '!',
    caps: '1',
    capsShift: '!',
  },
  keysRu: {
    basic: '1',
    shift: '!',
    caps: '1',
    capsShift: '!',
  },
},
{
  code: 'Digit2',
  keysEn: {
    basic: '2',
    shift: '@',
    caps: '2',
    capsShift: '@',
  },
  keysRu: {
    basic: '2',
    shift: '"',
    caps: '2',
    capsShift: '"',
  },
},
{
  code: 'Digit3',
  keysEn: {
    basic: '3',
    shift: '#',
    caps: '3',
    capsShift: '#',
  },
  keysRu: {
    basic: '3',
    shift: '№',
    caps: '3',
    capsShift: '№',
  },
},
{
  code: 'Digit4',
  keysEn: {
    basic: '4',
    shift: '$',
    caps: '4',
    capsShift: '$',
  },
  keysRu: {
    basic: '4',
    shift: ';',
    caps: '4',
    capsShift: ';',
  },
  keysMacRu: {
    basic: '4',
    shift: '%',
    caps: '4',
    capsShift: '%',
  },
},
{
  code: 'Digit5',
  keysEn: {
    basic: '5',
    shift: '%',
    caps: '5',
    capsShift: '%',
  },
  keysRu: {
    basic: '5',
    shift: '%',
    caps: '5',
    capsShift: '%',
  },
  keysMacRu: {
    basic: '5',
    shift: ':',
    caps: '5',
    capsShift: ':',
  },
},
{
  code: 'Digit6',
  keysEn: {
    basic: '6',
    shift: '^',
    caps: '6',
    capsShift: '^',
  },
  keysRu: {
    basic: '6',
    shift: ':',
    caps: '6',
    capsShift: ':',
  },
  keysMacRu: {
    basic: '6',
    shift: ',',
    caps: '6',
    capsShift: ',',
  },
},
{
  code: 'Digit7',
  keysEn: {
    basic: '7',
    shift: '&',
    caps: '7',
    capsShift: '&',
  },
  keysRu: {
    basic: '7',
    shift: '?',
    caps: '7',
    capsShift: '?',
  },
  keysMacRu: {
    basic: '7',
    shift: '.',
    caps: '7',
    capsShift: '.',
  },
},
{
  code: 'Digit8',
  keysEn: {
    basic: '8',
    shift: '*',
    caps: '8',
    capsShift: '*',
  },
  keysRu: {
    basic: '8',
    shift: '*',
    caps: '8',
    capsShift: '*',
  },
  keysMacRu: {
    basic: '8',
    shift: ';',
    caps: '8',
    capsShift: ';',
  },
},
{
  code: 'Digit9',
  keysEn: {
    basic: '9',
    shift: '(',
    caps: '9',
    capsShift: '(',
  },
  keysRu: {
    basic: '9',
    shift: '(',
    caps: '9',
    capsShift: '(',
  },
},
{
  code: 'Digit0',
  keysEn: {
    basic: '0',
    shift: ')',
    caps: '0',
    capsShift: ')',
  },
  keysRu: {
    basic: '0',
    shift: ')',
    caps: '0',
    capsShift: ')',
  },
},
{
  code: 'Minus',
  keysEn: {
    basic: '-',
    shift: '_',
    caps: '-',
    capsShift: '_',
  },
  keysRu: {
    basic: '-',
    shift: '_',
    caps: '-',
    capsShift: '_',
  },
},
{
  code: 'Equal',
  keysEn: {
    basic: '=',
    shift: '+',
    caps: '=',
    capsShift: '+',
  },
  keysRu: {
    basic: '=',
    shift: '+',
    caps: '=',
    capsShift: '+',
  },
},
{
  code: 'Backspace',
  keysEn: {
    basic: 'Back',
    shift: 'Back',
    caps: 'Back',
    capsShift: 'Back',
  },
  keysRu: {
    basic: 'Back',
    shift: 'Back',
    caps: 'Back',
    capsShift: 'Back',
  },
},
{
  code: 'Tab',
  keysEn: {
    basic: 'Tab',
    shift: 'Tab',
    caps: 'Tab',
    capsShift: 'Tab',
  },
  keysRu: {
    basic: 'Tab',
    shift: 'Tab',
    caps: 'Tab',
    capsShift: 'Tab',
  },
},
{
  code: 'KeyQ',
  keysEn: {
    basic: 'q',
    shift: 'Q',
    caps: 'Q',
    capsShift: 'q',
  },
  keysRu: {
    basic: 'й',
    shift: 'Й',
    caps: 'Й',
    capsShift: 'й',
  },
},
{
  code: 'KeyW',
  keysEn: {
    basic: 'w',
    shift: 'W',
    caps: 'W',
    capsShift: 'w',
  },
  keysRu: {
    basic: 'ц',
    shift: 'Ц',
    caps: 'Ц',
    capsShift: 'ц',
  },
},
{
  code: 'KeyE',
  keysEn: {
    basic: 'e',
    shift: 'E',
    caps: 'E',
    capsShift: 'e',
  },
  keysRu: {
    basic: 'у',
    shift: 'У',
    caps: 'У',
    capsShift: 'у',
  },
},
{
  code: 'KeyR',
  keysEn: {
    basic: 'r',
    shift: 'R',
    caps: 'R',
    capsShift: 'r',
  },
  keysRu: {
    basic: 'к',
    shift: 'К',
    caps: 'К',
    capsShift: 'к',
  },
},
{
  code: 'KeyT',
  keysEn: {
    basic: 't',
    shift: 'T',
    caps: 'T',
    capsShift: 't',
  },
  keysRu: {
    basic: 'е',
    shift: 'Е',
    caps: 'Е',
    capsShift: 'е',
  },
},
{
  code: 'KeyY',
  keysEn: {
    basic: 'y',
    shift: 'Y',
    caps: 'Y',
    capsShift: 'y',
  },
  keysRu: {
    basic: 'н',
    shift: 'Н',
    caps: 'Н',
    capsShift: 'н',
  },
},
{
  code: 'KeyU',
  keysEn: {
    basic: 'u',
    shift: 'U',
    caps: 'U',
    capsShift: 'u',
  },
  keysRu: {
    basic: 'г',
    shift: 'Г',
    caps: 'Г',
    capsShift: 'г',
  },
},
{
  code: 'KeyI',
  keysEn: {
    basic: 'i',
    shift: 'I',
    caps: 'I',
    capsShift: 'i',
  },
  keysRu: {
    basic: 'ш',
    shift: 'Ш',
    caps: 'Ш',
    capsShift: 'ш',
  },
},
{
  code: 'KeyO',
  keysEn: {
    basic: 'o',
    shift: 'O',
    caps: 'O',
    capsShift: 'o',
  },
  keysRu: {
    basic: 'щ',
    shift: 'Щ',
    caps: 'Щ',
    capsShift: 'щ',
  },
},
{
  code: 'KeyP',
  keysEn: {
    basic: 'p',
    shift: 'P',
    caps: 'P',
    capsShift: 'p',
  },
  keysRu: {
    basic: 'з',
    shift: 'З',
    caps: 'З',
    capsShift: 'з',
  },
},
{
  code: 'BracketLeft',
  keysEn: {
    basic: '[',
    shift: '{',
    caps: '[',
    capsShift: '{',
  },
  keysRu: {
    basic: 'х',
    shift: 'Х',
    caps: 'Х',
    capsShift: 'х',
  },
},
{
  code: 'BracketRight',
  keysEn: {
    basic: ']',
    shift: '}',
    caps: ']',
    capsShift: '}',
  },
  keysRu: {
    basic: 'ъ',
    shift: 'Ъ',
    caps: 'Ъ',
    capsShift: 'ъ',
  },
},
{
  code: 'Enter',
  keysEn: {
    basic: 'Enter',
    shift: 'Enter',
    caps: 'Enter',
    capsShift: 'Enter',
  },
  keysRu: {
    basic: 'Enter',
    shift: 'Enter',
    caps: 'Enter',
    capsShift: 'Enter',
  },
},
{
  code: 'CapsLock',
  keysEn: {
    basic: 'Caps\nLock',
    shift: 'Caps\nLock',
    caps: 'Caps\nLock',
    capsShift: 'Caps\nLock',
  },
  keysRu: {
    basic: 'Caps\nLock',
    shift: 'Caps\nLock',
    caps: 'Caps\nLock',
    capsShift: 'Caps\nLock',
  },
},
{
  code: 'KeyA',
  keysEn: {
    basic: 'a',
    shift: 'A',
    caps: 'A',
    capsShift: 'a',
  },
  keysRu: {
    basic: 'ф',
    shift: 'Ф',
    caps: 'Ф',
    capsShift: 'ф',
  },
},
{
  code: 'KeyS',
  keysEn: {
    basic: 's',
    shift: 'S',
    caps: 'S',
    capsShift: 's',
  },
  keysRu: {
    basic: 'ы',
    shift: 'Ы',
    caps: 'Ы',
    capsShift: 'ы',
  },
},
{
  code: 'KeyD',
  keysEn: {
    basic: 'd',
    shift: 'D',
    caps: 'D',
    capsShift: 'd',
  },
  keysRu: {
    basic: 'в',
    shift: 'В',
    caps: 'В',
    capsShift: 'в',
  },
},
{
  code: 'KeyF',
  keysEn: {
    basic: 'f',
    shift: 'F',
    caps: 'F',
    capsShift: 'f',
  },
  keysRu: {
    basic: 'а',
    shift: 'А',
    caps: 'А',
    capsShift: 'а',
  },
},
{
  code: 'KeyG',
  keysEn: {
    basic: 'g',
    shift: 'G',
    caps: 'G',
    capsShift: 'g',
  },
  keysRu: {
    basic: 'п',
    shift: 'П',
    caps: 'П',
    capsShift: 'п',
  },
},
{
  code: 'KeyH',
  keysEn: {
    basic: 'h',
    shift: 'H',
    caps: 'H',
    capsShift: 'h',
  },
  keysRu: {
    basic: 'р',
    shift: 'Р',
    caps: 'Р',
    capsShift: 'р',
  },
},
{
  code: 'KeyJ',
  keysEn: {
    basic: 'j',
    shift: 'J',
    caps: 'J',
    capsShift: 'j',
  },
  keysRu: {
    basic: 'о',
    shift: 'О',
    caps: 'О',
    capsShift: 'о',
  },
},
{
  code: 'KeyK',
  keysEn: {
    basic: 'k',
    shift: 'K',
    caps: 'K',
    capsShift: 'k',
  },
  keysRu: {
    basic: 'л',
    shift: 'Л',
    caps: 'Л',
    capsShift: 'л',
  },
},
{
  code: 'KeyL',
  keysEn: {
    basic: 'l',
    shift: 'L',
    caps: 'L',
    capsShift: 'l',
  },
  keysRu: {
    basic: 'д',
    shift: 'Д',
    caps: 'Д',
    capsShift: 'д',
  },
},
{
  code: 'Semicolon',
  keysEn: {
    basic: ';',
    shift: ':',
    caps: ';',
    capsShift: ':',
  },
  keysRu: {
    basic: 'ж',
    shift: 'Ж',
    caps: 'Ж',
    capsShift: 'ж',
  },
},
{
  code: 'Quote',
  keysEn: {
    basic: '\'',
    shift: '"',
    caps: '\'',
    capsShift: '"',
  },
  keysRu: {
    basic: 'э',
    shift: 'Э',
    caps: 'Э',
    capsShift: 'э',
  },
},
{
  code: 'Backslash',
  keysEn: {
    basic: '\\',
    shift: '|',
    caps: '\\',
    capsShift: '|',
  },
  keysRu: {
    basic: '\\',
    shift: '/',
    caps: '\\',
    capsShift: '/',
  },
  keysMacRu: {
    basic: 'ё',
    shift: 'Ё',
    caps: 'Ё',
    capsShift: 'ё',
  },
},
{
  code: 'ShiftLeft',
  keysEn: {
    basic: 'Shift',
    shift: 'Shift',
    caps: 'Shift',
    capsShift: 'Shift',
  },
  keysRu: {
    basic: 'Shift',
    shift: 'Shift',
    caps: 'Shift',
    capsShift: 'Shift',
  },
},
{
  code: 'IntlBackslash',
  keysEn: {
    basic: '\\',
    shift: '|',
    caps: '\\',
    capsShift: '|',
  },
  keysRu: {
    basic: '\\',
    shift: '/',
    caps: '\\',
    capsShift: '/',
  },
  keysMacEn: {
    basic: '`',
    shift: '~',
    caps: '`',
    capsShift: '~',
  },
  keysMacRu: {
    basic: ']',
    shift: '[',
    caps: ']',
    capsShift: '[',
  },
},
{
  code: 'KeyZ',
  keysEn: {
    basic: 'z',
    shift: 'Z',
    caps: 'Z',
    capsShift: 'z',
  },
  keysRu: {
    basic: 'я',
    shift: 'Я',
    caps: 'Я',
    capsShift: 'я',
  },
},
{
  code: 'KeyX',
  keysEn: {
    basic: 'x',
    shift: 'X',
    caps: 'X',
    capsShift: 'x',
  },
  keysRu: {
    basic: 'ч',
    shift: 'Ч',
    caps: 'Ч',
    capsShift: 'ч',
  },
},
{
  code: 'KeyC',
  keysEn: {
    basic: 'c',
    shift: 'C',
    caps: 'C',
    capsShift: 'c',
  },
  keysRu: {
    basic: 'с',
    shift: 'С',
    caps: 'С',
    capsShift: 'с',
  },
},
{
  code: 'KeyV',
  keysEn: {
    basic: 'v',
    shift: 'V',
    caps: 'V',
    capsShift: 'v',
  },
  keysRu: {
    basic: 'м',
    shift: 'М',
    caps: 'М',
    capsShift: 'м',
  },
},
{
  code: 'KeyB',
  keysEn: {
    basic: 'b',
    shift: 'B',
    caps: 'B',
    capsShift: 'b',
  },
  keysRu: {
    basic: 'и',
    shift: 'И',
    caps: 'И',
    capsShift: 'и',
  },
},
{
  code: 'KeyN',
  keysEn: {
    basic: 'n',
    shift: 'N',
    caps: 'N',
    capsShift: 'n',
  },
  keysRu: {
    basic: 'т',
    shift: 'Т',
    caps: 'Т',
    capsShift: 'т',
  },
},
{
  code: 'KeyM',
  keysEn: {
    basic: 'm',
    shift: 'M',
    caps: 'M',
    capsShift: 'm',
  },
  keysRu: {
    basic: 'ь',
    shift: 'Ь',
    caps: 'Ь',
    capsShift: 'ь',
  },
},
{
  code: 'Comma',
  keysEn: {
    basic: ',',
    shift: '<',
    caps: ',',
    capsShift: '<',
  },
  keysRu: {
    basic: 'б',
    shift: 'Б',
    caps: 'Б',
    capsShift: 'б',
  },
},
{
  code: 'Period',
  keysEn: {
    basic: '.',
    shift: '>',
    caps: '.',
    capsShift: '>',
  },
  keysRu: {
    basic: 'ю',
    shift: 'Ю',
    caps: 'Ю',
    capsShift: 'ю',
  },
},
{
  code: 'Slash',
  keysEn: {
    basic: '/',
    shift: '?',
    caps: '/',
    capsShift: '?',
  },
  keysRu: {
    basic: '.',
    shift: ',',
    caps: '.',
    capsShift: ',',
  },
  keysMacRu: {
    basic: '/',
    shift: '?',
    caps: '/',
    capsShift: '?',
  },
},
{
  code: 'ShiftRight',
  keysEn: {
    basic: 'Shift',
    shift: 'Shift',
    caps: 'Shift',
    capsShift: 'Shift',
  },
  keysRu: {
    basic: 'Shift',
    shift: 'Shift',
    caps: 'Shift',
    capsShift: 'Shift',
  },
},
{
  code: 'ControlLeft',
  keysEn: {
    basic: 'Ctrl',
    shift: 'Ctrl',
    caps: 'Ctrl',
    capsShift: 'Ctrl',
  },
  keysRu: {
    basic: 'Ctrl',
    shift: 'Ctrl',
    caps: 'Ctrl',
    capsShift: 'Ctrl',
  },
  keysMacEn: {
    basic: 'control',
    shift: 'control',
    caps: 'control',
    capsShift: 'control',
  },
  keysMacRu: {
    basic: 'control',
    shift: 'control',
    caps: 'control',
    capsShift: 'control',
  },
},
{
  code: 'MetaLeft',
  keysEn: {
    basic: 'Win',
    shift: 'Win',
    caps: 'Win',
    capsShift: 'Win',
  },
  keysRu: {
    basic: 'Win',
    shift: 'Win',
    caps: 'Win',
    capsShift: 'Win',
  },
  keysMacEn: {
    basic: 'command',
    shift: 'command',
    caps: 'command',
    capsShift: 'command',
  },
  keysMacRu: {
    basic: 'command',
    shift: 'command',
    caps: 'command',
    capsShift: 'command',
  },
},
{
  code: 'MetaRight',
  keysEn: {
    basic: 'Win',
    shift: 'Win',
    caps: 'Win',
    capsShift: 'Win',
  },
  keysRu: {
    basic: 'Win',
    shift: 'Win',
    caps: 'Win',
    capsShift: 'Win',
  },
  keysMacEn: {
    basic: 'command',
    shift: 'command',
    caps: 'command',
    capsShift: 'command',
  },
  keysMacRu: {
    basic: 'command',
    shift: 'command',
    caps: 'command',
    capsShift: 'command',
  },
},
{
  code: 'AltLeft',
  keysEn: {
    basic: 'Alt',
    shift: 'Alt',
    caps: 'Alt',
    capsShift: 'Alt',
  },
  keysRu: {
    basic: 'Alt',
    shift: 'Alt',
    caps: 'Alt',
    capsShift: 'Alt',
  },
  keysMacEn: {
    basic: 'option',
    shift: 'option',
    caps: 'option',
    capsShift: 'option',
  },
  keysMacRu: {
    basic: 'option',
    shift: 'option',
    caps: 'option',
    capsShift: 'option',
  },
},
{
  code: 'Space',
  keysEn: {
    basic: ' ',
    shift: ' ',
    caps: ' ',
    capsShift: ' ',
  },
  keysRu: {
    basic: ' ',
    shift: ' ',
    caps: ' ',
    capsShift: ' ',
  },
},
{
  code: 'AltRight',
  keysEn: {
    basic: 'Alt',
    shift: 'Alt',
    caps: 'Alt',
    capsShift: 'Alt',
  },
  keysRu: {
    basic: 'Alt',
    shift: 'Alt',
    caps: 'Alt',
    capsShift: 'Alt',
  },
  keysMacEn: {
    basic: 'option',
    shift: 'option',
    caps: 'option',
    capsShift: 'option',
  },
  keysMacRu: {
    basic: 'option',
    shift: 'option',
    caps: 'option',
    capsShift: 'option',
  },
},
{
  code: 'ControlRight',
  keysEn: {
    basic: 'Ctrl',
    shift: 'Ctrl',
    caps: 'Ctrl',
    capsShift: 'Ctrl',
  },
  keysRu: {
    basic: 'Ctrl',
    shift: 'Ctrl',
    caps: 'Ctrl',
    capsShift: 'Ctrl',
  },
},
{
  code: 'ArrowUp',
  keysEn: {
    basic: '▲',
    shift: '▲',
    caps: '▲',
    capsShift: '▲',
  },
  keysRu: {
    basic: '▲',
    shift: '▲',
    caps: '▲',
    capsShift: '▲',
  },
},
{
  code: 'ArrowLeft',
  keysEn: {
    basic: '◀',
    shift: '◀',
    caps: '◀',
    capsShift: '◀',
  },
  keysRu: {
    basic: '◀',
    shift: '◀',
    caps: '◀',
    capsShift: '◀',
  },
},
{
  code: 'ArrowDown',
  keysEn: {
    basic: '▼',
    shift: '▼',
    caps: '▼',
    capsShift: '▼',
  },
  keysRu: {
    basic: '▼',
    shift: '▼',
    caps: '▼',
    capsShift: '▼',
  },
},
{
  code: 'ArrowRight',
  keysEn: {
    basic: '▶',
    shift: '▶',
    caps: '▶',
    capsShift: '▶',
  },
  keysRu: {
    basic: '▶',
    shift: '▶',
    caps: '▶',
    capsShift: '▶',
  },
},
{
  code: 'Delete',
  keysEn: {
    basic: 'Del',
    shift: 'Del',
    caps: 'Del',
    capsShift: 'Del',
  },
  keysRu: {
    basic: 'Del',
    shift: 'Del',
    caps: 'Del',
    capsShift: 'Del',
  },
},
];

const getKeyData = (code) => dataKeys.filter((item) => item.code === code)[0];




/***/ }),

/***/ "./src/js/key.js":
/*!***********************!*\
  !*** ./src/js/key.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Key)
/* harmony export */ });
/* harmony import */ var _data_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_keys */ "./src/js/data_keys.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _data_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data_classes */ "./src/js/data_classes.js");




class Key {
  constructor(os, code) {
    this.os = os;
    this.code = code;
  }

  generateKeySymbols = (lang) => {
    const keyData = (0,_data_keys__WEBPACK_IMPORTED_MODULE_0__.getKeyData)(this.code);
    let classes;
    let symbols;
    if (lang === 'en') {
      classes = _data_classes__WEBPACK_IMPORTED_MODULE_2__.KEYS_EN_CLASSES;
      symbols = keyData.keysEn;
      if ((this.os === 'mac') && (Object.prototype.hasOwnProperty.call(keyData, 'keysMacEn'))) {
        symbols = keyData.keysMacEn;
      }
    } else {
      classes = _data_classes__WEBPACK_IMPORTED_MODULE_2__.KEYS_RU_CLASSES;
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
    const keySymbols = (0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])('div', [key]);
    const symbolBasic = (0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])('div', [keyBasic]);
    symbolBasic.innerText = basic;
    const symbolShift = (0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])('div', [keyShift]);
    symbolShift.innerText = shift;
    const symbolCaps = (0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])('div', [keyCaps]);
    symbolCaps.innerText = caps;
    const symbolCapsShift = (0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])('div', [keyCapsShift]);
    symbolCapsShift.innerText = capsShift;
    keySymbols.append(symbolBasic);
    keySymbols.append(symbolShift);
    keySymbols.append(symbolCaps);
    keySymbols.append(symbolCapsShift);
    return keySymbols;
  };

  buildKeyElement = () => {
    const key = (0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])('div', ['keyboard__key', 'key', this.code]);
    const keyEn = this.generateKeySymbols('en');
    const keyRu = this.generateKeySymbols('ru');
    key.append(keyEn);
    key.append(keyRu);
    return key;
  };
}


/***/ }),

/***/ "./src/js/keyboard.js":
/*!****************************!*\
  !*** ./src/js/keyboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KeyboardApp)
/* harmony export */ });
/* harmony import */ var _data_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_keys */ "./src/js/data_keys.js");
/* harmony import */ var _data_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data_classes */ "./src/js/data_classes.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key */ "./src/js/key.js");





class KeyboardApp {
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
    const header = (0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('header', ['header']);
    const wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('div', ['wrapper']);
    const title = (0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('h1', ['header__title']);
    title.innerText = 'Virtual keyboard RSS';
    wrapper.append(title);
    header.append(wrapper);
    this.body.append(header);
  };

  buildApp = () => {
    const main = (0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('main', ['main']);
    const wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('div', ['wrapper']);
    this.textarea = (0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('textarea', ['textarea']);
    this.textarea.cols = 30;
    this.textarea.rows = 6;
    wrapper.append(this.textarea);
    const keyboard = this.buildKeyboard();
    wrapper.append(keyboard);
    main.append(wrapper);
    this.body.append(main);
  };

  buildKeyboard = () => {
    this.keyboard = (0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('div', ['keyboard']);
    this.checkOS();
    _data_keys__WEBPACK_IMPORTED_MODULE_0__.keysInLines[this.os].forEach((item) => {
      const row = (0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('div', ['keyboard__row']);
      item.forEach((code) => {
        const key = new _key__WEBPACK_IMPORTED_MODULE_3__["default"](this.os, code);
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
    const { userAgent } = window.navigator;
    if (userAgent.toLowerCase().includes('mac')) {
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
    const keyLeft = new _key__WEBPACK_IMPORTED_MODULE_3__["default"]('mac', 'ArrowLeft');
    const keyRight = new _key__WEBPACK_IMPORTED_MODULE_3__["default"]('mac', 'ArrowRight');
    const upDownWrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('div', ['arrow-wrap']);
    const keyUp = new _key__WEBPACK_IMPORTED_MODULE_3__["default"]('mac', 'ArrowUp');
    const keyDown = new _key__WEBPACK_IMPORTED_MODULE_3__["default"]('mac', 'ArrowDown');
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
    const keyData = (0,_data_keys__WEBPACK_IMPORTED_MODULE_0__.getKeyData)(code);
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
    const ruClasses = Object.values(_data_classes__WEBPACK_IMPORTED_MODULE_1__.KEYS_RU_CLASSES);
    ruClasses.forEach((className) => this.hideElementsByClass(className));
    const enClasses = Object.values(_data_classes__WEBPACK_IMPORTED_MODULE_1__.KEYS_EN_CLASSES);
    enClasses.forEach((className) => this.hideElementsByClass(className));
  };

  hideElementsByClass = (className) => {
    const elements = this.body.querySelectorAll(`.${className}`);
    elements.forEach((element) => element.classList.add('hidden'));
  };

  showCurKeysText = () => {
    const keyClasses = (this.lang === 'en') ? _data_classes__WEBPACK_IMPORTED_MODULE_1__.KEYS_EN_CLASSES : _data_classes__WEBPACK_IMPORTED_MODULE_1__.KEYS_RU_CLASSES;
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
    const footer = (0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('footer', ['footer']);
    const wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('div', ['wrapper', 'footer__wrapper']);
    const gitElement = (0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('div', ['footer__git']);
    gitElement.innerHTML = '<a class="footer__link" href="https://github.com/TvaExperts/" target="_blank">github</a>';
    const explanationsElement = (0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('div', ['footer__explanations']);
    if (this.os === 'mac') {
      explanationsElement.innerHTML = '<p class="footer__text">Клавиатура под ОС MAC</p><p class="footer__text">Для переключения языка: левыe control + option</p>';
    } else {
      explanationsElement.innerHTML = '<p class="footer__text">Клавиатура под ОС Windows</p><p class="footer__text">Для переключения языка: левыe ctrl + alt</p>';
    }
    const schoolLogoElement = (0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])('div', ['footer__school-logo']);
    schoolLogoElement.innerHTML = '<a href="https://rs.school/js/" target="_blank"><img class="footer__img" src="./assets/rs_school_js.svg" alt="RS School Logo"></a>';
    wrapper.append(gitElement);
    wrapper.append(explanationsElement);
    wrapper.append(schoolLogoElement);
    footer.append(wrapper);
    this.body.append(footer);
  };
}


/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(tag, classes) {
  const element = document.createElement(tag);
  element.classList.add(...classes);
  return element;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ "./src/sass/index.scss");
/* harmony import */ var _js_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/keyboard */ "./src/js/keyboard.js");



let keyboard;

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'en';
  keyboard = new _js_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"](lang);
  keyboard.initKeyboard();
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('lang', keyboard.lang);
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
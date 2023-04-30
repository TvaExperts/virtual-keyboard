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

export { keysInLines, getKeyData };

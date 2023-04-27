const keysInLines = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
];

const dataKeys = [{
  code: 'Backquote',
  charCode: 96,
  keyCode: 192, // 96 ili 0
  keysEn: {
    basic: '\'',
    shift: '~',
    caps: '\'',
    capsShift: '~'
  },
  keysRu: {
    basic: 'ё',
    shift: 'Ё',
    caps: 'Ё',
    capsShift: 'ё'
  }
},
{
  code: 'Digit1',
  charCode: 49,
  keyCode: 49,
  keysEn: {
    basic: '1',
    shift: '!',
    caps: '1',
    capsShift: '!'
  },
  keysRu: {
    basic: '1',
    shift: '!',
    caps: '1',
    capsShift: '!'
  }
},
{
  code: 'Digit2',
  charCode: 50,
  keyCode: 50,
  keysEn: {
    basic: '2',
    shift: '@',
    caps: '2',
    capsShift: '@'
  },
  keysRu: {
    basic: '2',
    shift: '"',
    caps: '2',
    capsShift: '"'
  }
},
{
  code: 'Digit3',
  charCode: 51,
  keyCode: 51,
  keysEn: {
    basic: '3',
    shift: '#',
    caps: '3',
    capsShift: '#'
  },
  keysRu: {
    basic: '3',
    shift: '№',
    caps: '3',
    capsShift: '№'
  }
},
{
  code: 'Digit4',
  charCode: 52,
  keyCode: 52,
  keysEn: {
    basic: '4',
    shift: '#',
    caps: '4',
    capsShift: '#'
  },
  keysRu: {
    basic: '4',
    shift: '№',
    caps: '4',
    capsShift: '№'
  }
},
{
  code: 'Digit5',
  charCode: 53,
  keyCode: 53,
  keysEn: {
    basic: '5',
    shift: '#',
    caps: '5',
    capsShift: '#'
  },
  keysRu: {
    basic: '5',
    shift: '№',
    caps: '5',
    capsShift: '№'
  }
},
{
  code: 'Digit6',
  charCode: 54,
  keyCode: 54,
  keysEn: {
    basic: '6',
    shift: '#',
    caps: '6',
    capsShift: '#'
  },
  keysRu: {
    basic: '6',
    shift: '№',
    caps: '6',
    capsShift: '№'
  }
},
{
  code: 'Digit7',
  charCode: 55,
  keyCode: 55,
  keysEn: {
    basic: '7',
    shift: '#',
    caps: '7',
    capsShift: '#'
  },
  keysRu: {
    basic: '7',
    shift: '№',
    caps: '7',
    capsShift: '№'
  }
},
{
  code: 'Digit8',
  charCode: 56,
  keyCode: 56,
  keysEn: {
    basic: '8',
    shift: '#',
    caps: '8',
    capsShift: '#'
  },
  keysRu: {
    basic: '8',
    shift: '№',
    caps: '8',
    capsShift: '№'
  }
},
{
  code: 'Digit9',
  charCode: 57,
  keyCode: 57,
  keysEn: {
    basic: '9',
    shift: '(',
    caps: '9',
    capsShift: '('
  },
  keysRu: {
    basic: '9',
    shift: '(',
    caps: '9',
    capsShift: '('
  }
},
{
  code: 'Digit0',
  charCode: 48,
  keyCode: 48,
  keysEn: {
    basic: '0',
    shift: ')',
    caps: '0',
    capsShift: ')'
  },
  keysRu: {
    basic: '0',
    shift: ')',
    caps: '0',
    capsShift: ')'
  }
},
{
  code: 'Minus',
  charCode: 45,
  keyCode: 189,
  keysEn: {
    basic: '-',
    shift: '_',
    caps: '-',
    capsShift: '_'
  },
  keysRu: {
    basic: '-',
    shift: '_',
    caps: '-',
    capsShift: '_'
  }
},
{
  code: 'Equal',
  charCode: 61,
  keyCode: 187,
  keysEn: {
    basic: '=',
    shift: '+',
    caps: '=',
    capsShift: '+'
  },
  keysRu: {
    basic: '=',
    shift: '+',
    caps: '=',
    capsShift: '+'
  }
},
{
  code: 'Backspace',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'Back',
    shift: 'Back',
    caps: 'Back',
    capsShift: 'Back'
  },
  keysRu: {
    basic: 'Back',
    shift: 'Back',
    caps: 'Back',
    capsShift: 'Back'
  }
},
{
  code: 'Tab',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'Tab',
    shift: 'Tab',
    caps: 'Tab',
    capsShift: 'Tab'
  },
  keysRu: {
    basic: 'Tab',
    shift: 'Tab',
    caps: 'Tab',
    capsShift: 'Tab'
  }
},
{
  code: 'KeyQ',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'q',
    shift: 'Q',
    caps: 'Q',
    capsShift: 'q'
  },
  keysRu: {
    basic: 'й',
    shift: 'Й',
    caps: 'Й',
    capsShift: 'й'
  }
},
{
  code: 'KeyW',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'w',
    shift: 'W',
    caps: 'W',
    capsShift: 'w'
  },
  keysRu: {
    basic: 'ц',
    shift: 'Ц',
    caps: 'Ц',
    capsShift: 'ц'
  }
},
{
  code: 'KeyE',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'e',
    shift: 'E',
    caps: 'E',
    capsShift: 'e'
  },
  keysRu: {
    basic: 'у',
    shift: 'У',
    caps: 'У',
    capsShift: 'у'
  }
},
{
  code: 'KeyR',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'r',
    shift: 'R',
    caps: 'R',
    capsShift: 'r'
  },
  keysRu: {
    basic: 'к',
    shift: 'К',
    caps: 'К',
    capsShift: 'к'
  }
},
{
  code: 'KeyT',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 't',
    shift: 'T',
    caps: 'T',
    capsShift: 't'
  },
  keysRu: {
    basic: 'е',
    shift: 'Е',
    caps: 'Е',
    capsShift: 'е'
  }
},
{
  code: 'KeyY',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'y',
    shift: 'Y',
    caps: 'Y',
    capsShift: 'y'
  },
  keysRu: {
    basic: 'н',
    shift: 'Н',
    caps: 'Н',
    capsShift: 'н'
  }
},
{
  code: 'KeyU',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'u',
    shift: 'U',
    caps: 'U',
    capsShift: 'u'
  },
  keysRu: {
    basic: 'г',
    shift: 'Г',
    caps: 'Г',
    capsShift: 'г'
  }
},
{
  code: 'KeyI',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'i',
    shift: 'I',
    caps: 'I',
    capsShift: 'i'
  },
  keysRu: {
    basic: 'ш',
    shift: 'Ш',
    caps: 'Ш',
    capsShift: 'ш'
  }
},
{
  code: 'KeyO',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'o',
    shift: 'O',
    caps: 'O',
    capsShift: 'o'
  },
  keysRu: {
    basic: 'щ',
    shift: 'Щ',
    caps: 'Щ',
    capsShift: 'щ'
  }
},
{
  code: 'KeyP',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'p',
    shift: 'P',
    caps: 'P',
    capsShift: 'p'
  },
  keysRu: {
    basic: 'з',
    shift: 'З',
    caps: 'З',
    capsShift: 'з'
  }
},
{
  code: 'BracketLeft',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: '[',
    shift: '{',
    caps: '[',
    capsShift: '{'
  },
  keysRu: {
    basic: 'х',
    shift: 'Х',
    caps: 'Х',
    capsShift: 'х'
  }
},
{
  code: 'BracketRight',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: ']',
    shift: '}',
    caps: ']',
    capsShift: '}'
  },
  keysRu: {
    basic: 'ъ',
    shift: 'Ъ',
    caps: 'Ъ',
    capsShift: 'ъ'
  }
},
{
  code: 'Enter',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'Enter',
    shift: 'Enter',
    caps: 'Enter',
    capsShift: 'Enter'
  },
  keysRu: {
    basic: 'Enter',
    shift: 'Enter',
    caps: 'Enter',
    capsShift: 'Enter'
  }
},
{
  code: 'CapsLock',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'Caps\nLock',
    shift: 'Caps\nLock',
    caps: 'Caps\nLock',
    capsShift: 'Caps\nLock'
  },
  keysRu: {
    basic: 'Caps\nLock',
    shift: 'Caps\nLock',
    caps: 'Caps\nLock',
    capsShift: 'Caps\nLock'
  }
},
{
  code: 'KeyA',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'a',
    shift: 'A',
    caps: 'A',
    capsShift: 'a'
  },
  keysRu: {
    basic: 'ф',
    shift: 'Ф',
    caps: 'Ф',
    capsShift: 'ф'
  }
},
{
  code: 'KeyS',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 's',
    shift: 'S',
    caps: 'S',
    capsShift: 's'
  },
  keysRu: {
    basic: 'ы',
    shift: 'Ы',
    caps: 'Ы',
    capsShift: 'ы'
  }
},
{
  code: 'KeyD',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'd',
    shift: 'D',
    caps: 'D',
    capsShift: 'd'
  },
  keysRu: {
    basic: 'в',
    shift: 'В',
    caps: 'В',
    capsShift: 'в'
  }
},
{
  code: 'KeyF',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'f',
    shift: 'F',
    caps: 'F',
    capsShift: 'f'
  },
  keysRu: {
    basic: 'а',
    shift: 'А',
    caps: 'А',
    capsShift: 'а'
  }
},
{
  code: 'KeyG',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'g',
    shift: 'G',
    caps: 'G',
    capsShift: 'g'
  },
  keysRu: {
    basic: 'п',
    shift: 'П',
    caps: 'П',
    capsShift: 'п'
  }
},
{
  code: 'KeyH',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'h',
    shift: 'H',
    caps: 'H',
    capsShift: 'h'
  },
  keysRu: {
    basic: 'р',
    shift: 'Р',
    caps: 'Р',
    capsShift: 'р'
  }
},
{
  code: 'KeyJ',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'j',
    shift: 'J',
    caps: 'J',
    capsShift: 'j'
  },
  keysRu: {
    basic: 'о',
    shift: 'О',
    caps: 'О',
    capsShift: 'о'
  }
},
{
  code: 'KeyK',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'k',
    shift: 'K',
    caps: 'K',
    capsShift: 'k'
  },
  keysRu: {
    basic: 'л',
    shift: 'Л',
    caps: 'Л',
    capsShift: 'л'
  }
},
{
  code: 'KeyL',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'l',
    shift: 'L',
    caps: 'L',
    capsShift: 'l'
  },
  keysRu: {
    basic: 'д',
    shift: 'Д',
    caps: 'Д',
    capsShift: 'д'
  }
},
{
  code: 'Semicolon',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: ';',
    shift: ':',
    caps: ';',
    capsShift: ':'
  },
  keysRu: {
    basic: 'ж',
    shift: 'Ж',
    caps: 'Ж',
    capsShift: 'ж'
  }
},
{
  code: 'Quote',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: '\'',
    shift: '"',
    caps: '\'',
    capsShift: '"'
  },
  keysRu: {
    basic: 'э',
    shift: 'Э',
    caps: 'Э',
    capsShift: 'э'
  }
},
{
  code: 'Backslash',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: '\\',
    shift: '|',
    caps: '\\',
    capsShift: '|'
  },
  keysRu: {
    basic: '\\',
    shift: '/',
    caps: '\\',
    capsShift: '/'
  }
},
{
  code: 'ShiftLeft',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'Shift',
    shift: 'Shift',
    caps: 'Shift',
    capsShift: 'Shift'
  },
  keysRu: {
    basic: 'Shift',
    shift: 'Shift',
    caps: 'Shift',
    capsShift: 'Shift'
  }
},
{
  code: 'IntlBackslash',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: '\\',
    shift: '|',
    caps: '\\',
    capsShift: '|'
  },
  keysRu: {
    basic: '\\',
    shift: '/',
    caps: '\\',
    capsShift: '/'
  }
},
{
  code: 'KeyZ',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'z',
    shift: 'Z',
    caps: 'Z',
    capsShift: 'z'
  },
  keysRu: {
    basic: 'я',
    shift: 'Я',
    caps: 'Я',
    capsShift: 'я'
  }
},
{
  code: 'KeyX',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'x',
    shift: 'X',
    caps: 'X',
    capsShift: 'x'
  },
  keysRu: {
    basic: 'ч',
    shift: 'Ч',
    caps: 'Ч',
    capsShift: 'ч'
  }
},
{
  code: 'KeyC',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'c',
    shift: 'C',
    caps: 'C',
    capsShift: 'c'
  },
  keysRu: {
    basic: 'с',
    shift: 'С',
    caps: 'С',
    capsShift: 'с'
  }
},
{
  code: 'KeyV',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'v',
    shift: 'V',
    caps: 'V',
    capsShift: 'v'
  },
  keysRu: {
    basic: 'м',
    shift: 'М',
    caps: 'М',
    capsShift: 'м'
  }
},
{
  code: 'KeyB',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'b',
    shift: 'B',
    caps: 'B',
    capsShift: 'b'
  },
  keysRu: {
    basic: 'и',
    shift: 'И',
    caps: 'И',
    capsShift: 'и'
  }
},
{
  code: 'KeyN',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'n',
    shift: 'N',
    caps: 'N',
    capsShift: 'n'
  },
  keysRu: {
    basic: 'т',
    shift: 'Т',
    caps: 'Т',
    capsShift: 'т'
  }
},
{
  code: 'KeyM',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'm',
    shift: 'M',
    caps: 'M',
    capsShift: 'm'
  },
  keysRu: {
    basic: 'ь',
    shift: 'Ь',
    caps: 'Ь',
    capsShift: 'ь'
  }
},
{
  code: 'Comma',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: ',',
    shift: '<',
    caps: ',',
    capsShift: '<'
  },
  keysRu: {
    basic: 'б',
    shift: 'Б',
    caps: 'Б',
    capsShift: 'б'
  }
},
{
  code: 'Period',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: '.',
    shift: '>',
    caps: '.',
    capsShift: '>'
  },
  keysRu: {
    basic: 'ю',
    shift: 'Ю',
    caps: 'Ю',
    capsShift: 'ю'
  }
},
{
  code: 'Slash',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: '/',
    shift: '?',
    caps: '/',
    capsShift: '?'
  },
  keysRu: {
    basic: '.',
    shift: ',',
    caps: '.',
    capsShift: ','
  }
},
{
  code: 'ShiftRight',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'Shift',
    shift: 'Shift',
    caps: 'Shift',
    capsShift: 'Shift'
  },
  keysRu: {
    basic: 'Shift',
    shift: 'Shift',
    caps: 'Shift',
    capsShift: 'Shift'
  }
},
{
  code: 'ControlLeft',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'Ctrl',
    shift: 'Ctrl',
    caps: 'Ctrl',
    capsShift: 'Ctrl'
  },
  keysRu: {
    basic: 'Ctrl',
    shift: 'Ctrl',
    caps: 'Ctrl',
    capsShift: 'Ctrl'
  }
},
{
  code: 'MetaLeft',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'Win',
    shift: 'Win',
    caps: 'Win',
    capsShift: 'Win'
  },
  keysRu: {
    basic: 'Win',
    shift: 'Win',
    caps: 'Win',
    capsShift: 'Win'
  }
},
{
  code: 'AltLeft',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'Alt',
    shift: 'Alt',
    caps: 'Alt',
    capsShift: 'Alt'
  },
  keysRu: {
    basic: 'Alt',
    shift: 'Alt',
    caps: 'Alt',
    capsShift: 'Alt'
  }
},
{
  code: 'Space',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: ' ',
    shift: ' ',
    caps: ' ',
    capsShift: ' '
  },
  keysRu: {
    basic: ' ',
    shift: ' ',
    caps: ' ',
    capsShift: ' '
  }
},
{
  code: 'AltRight',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'Alt',
    shift: 'Alt',
    caps: 'Alt',
    capsShift: 'Alt'
  },
  keysRu: {
    basic: 'Alt',
    shift: 'Alt',
    caps: 'Alt',
    capsShift: 'Alt'
  }
},
{
  code: 'ControlRight',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'Ctrl',
    shift: 'Ctrl',
    caps: 'Ctrl',
    capsShift: 'Ctrl'
  },
  keysRu: {
    basic: 'Ctrl',
    shift: 'Ctrl',
    caps: 'Ctrl',
    capsShift: 'Ctrl'
  }
},
{
  code: 'ArrowUp',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: '⯅',
    shift: '⯅',
    caps: '⯅',
    capsShift: '⯅'
  },
  keysRu: {
    basic: '⯅',
    shift: '⯅',
    caps: '⯅',
    capsShift: '⯅'
  }
},
{
  code: 'ArrowLeft',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: '⯇',
    shift: '⯇',
    caps: '⯇',
    capsShift: '⯇'
  },
  keysRu: {
    basic: '⯇',
    shift: '⯇',
    caps: '⯇',
    capsShift: '⯇'
  }
},
{
  code: 'ArrowDown',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: '⯆',
    shift: '⯆',
    caps: '⯆',
    capsShift: '⯆'
  },
  keysRu: {
    basic: '⯆',
    shift: '⯆',
    caps: '⯆',
    capsShift: '⯆'
  }
},
{
  code: 'ArrowRight',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: '⯈',
    shift: '⯈',
    caps: '⯈',
    capsShift: '⯈'
  },
  keysRu: {
    basic: '⯈',
    shift: '⯈',
    caps: '⯈',
    capsShift: '⯈'
  }
},
{
  code: 'Delete',
  charCode: 0,
  keyCode: 8,
  keysEn: {
    basic: 'Del',
    shift: 'Del',
    caps: 'Del',
    capsShift: 'Del'
  },
  keysRu: {
    basic: 'Del',
    shift: 'Del',
    caps: 'Del',
    capsShift: 'Del'
  }
}
];

export { keysInLines, dataKeys };

import './sass/index.scss';
import KeyboardApp from './js/keyboard';

let keyboard;

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'en';
  keyboard = new KeyboardApp(lang);
  keyboard.initKeyboard();
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('lang', keyboard.lang);
});

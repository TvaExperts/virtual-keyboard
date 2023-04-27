import './sass/index.scss';
import { KeyboardApp } from './js/keyboard';

document.addEventListener('DOMContentLoaded', () => {
  /* document.addEventListener('keydown', (event) => {
    console.log(event);
  });
  document.addEventListener('keypress', (event) => {
    console.log(event);
  }); */
  const key = new KeyboardApp('en');
  key.initKeyboard();
});

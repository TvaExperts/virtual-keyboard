import './sass/index.scss';
import { initKeyboard } from './js/keyboard';

document.addEventListener('DOMContentLoaded', () => {
  /* document.addEventListener('keydown', (event) => {
    console.log(event);
  });
  document.addEventListener('keypress', (event) => {
    console.log(event);
  }); */
  initKeyboard();
});

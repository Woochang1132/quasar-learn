import { boot } from 'quasar/wrappers';
import { LocalStorage, Dark } from 'quasar';

export default boot(async () => {
  // Dark mode 설정
  console.log('### initailization ###');
  const darkMode = LocalStorage.getItem('darkMode');
  Dark.set(darkMode);
});

import { boot } from 'quasar/wrappers';
import { LocalStorage, Quasar } from 'quasar';

export default boot(async () => {
  const val = LocalStorage.getItem('lang') || Quasar.lang.isoName;
  import('../../node_modules/quasar/lang/' + val).then(lang => {
    Quasar.lang.set(lang.default);
  });
});

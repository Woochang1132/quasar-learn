import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { LocalStorage, Quasar } from 'quasar';
import messages from 'src/i18n';

export default boot(async ({ app }) => {
  const locale = LocalStorage.getItem('lang') || Quasar.lang.isoName;
  const i18n = createI18n({
    legacy: false,
    locale,
    messages,
  });
  app.use(i18n);
});

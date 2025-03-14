<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Change Quasar Language Pack at Runtime</div>
      <q-separator class="q-my-md" />
      <q-select
        v-model="lang"
        :options="langOptions"
        label="퀘이사 언어"
        outlined
        emit-value
        map-options
      ></q-select>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">i18n - locale</div>
      <q-separator class="q-my-md" />
      <div>locale - {{ locale }}</div>
      <div>hello - {{ $t('hello') }}</div>
      <div>productName - {{ $t('productName') }}</div>
    </section>
  </q-page>
</template>

<script>
import languages from 'quasar/lang/index.json';
const appLanguages = languages.filter(lang =>
  ['ko-KR', 'en-US'].includes(lang.isoName),
);

const langOptions = appLanguages.map(lang => ({
  label: lang.nativeName,
  value: lang.isoName,
}));
console.log('langOptions >>', langOptions);
</script>

<script setup>
import { useQuasar } from 'quasar';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const $q = useQuasar();
console.log($q.lang.isoName);
const lang = ref($q.lang.isoName);

const { t, locale } = useI18n();
console.log('hello : >>', t('hello'));
console.log('productName : >>', t('productName'));

watch(lang, val => {
  import('../../node_modules/quasar/lang/' + val).then(lang => {
    console.log('lang >>', lang);
    $q.lang.set(lang.default);
    $q.localStorage.set('lang', val);
    locale.value = val;
  });
});
</script>

<style lang="scss" scoped></style>

<template>
  <q-page class="q-pa-md q-pa-md-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Breakpoints</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="target flex flex-center">
        <span class="text-h2 text-weight-bold text-white">
          {{ $q.screen.name }}</span
        >
      </div>
      <div v-if="$q.screen.lt.lg" class="target flex flex-center">
        <span class="text-h2 text-weight-bold text-white">
          {{ $q.screen.name }}</span
        >
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">$q.screen</div>
      <q-separator class="q-my-md"></q-separator>
      <div class="text-subtitle1">
        <ul>
          <li v-for="(value, key) in $q.screen" :key="key">
            <span class="inline-block" style="width: 120px">{{ key }}</span> -
            <span>{{ isFunction(value) ? '함수' : value }}</span>
          </li>
        </ul>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar';
const $q = useQuasar();
console.log('setup -> $q.screen: ', $q.screen);

const isFunction = value => typeof value === 'function';
</script>

<style lang="scss" scoped>
.target {
  height: 200px;
  background-color: $dark;
}
@media (max-width: $breakpoint-xs-max) {
  .target {
    background-color: $red;
  }
}
.target {
  body.screen--sm & {
    background-color: $orange;
  }
}
</style>

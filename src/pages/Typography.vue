<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Headings</div>
      <q-separator class="q-my-md" />
      <p class="text-h1">Headline 1</p>
      <p class="text-h2">Headline 2</p>
      <p class="text-h3">Headline 3</p>
      <p class="text-h4">Headline 4</p>
      <p class="text-h5">Headline 5</p>
      <p class="text-h6">Headline 6</p>
      <p class="text-subtitle1">Subtitle1</p>
      <p class="text-subtitle2">Subtitle2</p>
      <p class="text-body1">
        Body 1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
        cum ut. Voluptate atque quasi cupiditate repudiandae quidem doloribus
        ipsam temporibus saepe sequi corrupti incidunt, similique obcaecati
        beatae ex ratione quos.
      </p>
      <p class="text-body2">
        Body 2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Repellat possimus deleniti voluptas, fugiat reiciendis illum natus
        provident, debitis explicabo porro at minus obcaecati delectus. Eum
        magnam accusamus culpa! Aspernatur, beatae!
      </p>
      <p class="text-caption">Caption text</p>
      <p class="text-overline">Overline</p>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Font Weight</div>
      <q-separator class="q-my-md" />
      <p class="text-weight-thin">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-weight-light">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-weight-regular">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-weight-medium">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-weight-bold">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-weight-bolder">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">CSS Helper Classes</div>
      <q-separator class="q-my-md" />
      <p class="text-weight-thin text-right">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-weight-light text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-weight-regular text-strike">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-weight-medium">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-weight-bold">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p class="text-weight-bolder">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </section>
  </q-page>
</template>

<script>
import { useMeta } from 'quasar';

const metaData = {
  title: 'Typography',
  meta: {
    description: { name: 'description', content: 'Quasar-Typography' },
    keywords: { name: 'keywords', content: 'Quasar-learn' },
  },
};
</script>

<script setup>
useMeta(metaData);
</script>

<style lang="scss" scoped></style>

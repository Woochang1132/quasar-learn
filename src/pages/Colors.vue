<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Brand Colors</div>
      <q-separaotr class="q-my-md"></q-separaotr>
      <div class="q-gutter-sm">
        <div class="q-pa-xs rounded-borders bg-primary text-yellow">
          primary
        </div>
        <div class="q-pa-xs rounded-borders bg-secondary text-white">
          secondary
        </div>
        <div class="q-pa-xs rounded-borders bg-accent text-white">accent</div>
        <div class="q-pa-xs bg-dark text-white">dark</div>
        <div class="q-pa-xs bg-positive text-white">positive</div>
        <div class="q-pa-xs bg-negative text-white">negative</div>
        <div class="q-pa-xs bg-info text-white">info</div>
        <div class="q-pa-xs bg-warning text-white">warning</div>
        <div class="q-pa-xs bg-pink-4">pink-4</div>
        <div class="q-pa-xs bg-deep-purple-8">deep-purple-8</div>
        <div class="q-pa-xs bg-light-blue-14">light-blue-14</div>
        <div class="q-pa-xs bg-error">error</div>
        <p>Variables</p>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Components</div>
      <q-separaotr class="q-my-md"></q-separaotr>
      <div class="q-pa-md q-gutter-sm">
        <q-btn color="white" text-color="black" label="Standard" />
        <q-btn color="primary" label="Primary" />
        <q-btn color="secondary" label="Secondary" />
        <q-btn color="amber" glossy label="Amber" />
        <q-btn color="brown-5" label="Brown 5" />
        <q-btn color="deep-orange" glossy label="Deep Orange" />
        <q-btn color="purple" label="Purple" />
        <q-btn color="black" label="Black" />
      </div>
    </section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
p {
  color: $red;
  background-color: $grey;
}
.text-error {
  color: $red;
}
.bg-error {
  background: $red;
}
</style>

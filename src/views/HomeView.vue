<script lang="ts" setup>
import Menu from 'primevue/menu'
import { ref } from 'vue'

const items = ref([
  {
    label: 'Simple Math Problems',
    icon: 'pi pi-minus',
    route: '/simple-math',
  },
])
</script>

<template>
  <main>
    <h1>Home Page.</h1>
    <p>
      Welcome to the home page of our application. This is where you can find the latest updates and
      information.
    </p>
    <div class="card flex justify-center">
      <Menu :model="items" />
    </div>
  </main>
</template>

<script lang="ts" setup></script>

<template>
  <main class="worksheets-index" role="main" aria-label="Worksheets module">
    <router-view />
  </main>
</template>

<style scoped>
.worksheets-index {
  min-height: 100vh;
  padding: 2rem;
  background-color: var(--p-surface-100);
  color: var(--p-surface-900);
}

.p-dark .worksheets-index {
  background-color: var(--p-surface-900);
  color: var(--p-surface-0);
}
</style>

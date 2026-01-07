<script lang="ts" setup>
const year = new Date().getFullYear()
</script>
<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-copyright">{{ year }} Math UI.</div>
      <div class="footer-links">
        <a
          class="footer-link"
          href="https://twitter.com/primevue"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="pi pi-twitter footer-icon"></i>
        </a>
        <a
          class="footer-link"
          href="https://primevue.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="pi pi-globe footer-icon"></i>
        </a>
        <a
          class="footer-link"
          href="https://github.com/primefaces/primevue"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="pi pi-github footer-icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>

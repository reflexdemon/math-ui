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
          href="https://x.com/reflexdemon"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="pi pi-twitter footer-icon"></i>
        </a>
        <a
          class="footer-link"
          href="https://problem.vpv.io"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="pi pi-globe footer-icon"></i>
        </a>
        <!--        <a-->
        <!--          class="footer-link"-->
        <!--          href="https://github.com/reflexdemon/math-ui"-->
        <!--          rel="noopener noreferrer"-->
        <!--          target="_blank"-->
        <!--        >-->
        <!--          <i class="pi pi-github footer-icon"></i>-->
        <!--        </a>-->
      </div>
    </div>
  </div>
</template>

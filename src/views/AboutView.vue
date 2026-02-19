<script lang="ts" setup>
import Card from 'primevue/card'
import Button from 'primevue/button'
</script>
<template>
  <div class="about">
    <div class="content-wrapper">
      <h1 class="title">Welcome to SimpleMath! 🎯</h1>

      <Card class="overview-card">
        <template #title>📚 What You Can Do</template>
        <template #content>
          <div class="operations-grid">
            <div class="operation-item">
              <span class="operation-icon">➕</span>
              <span><strong>Addition</strong> - Add numbers together!</span>
            </div>
            <div class="operation-item">
              <span class="operation-icon">➖</span>
              <span><strong>Subtraction</strong> - Take away numbers!</span>
            </div>
            <div class="operation-item">
              <span class="operation-icon">✖️</span>
              <span><strong>Multiplication</strong> - Multiply numbers fast!</span>
            </div>
            <div class="operation-item">
              <span class="operation-icon">➗</span>
              <span><strong>Division</strong> - Share numbers equally!</span>
            </div>
          </div>
        </template>
      </Card>

      <Card class="links-card">
        <template #title>💡 Tips & Links</template>
        <template #content>
          <div class="tips-content">
            <div class="tip">
              <span class="tip-icon">⭐</span>
              <span
                ><strong>Bookmark Us!</strong> Come back anytime to practice your math skills!</span
              >
            </div>
            <div class="tip">
              <span class="tip-icon">🐛</span>
              <span>Found a bug or have a cool idea?</span>
              <a
                class="github-link"
                href="https://github.com/reflexdemon/math-ui/issues"
                target="_blank"
              >
                <Button icon="pi pi-github" label="Tell us on GitHub" size="small" text />
              </a>
            </div>
          </div>
        </template>
      </Card>

      <div class="decoration">
        <span>🔢</span><span>📐</span><span>🧮</span><span>➕</span><span>➖</span><span>✖️</span
        ><span>➗</span><span>📏</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  padding: 2rem;
  background-color: var(--p-surface-100);
  color: var(--p-surface-900);
}

.p-dark .about {
  background-color: var(--p-surface-900);
  color: var(--p-surface-0);
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.p-dark .title {
  color: var(--p-surface-0);
}

.overview-card,
.links-card {
  margin-bottom: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.p-dark .overview-card,
.p-dark .links-card {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.operations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.operation-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 12px;
  font-size: 1.1rem;
}

.operation-icon {
  font-size: 1.5rem;
  filter: brightness(1);
}

.p-dark .operation-icon {
  filter: brightness(1.2);
}

.tips-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tip {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.tip-icon {
  font-size: 1.5rem;
}

.github-link {
  margin-left: 0.5rem;
}

.decoration {
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
}

.decoration span {
  margin: 0 0.5rem;
  animation: bounce 2s infinite;
}

.decoration span:nth-child(odd) {
  animation-delay: 0.2s;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 600px) {
  .operations-grid {
    grid-template-columns: 1fr;
  }

  .title {
    font-size: 1.8rem;
  }
}
</style>

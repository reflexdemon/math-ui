<script lang="ts" setup>
import Card from 'primevue/card'
import Button from 'primevue/button'
</script>

<template>
  <div class="home">
    <div class="content-wrapper">
      <h1 class="title">Welcome to SimpleMath! 🧮</h1>

      <Card class="overview-card">
        <template #title>📖 Overview</template>
        <template #content>
          <p>
            SimpleMath is a fun and interactive math practice app designed for kids ages 6-11!
            Practice your arithmetic skills with customizable problems in addition, subtraction,
            multiplication, and division.
          </p>
          <ul class="features-list">
            <li>
              ✨ <strong>Customizable Problems</strong> - Set your own min/max values and problem
              size
            </li>
            <li>
              📊 <strong>Multiple Operations</strong> - Practice +, -, ×, and ÷ all in one place
            </li>
            <li>🎯 <strong>Instant Feedback</strong> - See your results immediately</li>
            <li>🌙 <strong>Dark Mode</strong> - Easy on the eyes, day or night</li>
          </ul>
        </template>
      </Card>

      <Card class="links-card">
        <template #title>🚀 Quick Links</template>
        <template #content>
          <div class="links-grid">
            <router-link to="/simple-math" class="link-item">
              <Button label="Start Practicing" icon="pi pi-calculator" severity="success" />
            </router-link>
            <router-link to="/about" class="link-item">
              <Button label="Learn More" icon="pi pi-info-circle" severity="secondary" outlined />
            </router-link>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  padding: 2rem;
  background-color: var(--p-surface-100);
  color: var(--p-surface-900);
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.title {
  text-align: center;
  color: var(--p-surface-900);
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.overview-card,
.links-card {
  margin-bottom: 1.5rem;
  border-radius: 16px;
}

.features-list {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

.features-list li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.links-grid {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.link-item {
  text-decoration: none;
}

@media (max-width: 600px) {
  .title {
    font-size: 1.8rem;
  }

  .links-grid {
    flex-direction: column;
  }
}
</style>

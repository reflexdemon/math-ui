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
            <li>📐 <strong>Multiplication Tables</strong> - View reference tables 1-12</li>
            <li>🌙 <strong>Dark Mode</strong> - Easy on the eyes, day or night</li>
          </ul>
        </template>
      </Card>

      <Card class="links-card">
        <template #title>🚀 Quick Links</template>
        <template #content>
          <div class="links-grid">
            <router-link class="link-item" to="/simple-math">
              <Button icon="pi pi-calculator" label="Start Practicing" severity="success" />
            </router-link>
            <router-link class="link-item" to="/multiplication-tables">
              <Button
                icon="pi pi-th-large"
                label="Multiplication Tables"
                outlined
                severity="info"
              />
            </router-link>
            <router-link class="link-item" to="/about">
              <Button icon="pi pi-info-circle" label="Learn More" outlined severity="secondary" />
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

.p-dark .home {
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

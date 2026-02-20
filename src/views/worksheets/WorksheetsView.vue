<script lang="ts" setup>
import Card from 'primevue/card'
import Button from 'primevue/button'

interface Worksheet {
  id: string
  title: string
  description: string
  route: string
  icon: string
}

const worksheets: Worksheet[] = [
  {
    id: 'simple-math',
    title: 'Simple Math Problems',
    description:
      'Practice addition, subtraction, multiplication, and division with customizable problems.',
    route: '/worksheets/simple-math',
    icon: 'pi pi-calculator',
  },
  {
    id: 'multiplication-worksheet',
    title: 'Multiplication Worksheet',
    description:
      'Practice multiplication tables 1-12 with timed exercises and answer verification.',
    route: '/worksheets/multiplication-tables',
    icon: 'pi pi-times',
  },
  {
    id: 'multiplication-tables',
    title: 'Multiplication Tables',
    description: 'View reference tables for numbers 1 through 12.',
    route: '/multiplication-tables',
    icon: 'pi pi-th-large',
  },
]
</script>

<template>
  <div class="worksheets-landing">
    <div class="content-wrapper">
      <header class="page-header">
        <h1 id="worksheets-title" class="title">Work Sheets</h1>
        <p class="subtitle">Choose a worksheet to practice your math skills</p>
      </header>

      <nav aria-labelledby="worksheets-title" class="worksheets-nav">
        <div class="worksheets-grid">
          <article v-for="worksheet in worksheets" :key="worksheet.id" class="worksheet-card">
            <Card class="worksheet-card-content">
              <template #header>
                <div class="card-icon-wrapper">
                  <i :class="['pi', worksheet.icon]" aria-hidden="true"></i>
                </div>
              </template>
              <template #title>
                <h2 class="worksheet-title">{{ worksheet.title }}</h2>
              </template>
              <template #content>
                <p class="worksheet-description">{{ worksheet.description }}</p>
              </template>
              <template #footer>
                <router-link :to="worksheet.route" class="worksheet-link">
                  <Button
                    :label="'Start ' + worksheet.title.split(' ')[0]"
                    :aria-label="'Start ' + worksheet.title"
                    severity="success"
                  />
                </router-link>
              </template>
            </Card>
          </article>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.worksheets-landing {
  min-height: 100vh;
  padding: 2rem;
  background-color: var(--p-surface-100);
  color: var(--p-surface-900);
}

.p-dark .worksheets-landing {
  background-color: var(--p-surface-900);
  color: var(--p-surface-0);
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--p-surface-900);
}

.p-dark .title {
  color: var(--p-surface-0);
}

.subtitle {
  font-size: 1.1rem;
  color: var(--p-surface-600);
}

.p-dark .subtitle {
  color: var(--p-surface-400);
}

.worksheets-nav {
  width: 100%;
}

.worksheets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.worksheet-card {
  display: flex;
}

.worksheet-card-content {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.worksheet-card-content:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.p-dark .worksheet-card-content {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.p-dark .worksheet-card-content:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.card-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: var(--p-primary-50);
}

.p-dark .card-icon-wrapper {
  background-color: var(--p-primary-900);
}

.card-icon-wrapper i {
  font-size: 2.5rem;
  color: var(--p-primary-500);
}

.worksheet-title {
  font-size: 1.25rem;
  margin: 0;
}

.worksheet-description {
  color: var(--p-surface-600);
  line-height: 1.6;
}

.p-dark .worksheet-description {
  color: var(--p-surface-400);
}

.worksheet-link {
  text-decoration: none;
}

.worksheet-link :deep(.p-button) {
  width: 100%;
}

@media (max-width: 600px) {
  .worksheets-grid {
    grid-template-columns: 1fr;
  }

  .title {
    font-size: 2rem;
  }
}
</style>

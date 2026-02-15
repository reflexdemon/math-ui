<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from 'primevue'
import MathComponent from '@/components/MathComponent.vue'
import type { MathConfig } from '@/types/MathConfig.ts'
import { addition, subtraction, multiplication, division } from '@/services/SimpleMathProblem.ts'
import type { MathType } from '@/types/MathType.ts'
import _ from 'lodash'

const results = ref<MathType[]>([])

const config = ref<MathConfig[]>([
  {
    min: 100,
    max: 999,
    size: 10,
    operator: '+',
    match: 'add',
  },
  {
    min: 100,
    max: 999,
    size: 10,
    operator: '-',
    match: 'sub',
  },
  {
    min: 1,
    max: 99,
    size: 10,
    operator: '*',
    match: 'mul',
  },
  {
    min: 1,
    max: 99,
    size: 10,
    operator: '/',
    match: 'div',
  },
])

function generate(): void {
  const allResults: MathType[] = []

  _.forEach(config.value, (c) => {
    let result: MathType[]
    switch (c.operator) {
      case '+':
        result = addition(c.size, c.min, c.max)
        break
      case '-':
        result = subtraction(c.size, c.min, c.max)
        break
      case '*':
        result = multiplication(c.size, c.min, c.max)
        break
      case '/':
        result = division(c.size, c.min, c.max)
        break
      default:
        result = []
    }
    allResults.push(...result)
  })

  results.value = _.shuffle(allResults)
}
</script>

<template>
  <div class="cards-container">
    <MathComponent
      v-for="(addConfig, index) in config.values()"
      :key="index"
      v-model:max="addConfig.max"
      v-model:min="addConfig.min"
      v-model:size="addConfig.size"
      :match="addConfig.match"
      :operator="addConfig.operator"
    />
  </div>

  <div class="button-container">
    <Button class="p-button-raised" label="Generate" @click="generate" />
  </div>

  <div v-if="results.length > 0" class="results-grid">
    <div v-for="(item, index) in results" :key="index" class="result-card">
      <div class="result-content">
        <div class="top-number">{{ Math.max(item.firstNumber, item.secondNumber) }}</div>
        <div class="operation">
          {{ item.operator }} {{ Math.min(item.firstNumber, item.secondNumber) }}
        </div>
        <div class="separator">----------</div>
        <div class="separator">----------</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1rem 0;
  width: 100%;
}

.button-container {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  padding: 1rem;
  width: 100%;
}

.result-card {
  background-color: var(--p-surface-100);
  color: var(--p-surface-900);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  border: 1px solid var(--p-surface-200);
}

.p-dark .result-card {
  background-color: var(--p-surface-800);
  color: var(--p-surface-0);
  border-color: var(--p-surface-600);
}

.result-content {
  font-family: monospace;
  font-size: 1.1rem;
  text-align: right;
}

.top-number {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.operation {
  margin-bottom: 0.5rem;
}

.separator {
  color: var(--p-surface-500);
}

@media (max-width: 600px) {
  .results-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .result-content {
    font-size: 0.9rem;
  }
}
</style>

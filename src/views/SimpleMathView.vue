<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from 'primevue'
import { useToast } from 'primevue/usetoast'
import MathComponent from '@/components/MathComponent.vue'
import type { MathConfig } from '@/types/MathConfig.ts'
import _ from 'lodash'

const toast = useToast()

const config = ref<MathConfig[]>([
  {
    min: 0,
    max: 999,
    size: 10,
    operator: '+',
    match: 'add',
  },
  {
    min: 0,
    max: 999,
    size: 10,
    operator: '-',
    match: 'sub',
  },
  {
    min: 0,
    max: 999,
    size: 10,
    operator: '*',
    match: 'mul',
  },
  {
    min: 0,
    max: 999,
    size: 10,
    operator: '/',
    match: 'div',
  },
])

function generate(): void {
  _.forEach(config.value, (c) =>
    toast.add({
      severity: 'info',
      summary: 'Generated Values',
      detail: `min = ${c.min}, max = ${c.max}, size= ${c.size} and operator = ${c.operator}`,
      life: 3000,
    }),
  )
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
</style>

<script lang="ts" setup>
import { Fieldset } from 'primevue'
import InputNumber from 'primevue/inputnumber'
import Card from 'primevue/card'
import _ from 'lodash'
import type { DisplayConfig } from '@/types/DisplayConfig.ts'

const titleContent: DisplayConfig[] = [
  {
    match: 'add',
    operator: '+',
    header: 'Addition',
    title: 'Addition Configuration',
  } as DisplayConfig,
  {
    match: 'sub',
    operator: '-',
    header: 'Subtraction',
    title: 'Subtraction Configuration',
  } as DisplayConfig,
  {
    match: 'mul',
    operator: '*',
    header: 'Multiplication',
    title: 'Multiplication Configuration',
  } as DisplayConfig,
  {
    match: 'div',
    operator: '/',
    header: 'Division',
    title: 'Division Configuration',
  } as DisplayConfig,
]

const props = defineProps(['operator', 'match'])

const { header, title } = _.last(
  _.filter(titleContent, (t) => t.match == props.match),
) as DisplayConfig

const min = defineModel('min', { default: 0 })
const max = defineModel('max', { default: 999 })
const size = defineModel('size', { default: 10 })
</script>

<template>
  <Card>
    <template #title>{{ title }}</template>
    <template #content>
      <Fieldset :legend="header">
        <div class="config-container">
          <div class="config-item">
            <label for="min-value">Minimum Value</label>
            <InputNumber
              id="min-value"
              v-model="min"
              :max="999"
              :min="0"
              class="input-number"
              size="small"
            />
          </div>

          <div class="config-item">
            <label for="max-value">Maximum Value</label>
            <InputNumber
              id="max-value"
              v-model="max"
              :max="999"
              :min="0"
              class="input-number"
              size="small"
            />
          </div>

          <div class="config-item">
            <label for="size-value">Size</label>
            <InputNumber
              id="size-value"
              v-model="size"
              :max="999"
              :min="0"
              class="input-number"
              size="small"
            />
          </div>
        </div>
      </Fieldset>
    </template>
  </Card>
</template>

<style scoped>
.config-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.config-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.config-item label {
  width: 120px;
  text-align: right;
}

.input-number :deep(input) {
  width: 8ch;
}
</style>

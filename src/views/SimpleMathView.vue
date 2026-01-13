<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from 'primevue'
import { useToast } from 'primevue/usetoast'
import MathComponent from '@/components/MathComponent.vue'
import type { MathConfig } from '@/types/MathConfig.ts'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
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
  <Tabs value="+">
    <TabList>
      <Tab v-for="(addConfig, index) in config.values()" :key="index" :value="addConfig.operator">{{
        addConfig.match
      }}</Tab>
    </TabList>
    <TabPanels>
      <TabPanel
        v-for="(addConfig, index) in config.values()"
        :key="index"
        :value="addConfig.operator"
      >
        <MathComponent
          v-model:max="addConfig.max"
          v-model:min="addConfig.min"
          v-model:size="addConfig.size"
          :match="addConfig.match"
          :operator="addConfig.operator"
        />
      </TabPanel>
    </TabPanels>
  </Tabs>

  <div class="flex-auto">
    <Button class="p-button-raised" label="Generate" @click="generate" />
  </div>
</template>

<style scoped></style>

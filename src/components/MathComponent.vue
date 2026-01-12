<script lang="ts" setup>
import { Fieldset, FloatLabel } from 'primevue'
import InputNumber from 'primevue/inputnumber'
import Card from 'primevue/card'
import _ from 'lodash'

const titleContent = [
  { match: 'add', operator: '+', header: 'Addition', title: 'Addition Configuration' },
  { match: 'sub', operator: '-', header: 'Subtraction', title: 'Subtraction Configuration' },
  { match: 'mul', operator: '*', header: 'Multiplication', title: 'Multiplication Configuration' },
  { match: 'div', operator: '/', header: 'Division', title: 'Division Configuration' },
]

const props = defineProps(['operator', 'match'])

const { header, title } = _.last(_.filter(titleContent, (t) => t.match == props.match))

const min = defineModel('min', { default: 0 })
const max = defineModel('max', { default: 999 })
const size = defineModel('size', { default: 10 })
</script>

<template>
  <div class="flex flex-col">
    <div class="flex-inline">
      <Card>
        <template #title>{{ title }}</template>
        <template #content>
          <div class="flex-auto">
            <Fieldset :legend="header">
              <div class="flex-auto">
                <FloatLabel variant="on">
                  <InputNumber
                    id="min-value"
                    v-model="min"
                    :max="999"
                    :min="0"
                    buttonLayout="horizontal"
                    showButtons
                    ><template #incrementbuttonicon>
                      <span class="pi pi-plus" />
                    </template>
                    <template #decrementbuttonicon>
                      <span class="pi pi-minus" />
                    </template>
                  </InputNumber>
                  <label for="min-value">Minimum Value</label>
                </FloatLabel>
                <div class="flex-auto">
                  <FloatLabel variant="on">
                    <InputNumber
                      id="max-value"
                      v-model="max"
                      :max="999"
                      :min="0"
                      buttonLayout="horizontal"
                      showButtons
                    >
                      <template #incrementbuttonicon>
                        <span class="pi pi-plus" />
                      </template>
                      <template #decrementbuttonicon> <span class="pi pi-minus" /> </template
                    ></InputNumber>
                    <label for="max-value">Maximum Value</label>
                  </FloatLabel>
                </div>
                <div class="flex-auto">
                  <FloatLabel variant="on">
                    <InputNumber
                      id="size-value"
                      v-model="size"
                      :max="999"
                      :min="0"
                      buttonLayout="horizontal"
                      showButtons
                    >
                      <template #incrementbuttonicon>
                        <span class="pi pi-plus" />
                      </template>
                      <template #decrementbuttonicon> <span class="pi pi-minus" /> </template
                    ></InputNumber>
                    <label for="size-value">Size</label>
                  </FloatLabel>
                </div>
              </div>
            </Fieldset>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped></style>

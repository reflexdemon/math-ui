<script lang="ts" setup>
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Card from 'primevue/card'
import { Button, Fieldset, FloatLabel } from 'primevue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const addMin = ref(0)
const addMax = ref(999)
const addSize = ref(10)
function generate(): void {
  toast.add({
    severity: 'info',
    summary: 'Generating Add using',
    detail: `addMin = ${addMin.value}, addMax = ${addMax.value}, addSize= ${addSize.value}`,
    life: 3000,
  })
}
</script>

<template>
  <Card class="p-fluid">
    <template #title>Simple Math Problems</template>
    <template #content>
      <div class="flex-auto">
        <Fieldset legend="Addition">
          <div class="flex-auto">
            <FloatLabel variant="on">
              <InputNumber
                id="min-value"
                v-model="addMin"
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
                  v-model="addMax"
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
                  v-model="addSize"
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
      <div class="flex-auto">
        <Button class="p-button-raised" label="Generate" @click="generate" />
      </div>
    </template>
  </Card>
</template>

<style scoped></style>

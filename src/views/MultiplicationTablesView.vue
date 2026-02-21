<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Button } from 'primevue'
import { useLayout } from '@/composables/useLayout.ts'
import { generateTables } from '@/services/TableProvider.ts'
import { downloadPdf } from '@/services/PrintService.ts'

const { isDarkMode } = useLayout()

const tables = ref<number[][]>(generateTables())

function handleDownloadPdf(): void {
  downloadPdf(tables.value)
}
</script>

<template>
  <div class="tables-container">
    <div class="header-section">
      <h1>Multiplication Tables (1-12)</h1>
      <Button
        class="p-button-raised p-button-success"
        label="Print PDF"
        @click="handleDownloadPdf"
      />
    </div>

    <div class="tables-grid">
      <div v-for="(table, tableIndex) in tables" :key="tableIndex" class="table-card">
        <h3>Table {{ tableIndex + 1 }}</h3>
        <table class="multiplication-table">
          <tbody>
            <tr v-for="(result, rowIndex) in table" :key="rowIndex">
              <td class="number">{{ tableIndex + 1 }}</td>
              <td class="operator">×</td>
              <td class="number">{{ rowIndex + 1 }}</td>
              <td class="operator">=</td>
              <td class="result">{{ result }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tables-container {
  padding: 2rem;
}

.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header-section h1 {
  margin: 0;
}

.tables-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.table-card {
  background-color: var(--p-surface-100);
  color: var(--p-surface-900);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid var(--p-surface-200);
}

.p-dark .table-card {
  background-color: var(--p-surface-800);
  color: var(--p-surface-0);
  border-color: var(--p-surface-600);
}

.table-card h3 {
  margin: 0 0 1rem 0;
  text-align: center;
  border-bottom: 2px solid var(--p-surface-300);
  padding-bottom: 0.5rem;
}

.p-dark .table-card h3 {
  border-bottom-color: var(--p-surface-500);
}

.multiplication-table {
  width: 100%;
  border-collapse: collapse;
}

.multiplication-table td {
  padding: 4px 8px;
  text-align: right;
}

.multiplication-table .number {
  font-weight: 500;
}

.multiplication-table .operator {
  color: var(--p-surface-500);
  text-align: center;
}

.multiplication-table .result {
  font-weight: bold;
}

@media (max-width: 768px) {
  .tables-grid {
    grid-template-columns: 1fr;
  }

  .header-section {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>

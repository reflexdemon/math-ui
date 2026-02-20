<script lang="ts" setup>
import { ref, computed, onUnmounted } from 'vue'
import { Button, Checkbox } from 'primevue'
import { useLayout } from '@/composables/useLayout.ts'

const { isDarkMode } = useLayout()

interface Problem {
  table: number
  multiplier: number
  correctAnswer: number
  userAnswer: number | null
  isCorrect: boolean | null
}

interface TableGroup {
  table: number
  problems: Problem[]
}

const selectedTables = ref<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
const allTablesSelected = computed({
  get: () => selectedTables.value.length === 12,
  set: (value: boolean) => {
    if (value) {
      selectedTables.value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    } else {
      selectedTables.value = []
    }
  },
})

const problems = ref<Problem[]>([])
const isStarted = ref(false)
const isVerified = ref(false)
const elapsedSeconds = ref(0)
let timerInterval: ReturnType<typeof setInterval> | null = null

function generateProblems(): void {
  const result: Problem[] = []
  for (let table = 1; table <= 12; table++) {
    for (let multiplier = 1; multiplier <= 12; multiplier++) {
      result.push({
        table,
        multiplier,
        correctAnswer: table * multiplier,
        userAnswer: null,
        isCorrect: null,
      })
    }
  }
  problems.value = result
}

generateProblems()

const tableGroups = computed<TableGroup[]>(() => {
  return selectedTables.value.map((tableNum) => ({
    table: tableNum,
    problems: problems.value
      .filter((p) => p.table === tableNum)
      .sort((a, b) => a.multiplier - b.multiplier),
  }))
})

const filteredProblems = computed(() => {
  return problems.value.filter((p) => selectedTables.value.includes(p.table))
})

const formattedTime = computed(() => {
  const minutes = Math.floor(elapsedSeconds.value / 60)
  const seconds = elapsedSeconds.value % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
})

const correctCount = computed(() => {
  return filteredProblems.value.filter((p) => p.isCorrect === true).length
})

const incorrectCount = computed(() => {
  return filteredProblems.value.filter((p) => p.isCorrect === false).length
})

const scorePercentage = computed(() => {
  const total = filteredProblems.value.length
  if (total === 0) return 0
  return Math.round((correctCount.value / total) * 100)
})

const isHighScore = computed(() => scorePercentage.value >= 90)

function toggleTable(tableNum: number): void {
  const index = selectedTables.value.indexOf(tableNum)
  if (index === -1) {
    selectedTables.value.push(tableNum)
  } else {
    selectedTables.value.splice(index, 1)
  }
}

function startWorksheet(): void {
  if (selectedTables.value.length === 0) {
    alert('Please select at least one table to practice.')
    return
  }
  isStarted.value = true
  elapsedSeconds.value = 0
  timerInterval = setInterval(() => {
    elapsedSeconds.value++
  }, 1000)
}

function verifyAnswers(): void {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }

  filteredProblems.value.forEach((problem) => {
    if (problem.userAnswer === null) {
      problem.isCorrect = false
    } else {
      problem.isCorrect = problem.userAnswer === problem.correctAnswer
    }
  })
  isVerified.value = true
}

function resetWorksheet(): void {
  isStarted.value = false
  isVerified.value = false
  elapsedSeconds.value = 0
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
  problems.value.forEach((problem) => {
    problem.userAnswer = null
    problem.isCorrect = null
  })
}

function printWorksheet(): void {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  const filename = `multiplication-worksheet-${timestamp}.pdf`

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  const tablesToPrint = selectedTables.value

  let tablesHtml = ''
  for (const table of tablesToPrint) {
    let rows = ''
    for (let multiplier = 1; multiplier <= 12; multiplier++) {
      rows += `
        <tr>
          <td>${table}</td>
          <td>×</td>
          <td>${multiplier}</td>
          <td>=</td>
          <td class="answer-box"></td>
        </tr>
      `
    }
    tablesHtml += `
      <div class="table-container">
        <h3>Table ${table}</h3>
        <table>
          ${rows}
        </table>
      </div>
    `
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${filename}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 10px;
            margin: 0;
          }
          h1 {
            text-align: center;
            margin: 5px 0;
            font-size: 24px;
          }
          h2 {
            text-align: center;
            margin: 5px 0 15px 0;
            font-size: 16px;
            color: #666;
          }
          .tables-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
          }
          .table-container {
            page-break-inside: avoid;
            border: 1px solid #333;
            padding: 5px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 11px;
          }
          td {
            padding: 2px 4px;
            text-align: right;
            border-bottom: 1px solid #ccc;
          }
          td.answer-box {
            width: 30px;
            border-bottom: 1px solid #000;
          }
          h3 {
            margin: 0 0 5px 0;
            font-size: 14px;
            text-align: center;
            border-bottom: 1px solid #333;
            padding-bottom: 3px;
          }
          @media print {
            body { margin: 0; padding: 5px; }
            .tables-grid { grid-template-columns: repeat(4, 1fr); }
            .table-container { page-break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        <h1>Multiplication Worksheet</h1>
        <h2>Tables ${tablesToPrint.join(', ')} - Write your answers</h2>
        <div class="tables-grid">
          ${tablesHtml}
        </div>
        <script>
          window.onload = function() {
            window.print();
            window.onafterprint = function() {
              window.close();
            };
          };
        <\/script>
      </body>
    </html>
  `

  printWindow.document.write(html)
  printWindow.document.close()
}

function printCertificate(): void {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  const filename = `multiplication-certificate-${timestamp}.pdf`

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  const tablesList = selectedTables.value.join(', ')

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${filename}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 40px;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }
          .certificate {
            border: 8px solid #ffd700;
            border-radius: 20px;
            padding: 40px 60px;
            text-align: center;
            background: linear-gradient(135deg, #fff 0%, #fff8e7 100%);
            max-width: 600px;
          }
          .trophy {
            font-size: 80px;
            margin-bottom: 20px;
          }
          h1 {
            color: #b8860b;
            font-size: 36px;
            margin: 0 0 20px 0;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          .score {
            font-size: 48px;
            font-weight: bold;
            color: #28a745;
            margin: 20px 0;
          }
          .details {
            font-size: 18px;
            color: #666;
            margin: 20px 0;
          }
          .tables-info {
            font-size: 16px;
            color: #888;
            margin-top: 30px;
          }
          .congrats {
            font-size: 24px;
            color: #333;
            margin-bottom: 10px;
          }
          @media print {
            body { 
              padding: 20px; 
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .certificate {
              border-width: 4px;
              padding: 20px 30px;
            }
          }
        </style>
      </head>
      <body>
        <div class="certificate">
          <div class="trophy">🎖️</div>
          <h1>Certificate of Achievement</h1>
          <p class="congrats">Congratulations!</p>
          <p class="details">You have successfully completed the</p>
          <p class="details">Multiplication Worksheet</p>
          <div class="score">${scorePercentage.value}%</div>
          <p class="details">${correctCount.value} out of ${filteredProblems.value.length} correct</p>
          <p class="tables-info">Tables practiced: ${tablesList}</p>
        </div>
        <script>
          window.onload = function() {
            window.print();
            window.onafterprint = function() {
              window.close();
            };
          };
        <\/script>
      </body>
    </html>
  `

  printWindow.document.write(html)
  printWindow.document.close()
}

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
})
</script>

<template>
  <div class="worksheet-container">
    <div class="header-section">
      <h1>Multiplication Worksheet</h1>
      <div class="header-actions">
        <div v-if="isStarted && !isVerified" class="timer-display">Time: {{ formattedTime }}</div>
        <Button v-if="!isStarted" label="Start" severity="success" @click="startWorksheet" />
        <Button
          v-if="isStarted && !isVerified"
          label="Verify"
          severity="info"
          @click="verifyAnswers"
        />
        <Button v-if="isVerified" label="Reset" severity="secondary" @click="resetWorksheet" />
        <Button label="Print" @click="printWorksheet" />
      </div>
    </div>

    <div v-if="!isStarted" class="table-selection">
      <h3>Select Tables to Practice</h3>
      <div class="selection-header">
        <Checkbox v-model="allTablesSelected" :binary="true" inputId="selectAll" />
        <label for="selectAll" class="select-all-label">Select All</label>
      </div>
      <div class="table-checkboxes">
        <div v-for="tableNum in 12" :key="tableNum" class="table-checkbox">
          <Checkbox
            :modelValue="selectedTables.includes(tableNum)"
            :inputId="'table-' + tableNum"
            :binary="true"
            :disabled="isStarted"
            @update:modelValue="toggleTable(tableNum)"
          />
          <label :for="'table-' + tableNum">Table {{ tableNum }}</label>
        </div>
      </div>
    </div>

    <div v-if="isVerified" class="results-summary">
      <h2>Results Summary</h2>
      <div class="summary-stats">
        <div class="stat correct">
          <span class="stat-value">{{ correctCount }}</span>
          <span class="stat-label">Correct</span>
        </div>
        <div class="stat incorrect">
          <span class="stat-value">{{ incorrectCount }}</span>
          <span class="stat-label">Incorrect</span>
        </div>
        <div class="stat total">
          <span class="stat-value">{{ filteredProblems.length }}</span>
          <span class="stat-label">Total</span>
        </div>
        <div class="stat time">
          <span class="stat-value">{{ formattedTime }}</span>
          <span class="stat-label">Time</span>
        </div>
      </div>

      <div v-if="isHighScore" class="certificate-section">
        <div class="trophy-icon">🎖️</div>
        <p class="congrats-text">Congratulations! You scored {{ scorePercentage }}%!</p>
        <Button label="Print Certificate" severity="success" @click="printCertificate" />
      </div>
    </div>

    <div class="tables-grid">
      <div v-for="group in tableGroups" :key="group.table" class="table-card">
        <h3 class="table-header">Table {{ group.table }}</h3>
        <div class="problems-list">
          <div
            v-for="(problem, index) in group.problems"
            :key="index"
            class="problem-row"
            :class="{
              'is-correct': isVerified && problem.isCorrect === true,
              'is-incorrect': isVerified && problem.isCorrect === false,
            }"
          >
            <span class="problem-expression">
              <span class="number">{{ problem.table }}</span>
              <span class="operator">×</span>
              <span class="number">{{ problem.multiplier }}</span>
              <span class="operator">=</span>
            </span>
            <input
              v-model.number="problem.userAnswer"
              type="number"
              class="answer-input"
              :readonly="isVerified"
              :placeholder="isVerified ? problem.correctAnswer.toString() : '?'"
            />
            <span v-if="isVerified && problem.isCorrect === false" class="correct-answer">
              ({{ problem.correctAnswer }})
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.worksheet-container {
  padding: 2rem;
}

.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.header-section h1 {
  margin: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.timer-display {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: monospace;
  padding: 0.5rem 1rem;
  background-color: var(--p-surface-100);
  border-radius: 8px;
  color: var(--p-surface-900);
}

.p-dark .timer-display {
  background-color: var(--p-surface-800);
  color: var(--p-surface-0);
}

.table-selection {
  background-color: var(--p-surface-100);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.p-dark .table-selection {
  background-color: var(--p-surface-800);
}

.table-selection h3 {
  margin: 0 0 1rem 0;
  text-align: center;
}

.selection-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.select-all-label {
  font-weight: bold;
}

.table-checkboxes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0.75rem;
}

.table-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.table-checkbox label {
  cursor: pointer;
}

.results-summary {
  background-color: var(--p-surface-100);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.p-dark .results-summary {
  background-color: var(--p-surface-800);
}

.results-summary h2 {
  margin: 0 0 1rem 0;
  text-align: center;
}

.summary-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  min-width: 80px;
}

.stat.correct {
  background-color: #d4edda;
  color: #155724;
}

.p-dark .stat.correct {
  background-color: #1b4332;
  color: #95d5b2;
}

.stat.incorrect {
  background-color: #f8d7da;
  color: #721c24;
}

.p-dark .stat.incorrect {
  background-color: #4a1c1c;
  color: #f5a5a5;
}

.stat.total {
  background-color: var(--p-surface-200);
  color: var(--p-surface-900);
}

.p-dark .stat.total {
  background-color: var(--p-surface-700);
  color: var(--p-surface-0);
}

.stat.time {
  background-color: var(--p-primary-50);
  color: var(--p-primary-700);
}

.p-dark .stat.time {
  background-color: var(--p-primary-900);
  color: var(--p-primary-100);
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
}

.stat-label {
  font-size: 0.875rem;
}

.certificate-section {
  margin-top: 2rem;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #fff 0%, #fff8e7 100%);
  border-radius: 12px;
  border: 3px solid #ffd700;
}

.p-dark .certificate-section {
  background: linear-gradient(135deg, #2d2d2d 0%, #3d3d1a 100%);
}

.trophy-icon {
  font-size: 4rem;
}

.congrats-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #b8860b;
  margin: 1rem 0;
}

.p-dark .congrats-text {
  color: #ffd700;
}

.tables-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.table-card {
  background-color: var(--p-surface-100);
  border-radius: 12px;
  padding: 1rem;
  border: 2px solid var(--p-surface-200);
}

.p-dark .table-card {
  background-color: var(--p-surface-800);
  border-color: var(--p-surface-600);
}

.table-header {
  margin: 0 0 1rem 0;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--p-surface-300);
}

.p-dark .table-header {
  border-bottom-color: var(--p-surface-500);
}

.problems-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.problem-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: var(--p-surface-50);
}

.p-dark .problem-row {
  background-color: var(--p-surface-700);
}

.problem-row.is-correct {
  background-color: #d4edda;
  border: 1px solid #28a745;
}

.p-dark .problem-row.is-correct {
  background-color: #1b4332;
}

.problem-row.is-incorrect {
  background-color: #f8d7da;
  border: 1px solid #dc3545;
}

.p-dark .problem-row.is-incorrect {
  background-color: #4a1c1c;
}

.problem-expression {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  min-width: 80px;
}

.number {
  font-weight: bold;
}

.operator {
  color: var(--p-surface-500);
}

.answer-input {
  width: 70px;
  padding: 0.4rem;
  font-size: 1rem;
  text-align: center;
  border: 1px solid var(--p-surface-300);
  border-radius: 4px;
  background-color: var(--p-surface-0);
  color: var(--p-surface-900);
}

.p-dark .answer-input {
  background-color: var(--p-surface-600);
  border-color: var(--p-surface-500);
  color: var(--p-surface-0);
}

.answer-input[readonly] {
  background-color: var(--p-surface-200);
  cursor: default;
}

.p-dark .answer-input[readonly] {
  background-color: var(--p-surface-700);
}

.correct-answer {
  color: #dc3545;
  font-weight: bold;
  font-size: 0.875rem;
}

.p-dark .correct-answer {
  color: #f5a5a5;
}

@media (max-width: 768px) {
  .header-section {
    flex-direction: column;
    text-align: center;
  }

  .tables-grid {
    grid-template-columns: 1fr;
  }

  .table-checkboxes {
    grid-template-columns: repeat(3, 1fr);
  }

  .summary-stats {
    gap: 1rem;
  }

  .stat {
    min-width: 60px;
    padding: 0.75rem;
  }

  .stat-value {
    font-size: 1.5rem;
  }
}
</style>

<script lang="ts" setup>
import { ref, computed, onUnmounted } from 'vue'
import { Button } from 'primevue'
import { useLayout } from '@/composables/useLayout.ts'

const { isDarkMode } = useLayout()

interface Problem {
  table: number
  multiplier: number
  correctAnswer: number
  userAnswer: number | null
  isCorrect: boolean | null
}

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

const formattedTime = computed(() => {
  const minutes = Math.floor(elapsedSeconds.value / 60)
  const seconds = elapsedSeconds.value % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
})

const correctCount = computed(() => {
  return problems.value.filter((p) => p.isCorrect === true).length
})

const incorrectCount = computed(() => {
  return problems.value.filter((p) => p.isCorrect === false).length
})

function startWorksheet(): void {
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

  problems.value.forEach((problem) => {
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

  let tablesHtml = ''
  for (let table = 1; table <= 12; table++) {
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
        <h2>Tables 1-12 - Write your answers</h2>
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
          <span class="stat-value">{{ problems.length }}</span>
          <span class="stat-label">Total</span>
        </div>
        <div class="stat time">
          <span class="stat-value">{{ formattedTime }}</span>
          <span class="stat-label">Time</span>
        </div>
      </div>
    </div>

    <div class="tables-grid">
      <div
        v-for="(problem, index) in problems"
        :key="index"
        class="problem-card"
        :class="{
          'is-correct': isVerified && problem.isCorrect === true,
          'is-incorrect': isVerified && problem.isCorrect === false,
        }"
      >
        <div class="problem-expression">
          <span class="number">{{ problem.table }}</span>
          <span class="operator">×</span>
          <span class="number">{{ problem.multiplier }}</span>
          <span class="operator">=</span>
        </div>
        <input
          v-model.number="problem.userAnswer"
          type="number"
          class="answer-input"
          :disabled="!isStarted || isVerified"
          :placeholder="isVerified ? problem.correctAnswer.toString() : '?'"
        />
        <div v-if="isVerified && problem.isCorrect === false" class="correct-answer">
          Correct: {{ problem.correctAnswer }}
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

.tables-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
}

.problem-card {
  background-color: var(--p-surface-100);
  border-radius: 8px;
  padding: 0.75rem;
  border: 2px solid var(--p-surface-200);
  text-align: center;
  transition: all 0.2s ease;
}

.p-dark .problem-card {
  background-color: var(--p-surface-800);
  border-color: var(--p-surface-600);
}

.problem-card.is-correct {
  border-color: #28a745;
  background-color: #d4edda;
}

.p-dark .problem-card.is-correct {
  background-color: #1b4332;
  border-color: #28a745;
}

.problem-card.is-incorrect {
  border-color: #dc3545;
  background-color: #f8d7da;
}

.p-dark .problem-card.is-incorrect {
  background-color: #4a1c1c;
  border-color: #dc3545;
}

.problem-expression {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.number {
  font-weight: bold;
  font-size: 1.1rem;
}

.operator {
  color: var(--p-surface-500);
}

.answer-input {
  width: 80px;
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
  border: 1px solid var(--p-surface-300);
  border-radius: 4px;
  background-color: var(--p-surface-0);
  color: var(--p-surface-900);
}

.p-dark .answer-input {
  background-color: var(--p-surface-700);
  border-color: var(--p-surface-500);
  color: var(--p-surface-0);
}

.answer-input:disabled {
  background-color: var(--p-surface-200);
  cursor: not-allowed;
}

.p-dark .answer-input:disabled {
  background-color: var(--p-surface-800);
}

.correct-answer {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #dc3545;
  font-weight: bold;
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
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
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

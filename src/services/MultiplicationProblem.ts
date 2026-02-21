export interface Problem {
  table: number
  multiplier: number
  correctAnswer: number
  userAnswer: number | null
  isCorrect: boolean | null
}

export interface TableGroup {
  table: number
  problems: Problem[]
}

export function generateProblems(): Problem[] {
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
  return result
}

export function filterProblemsByTables(problems: Problem[], selectedTables: number[]): Problem[] {
  return problems.filter((p) => selectedTables.includes(p.table))
}

export function groupProblemsByTable(problems: Problem[], selectedTables: number[]): TableGroup[] {
  return selectedTables.map((tableNum) => ({
    table: tableNum,
    problems: problems
      .filter((p) => p.table === tableNum)
      .sort((a, b) => a.multiplier - b.multiplier),
  }))
}

export function verifyAnswers(problems: Problem[]): void {
  problems.forEach((problem) => {
    if (problem.userAnswer === null) {
      problem.isCorrect = false
    } else {
      problem.isCorrect = problem.userAnswer === problem.correctAnswer
    }
  })
}

export function resetProblems(problems: Problem[]): void {
  problems.forEach((problem) => {
    problem.userAnswer = null
    problem.isCorrect = null
  })
}

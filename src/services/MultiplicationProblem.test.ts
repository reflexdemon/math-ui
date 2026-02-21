import { describe, it, expect } from 'vitest'
import {
  generateProblems,
  filterProblemsByTables,
  groupProblemsByTable,
  verifyAnswers,
  resetProblems,
  type Problem,
} from './MultiplicationProblem'

describe('MultiplicationProblem', () => {
  describe('generateProblems', () => {
    it('should generate 144 problems for all tables 1-12', () => {
      const problems = generateProblems()
      expect(problems).toHaveLength(144)
    })

    it('should generate correct correctAnswer for each problem', () => {
      const problems = generateProblems()
      const firstProblem = problems[0]!
      expect(firstProblem.correctAnswer).toBe(1)
      expect(firstProblem.table).toBe(1)
      expect(firstProblem.multiplier).toBe(1)
    })

    it('should initialize userAnswer and isCorrect to null', () => {
      const problems = generateProblems()
      problems.forEach((problem) => {
        expect(problem.userAnswer).toBeNull()
        expect(problem.isCorrect).toBeNull()
      })
    })
  })

  describe('filterProblemsByTables', () => {
    it('should filter problems by selected tables', () => {
      const problems = generateProblems()
      const filtered = filterProblemsByTables(problems, [2, 3])
      expect(filtered.length).toBe(24)
    })

    it('should return empty array when no tables selected', () => {
      const problems = generateProblems()
      const filtered = filterProblemsByTables(problems, [])
      expect(filtered).toHaveLength(0)
    })
  })

  describe('groupProblemsByTable', () => {
    it('should group problems by table in correct order', () => {
      const problems = generateProblems()
      const grouped = groupProblemsByTable(problems, [2, 3])
      expect(grouped).toHaveLength(2)
      expect(grouped[0]!.table).toBe(2)
      expect(grouped[1]!.table).toBe(3)
    })

    it('should sort multipliers within each table', () => {
      const problems = generateProblems()
      const grouped = groupProblemsByTable(problems, [5])
      const multipliers = grouped[0]!.problems.map((p) => p.multiplier)
      expect(multipliers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    })
  })

  describe('verifyAnswers', () => {
    it('should mark correct answers as true', () => {
      const problems: Problem[] = [
        { table: 2, multiplier: 3, correctAnswer: 6, userAnswer: 6, isCorrect: null },
      ]
      verifyAnswers(problems)
      expect(problems[0]!.isCorrect).toBe(true)
    })

    it('should mark incorrect answers as false', () => {
      const problems: Problem[] = [
        { table: 2, multiplier: 3, correctAnswer: 6, userAnswer: 5, isCorrect: null },
      ]
      verifyAnswers(problems)
      expect(problems[0]!.isCorrect).toBe(false)
    })

    it('should mark null answers as false', () => {
      const problems: Problem[] = [
        { table: 2, multiplier: 3, correctAnswer: 6, userAnswer: null, isCorrect: null },
      ]
      verifyAnswers(problems)
      expect(problems[0]!.isCorrect).toBe(false)
    })
  })

  describe('resetProblems', () => {
    it('should reset userAnswer and isCorrect to null', () => {
      const problems: Problem[] = [
        { table: 2, multiplier: 3, correctAnswer: 6, userAnswer: 6, isCorrect: true },
      ]
      resetProblems(problems)
      expect(problems[0]!.userAnswer).toBeNull()
      expect(problems[0]!.isCorrect).toBeNull()
    })
  })
})

import { describe, it, expect } from 'vitest'
import { division } from './Division'

describe('Division', () => {
  describe('division', () => {
    it('should generate the specified number of problems', () => {
      const result = division(5, 1, 10)
      expect(result).toHaveLength(5)
    })

    it('should generate problems with correct operator', () => {
      const result = division(3, 1, 10)
      result.forEach((problem) => {
        expect(problem.operator).toBe('/')
      })
    })

    it('should generate problems with correct answer', () => {
      const result = division(10, 1, 10)
      result.forEach((problem) => {
        expect(problem.answer).toBe(problem.firstNumber / problem.secondNumber)
      })
    })

    it('should have whole number answers (no remainders)', () => {
      const result = division(20, 1, 10)
      result.forEach((problem) => {
        expect(problem.firstNumber % problem.secondNumber).toBe(0)
        expect(Number.isInteger(problem.answer)).toBe(true)
      })
    })

    it('should generate numbers within the specified range', () => {
      const result = division(20, 1, 10)
      result.forEach((problem) => {
        expect(problem.secondNumber).toBeGreaterThanOrEqual(1)
        expect(problem.secondNumber).toBeLessThanOrEqual(10)
        expect(problem.answer).toBeGreaterThanOrEqual(1)
        expect(problem.answer).toBeLessThanOrEqual(10)
      })
    })

    it('should handle size of 0', () => {
      const result = division(0, 1, 10)
      expect(result).toHaveLength(0)
    })

    it('should generate answers where firstNumber = secondNumber * answer', () => {
      const result = division(10, 1, 10)
      result.forEach((problem) => {
        expect(problem.firstNumber).toBe(problem.secondNumber * problem.answer)
      })
    })
  })
})

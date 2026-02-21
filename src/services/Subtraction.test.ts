import { describe, it, expect } from 'vitest'
import { subtraction } from './Subtraction'

describe('Subtraction', () => {
  describe('subtraction', () => {
    it('should generate the specified number of problems', () => {
      const result = subtraction(5, 1, 10)
      expect(result).toHaveLength(5)
    })

    it('should generate problems with correct operator', () => {
      const result = subtraction(3, 1, 10)
      result.forEach((problem) => {
        expect(problem.operator).toBe('-')
      })
    })

    it('should generate problems with correct answer', () => {
      const result = subtraction(10, 1, 10)
      result.forEach((problem) => {
        expect(problem.answer).toBe(problem.firstNumber - problem.secondNumber)
      })
    })

    it('should always have firstNumber >= secondNumber (non-negative results)', () => {
      const result = subtraction(20, 1, 10)
      result.forEach((problem) => {
        expect(problem.firstNumber).toBeGreaterThanOrEqual(problem.secondNumber)
        expect(problem.answer).toBeGreaterThanOrEqual(0)
      })
    })

    it('should generate numbers within the specified range', () => {
      const result = subtraction(20, 1, 10)
      result.forEach((problem) => {
        expect(problem.firstNumber).toBeGreaterThanOrEqual(1)
        expect(problem.firstNumber).toBeLessThanOrEqual(10)
        expect(problem.secondNumber).toBeGreaterThanOrEqual(1)
        expect(problem.secondNumber).toBeLessThanOrEqual(10)
      })
    })

    it('should handle size of 0', () => {
      const result = subtraction(0, 1, 10)
      expect(result).toHaveLength(0)
    })
  })
})

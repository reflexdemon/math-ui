import { describe, it, expect } from 'vitest'
import { multiplication } from './Multiplication'

describe('Multiplication', () => {
  describe('multiplication', () => {
    it('should generate the specified number of problems', () => {
      const result = multiplication(5, 1, 10)
      expect(result).toHaveLength(5)
    })

    it('should generate problems with correct operator', () => {
      const result = multiplication(3, 1, 10)
      result.forEach((problem) => {
        expect(problem.operator).toBe('*')
      })
    })

    it('should generate problems with correct answer', () => {
      const result = multiplication(10, 1, 10)
      result.forEach((problem) => {
        expect(problem.answer).toBe(problem.firstNumber * problem.secondNumber)
      })
    })

    it('should always have firstNumber >= secondNumber', () => {
      const result = multiplication(20, 1, 10)
      result.forEach((problem) => {
        expect(problem.firstNumber).toBeGreaterThanOrEqual(problem.secondNumber)
      })
    })

    it('should generate numbers within the specified range', () => {
      const result = multiplication(20, 1, 10)
      result.forEach((problem) => {
        expect(problem.firstNumber).toBeGreaterThanOrEqual(1)
        expect(problem.firstNumber).toBeLessThanOrEqual(10)
        expect(problem.secondNumber).toBeGreaterThanOrEqual(1)
        expect(problem.secondNumber).toBeLessThanOrEqual(10)
      })
    })

    it('should handle size of 0', () => {
      const result = multiplication(0, 1, 10)
      expect(result).toHaveLength(0)
    })

    it('should generate larger answers for larger ranges', () => {
      const result = multiplication(10, 10, 20)
      result.forEach((problem) => {
        expect(problem.answer).toBeGreaterThanOrEqual(100)
      })
    })
  })
})

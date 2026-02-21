import { describe, it, expect } from 'vitest'
import { addition } from './Addition'

describe('Addition', () => {
  describe('addition', () => {
    it('should generate the specified number of problems', () => {
      const result = addition(5, 1, 10)
      expect(result).toHaveLength(5)
    })

    it('should generate problems with correct operator', () => {
      const result = addition(3, 1, 10)
      result.forEach((problem) => {
        expect(problem.operator).toBe('+')
      })
    })

    it('should generate problems with correct answer', () => {
      const result = addition(10, 1, 10)
      result.forEach((problem) => {
        expect(problem.answer).toBe(problem.firstNumber + problem.secondNumber)
      })
    })

    it('should generate numbers within the specified range', () => {
      const result = addition(20, 1, 10)
      result.forEach((problem) => {
        expect(problem.firstNumber).toBeGreaterThanOrEqual(1)
        expect(problem.firstNumber).toBeLessThanOrEqual(10)
        expect(problem.secondNumber).toBeGreaterThanOrEqual(1)
        expect(problem.secondNumber).toBeLessThanOrEqual(10)
      })
    })

    it('should handle size of 0', () => {
      const result = addition(0, 1, 10)
      expect(result).toHaveLength(0)
    })

    it('should handle large ranges', () => {
      const result = addition(5, 100, 200)
      result.forEach((problem) => {
        expect(problem.firstNumber).toBeGreaterThanOrEqual(100)
        expect(problem.firstNumber).toBeLessThanOrEqual(200)
      })
    })
  })
})

import { describe, it, expect } from 'vitest'
import { addition } from './Addition'
import { subtraction } from './Subtraction'
import { multiplication } from './Multiplication'
import { division } from './Division'

describe('SimpleMathProblem', () => {
  describe('addition', () => {
    it('should be a function', () => {
      expect(typeof addition).toBe('function')
    })

    it('should generate addition problems', () => {
      const result = addition(3, 1, 5)
      expect(result).toHaveLength(3)
      result.forEach((problem) => {
        expect(problem.operator).toBe('+')
      })
    })
  })

  describe('subtraction', () => {
    it('should be a function', () => {
      expect(typeof subtraction).toBe('function')
    })

    it('should generate subtraction problems', () => {
      const result = subtraction(3, 1, 5)
      expect(result).toHaveLength(3)
      result.forEach((problem) => {
        expect(problem.operator).toBe('-')
      })
    })
  })

  describe('multiplication', () => {
    it('should be a function', () => {
      expect(typeof multiplication).toBe('function')
    })

    it('should generate multiplication problems', () => {
      const result = multiplication(3, 1, 5)
      expect(result).toHaveLength(3)
      result.forEach((problem) => {
        expect(problem.operator).toBe('*')
      })
    })
  })

  describe('division', () => {
    it('should be a function', () => {
      expect(typeof division).toBe('function')
    })

    it('should generate division problems', () => {
      const result = division(3, 1, 5)
      expect(result).toHaveLength(3)
      result.forEach((problem) => {
        expect(problem.operator).toBe('/')
      })
    })
  })
})

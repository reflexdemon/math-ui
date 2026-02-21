import { describe, it, expect } from 'vitest'
import { getRandomInt } from './Util'

describe('Util', () => {
  describe('getRandomInt', () => {
    it('should return a number within the range', () => {
      const result = getRandomInt(1, 10)
      expect(result).toBeGreaterThanOrEqual(1)
      expect(result).toBeLessThanOrEqual(10)
    })

    it('should return min when min equals max', () => {
      const result = getRandomInt(5, 5)
      expect(result).toBe(5)
    })

    it('should handle negative numbers', () => {
      const result = getRandomInt(-5, -1)
      expect(result).toBeGreaterThanOrEqual(-5)
      expect(result).toBeLessThanOrEqual(-1)
    })

    it('should handle zero', () => {
      const result = getRandomInt(0, 0)
      expect(result).toBe(0)
    })
  })
})

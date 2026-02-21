import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import {
  generateTables,
  saveSelectedTables,
  loadSelectedTables,
  getDefaultTables,
} from './TableProvider'

const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: vi.fn((key: string) => store[key] ?? null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value
    }),
    clear: vi.fn(() => {
      store = {}
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key]
    }),
  }
})()

Object.defineProperty(globalThis, 'localStorage', { value: localStorageMock })

describe('TableProvider', () => {
  beforeEach(() => {
    localStorageMock.clear()
    vi.clearAllMocks()
  })

  describe('generateTables', () => {
    it('should generate 12 tables', () => {
      const result = generateTables()
      expect(result).toHaveLength(12)
    })

    it('should generate 12 multipliers for each table', () => {
      const result = generateTables()
      result.forEach((table) => {
        expect(table).toHaveLength(12)
      })
    })

    it('should generate correct multiplication values', () => {
      const result = generateTables()
      expect(result[0]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
      expect(result[1]).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24])
      expect(result[11]![11]).toBe(144)
    })
  })

  describe('saveSelectedTables', () => {
    it('should save tables to localStorage', () => {
      saveSelectedTables([1, 2, 3])
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'math-ui:selectedTables',
        JSON.stringify([1, 2, 3]),
      )
    })

    it('should handle localStorage errors gracefully', () => {
      const originalSetItem = localStorageMock.setItem
      localStorageMock.setItem = vi.fn(() => {
        throw new Error('Storage full')
      })
      expect(() => saveSelectedTables([1, 2, 3])).not.toThrow()
      localStorageMock.setItem = originalSetItem
    })
  })

  describe('loadSelectedTables', () => {
    it('should return default tables when nothing is stored', () => {
      const result = loadSelectedTables()
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    })

    it('should return stored tables when available', () => {
      localStorageMock.setItem('math-ui:selectedTables', JSON.stringify([3, 6, 9]))
      const result = loadSelectedTables()
      expect(result).toEqual([3, 6, 9])
    })

    it('should return defaults for empty array', () => {
      localStorageMock.setItem('math-ui:selectedTables', JSON.stringify([]))
      const result = loadSelectedTables()
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    })

    it('should return defaults for invalid JSON', () => {
      localStorageMock.setItem('math-ui:selectedTables', 'invalid')
      const result = loadSelectedTables()
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    })

    it('should handle localStorage errors gracefully', () => {
      const originalGetItem = localStorageMock.getItem
      localStorageMock.getItem = vi.fn(() => {
        throw new Error('Storage error')
      })
      const result = loadSelectedTables()
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
      localStorageMock.getItem = originalGetItem
    })
  })

  describe('getDefaultTables', () => {
    it('should return all tables 1-12', () => {
      const result = getDefaultTables()
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    })

    it('should return a copy of default tables', () => {
      const result = getDefaultTables()
      result.push(13)
      const result2 = getDefaultTables()
      expect(result2).toHaveLength(12)
    })
  })
})

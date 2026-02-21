const STORAGE_KEY = 'math-ui:selectedTables'

const DEFAULT_TABLES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export function generateTables(): number[][] {
  const result: number[][] = []
  for (let i = 1; i <= 12; i++) {
    const table: number[] = []
    for (let j = 1; j <= 12; j++) {
      table.push(i * j)
    }
    result.push(table)
  }
  return result
}

export function saveSelectedTables(tables: number[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tables))
  } catch {
    // LocalStorage not available (private browsing, etc.)
  }
}

export function loadSelectedTables(): number[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed
      }
    }
  } catch {
    // LocalStorage not available or invalid data
  }
  return [...DEFAULT_TABLES]
}

export function getDefaultTables(): number[] {
  return [...DEFAULT_TABLES]
}

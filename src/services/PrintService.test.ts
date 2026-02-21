import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { printWorksheet, downloadPdf, printCertificate } from './PrintService'

const mockDocument = {
  write: vi.fn(),
  close: vi.fn(),
}

const mockPrintWindow = {
  document: mockDocument,
}

describe('PrintService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.spyOn(window, 'open').mockReturnValue(mockPrintWindow as unknown as Window)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('printWorksheet', () => {
    it('should open a print window', () => {
      printWorksheet([2, 3])
      expect(window.open).toHaveBeenCalledWith('', '_blank')
    })

    it('should write HTML content to the document', () => {
      printWorksheet([2, 3])
      expect(mockDocument.write).toHaveBeenCalled()
      expect(mockDocument.close).toHaveBeenCalled()
    })

    it('should include selected tables in the HTML', () => {
      printWorksheet([2, 3])
      const htmlCall = mockDocument.write.mock.calls[0]![0]
      expect(htmlCall).toContain('Table 2')
      expect(htmlCall).toContain('Table 3')
    })

    it('should include all 12 multipliers for each table', () => {
      printWorksheet([1])
      const htmlCall = mockDocument.write.mock.calls[0]![0]
      for (let i = 1; i <= 12; i++) {
        expect(htmlCall).toContain(`<td>${i}</td>`)
      }
    })

    it('should return early if print window cannot be opened', () => {
      vi.spyOn(window, 'open').mockReturnValue(null)
      printWorksheet([1, 2])
      expect(mockDocument.write).not.toHaveBeenCalled()
    })

    it('should include multiplication worksheet title', () => {
      printWorksheet([1])
      const htmlCall = mockDocument.write.mock.calls[0]![0]
      expect(htmlCall).toContain('Multiplication Worksheet')
    })
  })

  describe('downloadPdf', () => {
    it('should open a print window', () => {
      const tables = Array.from({ length: 12 }, () =>
        Array.from({ length: 12 }, (_, i) => (i + 1) * 12),
      )
      downloadPdf(tables)
      expect(window.open).toHaveBeenCalledWith('', '_blank')
    })

    it('should write HTML content to the document', () => {
      const tables = Array.from({ length: 12 }, () =>
        Array.from({ length: 12 }, (_, i) => (i + 1) * 12),
      )
      downloadPdf(tables)
      expect(mockDocument.write).toHaveBeenCalled()
      expect(mockDocument.close).toHaveBeenCalled()
    })

    it('should include all 12 tables', () => {
      const tables = Array.from({ length: 12 }, () =>
        Array.from({ length: 12 }, (_, i) => (i + 1) * 12),
      )
      downloadPdf(tables)
      const htmlCall = mockDocument.write.mock.calls[0]![0]
      for (let i = 1; i <= 12; i++) {
        expect(htmlCall).toContain(`Table ${i}`)
      }
    })

    it('should return early if print window cannot be opened', () => {
      vi.spyOn(window, 'open').mockReturnValue(null)
      const tables = Array.from({ length: 12 }, () =>
        Array.from({ length: 12 }, (_, i) => (i + 1) * 12),
      )
      downloadPdf(tables)
      expect(mockDocument.write).not.toHaveBeenCalled()
    })

    it('should include multiplication tables title', () => {
      const tables = Array.from({ length: 12 }, () =>
        Array.from({ length: 12 }, (_, i) => (i + 1) * 12),
      )
      downloadPdf(tables)
      const htmlCall = mockDocument.write.mock.calls[0]![0]
      expect(htmlCall).toContain('Multiplication Tables')
    })
  })

  describe('printCertificate', () => {
    it('should open a print window', () => {
      printCertificate(100, 12, 12, [1, 2, 3])
      expect(window.open).toHaveBeenCalledWith('', '_blank')
    })

    it('should write HTML content to the document', () => {
      printCertificate(100, 12, 12, [1, 2, 3])
      expect(mockDocument.write).toHaveBeenCalled()
      expect(mockDocument.close).toHaveBeenCalled()
    })

    it('should include the score percentage', () => {
      printCertificate(85, 10, 12, [1, 2])
      const htmlCall = mockDocument.write.mock.calls[0]![0]
      expect(htmlCall).toContain('85%')
    })

    it('should include correct and total counts', () => {
      printCertificate(75, 9, 12, [1, 2])
      const htmlCall = mockDocument.write.mock.calls[0]![0]
      expect(htmlCall).toContain('9 out of 12')
    })

    it('should include selected tables', () => {
      printCertificate(100, 12, 12, [3, 6, 9])
      const htmlCall = mockDocument.write.mock.calls[0]![0]
      expect(htmlCall).toContain('3, 6, 9')
    })

    it('should include certificate title', () => {
      printCertificate(100, 12, 12, [1])
      const htmlCall = mockDocument.write.mock.calls[0]![0]
      expect(htmlCall).toContain('Certificate of Achievement')
    })

    it('should return early if print window cannot be opened', () => {
      vi.spyOn(window, 'open').mockReturnValue(null)
      printCertificate(100, 12, 12, [1])
      expect(mockDocument.write).not.toHaveBeenCalled()
    })
  })
})

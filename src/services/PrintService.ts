export function printWorksheet(selectedTables: number[]): void {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  const filename = `multiplication-worksheet-${timestamp}.pdf`

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  let tablesHtml = ''
  for (const table of selectedTables) {
    let rows = ''
    for (let multiplier = 1; multiplier <= 12; multiplier++) {
      rows += `
        <tr>
          <td>${table}</td>
          <td>×</td>
          <td>${multiplier}</td>
          <td>=</td>
          <td class="answer-box"></td>
        </tr>
      `
    }
    tablesHtml += `
      <div class="table-container">
        <h3>Table ${table}</h3>
        <table>
          ${rows}
        </table>
      </div>
    `
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${filename}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 10px;
            margin: 0;
          }
          h1 {
            text-align: center;
            margin: 5px 0;
            font-size: 24px;
          }
          h2 {
            text-align: center;
            margin: 5px 0 15px 0;
            font-size: 16px;
            color: #666;
          }
          .tables-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
          }
          .table-container {
            page-break-inside: avoid;
            border: 1px solid #333;
            padding: 5px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 11px;
          }
          td {
            padding: 2px 4px;
            text-align: right;
            border-bottom: 1px solid #ccc;
          }
          td.answer-box {
            width: 30px;
            border-bottom: 1px solid #000;
          }
          h3 {
            margin: 0 0 5px 0;
            font-size: 14px;
            text-align: center;
            border-bottom: 1px solid #333;
            padding-bottom: 3px;
          }
          @media print {
            body { margin: 0; padding: 5px; }
            .tables-grid { grid-template-columns: repeat(4, 1fr); }
            .table-container { page-break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        <h1>Multiplication Worksheet</h1>
        <h2>Tables ${selectedTables.join(', ')} - Write your answers</h2>
        <div class="tables-grid">
          ${tablesHtml}
        </div>
        <script>
          window.onload = function() {
            window.print();
            window.onafterprint = function() {
              window.close();
            };
          };
        <\/script>
      </body>
    </html>
  `

  printWindow.document.write(html)
  printWindow.document.close()
}

export function downloadPdf(tables: number[][]): void {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  const filename = `multiplication-tables-${timestamp}.pdf`

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  let tablesHtml = ''
  for (let i = 0; i < 12; i++) {
    const tableNum = i + 1
    let rows = ''
    for (let j = 0; j < 12; j++) {
      rows += `
        <tr>
          <td>${tableNum}</td>
          <td>×</td>
          <td>${j + 1}</td>
          <td>=</td>
          <td class="result">${tables[i]?.[j] ?? ''}</td>
        </tr>
      `
    }
    tablesHtml += `
      <div class="table-container">
        <h3>✏️ Table ${tableNum}</h3>
        <table>
          ${rows}
        </table>
      </div>
    `
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${filename}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 10px;
            margin: 0;
          }
          h1 {
            text-align: center;
            margin: 5px 0;
            font-size: 24px;
          }
          h2 {
            text-align: center;
            margin: 5px 0 15px 0;
            font-size: 16px;
            color: #666;
          }
          .tables-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
          }
          .table-container {
            page-break-inside: avoid;
            border: 1px solid #333;
            padding: 5px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 11px;
          }
          td {
            padding: 2px 4px;
            text-align: right;
            border-bottom: 1px solid #ccc;
          }
          td.result {
            font-weight: bold;
          }
          h3 {
            margin: 0 0 5px 0;
            font-size: 14px;
            text-align: center;
            border-bottom: 1px solid #333;
            padding-bottom: 3px;
          }
          @media print {
            body { margin: 0; padding: 5px; }
            .tables-grid { grid-template-columns: repeat(4, 1fr); }
            .table-container { page-break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        <h1>🌟 ⭐ ✨ Multiplication Tables ✨ ⭐ 🌟</h1>
        <h2>📚 Times Tables 1-12 📚</h2>
        <div class="tables-grid">
          ${tablesHtml}
        </div>
        <script>
          window.onload = function() {
            window.print();
            window.onafterprint = function() {
              window.close();
            };
          };
        <\/script>
      </body>
    </html>
  `

  printWindow.document.write(html)
  printWindow.document.close()
}

export function printCertificate(
  scorePercentage: number,
  correctCount: number,
  totalCount: number,
  selectedTables: number[],
): void {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  const filename = `multiplication-certificate-${timestamp}.pdf`

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  const tablesList = selectedTables.join(', ')

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${filename}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 40px;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }
          .certificate {
            border: 8px solid #ffd700;
            border-radius: 20px;
            padding: 40px 60px;
            text-align: center;
            background: linear-gradient(135deg, #fff 0%, #fff8e7 100%);
            max-width: 600px;
          }
          .trophy {
            font-size: 80px;
            margin-bottom: 20px;
          }
          h1 {
            color: #b8860b;
            font-size: 36px;
            margin: 0 0 20px 0;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          .score {
            font-size: 48px;
            font-weight: bold;
            color: #28a745;
            margin: 20px 0;
          }
          .details {
            font-size: 18px;
            color: #666;
            margin: 20px 0;
          }
          .tables-info {
            font-size: 16px;
            color: #888;
            margin-top: 30px;
          }
          .congrats {
            font-size: 24px;
            color: #333;
            margin-bottom: 10px;
          }
          @media print {
            body { 
              padding: 20px; 
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .certificate {
              border-width: 4px;
              padding: 20px 30px;
            }
          }
        </style>
      </head>
      <body>
        <div class="certificate">
          <div class="trophy">🎖️</div>
          <h1>Certificate of Achievement</h1>
          <p class="congrats">Congratulations!</p>
          <p class="details">You have successfully completed the</p>
          <p class="details">Multiplication Worksheet</p>
          <div class="score">${scorePercentage}%</div>
          <p class="details">${correctCount} out of ${totalCount} correct</p>
          <p class="tables-info">Tables practiced: ${tablesList}</p>
        </div>
        <script>
          window.onload = function() {
            window.print();
            window.onafterprint = function() {
              window.close();
            };
          };
        <\/script>
      </body>
    </html>
  `

  printWindow.document.write(html)
  printWindow.document.close()
}

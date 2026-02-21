const p="math-ui:selectedTables",c=[1,2,3,4,5,6,7,8,9,10,11,12];function m(){const t=[];for(let i=1;i<=12;i++){const n=[];for(let e=1;e<=12;e++)n.push(i*e);t.push(n)}return t}function f(t){try{localStorage.setItem(p,JSON.stringify(t))}catch{}}function b(){try{const t=localStorage.getItem(p);if(t){const i=JSON.parse(t);if(Array.isArray(i)&&i.length>0)return i}}catch{}return[...c]}function g(){return[...c]}function x(t){const n=`multiplication-worksheet-${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.pdf`,e=window.open("","_blank");if(!e)return;let l="";for(const o of t){let r="";for(let a=1;a<=12;a++)r+=`
        <tr>
          <td>${o}</td>
          <td>×</td>
          <td>${a}</td>
          <td>=</td>
          <td class="answer-box"></td>
        </tr>
      `;l+=`
      <div class="table-container">
        <h3>Table ${o}</h3>
        <table>
          ${r}
        </table>
      </div>
    `}const s=`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${n}</title>
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
        <h2>Tables ${t.join(", ")} - Write your answers</h2>
        <div class="tables-grid">
          ${l}
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
  `;e.document.write(s),e.document.close()}function h(t){const n=`multiplication-tables-${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.pdf`,e=window.open("","_blank");if(!e)return;let l="";for(let o=0;o<12;o++){const r=o+1;let a="";for(let d=0;d<12;d++)a+=`
        <tr>
          <td>${r}</td>
          <td>×</td>
          <td>${d+1}</td>
          <td>=</td>
          <td class="result">${t[o]?.[d]??""}</td>
        </tr>
      `;l+=`
      <div class="table-container">
        <h3>✏️ Table ${r}</h3>
        <table>
          ${a}
        </table>
      </div>
    `}const s=`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${n}</title>
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
          ${l}
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
  `;e.document.write(s),e.document.close()}function u(t,i,n,e){const s=`multiplication-certificate-${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.pdf`,o=window.open("","_blank");if(!o)return;const r=e.join(", "),a=`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${s}</title>
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
          <div class="score">${t}%</div>
          <p class="details">${i} out of ${n} correct</p>
          <p class="tables-info">Tables practiced: ${r}</p>
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
  `;o.document.write(a),o.document.close()}export{g as a,u as b,h as d,m as g,b as l,x as p,f as s};

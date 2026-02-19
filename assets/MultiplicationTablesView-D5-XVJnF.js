import{d as x,L as _,I as w,c as l,a as e,b as v,u as y,f as T,J as m,K as f,E as d,o,_ as k}from"./index-B4YQgHDV.js";const $={class:"tables-container"},z={class:"header-section"},D={class:"tables-grid"},M={class:"multiplication-table"},P={class:"number"},V={class:"number"},B={class:"result"},C=x({__name:"MultiplicationTablesView",setup(E){_();const c=w([]);function g(){const n=[];for(let t=1;t<=12;t++){const a=[];for(let s=1;s<=12;s++)a.push(t*s);n.push(a)}c.value=n}g();function h(){const t=`multiplication-tables-${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.pdf`,a=window.open("","_blank");if(!a)return;let s="";for(let i=0;i<12;i++){const b=i+1;let u="";for(let r=0;r<12;r++)u+=`
        <tr>
          <td>${b}</td>
          <td>×</td>
          <td>${r+1}</td>
          <td>=</td>
          <td class="result">${c.value[i]?.[r]??""}</td>
        </tr>
      `;s+=`
      <div class="table-container">
        <h3>✏️ Table ${b}</h3>
        <table>
          ${u}
        </table>
      </div>
    `}const p=`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${t}</title>
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
          ${s}
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
  `;a.document.write(p),a.document.close()}return(n,t)=>(o(),l("div",$,[e("div",z,[t[0]||(t[0]=e("h1",null,"Multiplication Tables (1-12)",-1)),v(y(T),{class:"p-button-raised p-button-success",label:"Print PDF",onClick:h})]),e("div",D,[(o(!0),l(m,null,f(c.value,(a,s)=>(o(),l("div",{key:s,class:"table-card"},[e("h3",null,"Table "+d(s+1),1),e("table",M,[e("tbody",null,[(o(!0),l(m,null,f(a,(p,i)=>(o(),l("tr",{key:i},[e("td",P,d(s+1),1),t[1]||(t[1]=e("td",{class:"operator"},"×",-1)),e("td",V,d(i+1),1),t[2]||(t[2]=e("td",{class:"operator"},"=",-1)),e("td",B,d(p),1)]))),128))])])]))),128))])]))}}),N=k(C,[["__scopeId","data-v-10b42365"]]);export{N as default};

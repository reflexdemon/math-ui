import{B as R,N as J,g as Q,O as Y,P as X,r as G,c as u,o as s,a,m as y,n as Z,x as C,q as f,v as j,d as ee,L as te,I as g,Q as k,S as ne,U as oe,b as S,E as b,u as x,f as _,J as T,K as A,D as ae,V as ie,_ as re}from"./index-CyMTPHe_.js";import{l as ce,a as se,s as V,p as le,b as de}from"./PrintService-BRqmbBq3.js";import{a as ue,s as he}from"./index-Cz_I3lEc.js";var be=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`,pe={root:function(e){var n=e.instance,r=e.props;return["p-checkbox p-component",{"p-checkbox-checked":n.checked,"p-disabled":r.disabled,"p-invalid":n.$pcCheckboxGroup?n.$pcCheckboxGroup.$invalid:n.$invalid,"p-variant-filled":n.$variant==="filled","p-checkbox-sm p-inputfield-sm":r.size==="small","p-checkbox-lg p-inputfield-lg":r.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},ke=R.extend({name:"checkbox",style:be,classes:pe}),fe={name:"BaseCheckbox",extends:he,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ke,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function w(t){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(t)}function ve(t,e,n){return(e=xe(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xe(t){var e=me(t,"string");return w(e)=="symbol"?e:e+""}function me(t,e){if(w(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(w(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ye(t){return we(t)||Ce(t)||_e(t)||ge()}function ge(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(t,e){if(t){if(typeof t=="string")return B(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(t,e):void 0}}function Ce(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function we(t){if(Array.isArray(t))return B(t)}function B(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var z={name:"Checkbox",extends:fe,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(e){this.d_indeterminate=e,this.updateIndeterminate()}},mounted:function(){this.updateIndeterminate()},updated:function(){this.updateIndeterminate()},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(e){var n=this;if(!this.disabled&&!this.readonly){var r=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,c;this.binary?c=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?c=r.filter(function(o){return!X(o,n.value)}):c=r?[].concat(ye(r),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(c,e):this.writeValue(c,e),this.$emit("change",e)}},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){var n,r;this.$emit("blur",e),(n=(r=this.formField).onBlur)===null||n===void 0||n.call(r,e)},updateIndeterminate:function(){this.$refs.input&&(this.$refs.input.indeterminate=this.d_indeterminate)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var e=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?e===this.trueValue:Y(this.value,e)},dataP:function(){return Q(ve({invalid:this.$invalid,checked:this.checked,disabled:this.disabled,filled:this.$variant==="filled"},this.size,this.size))}},components:{CheckIcon:J,MinusIcon:ue}},Se=["data-p-checked","data-p-indeterminate","data-p-disabled","data-p"],Pe=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid"],Ie=["data-p"];function Te(t,e,n,r,c,o){var v=G("CheckIcon"),h=G("MinusIcon");return s(),u("div",y({class:t.cx("root")},o.getPTOptions("root"),{"data-p-checked":o.checked,"data-p-indeterminate":c.d_indeterminate||void 0,"data-p-disabled":t.disabled,"data-p":o.dataP}),[a("input",y({ref:"input",id:t.inputId,type:"checkbox",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:t.value,name:o.groupName,checked:o.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,required:t.required,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:e[2]||(e[2]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("input")),null,16,Pe),a("div",y({class:t.cx("box")},o.getPTOptions("box"),{"data-p":o.dataP}),[Z(t.$slots,"icon",{checked:o.checked,indeterminate:c.d_indeterminate,class:j(t.cx("icon")),dataP:o.dataP},function(){return[o.checked?(s(),C(v,y({key:0,class:t.cx("icon")},o.getPTOptions("icon"),{"data-p":o.dataP}),null,16,["class","data-p"])):c.d_indeterminate?(s(),C(h,y({key:1,class:t.cx("icon")},o.getPTOptions("icon"),{"data-p":o.dataP}),null,16,["class","data-p"])):f("",!0)]})],16,Ie)],16,Se)}z.render=Te;function Ae(){const t=[];for(let e=1;e<=12;e++)for(let n=1;n<=12;n++)t.push({table:e,multiplier:n,correctAnswer:e*n,userAnswer:null,isCorrect:null});return t}function Ve(t,e){return t.filter(n=>e.includes(n.table))}function Be(t,e){return e.map(n=>({table:n,problems:t.filter(r=>r.table===n).sort((r,c)=>r.multiplier-c.multiplier)}))}function ze(t){t.forEach(e=>{e.userAnswer===null?e.isCorrect=!1:e.isCorrect=e.userAnswer===e.correctAnswer})}function $e(t){t.forEach(e=>{e.userAnswer=null,e.isCorrect=null})}const Oe={class:"worksheet-container"},Ge={class:"header-section"},je={class:"header-actions"},Fe={key:0,class:"timer-display"},Le={key:0,class:"table-selection"},Ue={class:"selection-header"},We={class:"table-checkboxes"},qe=["for"],Ee={key:1,class:"results-summary"},Me={class:"summary-stats"},De={class:"stat correct"},Ne={class:"stat-value"},He={class:"stat incorrect"},Ke={class:"stat-value"},Re={class:"stat total"},Je={class:"stat-value"},Qe={class:"stat time"},Ye={class:"stat-value"},Xe={key:0,class:"certificate-section"},Ze={class:"congrats-text"},et={class:"tables-grid"},tt={class:"table-header"},nt={class:"problems-list"},ot={class:"problem-expression"},at={class:"number"},it={class:"number"},rt=["onUpdate:modelValue","disabled","readonly","placeholder"],ct={key:0,class:"correct-answer"},st=ee({__name:"MultiplicationWorksheetView",setup(t){te();const e=g(ce()),n=k({get:()=>e.value.length===12,set:l=>{l?(e.value=se(),V(e.value)):(e.value=[],V(e.value))}});ne(e,l=>{V(l)},{deep:!0});const r=g(Ae()),c=g(!1),o=g(!1),v=g(0);let h=null;const F=k(()=>Be(r.value,e.value)),m=k(()=>Ve(r.value,e.value)),$=k(()=>{const l=Math.floor(v.value/60),i=v.value%60;return`${l}:${i.toString().padStart(2,"0")}`}),P=k(()=>m.value.filter(l=>l.isCorrect===!0).length),L=k(()=>m.value.filter(l=>l.isCorrect===!1).length),I=k(()=>{const l=m.value.length;return l===0?0:Math.round(P.value/l*100)}),U=k(()=>I.value>=90),O=k(()=>e.value.length>0);function W(l){const i=e.value.indexOf(l);i===-1?e.value.push(l):e.value.splice(i,1)}function q(){c.value=!0,v.value=0,h=setInterval(()=>{v.value++},1e3)}function E(){h&&(clearInterval(h),h=null),ze(m.value),o.value=!0}function M(){c.value=!1,o.value=!1,v.value=0,h&&(clearInterval(h),h=null),$e(r.value)}function D(){le(e.value)}function N(){de(I.value,P.value,m.value.length,e.value)}return oe(()=>{h&&clearInterval(h)}),(l,i)=>(s(),u("div",Oe,[a("div",Ge,[i[1]||(i[1]=a("h1",null,"Multiplication Worksheet",-1)),a("div",je,[c.value&&!o.value?(s(),u("div",Fe,"Time: "+b($.value),1)):f("",!0),c.value?f("",!0):(s(),C(x(_),{key:1,label:"Start",severity:"success",disabled:!O.value,onClick:q},null,8,["disabled"])),c.value&&!o.value?(s(),C(x(_),{key:2,label:"Verify",severity:"info",onClick:E})):f("",!0),o.value?(s(),C(x(_),{key:3,label:"Reset",severity:"secondary",onClick:M})):f("",!0),S(x(_),{label:"Print",disabled:!O.value,onClick:D},null,8,["disabled"])])]),c.value?f("",!0):(s(),u("div",Le,[i[3]||(i[3]=a("h3",null,"Select Tables to Practice",-1)),a("div",Ue,[S(x(z),{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=d=>n.value=d),binary:!0,inputId:"selectAll"},null,8,["modelValue"]),i[2]||(i[2]=a("label",{for:"selectAll",class:"select-all-label"},"Select All",-1))]),a("div",We,[(s(),u(T,null,A(12,d=>a("div",{key:d,class:"table-checkbox"},[S(x(z),{modelValue:e.value.includes(d),inputId:"table-"+d,binary:!0,disabled:c.value,"onUpdate:modelValue":p=>W(d)},null,8,["modelValue","inputId","disabled","onUpdate:modelValue"]),a("label",{for:"table-"+d},"Table "+b(d),9,qe)])),64))])])),o.value?(s(),u("div",Ee,[i[9]||(i[9]=a("h2",null,"Results Summary",-1)),a("div",Me,[a("div",De,[a("span",Ne,b(P.value),1),i[4]||(i[4]=a("span",{class:"stat-label"},"Correct",-1))]),a("div",He,[a("span",Ke,b(L.value),1),i[5]||(i[5]=a("span",{class:"stat-label"},"Incorrect",-1))]),a("div",Re,[a("span",Je,b(m.value.length),1),i[6]||(i[6]=a("span",{class:"stat-label"},"Total",-1))]),a("div",Qe,[a("span",Ye,b($.value),1),i[7]||(i[7]=a("span",{class:"stat-label"},"Time",-1))])]),U.value?(s(),u("div",Xe,[i[8]||(i[8]=a("div",{class:"trophy-icon"},"🎖️",-1)),a("p",Ze,"Congratulations! You scored "+b(I.value)+"%!",1),S(x(_),{label:"Print Certificate",severity:"success",onClick:N})])):f("",!0)])):f("",!0),a("div",et,[(s(!0),u(T,null,A(F.value,d=>(s(),u("div",{key:d.table,class:"table-card"},[a("h3",tt,"Table "+b(d.table),1),a("div",nt,[(s(!0),u(T,null,A(d.problems,(p,H)=>(s(),u("div",{key:H,class:j(["problem-row",{"is-correct":o.value&&p.isCorrect===!0,"is-incorrect":o.value&&p.isCorrect===!1}])},[a("span",ot,[a("span",at,b(p.table),1),i[10]||(i[10]=a("span",{class:"operator"},"×",-1)),a("span",it,b(p.multiplier),1),i[11]||(i[11]=a("span",{class:"operator"},"=",-1))]),ae(a("input",{"onUpdate:modelValue":K=>p.userAnswer=K,type:"number",class:"answer-input",disabled:!c.value||o.value,readonly:o.value,placeholder:o.value?p.correctAnswer.toString():"?"},null,8,rt),[[ie,p.userAnswer,void 0,{number:!0}]]),o.value&&p.isCorrect===!1?(s(),u("span",ct," ("+b(p.correctAnswer)+") ",1)):f("",!0)],2))),128))])]))),128))])]))}}),ht=re(st,[["__scopeId","data-v-aebee8fb"]]);export{ht as default};

var _=Object.defineProperty,w=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var L=(i,t,e)=>t in i?_(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,h=(i,t)=>{for(var e in t||(t={}))N.call(t,e)&&L(i,e,t[e]);if(b)for(var e of b(t))S.call(t,e)&&L(i,e,t[e]);return i},C=(i,t)=>w(i,D(t));var v=(i,t,e)=>new Promise((o,n)=>{var x=s=>{try{c(e.next(s))}catch(a){n(a)}},p=s=>{try{c(e.throw(s))}catch(a){n(a)}},c=s=>s.done?o(s.value):Promise.resolve(s.value).then(x,p);c((e=e.apply(i,t)).next())});import{c as T}from"./utils.fc532f69.js";import{u as A}from"./hooks.2b94af1a.js";import{u as O}from"./index.419c67a5.js";import{u as E}from"./useProp.afe31ed3.js";import{d as k,r as B,a as z,w as M,u as V,o as R,c as H,f as I,D as g}from"./index.ba5671ee.js";const K=k({__name:"BasicBarChart",props:{component:null},setup(i){const t=i,e=B(null);let o,n=[];const x=(r,l)=>{l===g.STATIC?n=r:l===g.REST&&(n=r.afterData),d(n)};O(t.component,x);const p=()=>{d(n)},{updateEchart:c,resizeHandler:s}=A(e),{propValue:a}=E(t.component,p);z(()=>v(this,null,function*(){o=u(),c(o)}));const u=()=>{const r={grid:{top:"10%",left:"3%",right:"4%",bottom:"10%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:[],splitLine:{show:a.axis.xshow,lineStyle:{type:a.axis.xLineType,color:a.axis.xAxisLineColor}},axisLine:{lineStyle:{color:a.axis.axisColor||"#fff"}},axisTick:{lineStyle:{color:a.axis.axisColor||"#fff"}},axisLabel:{color:a.axis.axisLabelColor||"#fff"}},yAxis:{type:"value",max:m=>a.data.max==="dataMax"||!a.data.max?m.max+Number(a.data.maxOffset||0):Number(a.data.max)+Number(a.data.maxOffset||0),min:m=>a.data.min==="dataMin"?m.min-Number(a.data.minOffset||0):a.data.min===""||a.data.min===void 0||a.data.min===null?0-Number(a.data.minOffset||0):Number(a.data.min)-Number(a.data.minOffset||0),splitLine:{show:a.axis.yshow,lineStyle:{type:a.axis.yLineType,color:a.axis.yAxisLineColor}},axisLine:{lineStyle:{color:a.axis.axisColor||"#fff"}},axisTick:{lineStyle:{color:a.axis.axisColor||"#fff"}},axisLabel:{color:a.axis.axisLabelColor||"#fff"}},series:[]};let l=[{data:[],type:"bar"}];return r.series=l,r},d=r=>{const l=a.data.upperLimit,m=a.data.lowerLimit,y=r.map(f=>({value:T(Number(f.value),l,m),label:f.label}));o=u(),o.series[0].data=y.map(f=>f.value),o.xAxis=C(h({},o.xAxis),{data:y.map(f=>f.label)}),c(o)};return(r,l)=>{const m=I("resize");return M((R(),H("div",{ref_key:"chartEl",ref:e},null,512)),[[m,V(s)]])}}});export{K as default};

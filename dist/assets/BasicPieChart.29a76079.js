var b=(u,p,r)=>new Promise((o,i)=>{var d=a=>{try{n(r.next(a))}catch(e){i(e)}},l=a=>{try{n(r.throw(a))}catch(e){i(e)}},n=a=>a.done?o(a.value):Promise.resolve(a.value).then(d,l);n((r=r.apply(u,p)).next())});import{u as v}from"./useProp.afe31ed3.js";import{c as _}from"./utils.fc532f69.js";import{u as C}from"./hooks.2b94af1a.js";import{u as D}from"./index.419c67a5.js";import{d as S,r as L,a as E,w as y,u as z,o as B,c as O,f as R,D as g}from"./index.ba5671ee.js";const P=S({__name:"BasicPieChart",props:{component:null},setup(u){const p=u,r=L(null);let o;const{updateEchart:i,resizeHandler:d}=C(r);let l=[];const n=(t,s)=>{s===g.STATIC?l=t:s===g.REST&&(l=t.afterData),h(l)};D(p.component,n);const a=()=>{h(l)},{propValue:e}=v(p.component,a);E(()=>b(this,null,function*(){o=f(),i(o)}));const f=()=>{const t={grid:{top:"10%",left:"3%",right:"4%",bottom:"0%",containLabel:!0},tooltip:{trigger:"item"},legend:{show:e.legend.isShow,top:"5%",left:"center"},series:[]};let s=[{type:"pie",radius:[`${e.series.radiusMin||0}%`,`${e.series.radiusMax||100}%`],avoidLabelOverlap:!0,itemStyle:{borderRadius:e.series.borderRadius,borderColor:"transparent",borderWidth:100},label:{show:!1,position:"center",color:e.label.labelColor},emphasis:{label:{show:e.label.isShow,fontSize:e.label.labelSize,fontWeight:e.label.labelWeight},itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},labelLine:{show:!1},data:[]}];return t.series=s,t},h=t=>{const s=e.data.upperLimit,m=e.data.lowerLimit,w=t.map(c=>({value:_(Number(c.value),s,m),label:c.label}));o=f(),o.series[0].data=w.map(c=>({value:c.value,name:c.label})),i(o)};return(t,s)=>{const m=R("resize");return y((B(),O("div",{ref_key:"chartEl",ref:r},null,512)),[[m,z(d)]])}}});export{P as default};

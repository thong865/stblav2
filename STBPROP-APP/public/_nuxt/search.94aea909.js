import{_ as g}from"./ProductCard.ba37e144.js";import{u as v}from"./asyncData.83a7790e.js";import{c as q}from"./entry.03c6ba59.js";import{u as C,a as B}from"./storeSearch.b46cc47c.js";import{W as _,a as b,j as m,w as L,X as n,a1 as t,u as a,Z as y,ac as S,H as $,a7 as A,L as c,M as D}from"./swiper-vue.0854f9f6.js";import"./nuxt-link.5c5dc7f2.js";const N={class:"hero bg-base-200"},V={class:"hero-content w-9/12 mx-auto flex-col lg:flex-row-reverse"},j={class:"flex-1"},E={key:0,class:"text-xl"},F={class:"mt-10 pb-10"},H={class:"w-full px-5 md:px-0 md:w-9/12 mx-auto flex-col lg:flex-row-reverse"},M={class:"grid grid-cols-2 md:grid-cols-4 gap-2"},K={__name:"search",async setup(P){let e,o;C();const r=q();[e,o]=_(()=>B()),e=await e,o(),b(m(()=>`keyword=${r.query.keyword}`));const{data:s,pending:Q,error:R,refresh:p}=([e,o]=_(()=>v("searQuery",()=>$fetch("/api/mksearch",{query:{keyword:r.query.keyword,province:r.query.province,district:r.query.district,cat:r.query.cat}}))),e=await e,o(),e),h=m(()=>s&&(s==null?void 0:s.value.length)||0);return L(()=>r.query,()=>{p()}),(f,W)=>{var i,l,u,d;const w=g;return c(),n("div",null,[t("div",N,[t("div",V,[t("div",j,[(l=(i=a(r))==null?void 0:i.query)!=null&&l.keyword?(c(),n("h1",E,"ຜົນການຄົ້ນຫາ: "+y((d=(u=a(r))==null?void 0:u.query)==null?void 0:d.keyword),1)):S("",!0),t("p",null,"ຜົນລັບທັງໝົດ: "+y(a(h))+" ລາຍການ",1)])])]),t("section",F,[t("div",H,[t("div",M,[(c(!0),n($,null,A(a(s),(k,x)=>(c(),D(w,{items:k,key:x},null,8,["items"]))),128))])])])])}}};export{K as default};
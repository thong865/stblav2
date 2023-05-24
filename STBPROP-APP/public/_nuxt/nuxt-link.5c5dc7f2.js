import{u as y,k as P,l as k,p as q,m as T,w as A,o as R,n as w}from"./entry.03c6ba59.js";import{A as N,j as x,a as C,E as B,l as E,B as _,a0 as L}from"./swiper-vue.0854f9f6.js";const g=globalThis.requestIdleCallback||(t=>{const a=Date.now(),o={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{t(o)},1)}),I=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),O=t=>{const a=y();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{g(t)}):g(t)};async function S(t,a=P()){const{path:o,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(o)))return;const r=a._preloadPromises=a._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>S(t,a));a._routePreloaded.add(o);const i=e.map(n=>{var s;return(s=n.components)==null?void 0:s.default}).filter(n=>typeof n=="function");for(const n of i){const s=Promise.resolve(n()).catch(()=>{}).finally(()=>r.splice(r.indexOf(s)));r.push(s)}await Promise.all(r)}const j=(...t)=>t.find(a=>a!==void 0),D="noopener noreferrer";function U(t){const a=t.componentName||"NuxtLink",o=(e,r)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const i=t.trailingSlash==="append"?A:R;if(typeof e=="string")return i(e,!0);const n="path"in e?e.path:r(e).path;return{...e,name:void 0,path:i(n,!0)}};return N({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:r}){const i=P(),n=x(()=>{const l=e.to||e.href||"";return o(l,i.resolve)}),s=x(()=>e.external||e.target&&e.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||k(n.value,{acceptRelative:!0})),v=C(!1),f=C(null),b=l=>{var d;f.value=e.custom?(d=l==null?void 0:l.$el)==null?void 0:d.nextElementSibling:l==null?void 0:l.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!M()){const d=y();let h,u=null;B(()=>{const p=V();O(()=>{h=g(()=>{var m;(m=f==null?void 0:f.value)!=null&&m.tagName&&(u=p.observe(f.value,async()=>{u==null||u(),u=null;const c=typeof n.value=="string"?n.value:i.resolve(n.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",c).catch(()=>{}),!s.value&&S(n.value,i).catch(()=>{})]),v.value=!0}))})})}),E(()=>{h&&I(h),u==null||u(),u=null})}return()=>{var p,m;if(!s.value){const c={ref:b,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(v.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel),_(L("RouterLink"),c,r.default)}const l=typeof n.value=="object"?((p=i.resolve(n.value))==null?void 0:p.href)??null:n.value||null,d=e.target||null,h=e.noRel?null:j(e.rel,t.externalRelAttribute,l?D:"")||null,u=()=>w(l,{replace:e.replace});return e.custom?r.default?r.default({href:l,navigate:u,get route(){if(!l)return;const c=q(l);return{path:c.pathname,fullPath:c.pathname,get query(){return T(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l}},rel:h,target:d,isExternal:s.value,isActive:!1,isExactActive:!1}):null:_("a",{ref:f,href:l,rel:h,target:d},(m=r.default)==null?void 0:m.call(r))}}})}const H=U({componentName:"NuxtLink"});function V(){const t=y();if(t._observer)return t._observer;let a=null;const o=new Map,e=(i,n)=>(a||(a=new IntersectionObserver(s=>{for(const v of s){const f=o.get(v.target);(v.isIntersecting||v.intersectionRatio>0)&&f&&f()}})),o.set(i,n),a.observe(i),()=>{o.delete(i),a.unobserve(i),o.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function M(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{H as _};

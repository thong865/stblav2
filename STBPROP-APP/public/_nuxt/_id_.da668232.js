import{u as p}from"./asyncData.83a7790e.js";import{c as m}from"./entry.03c6ba59.js";import{W as u,a0 as _,X as d,a1 as s,I as x,u as o,L as f}from"./swiper-vue.0854f9f6.js";const h={class:"py-10"},v={class:"md:w-9/12 px-5 md:px-0 mx-auto flex-col lg:flex-row-reverse"},g=["innerHTML"],D={__name:"[id]",async setup(w){let e,a;const l=m(),{data:t,pending:y,error:b}=([e,a]=u(()=>p("postDetail",()=>$fetch("/api/blogs",{query:{id:l.params.id}}))),e=await e,a(),e);return(k,B)=>{var n,r,c;const i=_("nuxt-img");return f(),d("div",null,[s("section",h,[s("div",v,[x(i,{src:`https://prop.stbanklaos.la/srvapi/file-stream?fl=${(n=o(t))==null?void 0:n.background}`,class:"w-full max-h-[420px] object-cover rounded-xl",alt:(r=o(t))==null?void 0:r.title},null,8,["src","alt"]),s("div",{innerHTML:(c=o(t))==null?void 0:c.content,class:"mt-5"},null,8,g)])])])}}};export{D as default};

import { _ as __nuxt_component_0$1 } from './nuxt-link-d23e8ff6.mjs';
import { d as useRuntimeConfig } from '../server.mjs';
import { useSSRContext, ref, computed, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    items: Object
  },
  setup(__props) {
    const props = __props;
    const config = /* @__PURE__ */ useRuntimeConfig();
    const pView = ref(computed(() => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = props.items) == null ? void 0 : _a.actions) == null ? void 0 : _b.find((t) => t.ac_type == "V")) == null ? void 0 : _c.count) || 0;
    }));
    const pLike = ref(computed(() => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = props.items) == null ? void 0 : _a.actions) == null ? void 0 : _b.find((t) => t.ac_type == "L")) == null ? void 0 : _c.count) || 0;
    }));
    const streamUrl = config.public.streamBase;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="card w-full bg-base-100 shadow flex"><figure><img${ssrRenderAttr("src", `${unref(streamUrl)}${(_b = (_a = props.items) == null ? void 0 : _a.image) == null ? void 0 : _b.file}`)}${ssrRenderAttr("alt", (_c = props.items) == null ? void 0 : _c.title)} class="lazy rounded-xl max-h-[145.63px] md:max-h-[210px] lg:max-h-[210px] w-full"></figure><div class="card-body py-1 px-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/market/${(_d = props.items) == null ? void 0 : _d.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate((_a2 = props.items) == null ? void 0 : _a2.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString((_b2 = props.items) == null ? void 0 : _b2.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex gap-3"><span class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"></path></svg> \u0EA5\u0EB0\u0EAB\u0EB1\u0E94 : </span> ${ssrInterpolate((_e = props.items) == null ? void 0 : _e.prod_code)}</div><div class="flex gap-3"><span class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"></path></svg> \u0EC0\u0E99\u0EB7\u0EC9\u0EAD\u0E97\u0EB5\u0EC8 : </span> ${ssrInterpolate((_f = props.items) == null ? void 0 : _f.area)}</div><div class="flex gap-3"><span class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"></path></svg> \u0EA5\u0EB2\u0E84\u0EB2 : </span> ${ssrInterpolate(Number(((_g = props.items) == null ? void 0 : _g.price) || 0).toLocaleString("en-US"))} ${ssrInterpolate((_h = props.items) == null ? void 0 : _h.ccy)}</div><div class="flex gap-3"><span class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path></svg> \u0E9B\u0EB0\u0EC0\u0E9E\u0E94 : </span> ${ssrInterpolate((_j = (_i = props.items) == null ? void 0 : _i.category) == null ? void 0 : _j.title)}</div></div><div class="flex justify-between px-2 py-2"><div class="flex gap-1 flex-row-reverse md:justify-between md:flex-row"><button class="btn gap-2 btn-sm">${ssrInterpolate(unref(pLike))} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path></svg></button><button class="btn gap-2 btn-sm">${ssrInterpolate(unref(pView))} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></button></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/market/${(_k = props.items) == null ? void 0 : _k.id}`,
        class: "btn py-2 btn-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0EC0\u0E9A\u0EB4\u0EC8\u0E87\u0EA5\u0EB2\u0E8D\u0EA5\u0EB0\u0EAD\u0EBD\u0E94`);
          } else {
            return [
              createTextVNode("\u0EC0\u0E9A\u0EB4\u0EC8\u0E87\u0EA5\u0EB2\u0E8D\u0EA5\u0EB0\u0EAD\u0EBD\u0E94")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ProductCard-c30511bf.mjs.map

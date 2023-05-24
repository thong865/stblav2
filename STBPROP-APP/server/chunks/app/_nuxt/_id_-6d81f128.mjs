import { withAsyncContext, resolveComponent, unref, useSSRContext } from 'vue';
import { u as useAsyncData } from './asyncData-824ae413.mjs';
import { b as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import '@intlify/message-compiler';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "postDetail",
      () => $fetch(`/api/blogs`, { query: { id: route.params.id } })
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_nuxt_img = resolveComponent("nuxt-img");
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="py-10"><div class="md:w-9/12 px-5 md:px-0 mx-auto flex-col lg:flex-row-reverse">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: `https://prop.stbanklaos.la/srvapi/file-stream?fl=${(_a = unref(data)) == null ? void 0 : _a.background}`,
        class: "w-full max-h-[420px] object-cover rounded-xl",
        alt: (_b = unref(data)) == null ? void 0 : _b.title
      }, null, _parent));
      _push(`<div class="mt-5">${(_c = unref(data)) == null ? void 0 : _c.content}</div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/details/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-6d81f128.mjs.map

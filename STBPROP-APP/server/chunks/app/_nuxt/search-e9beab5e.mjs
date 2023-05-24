import { _ as __nuxt_component_0 } from './ProductCard-c30511bf.mjs';
import { withAsyncContext, ref, computed, watch, unref, useSSRContext } from 'vue';
import { u as useAsyncData } from './asyncData-824ae413.mjs';
import { b as useRoute } from '../server.mjs';
import { u as useSearchStore, a as useCity } from './storeSearch-ea31f177.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-d23e8ff6.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
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
  __name: "search",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSearchStore();
    const route = useRoute();
    [__temp, __restore] = withAsyncContext(() => useCity()), __temp = await __temp, __restore();
    ref(computed(() => {
      let keyword = `keyword=${route.query.keyword}`;
      return keyword;
    }));
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "searQuery",
      () => $fetch("/api/mksearch", { query: { keyword: route.query.keyword, province: route.query.province, district: route.query.district, cat: route.query.cat } })
    )), __temp = await __temp, __restore(), __temp);
    const resultLength = computed(() => {
      return data && (data == null ? void 0 : data.value.length) || 0;
    });
    watch(() => route.query, () => {
      refresh();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_CardProductCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="hero bg-base-200"><div class="hero-content w-9/12 mx-auto flex-col lg:flex-row-reverse"><div class="flex-1">`);
      if ((_b = (_a = unref(route)) == null ? void 0 : _a.query) == null ? void 0 : _b.keyword) {
        _push(`<h1 class="text-xl">\u0E9C\u0EBB\u0E99\u0E81\u0EB2\u0E99\u0E84\u0EBB\u0EC9\u0E99\u0EAB\u0EB2: ${ssrInterpolate((_d = (_c = unref(route)) == null ? void 0 : _c.query) == null ? void 0 : _d.keyword)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p>\u0E9C\u0EBB\u0E99\u0EA5\u0EB1\u0E9A\u0E97\u0EB1\u0E87\u0EDD\u0EBB\u0E94: ${ssrInterpolate(unref(resultLength))} \u0EA5\u0EB2\u0E8D\u0E81\u0EB2\u0E99</p></div></div></div><section class="mt-10 pb-10"><div class="w-full px-5 md:px-0 md:w-9/12 mx-auto flex-col lg:flex-row-reverse"><div class="grid grid-cols-2 md:grid-cols-4 gap-2"><!--[-->`);
      ssrRenderList(unref(data), (t, i) => {
        _push(ssrRenderComponent(_component_CardProductCard, {
          items: t,
          key: i
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/market/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-e9beab5e.mjs.map

import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { ref, useSSRContext, defineComponent, h, computed, withAsyncContext, mergeProps, withCtx, createVNode, createTextVNode, unref, watchEffect } from 'vue';
import { b as useRoute, e as __nuxt_component_2, u as useNuxtApp, _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-d23e8ff6.mjs';
import { a as useCity, u as useSearchStore } from './storeSearch-ea31f177.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList } from 'vue/server-renderer';
import { u as useAsyncData } from './asyncData-824ae413.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@intlify/message-compiler';

const __nuxt_component_0$1 = /* @__PURE__ */ defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    }
  },
  setup(props, { slots }) {
    const indicator = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    });
    const nuxtApp = useNuxtApp();
    nuxtApp.hook("page:start", indicator.start);
    nuxtApp.hook("page:finish", indicator.finish);
    nuxtApp.hook("vue:error", indicator.finish);
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: indicator.isLoading.value ? 1 : 0,
        background: props.color || void 0,
        backgroundSize: `${100 / indicator.progress.value * 100}% auto`,
        transform: `scaleX(${indicator.progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
function useLoadingIndicator(opts) {
  const progress = ref(0);
  const isLoading = ref(false);
  computed(() => 1e4 / opts.duration);
  let _timer = null;
  let _throttle = null;
  function start() {
    clear();
    progress.value = 0;
    if (opts.throttle && false) {
      _throttle = setTimeout(() => {
        isLoading.value = true;
      }, opts.throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish() {
    progress.value = 100;
    _hide();
  }
  function clear() {
    clearInterval(_timer);
    clearTimeout(_throttle);
    _timer = null;
    _throttle = null;
  }
  function _hide() {
    clear();
  }
  return {
    progress,
    isLoading,
    start,
    finish,
    clear
  };
}
const _imports_0 = "" + publicAssetsURL("stb.svg");
const _sfc_main$4 = {
  __name: "navbarmarket",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { provinces } = ([__temp, __restore] = withAsyncContext(() => useCity()), __temp = await __temp, __restore(), __temp);
    const provinceTitle = ([__temp, __restore] = withAsyncContext(() => provinces), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-3 px-5 lg:px-0 md:px-0 bg-slate-100 bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90 sticky top-0 z-[999]" }, _attrs))}><div class="container lg:w-9/12 mx-auto flex"><div><div class="flex">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex gap-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} class="h-9 mt-2" alt=""${_scopeId}><div class="font-bold text-md text-primary"${_scopeId}>\u0E82\u0EB2\u0E8D\u0E94\u0EB4\u0E99<br${_scopeId}>\u0E82\u0EB2\u0E8D\u0EC0\u0EAE\u0EB7\u0EAD\u0E99</div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                class: "h-9 mt-2",
                alt: ""
              }),
              createVNode("div", { class: "font-bold text-md text-primary" }, [
                createTextVNode("\u0E82\u0EB2\u0E8D\u0E94\u0EB4\u0E99"),
                createVNode("br"),
                createTextVNode("\u0E82\u0EB2\u0E8D\u0EC0\u0EAE\u0EB7\u0EAD\u0E99")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex-1 hidden lg:block md:block ml-5"></div></div></div><div class="flex-1 px-10"><div class="rounded-xl border flex p-2 relative"><label for="mdsearch" class="btn btn-sm absolute">\u0E95\u0EBB\u0EA7\u0EC0\u0EA5\u0EB7\u0EAD\u0E81\u0E84\u0EBB\u0EC9\u0E99\u0EAB\u0EB2</label><label for="mdsearch" class="flex-1 flex gap-2 input input-sm pl-[120px] bg-transparent truncate">`);
      if (unref(route).query.province && unref(route).query.province != 0) {
        _push(`<div class="badge badge-info gap-2 mt-1 py-2">${ssrInterpolate((_a = unref(provinceTitle).find((t) => t.id == unref(route).query.province)) == null ? void 0 : _a.title)} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(route).query.district && unref(route).query.district != 0) {
        _push(`<div class="badge badge-info gap-2 mt-1 py-2">${ssrInterpolate((_b = unref(provinceTitle).find((t) => t.id == unref(route).query.province).districts.find((dt) => dt.id == unref(route).query.district)) == null ? void 0 : _b.title)} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(route).query.cat && unref(route).query.cat != 0) {
        _push(`<div class="badge badge-info gap-2 mt-1 py-2">${ssrInterpolate(unref(route).query.cat)} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(route).query.keyword) {
        _push(`<div>${ssrInterpolate(unref(route).query.keyword || "")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label for="mdsearch" class="btn btn-sm absolute right-2">\u0E84\u0EBB\u0EC9\u0E99\u0EAB\u0EB2</label></div></div><div class="flex"><div class="flex"></div></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navbar/navbarmarket.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "modalSearch",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSearchStore();
    useRoute();
    const { data: provinces } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "searchProvicne",
      () => $fetch(`http://10.0.34.37:8888/api/v1/city/provincWithRef`)
    )), __temp = await __temp, __restore(), __temp);
    const { data: categories } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "searchCategory",
      () => $fetch(`http://10.0.34.37:8888/api/v1/markets/category`)
    )), __temp = await __temp, __restore(), __temp);
    const modalSearch = ref(false);
    const selectDistrict = ref(Object);
    const qersearch = ref({
      keyword: ref(""),
      priceMin: ref(0),
      priceMax: ref(56646664),
      cat: ref(0),
      province: ref(0),
      district: ref(0)
    });
    watchEffect(() => {
      var _a, _b;
      if ((_a = qersearch.value) == null ? void 0 : _a.province) {
        const districts = (_b = provinces.value) == null ? void 0 : _b.find((t) => {
          var _a2;
          return t.id == ((_a2 = qersearch.value) == null ? void 0 : _a2.province);
        });
        qersearch.value.district.value = ref(0);
        selectDistrict.value = districts == null ? void 0 : districts.districts;
        qersearch.value.districtTitle = ref("");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><input type="checkbox" id="mdsearch" class="modal-toggle"${ssrIncludeBooleanAttr(Array.isArray(modalSearch.value) ? ssrLooseContain(modalSearch.value, null) : modalSearch.value) ? " checked" : ""}><div class="modal modal-middle"><div class="modal-box sm:w-full modal-bottom"><label for="mdsearch" class="btn btn-sm btn-circle absolute right-2 top-2">\u2715</label><form class="mt-5"><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input type="search" name="q" id="default-search"${ssrRenderAttr("value", qersearch.value.keyword)} class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="\u0E84\u0EBB\u0EC9\u0E99\u0EAB\u0EB2\u0EAA\u0EB4\u0E99\u0E84\u0EC9\u0EB2"><button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">${ssrInterpolate(_ctx.$t("button.search"))}</button></div></form><div class="flex flex-col space-y-3"><label for="selprovice">${ssrInterpolate(_ctx.$t("form.search_province"))}</label><select class="select w-full select-bordered" id="selprovice"><option value="0" selected>${ssrInterpolate(_ctx.$t("form.search_all"))}</option><!--[-->`);
      ssrRenderList(unref(provinces), (pv, pin) => {
        _push(`<option${ssrRenderAttr("value", pv.id)}>${ssrInterpolate(pv.title)}</option>`);
      });
      _push(`<!--]--></select><label for="seldistrict">${ssrInterpolate(_ctx.$t("form.search_district"))}</label><select class="select w-full select-bordered" id="seldistrict"><option value="0" selected>${ssrInterpolate(_ctx.$t("form.search_all"))}</option><!--[-->`);
      ssrRenderList(selectDistrict.value, (tp, is) => {
        _push(`<option${ssrRenderAttr("value", tp.id)}>${ssrInterpolate(tp.title)}</option>`);
      });
      _push(`<!--]--></select><label for="selcategory">${ssrInterpolate(_ctx.$t("form.search_category"))}</label><select class="select w-full select-bordered" id="selcategory"><option value="0" selected>${ssrInterpolate(_ctx.$t("form.search_all"))}</option><!--[-->`);
      ssrRenderList(unref(categories), (ct, ci) => {
        _push(`<option${ssrRenderAttr("value", ct.id)}>${ssrInterpolate(ct.title)}</option>`);
      });
      _push(`<!--]--></select></div><label class="mt-5 py-3 sr-only">\u0E8A\u0EC8\u0EA7\u0E87\u0EA5\u0EB2\u0E84\u0EB2(LAK)</label><div class="flex sr-only"><div class="flex-1"><div><span>${ssrInterpolate(Number(Number(qersearch.value.priceMin) - 100).toLocaleString("en-US"))}</span></div><input type="range" min="0" max="100"${ssrRenderAttr("value", qersearch.value.priceMin)} class="range range-xs transform rotate-180"></div><div class="flex-1"><div class="flex justify-between"><div></div><span>${ssrInterpolate(Number(qersearch.value.priceMax).toLocaleString("en-US"))}</span></div><input type="range" min="0" max="100"${ssrRenderAttr("value", qersearch.value.priceMax)} class="range range-xs"></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/modalSearch.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$3;
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-primary"><p class="text-center text-sm py-2 text-white"> \xA9 2019 Copyright: ST Bank All Rights Reserved Designed and Developed Vientiane Lao P.D.R </p></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/botbox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FooterBotbox = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><footer class="footer p-10 bg-primary text-white"><div class="footer w-full md:w-9/12 mx-auto"><div class="flex flex-col space-y-1"><img${ssrRenderAttr("src", _imports_0)} class="bg-white p-4 rounded-3xl h-[114px]"><p>02 \u0EC0\u0EA1\u0EB7\u0EAD\u0E87\u0EA7\u0EB2\u0E97\u0EC8\u0EB2<br>\u0E96\u0EB0\u0EDC\u0EBB\u0E99 \u0EAA\u0EB8\u0E9E\u0EB2\u0E99\u0EB8\u0EA7\u0EBB\u0E87,\u0EC0\u0EA1\u0EB7\u0EAD\u0E87 \u0EAA\u0EB5\u0EC2\u0E84\u0E94\u0E95\u0EB0\u0E9A\u0EAD\u0E87 \u0E99\u0EB0\u0E84\u0EAD\u0E99\u0EAB\u0EBC\u0EA7\u0E87\u0EA7\u0EBD\u0E87\u0E88\u0EB1\u0E99, \u0EAA\u200B\u0E9B\u0E9B \u0EA5\u0EB2\u0EA7</p><div class="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path></svg> \u0EC2\u0E97\u0EA5\u0EB0\u0EAA\u0EB1\u0E9A(856-21) 241 560-62 </div><div class="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg> \u0EC2\u0E97\u0EA5\u0EB0\u0EAA\u0EB1\u0E9A(856-21) 241 560-62 </div></div><div><span class="footer-title">\u0EA5\u0EB9\u0E81\u0E84\u0EC9\u0EB2\u0E97\u0EBB\u0EC8\u0EA7\u0EC4\u0E9B</span><a href="https://www.stbanklaos.la/saving" class="link link-hover">\u0E9A\u0ECD\u0EA5\u0EB4\u0E81\u0EB2\u0E99\u0EC0\u0E87\u0EB4\u0E99\u0E9D\u0EB2\u0E81</a><a href="https://www.stbanklaos.la/internal" class="link link-hover">\u0EC2\u0EAD\u0E99\u0EC0\u0E87\u0EB4\u0E99\u0E9E\u0EB2\u0E8D\u0EC3\u0E99\u0E9B\u0EB0\u0EC0\u0E97\u0E94</a><a href="https://www.stbanklaos.la/external" class="link link-hover">\u0EC2\u0EAD\u0E99\u0EC0\u0E87\u0EB4\u0E99\u0EA5\u0EB0\u0EAB\u0EC8\u0EA7\u0EB2\u0E87\u0E9B\u0EB0\u0EC0\u0E97\u0E94</a><a href="https://www.stbanklaos.la/atmcard" class="link link-hover">\u0E9C\u0EB0\u0EA5\u0EB4\u0E94\u0E95\u0EB0\u0E9E\u0EB1\u0E99\u0E9A\u0EB1\u0E94</a><a href="https://www.stbanklaos.la/over_draft" class="link link-hover">\u0EAA\u0EB4\u0E99\u200B\u0EC0\u0E8A\u0EB7\u0EC8\u0EAD\u200B\u0EAA\u0EC8\u0EA7\u0E99\u200B\u0E9A\u0EB8\u0E81\u200B\u0E84\u0EBB\u0E99</a><a href="https://www.stbanklaos.la/sms" class="link link-hover">SMS \u0EC1\u0E88\u0EC9\u0E87\u200B\u0EC0\u0E95\u0EB7\u0EAD\u0E99</a></div><div><span class="footer-title">\u0EA5\u0EB9\u0E81\u0E84\u0EC9\u0EB2\u0E97\u0EB8\u0EA5\u0EB0\u0E81\u0EB4\u0E94</span><a href="https://www.stbanklaos.la/loansme" class="link link-hover">\u0E9A\u0ECD\u0EA5\u0EB4\u0E81\u0EB2\u0E99\u0EC0\u0E87\u0EB4\u0E99\u0E81\u0EB9\u0EC9</a></div><div><span class="footer-title">\u0E81\u0EC8\u0EBD\u0EA7\u0E81\u0EB1\u0E9A\u0E9E\u0EA7\u0E81\u0EC0\u0EAE\u0EBB\u0EB2</span><a href="https://www.stbanklaos.la/download" class="link link-hover">\u0E94\u0EB2\u0EA7\u0EC2\u0EAB\u0EBC\u0E94\u0EC0\u0EAD\u0E81\u0EB0\u0EAA\u0EB2\u0E99</a><a href="https://www.stbanklaos.la/job_apply" class="link link-hover">\u0EAA\u0EB0\u0EDD\u0EB1\u0E81\u0EA7\u0EBD\u0E81\u0E97\u0EB0\u0E99\u0EB2\u0E84\u0EB2\u0E99</a><a href="https://www.stbanklaos.la/about_us" class="link link-hover">\u0E9E\u0EBB\u0EA7\u0E9E\u0EB1\u0E99\u0E97\u0EB0\u0E99\u0EB2\u0E84\u0EB2\u0E99</a></div></div></footer>`);
  _push(ssrRenderComponent(_component_FooterBotbox, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    ref({ i: "suer.cmk=sa54df5as4g5a", like: 1, view: 1 });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLoadingIndicator = __nuxt_component_0$1;
      const _component_navbarmarket = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_2;
      const _component_modalSearch = __nuxt_component_3;
      const _component_Footer = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="app">`);
      _push(ssrRenderComponent(_component_NuxtLoadingIndicator, null, null, _parent));
      _push(ssrRenderComponent(_component_navbarmarket, null, null, _parent));
      _push(`<div class="hero bg-base-200"><div class="hero-content w-9/12 mx-auto flex-col lg:flex-row-reverse"><div class="flex-1"><h1 class="text-xl">\u0E9B\u0EB0\u0E81\u0EB2\u0E94\u0E82\u0EB2\u0E8D \u0E8A\u0EB1\u0E9A\u0EAA\u0EB4\u0E99\u0EAD\u0EB7\u0EC8\u0E99\u0EC6 \u0E82\u0EAD\u0E87 \u0E97\u0EAD\u0E97</h1><p> \u0E8A\u0EB1\u0E9A\u0EAA\u0EB4\u0E99\u0E95\u0EC8\u0EB2\u0E87\u0EC6 \u0E97\u0EB5\u0EC8\u0E97\u0EB2\u0E87 \u0E97\u0EAD\u0E97 \u0EA5\u0EBB\u0E87\u0EA5\u0EB2\u0E8D\u0E81\u0EB2\u0E99\u0E82\u0EB2\u0E8D \u0EC1\u0EA1\u0EC8\u0E99\u0EA1\u0EB5\u0EC0\u0EAD\u0E81\u0EB0\u0EAA\u0EB2\u0E99\u0E96\u0EB7\u0E81\u0E95\u0EC9\u0EAD\u0E87\u0E84\u0EBB\u0E9A\u0E96\u0EC9\u0EA7\u0E99\u0EAA\u0EBB\u0EA1\u0E9A\u0EB9\u0E99 \u0E9A\u0ECD\u0EC8\u0E81\u0EC8\u0EBD\u0EA7\u0E82\u0EC9\u0EAD\u0E87\u0E81\u0EB1\u0E9A\u0E9A\u0EB8\u0E81\u0EC3\u0E94\u0EC6. </p></div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(ssrRenderComponent(_component_modalSearch, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-74349b53.mjs.map

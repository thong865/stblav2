import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { ref, watchEffect, withAsyncContext, reactive, computed, unref, useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_0$1 } from './nuxt-link-d23e8ff6.mjs';
import { r as resolveUnrefHeadInput, g as useHead, b as useRoute, d as useRuntimeConfig, _ as _export_sfc } from '../server.mjs';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { unpackMeta, composableNames } from 'unhead';
import { u as useAsyncData } from './asyncData-824ae413.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
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

function useSeoMeta(input, options) {
  const headInput = ref({});
  watchEffect(() => {
    const resolvedMeta = resolveUnrefHeadInput(input);
    const { title, titleTemplate, ...meta } = resolvedMeta;
    headInput.value = {
      title,
      titleTemplate,
      meta: unpackMeta(meta)
    };
  });
  return useHead(headInput, options);
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});

const _sfc_main$4 = {
  __name: "formCract",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    const contract = ref({
      fullname: ref(""),
      mobile: ref(""),
      email: ref(""),
      message: ref(""),
      isContract: ref(true)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><input type="checkbox" id="modal-mkcontract" class="modal-toggle"><div class="modal"><div class="modal-box"><form><h3 class="font-bold text-lg">\u0E9D\u0EB2\u0E81\u0E82\u0ECD\u0EC9\u0EA1\u0EB9\u0E99\u0E95\u0EB4\u0E94\u0E95\u0ECD\u0EC8\u0E82\u0EAD\u0E87\u0E97\u0EC8\u0EB2\u0E99\u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0EC3\u0EAB\u0EC9\u0E9E\u0EB0\u0E99\u0EB1\u0E81\u0E87\u0EB2\u0E99\u0E95\u0EB4\u0E94\u0E95\u0ECD\u0EC8\u0E81\u0EB1\u0E9A</h3><div class="flex flex-col gap-3 mt-5"><input type="text" placeholder="\u0E8A\u0EB7\u0EC8 \u0EC1\u0EA5\u0EB0 \u0E99\u0EB2\u0EA1\u0EAA\u0EB0\u0E81\u0EB8\u0E99" class="input w-full input-bordered input-primary py-2"${ssrRenderAttr("value", contract.value.fullname)}><input type="text" placeholder="\u0EC0\u0E9A\u0EB5\u0EC2\u0E97\u0EA5\u0EB0\u0EAA\u0EB1\u0E9A" class="input w-full input-bordered input-primary py-2"${ssrRenderAttr("value", contract.value.mobile)}><input type="text" placeholder="\u0EAD\u0EB5\u0EC0\u0EA1\u0EA7" class="input w-full input-bordered input-primary py-2"${ssrRenderAttr("value", contract.value.email)}><textarea class="textarea textarea-bordered textarea-primary w-full" placeholder="\u0E84\u0EB3\u0EAD\u0EB0\u0E97\u0EB4\u0E9A\u0EB2\u0E8D">${ssrInterpolate(contract.value.message)}</textarea><div class="form-control"><label class="cursor-pointer label"><input type="checkbox" checked="checked" class="checkbox checkbox-primary"${ssrIncludeBooleanAttr(Array.isArray(contract.value.isContract) ? ssrLooseContain(contract.value.isContract, null) : contract.value.isContract) ? " checked" : ""}><span class="label-text">\u0EAD\u0EB2\u0E99\u0EB8\u0E8D\u0EB2\u0E94\u0EC3\u0EAB\u0EC9\u0E9E\u0EB0\u0E99\u0EB1\u0E81\u0E87\u0EB2\u0E99\u0E95\u0EB4\u0E94\u0E95\u0ECD\u0EC8\u0E81\u0EB1\u0E9A</span></label></div></div><div class="modal-action"><button for="modal-mkcontract" class="btn">\u0EAA\u0EBB\u0EC8\u0E87\u0E94\u0EBD\u0EA7\u0E99\u0EB5\u0EC9</button></div></form></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contract/formCract.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$4;
const _sfc_main$3 = {
  props: {
    thumnail: {
      type: Object
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      modules: [Autoplay, Pagination, Navigation],
      onSlideChange,
      streamUrl: useRuntimeConfig().public.streamBase
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = Swiper;
  const _component_swiper_slide = SwiperSlide;
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_swiper, {
    onSwiper: $setup.onSwiper,
    onSlideChange: $setup.onSlideChange,
    navigation: true,
    modules: $setup.modules,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.thumnail, (t, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: i }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_nuxt_link, {
                  to: $setup.streamUrl + t.file,
                  target: "_blank"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<img${ssrRenderAttr("src", $setup.streamUrl + t.file)} class="w-full max-h-[420px] object-cover"${ssrRenderAttr("alt", t.title)}${_scopeId3}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: $setup.streamUrl + t.file,
                          class: "w-full max-h-[420px] object-cover",
                          alt: t.title
                        }, null, 8, ["src", "alt"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_nuxt_link, {
                    to: $setup.streamUrl + t.file,
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: $setup.streamUrl + t.file,
                        class: "w-full max-h-[420px] object-cover",
                        alt: t.title
                      }, null, 8, ["src", "alt"])
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.thumnail, (t, i) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: i }, {
              default: withCtx(() => [
                createVNode(_component_nuxt_link, {
                  to: $setup.streamUrl + t.file,
                  target: "_blank"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: $setup.streamUrl + t.file,
                      class: "w-full max-h-[420px] object-cover",
                      alt: t.title
                    }, null, 8, ["src", "alt"])
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/carousel/mkfull.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "location",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-xl md:text-2xl">\u0EC1\u0E9C\u0E99\u0E97\u0EB5\u0EC8</div><iframe class="w-full h-[400px]" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"${ssrRenderAttr("src", `https://maps.google.com/maps?q=${props.data.map_lat}%2c${props.data.map_lon}&hl=en&z=14&output=embed`)}></iframe></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product/location.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "viewContract",
  __ssrInlineRender: true,
  props: {
    data: { type: Object },
    stbcon: { type: Object }
  },
  setup(__props) {
    const prop = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[300px] pl-4 sticky top-0 relative" }, _attrs))}><div class="rounded-xl shadow-md px-3 py-3"><h1 class="text-xl pt-2">\u0E82\u0ECD\u0EC9\u0EA1\u0EB9\u0E99\u0EA5\u0EB2\u0E8D\u0E81\u0EB2\u0E99</h1><p class="mt-3"> \u0E97\u0EB5\u0EC8\u0EA2\u0EB9\u0EC8 \u0E9A. ${ssrInterpolate(prop.data.village)}, \u0EA1. ${ssrInterpolate(__props.data.district)}, ${ssrInterpolate(prop.data.province)}</p><div class="py-2 flex justify-between"><div>\u0E9B\u0EB0\u0EC0\u0E9E\u0E94:</div><div>${ssrInterpolate(prop.data.category)}</div></div><div class="py-2 flex justify-between"><div>\u0EC0\u0E99\u0EB7\u0EC9\u0EAD\u0E97\u0EB5\u0EC8:</div><div>${ssrInterpolate((_a = prop.data) == null ? void 0 : _a.area)}</div></div><div class="py-2 flex justify-between"><div>\u0EA5\u0EB2\u0E84\u0EB2\u0EA5\u0EA7\u0EA1:</div><div>${ssrInterpolate(Number((_b = prop.data) == null ? void 0 : _b.price).toLocaleString("en-US") || 0)} ${ssrInterpolate(__props.data.ccy)}</div></div><div class="py-2"><div></div></div></div><div class="rounded-xl px-3 py-3"><h1 class="text-1xl pt-2">\u0E82\u0ECD\u0EC9\u0EA1\u0EB9\u0E99\u0E95\u0EB4\u0E94\u0E95\u0ECD\u0EC8\u0E9D\u0EC8\u0EB2\u0E8D\u0E82\u0EB2\u0E8D</h1><!--[-->`);
      ssrRenderList(__props.stbcon, (ct, i) => {
        _push(`<div class="flex mt-3">`);
        if (ct.type == "phone") {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon w-6 h-6" style="${ssrRenderStyle({})}" width="1em" height="1em" viewBox="0 0 24 24" data-v-4fa0a2a1=""><path fill="currentColor" d="M19.44 13c-.22 0-.45-.07-.67-.12a9.44 9.44 0 0 1-1.31-.39a2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2a12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48a10.33 10.33 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41a19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2-.76a3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.9Zm.5 6a1 1 0 0 1-.34.75a1.05 1.05 0 0 1-.82.25A17 17 0 0 1 4.07 5.22a1.09 1.09 0 0 1 .25-.82a1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79q.06.41.15.81a11.12 11.12 0 0 0 .46 1.55l-1.4.65a1 1 0 0 0-.49 1.33a14.49 14.49 0 0 0 7 7a1 1 0 0 0 .76 0a1 1 0 0 0 .57-.52l.62-1.4a13.69 13.69 0 0 0 1.58.46q.4.09.81.15a1 1 0 0 1 .79 1Z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (ct.type == "envelope") {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon w-6 h-6" style="${ssrRenderStyle({})}" width="1em" height="1em" viewBox="0 0 24 24" data-v-4fa0a2a1=""><path fill="currentColor" d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-.41 2l-5.88 5.88a1 1 0 0 1-1.42 0L5.41 6ZM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.41l5.88 5.88a3 3 0 0 0 4.24 0L20 7.41Z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (ct.type == "whatsapp") {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon w-6 h-6" style="${ssrRenderStyle({})}" width="1em" height="1em" viewBox="0 0 24 24" data-v-4fa0a2a1=""><path fill="currentColor" d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="pl-2">${ssrInterpolate(ct.value)}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product/viewContract.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    const route = useRoute();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const Contracts = ref();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "productDetail",
      () => $fetch(`/api/productDetail`, { query: { id: route.params.id } })
    )), __temp = await __temp, __restore(), __temp);
    const { data: stbCts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "listStbContract",
      () => $fetch(`/api/stbcontract`)
    )), __temp = await __temp, __restore(), __temp);
    useSeoMeta({
      title: "\u0E9B\u0EB0\u0E81\u0EB2\u0E94\u0E82\u0EB2\u0E8D \u0E94\u0EB4\u0E99 \u0EC1\u0EA5\u0EB0 \u0EC0\u0EAE\u0EB7\u0EAD\u0E99 \u0E82\u0EAD\u0E87 \u0E97\u0EB0\u0E99\u0EB2\u0E84\u0EB2\u0E99\u0EC0\u0EAD\u0EB1\u0EAA\u0E97\u0EB5 \u0E88\u0EB3\u0E81\u0EB1\u0E94",
      ogTitle: "\u0E97\u0EB0\u0E99\u0EB2\u0E84\u0EB2\u0E99 \u0EC0\u0EAD\u0EB1\u0EAA\u0E97\u0EB5 \u0E88\u0EB3\u0E81\u0EB1\u0E94",
      description: data.value.title,
      ogDescription: (_a = data.value) == null ? void 0 : _a.title,
      ogImage: config.public.streamBase + ((_c = (_b = data.value) == null ? void 0 : _b.thumails[0]) == null ? void 0 : _c.file)
    });
    Contracts.value = {
      title: data.value.title,
      village: data.value.village,
      district: data.value.city.title,
      province: data.value.city.province.title,
      price: data.value.price,
      ccy: data.value.ccy,
      category: data.value.category.title,
      area: data.value.area
    };
    const locations = reactive({
      map_lon: data.value.map_lon,
      map_lat: data.value.map_lat
    });
    ref(100);
    const pView = ref(computed(() => {
      var _a2, _b2, _c2;
      return ((_c2 = (_b2 = (_a2 = data.value) == null ? void 0 : _a2.actions) == null ? void 0 : _b2.find((t) => t.ac_type == "V")) == null ? void 0 : _c2.count) || 0;
    }));
    const pLike = ref(computed({
      get() {
        var _a2, _b2, _c2;
        return ((_c2 = (_b2 = (_a2 = data.value) == null ? void 0 : _a2.actions) == null ? void 0 : _b2.find((t) => t.ac_type == "L")) == null ? void 0 : _c2.count) || 0;
      },
      set(newValue) {
        return newValue;
      }
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_ContractFormCract = __nuxt_component_0;
      const _component_CarouselMkfull = __nuxt_component_1;
      const _component_ProductLocation = __nuxt_component_2;
      const _component_ProductViewContract = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ContractFormCract, null, null, _parent));
      _push(`<section><div class="md:w-9/12 mx-auto md:flex relative"><div class="md:w-8/12 mx-auto pb-10">`);
      _push(ssrRenderComponent(_component_CarouselMkfull, {
        thumnail: unref(data).thumails
      }, null, _parent));
      _push(`<div class="flex-1 px-5 md:px-0"><div class="flex justify-between"><p class="text-xl md:text-2xl py-3">${ssrInterpolate((_a2 = unref(data)) == null ? void 0 : _a2.title)}</p><div class="flex gap-1 py-3"><button class="btn gap-2 btn-sm">${ssrInterpolate(pView.value)} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></button><button class="btn gap-2 btn-sm">${ssrInterpolate(pLike.value)} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path></svg></button></div></div><div class="flex gap-3"><div class="stats"><div class="stat"><div class="stat-title">\u0EC0\u0E99\u0EB7\u0EC9\u0EAD\u0E97\u0EB5\u0EC8</div><div class="stat-value text-[20pt]">${ssrInterpolate(unref(data).area)}</div></div></div><div class="stats"><div class="stat"><div class="stat-title">\u0E97\u0EB5\u0EC8\u0EA2\u0EB9\u0EC8</div><div class="stat-desc text-[12pt]">${ssrInterpolate(Contracts.value.village)} ${ssrInterpolate(Contracts.value.district)} ${ssrInterpolate(Contracts.value.province)}</div></div></div></div><div class="py-4 px-2"><div>${unref(data).content}</div>`);
      _push(ssrRenderComponent(_component_ProductLocation, {
        data: unref(locations),
        class: "mt-10"
      }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_ProductViewContract, {
        data: Contracts.value,
        stbcon: unref(stbCts),
        class: "sticky top-[100px]"
      }, null, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/market/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-67a0a01b.mjs.map

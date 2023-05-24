import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_0$2 } from './nuxt-link-d23e8ff6.mjs';
import { d as useRuntimeConfig, _ as _export_sfc } from '../server.mjs';
import { withAsyncContext, unref, useSSRContext, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './ProductCard-c30511bf.mjs';
import { u as useAsyncData } from './asyncData-824ae413.mjs';
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

const _sfc_main$1 = {
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
  const _component_nuxt_link = __nuxt_component_0$2;
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
                _push3(`<div class="relative"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_nuxt_link, {
                  to: `/details/${t.id}`,
                  type: "button",
                  class: "btn absolute right-2 top-2"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`\u0EC0\u0E9A\u0EB4\u0EC8\u0E87\u0EA5\u0EB2\u0E8D\u0EA5\u0EB0\u0EAD\u0EBD\u0E94`);
                    } else {
                      return [
                        createTextVNode("\u0EC0\u0E9A\u0EB4\u0EC8\u0E87\u0EA5\u0EB2\u0E8D\u0EA5\u0EB0\u0EAD\u0EBD\u0E94")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`<img${ssrRenderAttr("src", $setup.streamUrl + t.background)}${ssrRenderAttr("alt", t.title)} class="lazy w-full max-h-[650px] object-cover"${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", { class: "relative" }, [
                    createVNode(_component_nuxt_link, {
                      to: `/details/${t.id}`,
                      type: "button",
                      class: "btn absolute right-2 top-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0EC0\u0E9A\u0EB4\u0EC8\u0E87\u0EA5\u0EB2\u0E8D\u0EA5\u0EB0\u0EAD\u0EBD\u0E94")
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    createVNode("img", {
                      src: $setup.streamUrl + t.background,
                      alt: t.title,
                      class: "lazy w-full max-h-[650px] object-cover"
                    }, null, 8, ["src", "alt"])
                  ])
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
                createVNode("div", { class: "relative" }, [
                  createVNode(_component_nuxt_link, {
                    to: `/details/${t.id}`,
                    type: "button",
                    class: "btn absolute right-2 top-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u0EC0\u0E9A\u0EB4\u0EC8\u0E87\u0EA5\u0EB2\u0E8D\u0EA5\u0EB0\u0EAD\u0EBD\u0E94")
                    ]),
                    _: 2
                  }, 1032, ["to"]),
                  createVNode("img", {
                    src: $setup.streamUrl + t.background,
                    alt: t.title,
                    class: "lazy w-full max-h-[650px] object-cover"
                  }, null, 8, ["src", "alt"])
                ])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/carousel/mkhome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      data: Category,
      pending: PdCategory,
      error: ErCategory
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("CategoryMarkets", () => $fetch("/api/existCategories"))), __temp = await __temp, __restore(), __temp);
    const {
      data: Carousel,
      pending: PdCarousel,
      error: ErCarousel
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "CarouelMarkets",
      () => $fetch("/api/carousel", { query: { cat: "MARK" } })
    )), __temp = await __temp, __restore(), __temp);
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "markets",
      () => $fetch("/api/productsList")
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_CarouselMkhome = __nuxt_component_0;
      const _component_CardProductCard = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CarouselMkhome, { thumnail: unref(Carousel) }, null, _parent));
      _push(`<section class="py-10"><div class="md:w-9/12 px-5 md:px-0 mx-auto flex-col lg:flex-row-reverse"><div><!--[-->`);
      ssrRenderList(unref(Category), (tt, index) => {
        _push(`<div class="stats shadow"><div class="stat"><div class="stat-title">${ssrInterpolate(tt.title)}</div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-10"><div class="md:w-9/12 px-5 md:px-0 mx-auto flex-col lg:flex-row-reverse"><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"><!--[-->`);
      ssrRenderList((_a = unref(data)) == null ? void 0 : _a.data, (t, i) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-158321fa.mjs.map

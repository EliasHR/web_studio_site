import { L as LoadingComp } from "./LoadingComp-BolcRYlq.js";
import { useSSRContext, mergeProps, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../entry-server.js";
import { H as H2Custom } from "./H2Custom-CWTniBTG.js";
import { P as PSmall } from "./PSmall-BSBNR74Q.js";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import axios from "axios";
import { defineStore } from "pinia";
import "vue-router";
import "@vuelidate/core";
import "@vuelidate/validators";
import "maska/vue";
import "@unhead/vue";
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "28",
    height: "20",
    viewBox: "0 0 28 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M27.094 10.9059C27.5943 10.4056 27.5943 9.59441 27.094 9.09409L18.9409 0.940933C18.4405 0.440616 17.6294 0.440616 17.129 0.940933C16.6287 1.44125 16.6287 2.25243 17.129 2.75275L24.3763 10L17.129 17.2473C16.6287 17.7476 16.6287 18.5587 17.129 19.0591C17.6294 19.5594 18.4405 19.5594 18.9409 19.0591L27.094 10.9059ZM0.101562 11.2811H26.1881V8.71885H0.101562V11.2811Z" fill="#278EED"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/icons/SwiperNext.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SwiperNext = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "28",
    height: "20",
    viewBox: "0 0 28 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0.76536 10.9059C0.265041 10.4056 0.265041 9.59441 0.76536 9.09409L8.91852 0.940933C9.41884 0.440616 10.23 0.440616 10.7303 0.940933C11.2306 1.44125 11.2306 2.25243 10.7303 2.75275L3.48308 10L10.7303 17.2473C11.2306 17.7476 11.2306 18.5587 10.7303 19.0591C10.23 19.5594 9.41884 19.5594 8.91852 19.0591L0.76536 10.9059ZM27.7578 11.2811H1.67126V8.71885H27.7578V11.2811Z" fill="#278EED"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/icons/SwiperPrev.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SwiperPrev = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const apiUrl = "https://mycodemode.ru/api";
const useReviewStore = defineStore("review", {
  state: () => ({
    reviews: {},
    reviewsIsLoading: false
  }),
  actions: {
    async getReviews() {
      try {
        this.reviewsIsLoading = true;
        const response = await axios.get(apiUrl + "/reviews/");
        this.reviews = response.data;
        this.reviewsIsLoading = false;
      } catch (e) {
        console.log(e);
      }
    }
  }
});
const _sfc_main$1 = {
  name: "swiper-comp",
  components: {
    H2Custom,
    Swiper,
    SwiperSlide,
    PSmall,
    SwiperNext,
    SwiperPrev
  },
  setup() {
    const reviewsStore = useReviewStore();
    return {
      modules: [Navigation, Pagination, Autoplay],
      reviewsStore
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_h2_custom = resolveComponent("h2-custom");
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_p_small = resolveComponent("p-small");
  const _component_swiper_prev = resolveComponent("swiper-prev");
  const _component_swiper_next = resolveComponent("swiper-next");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper__main-wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_h2_custom, { class: "swiper__title" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Отзывы наших клиентов`);
      } else {
        return [
          createTextVNode("Отзывы наших клиентов")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="swiper__content">`);
  _push(ssrRenderComponent(_component_swiper, {
    modules: $setup.modules,
    "slides-per-view": 1,
    "space-between": 0,
    navigation: {
      hideOnClick: true,
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom"
    },
    pagination: {
      clickable: true,
      el: ".swiper-pagination-custom",
      type: "bullets"
    },
    loop: true,
    speed: 500,
    lazy: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.reviewsStore.reviews, (review) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: review.name
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="swiper-slide__wrapper"${_scopeId2}>`);
                if (review.video_file) {
                  _push3(`<video class="swiper-slide__video"${ssrRenderAttr("src", review.video_file)} controls type="video/mp4"${ssrRenderAttr(
                    "poster",
                    review.video_poster_webp ? review.video_poster_webp : review.video_poster
                  )} loading="lazy"${_scopeId2}></video>`);
                } else {
                  _push3(ssrRenderComponent(_component_p_small, { class: "swiper-slide__text" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`«${ssrInterpolate(review.text)}»`);
                      } else {
                        return [
                          createTextVNode("«" + toDisplayString(review.text) + "»", 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                }
                _push3(`<p class="swiper-slide__name"${_scopeId2}>${ssrInterpolate(review.name)}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "swiper-slide__wrapper" }, [
                    review.video_file ? (openBlock(), createBlock("video", {
                      key: 0,
                      class: "swiper-slide__video",
                      src: review.video_file,
                      controls: "",
                      type: "video/mp4",
                      poster: review.video_poster_webp ? review.video_poster_webp : review.video_poster,
                      loading: "lazy"
                    }, null, 8, ["src", "poster"])) : (openBlock(), createBlock(_component_p_small, {
                      key: 1,
                      class: "swiper-slide__text"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("«" + toDisplayString(review.text) + "»", 1)
                      ]),
                      _: 2
                    }, 1024)),
                    createVNode("p", { class: "swiper-slide__name" }, toDisplayString(review.name), 1)
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
          (openBlock(true), createBlock(Fragment, null, renderList($setup.reviewsStore.reviews, (review) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: review.name
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "swiper-slide__wrapper" }, [
                  review.video_file ? (openBlock(), createBlock("video", {
                    key: 0,
                    class: "swiper-slide__video",
                    src: review.video_file,
                    controls: "",
                    type: "video/mp4",
                    poster: review.video_poster_webp ? review.video_poster_webp : review.video_poster,
                    loading: "lazy"
                  }, null, 8, ["src", "poster"])) : (openBlock(), createBlock(_component_p_small, {
                    key: 1,
                    class: "swiper-slide__text"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("«" + toDisplayString(review.text) + "»", 1)
                    ]),
                    _: 2
                  }, 1024)),
                  createVNode("p", { class: "swiper-slide__name" }, toDisplayString(review.name), 1)
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
  _push(`<div class="swiper-controlls"><div class="swiper-pagination-custom"></div><div class="swiper-buttons"><div class="swiper-button-prev-custom">`);
  _push(ssrRenderComponent(_component_swiper_prev, null, null, _parent));
  _push(`</div><div class="swiper-button-next-custom">`);
  _push(ssrRenderComponent(_component_swiper_next, null, null, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/swiper/SwiperComp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SwiperComp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "/assets/reviews_comma_320-VvWM_5sD.png";
const _imports_1 = "/assets/reviews_comma_740-B_A7P0LW.png";
const _imports_2 = "/assets/reviews_comma_960-BKQstH61.png";
const _imports_3 = "/assets/reviews_comma-CU6722UY.png";
const _sfc_main = {
  name: "reviews-comp",
  components: {
    SwiperComp,
    LoadingComp
  },
  setup() {
    const reviewsStore = useReviewStore();
    reviewsStore.getReviews();
    return {
      reviewsStore
    };
  },
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper_comp = resolveComponent("swiper-comp");
  const _component_loading_comp = resolveComponent("loading-comp");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "reviews",
    id: "reviews"
  }, _attrs))}><div class="container">`);
  if (!$setup.reviewsStore.reviewsIsLoading) {
    _push(`<div class="reviews__wrapper">`);
    _push(ssrRenderComponent(_component_swiper_comp, null, null, _parent));
    _push(`<picture class="swiper-slide__image"><source media="(max-width: 399.99px)"${ssrRenderAttr("srcset", _imports_0)} width="314px" height="287px"><source media="(max-width: 991.99px)"${ssrRenderAttr("srcset", _imports_1)} width="380px" height="287px"><source media="(max-width: 1199.99px)"${ssrRenderAttr("srcset", _imports_2)} width="378px" height="351px"><img loading="lazy"${ssrRenderAttr("src", _imports_3)} alt="Большая кавычка" class="reviews__image" width="544px" height="351px"></picture></div>`);
  } else {
    _push(ssrRenderComponent(_component_loading_comp, null, null, _parent));
  }
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ReviewsComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ReviewsComp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ReviewsComp as default
};

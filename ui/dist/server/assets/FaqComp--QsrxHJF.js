import { _ as _export_sfc, H as H2Custom, d as PSmall } from "../entry-server.js";
import { mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import "pinia";
import "vue-router";
import "@vuelidate/core";
import "@vuelidate/validators";
import "axios";
import "maska/vue";
import "@unhead/vue";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "18",
    height: "10",
    viewBox: "0 0 18 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M3.03538 0.198242L9.03538 6.19824L15.0354 0.198242L17.1567 2.31956L10.096 9.38022C9.51026 9.96601 8.56051 9.96601 7.97472 9.38022L0.914062 2.31956L3.03538 0.198242Z" fill="#278EED"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/icons/FaqArrow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FaqArrow = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "faq-comp",
  components: {
    H2Custom,
    FaqArrow,
    PSmall
  },
  data() {
    return {
      question_1: true,
      question_2: false,
      question_3: false
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_h2_custom = resolveComponent("h2-custom");
  const _component_faq_arrow = resolveComponent("faq-arrow");
  const _component_p_small = resolveComponent("p-small");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "faq" }, _attrs))} data-v-c3366a59><div class="container" data-v-c3366a59>`);
  _push(ssrRenderComponent(_component_h2_custom, { class: "faq__title" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FAQ`);
      } else {
        return [
          createTextVNode("FAQ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="faq__wrapper" data-v-c3366a59><hr class="faq__line" data-v-c3366a59><div class="faq__question" data-v-c3366a59><div class="faq__question-title-wrapper" data-v-c3366a59><h3 class="faq__question-title-text" data-v-c3366a59> Предусмотрена ли гарантия на работы? </h3>`);
  _push(ssrRenderComponent(_component_faq_arrow, {
    class: ["faq__question-title-arrow", { "faq__question-title-arrow-active": $data.question_1 }]
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_p_small, {
    class: "faq__question-content",
    style: $data.question_1 ? null : { display: "none" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Да. Мы вернем вам деньги, если не выполним условия по договору. `);
      } else {
        return [
          createTextVNode(" Да. Мы вернем вам деньги, если не выполним условия по договору. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><hr class="faq__line" data-v-c3366a59><div class="faq__question" data-v-c3366a59><div class="faq__question-title-wrapper" data-v-c3366a59><h3 class="faq__question-title-text" data-v-c3366a59> Как происходит оплата? Разово или по частям </h3>`);
  _push(ssrRenderComponent(_component_faq_arrow, {
    class: ["faq__question-title-arrow", { "faq__question-title-arrow-active": $data.question_2 }]
  }, null, _parent));
  _push(`</div><div style="${ssrRenderStyle($data.question_2 ? null : { display: "none" })}" class="faq__question-content-wrapper" data-v-c3366a59>`);
  _push(ssrRenderComponent(_component_p_small, { class: "faq__question-content" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Мы работаем по agile системе, это означает, что берем оплату за проект поэтапно. `);
      } else {
        return [
          createTextVNode(" Мы работаем по agile системе, это означает, что берем оплату за проект поэтапно. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_small, { class: "faq__question-content" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Как показала практика это удобно и клиенту и нам. `);
      } else {
        return [
          createTextVNode(" Как показала практика это удобно и клиенту и нам. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><hr class="faq__line" data-v-c3366a59><div class="faq__question" data-v-c3366a59><div class="faq__question-title-wrapper" data-v-c3366a59><h3 class="faq__question-title-text" data-v-c3366a59>Вы проводите обучение по продукту?</h3>`);
  _push(ssrRenderComponent(_component_faq_arrow, {
    class: ["faq__question-title-arrow", { "faq__question-title-arrow-active": $data.question_3 }]
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_p_small, {
    class: "faq__question-content",
    style: $data.question_3 ? null : { display: "none" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Да, мы записываем видео-уроки и при необходимости можем провести онлайн-обучение для вас и ваших сотрудников `);
      } else {
        return [
          createTextVNode(" Да, мы записываем видео-уроки и при необходимости можем провести онлайн-обучение для вас и ваших сотрудников ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><hr class="faq__line" data-v-c3366a59></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/FaqComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FaqComp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c3366a59"]]);
export {
  FaqComp as default
};

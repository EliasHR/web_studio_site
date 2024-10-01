import { H as H2Custom } from "./H2Custom-CWTniBTG.js";
import { _ as _export_sfc, c as PBase, P as PSuperSmall } from "../entry-server.js";
import { resolveComponent, mergeProps, withCtx, renderSlot, useSSRContext, createTextVNode, createVNode } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import "pinia";
import "vue-router";
import "@vuelidate/core";
import "@vuelidate/validators";
import "axios";
import "maska/vue";
import "@unhead/vue";
const _sfc_main$1 = {
  name: "p-middle",
  components: {
    PBase
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_p_base = resolveComponent("p-base");
  _push(ssrRenderComponent(_component_p_base, mergeProps({ class: "paragraph" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/typographics/PMiddle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PMiddle = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-fbe106de"]]);
const _imports_0 = "/assets/about_320-CzBOSTH9.png";
const _imports_1 = "/assets/about_740-BMfNnNCO.png";
const _imports_2 = "/assets/about_960-DK58dPUn.png";
const _imports_3 = "/assets/about-BYhn8s1X.png";
const _sfc_main = {
  name: "about-comp",
  components: {
    H2Custom,
    PMiddle,
    PSuperSmall
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_h2_custom = resolveComponent("h2-custom");
  const _component_p_middle = resolveComponent("p-middle");
  const _component_p_super_small = resolveComponent("p-super-small");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "about",
    id: "about"
  }, _attrs))} data-v-186de1a0><div class="container" data-v-186de1a0><div class="about__content" data-v-186de1a0>`);
  _push(ssrRenderComponent(_component_h2_custom, { class: "about__title" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`О нас`);
      } else {
        return [
          createTextVNode("О нас")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="about__wrapper" data-v-186de1a0><div class="about__text-wrapper" data-v-186de1a0><div class="about__text_offset" data-v-186de1a0>`);
  _push(ssrRenderComponent(_component_p_middle, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Мы являемся молодой студией it-разработки «Code mode». `);
      } else {
        return [
          createTextVNode(" Мы являемся молодой студией it-разработки «Code mode». ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_middle, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`К нас обращаются, когда нужно:`);
      } else {
        return [
          createTextVNode("К нас обращаются, когда нужно:")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_middle, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<b data-v-186de1a0${_scopeId}>– Создать чат-бот телеграм.</b>`);
      } else {
        return [
          createVNode("b", null, "– Создать чат-бот телеграм.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="about__text_highlighted" data-v-186de1a0>`);
  _push(ssrRenderComponent(_component_p_super_small, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Сегодня чат-боты стали настоящим must-have для бизнеса. Они позволяют убирать рутину и значительно облегчают бизнес-процессы и, соответственно, увеличивают прибыль. `);
      } else {
        return [
          createTextVNode(" Сегодня чат-боты стали настоящим must-have для бизнеса. Они позволяют убирать рутину и значительно облегчают бизнес-процессы и, соответственно, увеличивают прибыль. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_super_small, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Мы разрабатываем боты «на коде», это означает, что функционал таких ботов значительно шире, чем на конструкторе.`);
      } else {
        return [
          createTextVNode("Мы разрабатываем боты «на коде», это означает, что функционал таких ботов значительно шире, чем на конструкторе.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_p_middle, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<b data-v-186de1a0${_scopeId}>– Оптимизировать бизнес-процессы.</b>`);
      } else {
        return [
          createVNode("b", null, "– Оптимизировать бизнес-процессы.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_super_small, { class: "about__text_highlighted" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Иногда решение, предложенное специалистом способно освободить от рутины и освободить значительное количество свободного времени. `);
      } else {
        return [
          createTextVNode(" Иногда решение, предложенное специалистом способно освободить от рутины и освободить значительное количество свободного времени. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_middle, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<b data-v-186de1a0${_scopeId}>– Доработать или «переделать» текущий сайт.</b>`);
      } else {
        return [
          createVNode("b", null, "– Доработать или «переделать» текущий сайт.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_super_small, { class: "about__text_highlighted" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Сайты, созданные в 2000-2010 давно требуют технической и визуальной доработки или полной переработки. `);
      } else {
        return [
          createTextVNode(" Сайты, созданные в 2000-2010 давно требуют технической и визуальной доработки или полной переработки. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="about__text_offset" data-v-186de1a0>`);
  _push(ssrRenderComponent(_component_p_middle, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Нам важен результат работы и доверительные долгосрочные отношения. `);
      } else {
        return [
          createTextVNode(" Нам важен результат работы и доверительные долгосрочные отношения. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_middle, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Code mode: «Создаем, внедряем, тестируем, поддерживаем!» `);
      } else {
        return [
          createTextVNode(" Code mode: «Создаем, внедряем, тестируем, поддерживаем!» ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="about__swiper" data-v-186de1a0><picture data-v-186de1a0><source${ssrRenderAttr("srcset", _imports_0)} media="(max-width: 399.99px)" width="314px" height="286px" data-v-186de1a0><source${ssrRenderAttr("srcset", _imports_1)} media="(max-width: 991.99px)" width="380px" height="286px" data-v-186de1a0><source${ssrRenderAttr("srcset", _imports_2)} media="(max-width: 1199.99px)" width="420px" height="817px" data-v-186de1a0><img class="about__image"${ssrRenderAttr("src", _imports_3)} alt="Декоративый элемент страницы &#39;О нас&#39;" width="568px" height="817px" loading="lazy" data-v-186de1a0></picture></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/AboutComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutComp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-186de1a0"]]);
export {
  AboutComp as default
};

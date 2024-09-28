import { _ as _export_sfc, H as H2Custom, P as PSuperSmall, a as ButtonSmall, D as DialogForm } from "../entry-server.js";
import { mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import "pinia";
import "vue-router";
import "@vuelidate/core";
import "@vuelidate/validators";
import "axios";
import "maska/vue";
import "@unhead/vue";
const _sfc_main$1 = {
  name: "h3-custom"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h3${ssrRenderAttrs(mergeProps({ class: "h3" }, _attrs))} data-v-d1b4fbcd>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h3>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/typographics/H3Custom.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const H3Custom = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d1b4fbcd"]]);
const _sfc_main = {
  components: {
    H2Custom,
    H3Custom,
    PSuperSmall,
    ButtonSmall,
    DialogForm
  },
  data() {
    return {
      appType: "app_site",
      showDialog: false
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_h2_custom = resolveComponent("h2-custom");
  const _component_h3_custom = resolveComponent("h3-custom");
  const _component_p_super_small = resolveComponent("p-super-small");
  const _component_button_small = resolveComponent("button-small");
  const _component_dialog_form = resolveComponent("dialog-form");
  _push(`<!--[--><section class="services" id="services" data-v-79ca6ed2><div class="container" data-v-79ca6ed2>`);
  _push(ssrRenderComponent(_component_h2_custom, { class: "services__title" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Наши услуги`);
      } else {
        return [
          createTextVNode("Наши услуги")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="services__wrapper" data-v-79ca6ed2><div class="services__item" data-v-79ca6ed2><div class="services__item-wrapper" data-v-79ca6ed2><div class="services__item-info" data-v-79ca6ed2>`);
  _push(ssrRenderComponent(_component_h3_custom, { class: "services__item-title" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Сайты и сервисы`);
      } else {
        return [
          createTextVNode("Сайты и сервисы")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="services__item-price" data-v-79ca6ed2>от 100.000 руб.</div><div class="services__item-list" data-v-79ca6ed2>`);
  _push(ssrRenderComponent(_component_p_super_small, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Простые и высоконагруженные сайты с возможностью управлять контентом (CMS) `);
      } else {
        return [
          createTextVNode(" Простые и высоконагруженные сайты с возможностью управлять контентом (CMS) ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_super_small, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Доработка функционала`);
      } else {
        return [
          createTextVNode("Доработка функционала")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_super_small, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Перенос сайта`);
      } else {
        return [
          createTextVNode("Перенос сайта")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_super_small, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Техническая поддержка и администрирование сайта `);
      } else {
        return [
          createTextVNode(" Техническая поддержка и администрирование сайта ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_button_small, {
    class: "services__item-button",
    onClick: ($event) => ($data.showDialog = true, $data.appType = "app_site")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Оставить заявку `);
      } else {
        return [
          createTextVNode(" Оставить заявку ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="services__item" data-v-79ca6ed2><div class="services__item-wrapper" data-v-79ca6ed2><div class="services__item-info" data-v-79ca6ed2>`);
  _push(ssrRenderComponent(_component_h3_custom, { class: "services__item-title" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Чат-боты`);
      } else {
        return [
          createTextVNode("Чат-боты")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="services__item-price" data-v-79ca6ed2>от 30.000 руб.</div><div class="services__item-list" data-v-79ca6ed2>`);
  _push(ssrRenderComponent(_component_p_super_small, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Телеграм-боты для коммуникации `);
      } else {
        return [
          createTextVNode("Телеграм-боты для коммуникации ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_super_small, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Функциональные боты `);
      } else {
        return [
          createTextVNode("Функциональные боты ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_super_small, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Калькуляторы, парсеры и пр.`);
      } else {
        return [
          createTextVNode("Калькуляторы, парсеры и пр.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_super_small, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Интеграция с различными сервисами`);
      } else {
        return [
          createTextVNode("Интеграция с различными сервисами")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_button_small, {
    class: "services__item-button",
    onClick: ($event) => ($data.showDialog = true, $data.appType = "app_bot")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Оставить заявку `);
      } else {
        return [
          createTextVNode(" Оставить заявку ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="services__item" data-v-79ca6ed2><div class="services__item-wrapper" data-v-79ca6ed2><div class="services__item-info" data-v-79ca6ed2>`);
  _push(ssrRenderComponent(_component_h3_custom, { class: "services__item-title" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Дизайн`);
      } else {
        return [
          createTextVNode("Дизайн")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="services__item-price" data-v-79ca6ed2>от 10.000 руб.</div><div class="services__item-list" data-v-79ca6ed2>`);
  _push(ssrRenderComponent(_component_p_super_small, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Дизайн-сопровождение `);
      } else {
        return [
          createTextVNode("Дизайн-сопровождение ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_super_small, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Переработка существующего интерфейса или создание нового `);
      } else {
        return [
          createTextVNode(" Переработка существующего интерфейса или создание нового ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_super_small, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Улучшение и доработка дизайн проекта`);
      } else {
        return [
          createTextVNode("Улучшение и доработка дизайн проекта")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_p_super_small, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Создание логотипа и фирменного стиля`);
      } else {
        return [
          createTextVNode("Создание логотипа и фирменного стиля")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_button_small, {
    class: "services__item-button",
    onClick: ($event) => ($data.showDialog = true, $data.appType = "app_design")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Оставить заявку `);
      } else {
        return [
          createTextVNode(" Оставить заявку ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></section>`);
  if ($data.showDialog) {
    _push(ssrRenderComponent(_component_dialog_form, {
      onClose: ($event) => $data.showDialog = false,
      type: $data.appType,
      blackText: true
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Отправить `);
        } else {
          return [
            createTextVNode(" Отправить ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ServicesComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ServicesComp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-79ca6ed2"]]);
export {
  ServicesComp as default
};

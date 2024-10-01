import { H as H2Custom } from "./H2Custom-CWTniBTG.js";
import { _ as _export_sfc, F as FormComp } from "../entry-server.js";
import { P as PSmall } from "./PSmall-BSBNR74Q.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "pinia";
import "vue-router";
import "@vuelidate/core";
import "@vuelidate/validators";
import "axios";
import "maska/vue";
import "@unhead/vue";
const _sfc_main = {
  name: "contacts-comp",
  components: {
    H2Custom,
    FormComp,
    PSmall
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_h2_custom = resolveComponent("h2-custom");
  const _component_form_comp = resolveComponent("form-comp");
  const _component_p_small = resolveComponent("p-small");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "contacts",
    id: "contacts"
  }, _attrs))} data-v-c23ec76d><div class="container" data-v-c23ec76d>`);
  _push(ssrRenderComponent(_component_h2_custom, { class: "contacts__title" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Контакты`);
      } else {
        return [
          createTextVNode("Контакты")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="contacts__wrapper" data-v-c23ec76d>`);
  _push(ssrRenderComponent(_component_form_comp, { type: "ring" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Заказать обратный звонок`);
      } else {
        return [
          createTextVNode("Заказать обратный звонок")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="contacts__content" data-v-c23ec76d><a href="tel:+37491368838" data-v-c23ec76d>`);
  _push(ssrRenderComponent(_component_p_small, { class: "contacts__phone" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`+374 91 36 88 38`);
      } else {
        return [
          createTextVNode("+374 91 36 88 38")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a>`);
  _push(ssrRenderComponent(_component_p_small, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Армения, Ереван`);
      } else {
        return [
          createTextVNode("Армения, Ереван")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="mailto:info@mycodemode.ru" data-v-c23ec76d>`);
  _push(ssrRenderComponent(_component_p_small, { class: "contacts__email" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`info@mycodemode.ru`);
      } else {
        return [
          createTextVNode("info@mycodemode.ru")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ContactsComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactsComp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c23ec76d"]]);
export {
  ContactsComp as default
};

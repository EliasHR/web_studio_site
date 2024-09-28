import { _ as _export_sfc, B as ButtonMiddle } from "../entry-server.js";
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
  name: "promo-comp",
  components: {
    ButtonMiddle
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_button_middle = resolveComponent("button-middle");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "promo" }, _attrs))} data-v-f7cc3559><div class="container" data-v-f7cc3559><div class="promo__wrapper" data-v-f7cc3559><h2 class="promo__title" data-v-f7cc3559> Инструкция<br data-v-f7cc3559> «Как оптимизировать сайт: 10 шагов» </h2><a href="Инструкция по оптимизации сайта, 10 шагов.pdf" download data-v-f7cc3559>`);
  _push(ssrRenderComponent(_component_button_middle, { class: "promo__button" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Скачать`);
      } else {
        return [
          createTextVNode("Скачать")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/InstructionsComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InstructionsComp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f7cc3559"]]);
export {
  InstructionsComp as default
};

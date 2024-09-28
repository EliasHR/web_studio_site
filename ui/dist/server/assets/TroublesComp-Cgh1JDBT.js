import { _ as _export_sfc, B as ButtonMiddle, D as DialogForm } from "../entry-server.js";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
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
    ButtonMiddle,
    DialogForm
  },
  data() {
    return {
      showDialog: false
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_button_middle = resolveComponent("button-middle");
  const _component_dialog_form = resolveComponent("dialog-form");
  _push(`<!--[--><section class="promo" data-v-f93ba370><div class="container" data-v-f93ba370><div class="promo__wrapper" data-v-f93ba370><h2 class="promo__title" data-v-f93ba370> Напишите о ваших проблемах в бизнесе –<br data-v-f93ba370> мы предложим решение </h2>`);
  _push(ssrRenderComponent(_component_button_middle, {
    class: "promo__button",
    onClick: ($event) => $data.showDialog = true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Написать`);
      } else {
        return [
          createTextVNode("Написать")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
  if ($data.showDialog) {
    _push(ssrRenderComponent(_component_dialog_form, {
      onClose: ($event) => $data.showDialog = false,
      type: "business",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TroublesComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TroublesComp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f93ba370"]]);
export {
  TroublesComp as default
};

import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, B as ButtonMiddle } from "../entry-server.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import "pinia";
import "vue-router";
import "@vuelidate/core";
import "@vuelidate/validators";
import "axios";
import "maska/vue";
import "@unhead/vue";
const _imports_0 = "/assets/top_illustration_560-i23xohQG.png";
const _imports_1 = "/assets/top_illustration_960-4PdOtnYN.png";
const _imports_2 = "/assets/top_illustration-BLhnCDIM.png";
const _sfc_main$1 = {
  name: "not-found-comp",
  components: {
    ButtonMiddle
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_button_middle = resolveComponent("button-middle");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "not-found" }, _attrs))} data-v-84145d60><div class="container" data-v-84145d60><div class="not-found__wrapper" data-v-84145d60><div class="not-found__info" data-v-84145d60><div class="not-found__info-text" data-v-84145d60><h1 class="not-found__title" data-v-84145d60>На этой странице ничего нет</h1><div class="not-found__text" data-v-84145d60> Кажется, что-то пошло не так! Запрашиваемая страница не существует. Возможно, она устарела или была удалена. </div></div><div class="not-found__actions" data-v-84145d60><a href="/" data-v-84145d60>`);
  _push(ssrRenderComponent(_component_button_middle, { class: "not-found__calculate" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Вернуться на главную `);
      } else {
        return [
          createTextVNode(" Вернуться на главную ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></div></div><picture data-v-84145d60><source${ssrRenderAttr("srcset", _imports_0)} media="(max-width: 767.99px)" data-v-84145d60><source${ssrRenderAttr("srcset", _imports_1)} media="(max-width: 1199.99px)" data-v-84145d60><img class="not-found__illustration"${ssrRenderAttr("src", _imports_2)} loading="lazy" data-v-84145d60></picture></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NotFoundComp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NotFoundComp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-84145d60"]]);
const _sfc_main = {
  __name: "Page404",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(NotFoundComp, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Page404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Page404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-35e1d03c"]]);
export {
  Page404 as default
};

import { useSSRContext, mergeProps, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../entry-server.js";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "63",
    height: "63",
    viewBox: "0 0 63 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><circle cx="31.5" cy="31.5" r="27.151" transform="rotate(-90 31.5 31.5)" stroke="url(#paint0_linear_5053_6232)" stroke-width="8.69805"></circle><defs><linearGradient id="paint0_linear_5053_6232" x1="20.5" y1="72.5" x2="21.3241" y2="22.0788" gradientUnits="userSpaceOnUse"><stop stop-color="#BADCFF"></stop><stop offset="0.278" stop-color="white" stop-opacity="0.96"></stop><stop offset="0.548" stop-color="#BADCFF"></stop><stop offset="0.808" stop-color="#BADCFF" stop-opacity="0"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/icons/LoadingIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LoadingIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "loading-comp",
  components: {
    LoadingIcon
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loading_icon = resolveComponent("loading-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading" }, _attrs))} data-v-5db5b85c><div class="loading__wrapper" data-v-5db5b85c>`);
  _push(ssrRenderComponent(_component_loading_icon, { class: "loading__locked" }, null, _parent));
  _push(ssrRenderComponent(_component_loading_icon, { class: "loading__spinner" }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/LoadingComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LoadingComp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5db5b85c"]]);
export {
  LoadingComp as L
};

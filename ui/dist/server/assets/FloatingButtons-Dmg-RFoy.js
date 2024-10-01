import { useSSRContext, mergeProps, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../entry-server.js";
import "pinia";
import "vue-router";
import "@vuelidate/core";
import "@vuelidate/validators";
import "axios";
import "maska/vue";
import "@unhead/vue";
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "17",
    height: "10",
    viewBox: "0 0 17 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M1 9L8.5 1.5L16 9" stroke="url(#paint0_linear_5005_81031)" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><defs><linearGradient id="paint0_linear_5005_81031" x1="1.21211" y1="8.19764" x2="16.7818" y2="13.9724" gradientUnits="userSpaceOnUse"><stop stop-color="#BADCFF"></stop><stop offset="0.42" stop-color="white" stop-opacity="0.96"></stop><stop offset="1" stop-color="#BADCFF"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/icons/IconScrollToTop.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const IconScrollToTop = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  data() {
    return {
      scrollVisible: false
    };
  },
  components: {
    IconScrollToTop
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 200) {
        this.scrollVisible = true;
      } else {
        this.scrollVisible = false;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon_scroll_to_top = resolveComponent("icon-scroll-to-top");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "scroll-button",
    style: $data.scrollVisible ? null : { display: "none" }
  }, _attrs))}><span class="scroll-button__text">Наверх</span>`);
  _push(ssrRenderComponent(_component_icon_scroll_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/ScrollToTop.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ScrollToTop = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "64",
    height: "64",
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_4953_28140)"><circle cx="31.3733" cy="32.2639" r="31.3733" fill="url(#paint0_linear_4953_28140)"></circle><path d="M45.1186 19.5259L40.0991 44.8329C40.0991 44.8329 39.3974 46.5877 37.4666 45.7453L25.8315 36.84C27.3954 35.4342 39.5276 24.5268 40.0582 24.0321C40.8782 23.2666 40.3694 22.811 39.416 23.39L21.4957 34.7703L14.5819 32.4428C14.5819 32.4428 13.4935 32.0566 13.3887 31.2143C13.2834 30.3719 14.6173 29.9157 14.6173 29.9157L42.8022 18.8589C42.8022 18.8589 45.1186 17.8411 45.1186 19.5259Z" fill="#10A5D7"></path></g><defs><linearGradient id="paint0_linear_4953_28140" x1="0.887261" y1="56.9244" x2="72.5131" y2="70.2074" gradientUnits="userSpaceOnUse"><stop stop-color="#BADCFF"></stop><stop offset="0.42" stop-color="white" stop-opacity="0.96"></stop><stop offset="1" stop-color="#BADCFF"></stop></linearGradient><clipPath id="clip0_4953_28140"><rect width="63.9985" height="63.1096" fill="white" transform="translate(0 0.890625)"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/icons/FixedTelegram.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FixedTelegram = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "64",
    height: "64",
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_4953_28136)"><circle cx="31.3733" cy="31.4875" r="31.3733" fill="url(#paint0_linear_4953_28136)"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M32.3171 14.3364C22.8179 14.3364 15.1172 22.0371 15.1172 31.5364C15.1172 34.6707 15.9559 37.609 17.4207 40.1396L15.1172 48.7363L23.7139 46.4328C26.2446 47.8975 29.1829 48.7363 32.3171 48.7363C41.8164 48.7363 49.5171 41.0357 49.5171 31.5364C49.5171 22.0371 41.8164 14.3364 32.3171 14.3364ZM42.4035 39.7949L40.9193 41.2791C37.934 43.1494 32.16 41.1367 27.4384 36.4152C22.7168 31.6936 20.7042 25.9196 22.5745 22.9343L24.0587 21.45C24.5246 20.9842 25.2868 20.9842 25.7525 21.45L29.3871 25.0846C29.853 25.5505 29.853 26.3127 29.3871 26.7785L27.9029 28.2627C27.2388 29.4813 28.1317 31.819 30.0832 33.7705C32.0347 35.7219 34.3724 36.6148 35.5909 35.9508L37.0752 34.4665C37.541 34.0007 38.3032 34.0007 38.769 34.4665L42.4036 38.1011C42.8693 38.5668 42.8693 39.329 42.4035 39.7949Z" fill="#0DCC48"></path></g><defs><linearGradient id="paint0_linear_4953_28136" x1="0.887261" y1="56.1481" x2="72.5131" y2="69.431" gradientUnits="userSpaceOnUse"><stop stop-color="#BADCFF"></stop><stop offset="0.42" stop-color="white" stop-opacity="0.96"></stop><stop offset="1" stop-color="#BADCFF"></stop></linearGradient><clipPath id="clip0_4953_28136"><rect width="63.9985" height="63.1096" fill="white" transform="translate(0 0.114258)"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/icons/FixedWhatsApp.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FixedWhatsApp = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "social-buttons",
  components: {
    FixedTelegram,
    FixedWhatsApp
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_fixed_whats_app = resolveComponent("fixed-whats-app");
  const _component_fixed_telegram = resolveComponent("fixed-telegram");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "social" }, _attrs))}><a href="https://wa.me/37491368838" title="Переход на диалог в месседжер What&#39;sApp" target="_blank" class="social__link">`);
  _push(ssrRenderComponent(_component_fixed_whats_app, { class: "social__wa" }, null, _parent));
  _push(`</a><a href="https://t.me/code_mode7" title="Переход на диалог в месседжер Telegram" target="_blank" class="social__link">`);
  _push(ssrRenderComponent(_component_fixed_telegram, { class: "social__tg" }, null, _parent));
  _push(`</a></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/SocialButtons.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SocialButtons = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "floating-buttons",
  components: {
    ScrollToTop,
    SocialButtons
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_social_buttons = resolveComponent("social-buttons");
  const _component_scroll_to_top = resolveComponent("scroll-to-top");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "floating-buttons" }, _attrs))} data-v-3b2e91a9>`);
  _push(ssrRenderComponent(_component_social_buttons, null, null, _parent));
  _push(ssrRenderComponent(_component_scroll_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/FloatingButtons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FloatingButtons = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3b2e91a9"]]);
export {
  FloatingButtons as default
};

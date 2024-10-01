import { H as H2Custom } from "./H2Custom-CWTniBTG.js";
import { P as PSmall } from "./PSmall-BSBNR74Q.js";
import { mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, N as NavItem } from "../entry-server.js";
import "pinia";
import "vue-router";
import "@vuelidate/core";
import "@vuelidate/validators";
import "axios";
import "maska/vue";
import "@unhead/vue";
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "18",
    height: "17",
    viewBox: "0 0 18 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M8.99937 0.5C4.46063 0.5 0.78125 4.17938 0.78125 8.71812C0.78125 10.2157 1.182 11.6196 1.88185 12.8287L0.78125 16.9363L4.88877 15.8356C6.09793 16.5355 7.50182 16.9363 8.99937 16.9363C13.5381 16.9363 17.2175 13.2569 17.2175 8.71812C17.2175 4.17938 13.5381 0.5 8.99937 0.5ZM13.8186 12.664L13.1095 13.3732C11.6831 14.2668 8.92428 13.3052 6.6683 11.0492C4.41236 8.79325 3.45073 6.03444 4.34434 4.60804L5.05351 3.89887C5.27608 3.6763 5.64026 3.6763 5.8628 3.89887L7.59942 5.63548C7.82199 5.85806 7.82199 6.22224 7.59942 6.44482L6.89025 7.15399C6.57293 7.73621 6.99958 8.85316 7.932 9.78557C8.86441 10.718 9.98136 11.1446 10.5636 10.8273L11.2728 10.1182C11.4953 9.89558 11.8595 9.89558 12.0821 10.1182L13.8187 11.8548C14.0412 12.0773 14.0412 12.4415 13.8186 12.664Z" fill="white"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/icons/FooterWhatsApp.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FooterWhatsApp = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "17",
    height: "16",
    viewBox: "0 0 17 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M17 1.24021L14.3112 14.7965C14.3112 14.7965 13.9353 15.7365 12.901 15.2853L6.66843 10.5149C7.50615 9.76187 14.0051 3.91906 14.2893 3.6541C14.7286 3.24404 14.456 2.99999 13.9453 3.31011L4.34585 9.40626L0.642342 8.15947C0.642342 8.15947 0.0592902 7.95261 0.00317643 7.50138C-0.0532694 7.05015 0.661268 6.80577 0.661268 6.80577L15.7592 0.882945C15.7592 0.882945 17 0.337745 17 1.24021Z" fill="white"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/icons/FooterTelegram.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FooterTelegram = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "footer-nav-bar",
  components: {
    NavItem
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nav_item = resolveComponent("nav-item");
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "footer-nav-bar" }, _attrs))} data-v-d959e57b>`);
  _push(ssrRenderComponent(_component_nav_item, { href: "/#services" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Услуги`);
      } else {
        return [
          createTextVNode("Услуги")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nav_item, { href: "/#about" }, {
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
  _push(ssrRenderComponent(_component_nav_item, { href: "/#examples" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Примеры проектов`);
      } else {
        return [
          createTextVNode("Примеры проектов")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nav_item, { href: "/#reviews" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Отзывы`);
      } else {
        return [
          createTextVNode("Отзывы")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nav_item, { href: "/#technologies" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Технологии`);
      } else {
        return [
          createTextVNode("Технологии")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nav_item, { href: "/#contacts" }, {
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
  _push(`</nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/navbar/FooterNavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d959e57b"]]);
const _sfc_main = {
  name: "footer-comp",
  components: {
    H2Custom,
    PSmall,
    FooterWhatsApp,
    FooterTelegram,
    FooterNavBar
  },
  data() {
    return {
      currentYear: (/* @__PURE__ */ new Date()).getFullYear()
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_h2_custom = resolveComponent("h2-custom");
  const _component_p_small = resolveComponent("p-small");
  const _component_footer_whats_app = resolveComponent("footer-whats-app");
  const _component_footer_telegram = resolveComponent("footer-telegram");
  const _component_footer_nav_bar = resolveComponent("footer-nav-bar");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-f0660ba1><div class="container" data-v-f0660ba1>`);
  _push(ssrRenderComponent(_component_h2_custom, { class: "footer__title" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`IT-разработка для вашего бизнеса`);
      } else {
        return [
          createTextVNode("IT-разработка для вашего бизнеса")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="footer__wrapper" data-v-f0660ba1><div class="footer__content" data-v-f0660ba1><div class="footer__content-contacts" data-v-f0660ba1>`);
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
  _push(`<a href="mailto:info@mycodemode.ru" class="footer__link" data-v-f0660ba1>`);
  _push(ssrRenderComponent(_component_p_small, null, {
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
  _push(`</a><div class="footer__content-social" data-v-f0660ba1><a href="https://wa.me/37491368838" title="Переход на диалог в месседжер What&#39;sApp" target="_blank" data-v-f0660ba1>`);
  _push(ssrRenderComponent(_component_footer_whats_app, null, null, _parent));
  _push(`</a><a href="https://t.me/code_mode7" title="Переход на диалог в месседжер Telegram" target="_blank" data-v-f0660ba1>`);
  _push(ssrRenderComponent(_component_footer_telegram, null, null, _parent));
  _push(`</a></div></div><div class="footer__content-menu" data-v-f0660ba1>`);
  _push(ssrRenderComponent(_component_footer_nav_bar, null, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_p_small, { class: "footer__copyright" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`© 2022-${ssrInterpolate($data.currentYear)} Code mode`);
      } else {
        return [
          createTextVNode("© 2022-" + toDisplayString($data.currentYear) + " Code mode", 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/FooterComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FooterComp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f0660ba1"]]);
export {
  FooterComp as default
};

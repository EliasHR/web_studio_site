import { useSSRContext, mergeProps, resolveComponent, withCtx, createTextVNode, defineAsyncComponent, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, B as ButtonMiddle, D as DialogForm } from "../entry-server.js";
import "pinia";
import "vue-router";
import "@vuelidate/core";
import "@vuelidate/validators";
import "axios";
import "maska/vue";
import "@unhead/vue";
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><circle cx="16" cy="16" r="16" fill="#278EED"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7706 8.58885C15.7071 8.61916 15.6245 8.69365 15.5872 8.75437C15.52 8.86371 15.5192 8.91001 15.5027 13.6036L15.4861 18.3424L14.3523 17.2678C13.7287 16.6768 13.1756 16.1718 13.1231 16.1454C12.7129 15.9397 12.2497 16.3647 12.4622 16.7518C12.5449 16.9023 15.6391 19.827 15.7928 19.8999C15.9164 19.9585 16.059 19.9646 16.1925 19.917C16.3367 19.8657 19.4574 16.9056 19.5426 16.7394C19.6555 16.5191 19.5841 16.2933 19.3607 16.1645C19.2342 16.0915 19.0054 16.0837 18.8774 16.148C18.8278 16.1729 18.2771 16.6768 17.6536 17.2678L16.5198 18.3424L16.5031 13.6036C16.4866 8.91001 16.4858 8.86371 16.4186 8.75437C16.339 8.6249 16.1672 8.53369 16.0029 8.53369C15.9387 8.53369 15.8342 8.55851 15.7706 8.58885ZM7.73545 15.8111C7.67256 15.8415 7.59003 15.9063 7.55204 15.9553C7.48392 16.0431 7.48285 16.0758 7.47228 18.3365C7.46084 20.7856 7.46908 20.9528 7.62304 21.4013C7.95123 22.3571 8.7292 23.0691 9.78387 23.3789L10.084 23.467L16.0029 23.467L21.9219 23.467L22.222 23.3789C22.8602 23.1914 23.4089 22.8534 23.8041 22.4041C24.0521 22.1222 24.3441 21.5801 24.446 21.212C24.5192 20.9481 24.5205 20.9069 24.5311 18.57C24.541 16.4106 24.5369 16.186 24.4866 16.0857C24.3303 15.7742 23.8763 15.7373 23.6582 16.0184C23.5902 16.106 23.5889 16.1439 23.5708 18.4626C23.5545 20.5633 23.5463 20.8382 23.4951 21.007C23.3136 21.605 22.8913 22.0877 22.322 22.3476C21.8105 22.5811 22.1814 22.5682 16.0029 22.5682C9.82448 22.5682 10.1953 22.5811 9.68383 22.3476C9.11454 22.0877 8.69228 21.6051 8.51074 21.007C8.45946 20.8381 8.45132 20.5624 8.43498 18.4352C8.41788 16.2088 8.41274 16.047 8.35652 15.9658C8.22027 15.7693 7.9578 15.7039 7.73545 15.8111Z" fill="white"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/icons/GiftDownload.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const GiftDownload = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$1 = "data:image/png;base64,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";
const _sfc_main$2 = {
  name: "gift-comp",
  components: { GiftDownload }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_gift_download = resolveComponent("gift-download");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "gift" }, _attrs))} data-v-0720cfd9><img class="gift__pdf"${ssrRenderAttr("src", _imports_0$1)} alt="Иконка PDF-файла" width="40px" height="40px" data-v-0720cfd9><div class="gift__wrapper" data-v-0720cfd9><div class="gift__text" data-v-0720cfd9><div data-v-0720cfd9>Скачать бесплатно</div><div data-v-0720cfd9><a class="gift__link" href="Оптимизация сайта.pdf" download data-v-0720cfd9>Оптимизация сайта.pdf</a></div></div><a class="gift__link" href="Оптимизация сайта.pdf" download title="Скачать PDF-файл" data-v-0720cfd9>`);
  _push(ssrRenderComponent(_component_gift_download, { class: "geft__download" }, null, _parent));
  _push(`</a></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/GiftComp.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const GiftComp = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-0720cfd9"]]);
const _imports_0 = "/top_illustration_560.png";
const _imports_1 = "/top_illustration_960.png";
const _imports_2 = "/top_illustration.png";
const _sfc_main$1 = {
  name: "top-comp",
  components: {
    ButtonMiddle,
    GiftComp,
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
  const _component_gift_comp = resolveComponent("gift-comp");
  const _component_dialog_form = resolveComponent("dialog-form");
  _push(`<!--[--><section class="top" data-v-bc31c36a><div class="container" data-v-bc31c36a><div class="top__wrapper" data-v-bc31c36a><div class="top__info" data-v-bc31c36a><div class="top__info-text" data-v-bc31c36a><h1 class="top__title" data-v-bc31c36a> Разработка<br data-v-bc31c36a><span class="top__title_gradient" data-v-bc31c36a>ботов</span> и <span class="top__title_gradient" data-v-bc31c36a>сайтов</span><br data-v-bc31c36a> с гарантией результата </h1><div class="top__text" data-v-bc31c36a> Создаем, внедряем, тестируем, поддерживаем it-продукты </div></div><div class="top__actions" data-v-bc31c36a>`);
  _push(ssrRenderComponent(_component_button_middle, {
    class: "top__calculate",
    onClick: ($event) => $data.showDialog = true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Рассчитать стоимость проекта`);
      } else {
        return [
          createTextVNode("Рассчитать стоимость проекта")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a class="top__link" href="https://t.me/code_mode7" target="_blank" data-v-bc31c36a>`);
  _push(ssrRenderComponent(_component_button_middle, { class: "top__tg-link" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Написать в телеграм`);
      } else {
        return [
          createTextVNode("Написать в телеграм")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></div></div><picture data-v-bc31c36a><source${ssrRenderAttr("srcset", _imports_0)} media="(max-width: 767.99px)" data-v-bc31c36a><source${ssrRenderAttr("srcset", _imports_1)} media="(max-width: 1199.99px)" data-v-bc31c36a><img class="top__illustration"${ssrRenderAttr("src", _imports_2)} alt="Декоративный элемент главного блока страницы - треугольные скобки с косой чертой внутри" width="500px" height="350px" data-v-bc31c36a></picture></div><div class="top__bottom-section" data-v-bc31c36a><div class="top__gift" data-v-bc31c36a>`);
  _push(ssrRenderComponent(_component_gift_comp, null, null, _parent));
  _push(`</div><div class="top__services" data-v-bc31c36a><ul class="top__services-list" data-v-bc31c36a><li class="top__services-item" data-v-bc31c36a>Телеграм бот</li><li class="top__services-item" data-v-bc31c36a>Интеграции с CRM, 1С, МойСклад</li><li class="top__services-item top__services-item_gradient" data-v-bc31c36a> Решения для бизнеса </li><li class="top__services-item" data-v-bc31c36a>Интеграции с CRM, 1С, МойСклад</li><li class="top__services-item" data-v-bc31c36a>Создание сайта</li><li class="top__services-item" data-v-bc31c36a>Доработка, перенос, редизайн</li></ul></div></div></div></section>`);
  if ($data.showDialog) {
    _push(ssrRenderComponent(_component_dialog_form, {
      onClose: ($event) => $data.showDialog = false,
      type: "cost",
      blackText: true
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Рассчитать стоимость проекта `);
        } else {
          return [
            createTextVNode(" Рассчитать стоимость проекта ")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TopComp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TopComp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bc31c36a"]]);
const _sfc_main = {
  __name: "HomeView",
  __ssrInlineRender: true,
  setup(__props) {
    const ServicesComp = defineAsyncComponent(() => import("./ServicesComp-Xg7oSRZ6.js"));
    const PromoComp = defineAsyncComponent(() => import("./PromoComp-CW8EGpWT.js"));
    const ProjectsComp = defineAsyncComponent(() => import("./ProjectsComp-D_fIhSuX.js"));
    const InstructionsComp = defineAsyncComponent(() => import("./InstructionsComp-DbTH907e.js"));
    const TroublesComp = defineAsyncComponent(() => import("./TroublesComp-Cgh1JDBT.js"));
    const ReviewsComp = defineAsyncComponent(() => import("./ReviewsComp-C_REp3zk.js"));
    const AboutComp = defineAsyncComponent(() => import("./AboutComp-Oqs75NK5.js"));
    const TechnologiesComp = defineAsyncComponent(() => import("./TechnologiesComp-BwYD9JxP.js"));
    const FaqComp = defineAsyncComponent(() => import("./FaqComp--QsrxHJF.js"));
    const ContactsComp = defineAsyncComponent(() => import("./ContactsComp-BU0sGL9z.js"));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(TopComp, null, null, _parent));
      _push(`<main class="main" data-v-29236092>`);
      _push(ssrRenderComponent(unref(ServicesComp), null, null, _parent));
      _push(ssrRenderComponent(unref(InstructionsComp), null, null, _parent));
      _push(ssrRenderComponent(unref(ProjectsComp), null, null, _parent));
      _push(ssrRenderComponent(unref(PromoComp), null, null, _parent));
      _push(ssrRenderComponent(unref(AboutComp), null, null, _parent));
      _push(ssrRenderComponent(unref(TroublesComp), null, null, _parent));
      _push(ssrRenderComponent(unref(TechnologiesComp), null, null, _parent));
      _push(ssrRenderComponent(unref(ReviewsComp), null, null, _parent));
      _push(ssrRenderComponent(unref(FaqComp), null, null, _parent));
      _push(ssrRenderComponent(unref(ContactsComp), null, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/HomeView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-29236092"]]);
export {
  HomeView as default
};

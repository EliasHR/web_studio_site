import { _ as _export_sfc, I as IconClose, b as HamburgerTelegram, c as HamburgerWhatsapp, N as NavItem, B as ButtonMiddle, P as PSuperSmall, D as DialogForm, H as H2Custom } from "../entry-server.js";
import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import axios from "axios";
import { defineStore } from "pinia";
import { L as LoadingComp } from "./LoadingComp-BolcRYlq.js";
import "vue-router";
import "@vuelidate/core";
import "@vuelidate/validators";
import "maska/vue";
import "@unhead/vue";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M5.57031 10.2666L10.1393 16.5302L18.3633 5.56764" stroke="#278EED" stroke-width="2.14447" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/icons/IconCheckmark.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const IconCheckmark = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const apiUrl = "https://mycodemode.ru/api";
const useProjectStore = defineStore("projects", {
  state: () => ({
    projects: [],
    projectsIsLoading: false,
    project: [],
    projectIsLoading: false
  }),
  actions: {
    async getProjects() {
      try {
        this.projectsIsLoading = true;
        const response = await axios.get(apiUrl + "/projects/");
        this.projects = response.data;
        this.projectsIsLoading = false;
      } catch (e) {
        console.log(e);
      }
    },
    async getProject(project_url) {
      try {
        this.projectIsLoading = true;
        const response = await axios.get(project_url);
        this.project = response.data;
        this.projectIsLoading = false;
      } catch (e) {
        console.log(e);
      }
    }
  }
});
const _sfc_main$1 = {
  name: "dialog-project",
  emits: ["close"],
  components: {
    IconClose,
    IconCheckmark,
    HamburgerTelegram,
    HamburgerWhatsapp,
    NavItem,
    ButtonMiddle,
    PSuperSmall,
    DialogForm,
    LoadingComp
  },
  data() {
    return {
      showDialog: false
    };
  },
  props: {
    type: {
      type: String,
      default: "ring"
    },
    blackText: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const projectsStore = useProjectStore();
    return {
      projectsStore
    };
  },
  methods: {
    disableScroll() {
      document.body.style.overflow = "hidden";
    },
    enableScroll() {
      document.body.style.overflow = "";
    }
  },
  mounted() {
    this.disableScroll();
  },
  unmounted() {
    this.enableScroll();
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon_close = resolveComponent("icon-close");
  const _component_icon_checkmark = resolveComponent("icon-checkmark");
  const _component_nav_item = resolveComponent("nav-item");
  const _component_hamburger_whatsapp = resolveComponent("hamburger-whatsapp");
  const _component_hamburger_telegram = resolveComponent("hamburger-telegram");
  const _component_button_middle = resolveComponent("button-middle");
  const _component_p_super_small = resolveComponent("p-super-small");
  const _component_loading_comp = resolveComponent("loading-comp");
  const _component_dialog_form = resolveComponent("dialog-form");
  _push(`<!--[--><div class="dialog-project" data-v-7e2064e0><div class="dialog-project__container" data-v-7e2064e0>`);
  _push(ssrRenderComponent(_component_icon_close, {
    class: "dialog-project__close",
    onClick: ($event) => _ctx.$emit("close")
  }, null, _parent));
  _push(`<div class="${ssrRenderClass([{ "dialog-project__wrapper_one-column": $setup.projectsStore.projectIsLoading }, "dialog-project__wrapper"])}" data-v-7e2064e0>`);
  if (!$setup.projectsStore.projectIsLoading) {
    _push(`<div class="dialog-project__presentation" data-v-7e2064e0><!--[-->`);
    ssrRenderList(this.projectsStore.project.images, (presentation, index) => {
      _push(`<img class="dialog-project__presentation-image"${ssrRenderAttr(
        "src",
        presentation.image_webp ? presentation.image_webp : presentation.image
      )}${ssrRenderAttr("alt", presentation.alt)} data-v-7e2064e0>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$setup.projectsStore.projectIsLoading) {
    _push(`<div class="dialog-project__info" data-v-7e2064e0><h2 class="dialog-project__info-title" data-v-7e2064e0>${ssrInterpolate($setup.projectsStore.project.title)}</h2><div class="dialog-project__info-wrapper" data-v-7e2064e0><div class="dialog-project__info-description" data-v-7e2064e0><h3 class="dialog-project__info-subtitle" data-v-7e2064e0> Особенности реализации проекта </h3>`);
    if ($setup.projectsStore.project.project_link) {
      _push(`<a${ssrRenderAttr("href", $setup.projectsStore.project.project_link)} class="dialog-project__info-link" target="_blank" data-v-7e2064e0>${ssrInterpolate($setup.projectsStore.project.project_link)}</a>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<ul class="dialog-project__info-list" data-v-7e2064e0><!--[-->`);
    ssrRenderList(this.projectsStore.project.features, (feature, index) => {
      _push(`<li class="dialog-project__info-list-item" data-v-7e2064e0>`);
      _push(ssrRenderComponent(_component_icon_checkmark, {
        class: "dialog-project__info-list-item-icon",
        width: "24px",
        height: "24px"
      }, null, _parent));
      _push(`<span data-v-7e2064e0>${ssrInterpolate(feature.title)}</span></li>`);
    });
    _push(`<!--]--></ul></div><div class="dialog-project__info-contacts" data-v-7e2064e0><h3 class="dialog-project__info-subtitle dialog-project__info-subtitle_mobile" data-v-7e2064e0> А какая задача у вас?<br data-v-7e2064e0>Свяжитесь с нами: </h3><div class="dialog-project__info-contacts-wrapper" data-v-7e2064e0><div class="dialog-project__info-contacts-social" data-v-7e2064e0>`);
    _push(ssrRenderComponent(_component_nav_item, {
      href: "https://wa.me/37491368838",
      target: "_blank"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_hamburger_whatsapp, { class: "dialog-project__info-list-item-icon" }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_hamburger_whatsapp, { class: "dialog-project__info-list-item-icon" })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_nav_item, {
      href: "https://t.me/code_mode7",
      target: "_blank"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_hamburger_telegram, { class: "dialog-project__info-list-item-icon" }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_hamburger_telegram, { class: "dialog-project__info-list-item-icon" })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="dialog-project__info-contacts-mail" data-v-7e2064e0>`);
    _push(ssrRenderComponent(_component_nav_item, { href: "mailto:info@mycodemode.ru" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` info@mycodemode.ru `);
        } else {
          return [
            createTextVNode(" info@mycodemode.ru ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="dialog-project__info-contacts-phone" data-v-7e2064e0>`);
    _push(ssrRenderComponent(_component_nav_item, { href: "tel:+37491368838" }, {
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
    _push(`</div>`);
    _push(ssrRenderComponent(_component_button_middle, {
      class: "dialog-project__info-contacts-button",
      onClick: ($event) => $data.showDialog = true
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Обратный звонок`);
        } else {
          return [
            createTextVNode("Обратный звонок")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_p_super_small, { class: "dialog-project__info-contacts-policy" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Нажимая на кнопку, вы соглашаетесь с <a class="dialog-project__info-contacts-link" href="Политика конфиденциальности Code mode.pdf" target="_blank" data-v-7e2064e0${_scopeId}>политикой конфиденциальности</a>`);
        } else {
          return [
            createTextVNode(" Нажимая на кнопку, вы соглашаетесь с "),
            createVNode("a", {
              class: "dialog-project__info-contacts-link",
              href: "Политика конфиденциальности Code mode.pdf",
              target: "_blank"
            }, "политикой конфиденциальности")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div></div>`);
  } else {
    _push(`<div class="dialog-project__loading" data-v-7e2064e0>`);
    _push(ssrRenderComponent(_component_loading_comp, null, null, _parent));
    _push(`</div>`);
  }
  _push(`</div></div></div>`);
  if ($data.showDialog) {
    _push(ssrRenderComponent(_component_dialog_form, {
      onClose: ($event) => $data.showDialog = false,
      type: "ring",
      blackText: true
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Заказать обратный звонок `);
        } else {
          return [
            createTextVNode(" Заказать обратный звонок ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/dialog/DialogProject.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DialogProjects = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-7e2064e0"]]);
const _imports_0 = "/assets/projects_gear-BfN4UM0B.png";
const _sfc_main = {
  name: "projects-comp",
  components: {
    H2Custom,
    DialogForm,
    DialogProjects,
    LoadingComp
  },
  data() {
    return {
      currentBreakpoint: "",
      showDialogForm: false,
      showDialogProject: false
    };
  },
  setup() {
    const projectsStore = useProjectStore();
    projectsStore.getProjects();
    return {
      projectsStore
    };
  },
  mounted() {
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenWidth);
  },
  methods: {
    checkScreenWidth() {
      const width = window.innerWidth;
      if (width >= 1200) {
        this.currentBreakpoint = "1200";
      } else if (width >= 992) {
        this.currentBreakpoint = "992";
      } else if (width >= 768) {
        this.currentBreakpoint = "768";
      } else if (width >= 575) {
        this.currentBreakpoint = "575";
      } else if (width >= 400) {
        this.currentBreakpoint = "400";
      } else {
        this.currentBreakpoint = "320";
      }
    },
    getCoverImage(project) {
      switch (this.currentBreakpoint) {
        case "1200":
          return project.cover_webp ? project.cover_webp : project.cover;
        case "992":
          return project.cover_960_webp ? project.cover_960_webp : project.cover_960;
        case "768":
          return project.cover_740_webp ? project.cover_740_webp : project.cover_740;
        case "575":
          return project.cover_560_webp ? project.cover_560_webp : project.cover_560;
        case "400":
          return project.cover_380_webp ? project.cover_380_webp : project.cover_380;
        case "320":
          return project.cover_314_webp ? project.cover_314_webp : project.cover_314;
      }
    },
    handleClick(enable_detail, project_url) {
      if (enable_detail) {
        this.projectsStore.getProject(project_url);
        this.showDialogProject = true;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_h2_custom = resolveComponent("h2-custom");
  const _component_loading_comp = resolveComponent("loading-comp");
  const _component_dialog_form = resolveComponent("dialog-form");
  const _component_dialog_projects = resolveComponent("dialog-projects");
  _push(`<!--[--><section class="projects" id="examples" data-v-15c1a8e7><div class="container" data-v-15c1a8e7>`);
  _push(ssrRenderComponent(_component_h2_custom, { class: "projects__title" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Наши проекты`);
      } else {
        return [
          createTextVNode("Наши проекты")
        ];
      }
    }),
    _: 1
  }, _parent));
  if (!$setup.projectsStore.projectsIsLoading) {
    _push(`<div class="projects__wrapper" data-v-15c1a8e7>`);
    if ($setup.projectsStore.projects.length > 0) {
      _push(`<div class="projects__item" data-v-15c1a8e7><div class="projects__item-bg" style="${ssrRenderStyle({
        backgroundImage: `url(${$options.getCoverImage($setup.projectsStore.projects[0])})`
      })}" data-v-15c1a8e7><h3 class="${ssrRenderClass([{
        "projects__item-title_white": $setup.projectsStore.projects[0].title_alt_color
      }, "projects__item-title"])}" data-v-15c1a8e7>${ssrInterpolate(this.projectsStore.projects[0].title)}</h3></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--[-->`);
    ssrRenderList(this.projectsStore.projects.slice(1), (project, index) => {
      _push(`<div class="projects__item" data-v-15c1a8e7><div class="projects__item-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$options.getCoverImage(project)})` })}" data-v-15c1a8e7><h3 class="${ssrRenderClass([{ "projects__item-title_white": project.title_alt_color }, "projects__item-title"])}" data-v-15c1a8e7>${ssrInterpolate(project.title)}</h3></div></div>`);
    });
    _push(`<!--]--><div class="projects__item" data-v-15c1a8e7><div class="projects__item-bg projects__request" data-v-15c1a8e7><h3 class="projects__item-title projects__item-title_white" data-v-15c1a8e7> Какая задача у вас? </h3><img class="projects__request-gear"${ssrRenderAttr("src", _imports_0)} alt="Шестерёнка" width="213px" height="236px" data-v-15c1a8e7><button class="projects__request-button projects__link projects__item-title_white" data-v-15c1a8e7> Оставить заявку </button></div></div></div>`);
  } else {
    _push(ssrRenderComponent(_component_loading_comp, null, null, _parent));
  }
  _push(`</div></section>`);
  if ($data.showDialogForm) {
    _push(ssrRenderComponent(_component_dialog_form, {
      onClose: ($event) => $data.showDialogForm = false,
      type: "app",
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
  if ($data.showDialogProject) {
    _push(ssrRenderComponent(_component_dialog_projects, {
      onClose: ($event) => $data.showDialogProject = false
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ProjectsComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectsComp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-15c1a8e7"]]);
export {
  ProjectsComp as default
};

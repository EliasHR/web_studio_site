import{_ as I,o as s,c as r,b as t,j as H,k as L,I as M,l as V,m as U,N as A,i as G,P as J,D as $,a as i,n as x,d as n,q as y,F as j,s as C,g,t as u,w as _,e as d,f,p as P,h as F,H as K}from"./index-Bqcj60wf.js";import{L as N}from"./LoadingComp-oC0bwO7-.js";const O={},Q={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R=t("path",{d:"M5.57031 10.2666L10.1393 16.5302L18.3633 5.56764",stroke:"#278EED","stroke-width":"2.14447","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),X=[R];function Y(e,o){return s(),r("svg",Q,X)}const Z=I(O,[["render",Y]]),ee="https://mycodemode.ru/api",z=H("projects",{state:()=>({projects:[],projectsIsLoading:!1,project:[],projectIsLoading:!1}),actions:{async getProjects(){try{this.projectsIsLoading=!0;const e=await L.get(ee+"/projects/");this.projects=e.data,this.projectsIsLoading=!1}catch(e){console.log(e)}},async getProject(e){try{this.projectIsLoading=!0;const o=await L.get(e);this.project=o.data,this.projectIsLoading=!1}catch(o){console.log(o)}}}}),te={name:"dialog-project",emits:["close"],components:{IconClose:M,IconCheckmark:Z,HamburgerTelegram:V,HamburgerWhatsapp:U,NavItem:A,ButtonMiddle:G,PSuperSmall:J,DialogForm:$,LoadingComp:N},data(){return{showDialog:!1}},props:{type:{type:String,default:"ring"},blackText:{type:Boolean,default:!1}},setup(){return{projectsStore:z()}},methods:{disableScroll(){document.body.style.overflow="hidden"},enableScroll(){document.body.style.overflow=""}},mounted(){this.disableScroll()},unmounted(){this.enableScroll()}},B=e=>(P("data-v-7e2064e0"),e=e(),F(),e),oe={key:0,class:"dialog-project__presentation"},se=["src","alt"],re={key:1,class:"dialog-project__info"},ce={class:"dialog-project__info-title"},ie={class:"dialog-project__info-wrapper"},ne={class:"dialog-project__info-description"},ae=B(()=>t("h3",{class:"dialog-project__info-subtitle"}," Особенности реализации проекта ",-1)),le=["href"],_e={class:"dialog-project__info-list"},de={class:"dialog-project__info-contacts"},pe=B(()=>t("h3",{class:"dialog-project__info-subtitle dialog-project__info-subtitle_mobile"},[d(" А какая задача у вас?"),t("br"),d("Свяжитесь с нами: ")],-1)),me={class:"dialog-project__info-contacts-wrapper"},ge={class:"dialog-project__info-contacts-social"},he={class:"dialog-project__info-contacts-mail"},je={class:"dialog-project__info-contacts-phone"},ue=B(()=>t("a",{class:"dialog-project__info-contacts-link",href:"Политика конфиденциальности Code mode.pdf",target:"_blank"},"политикой конфиденциальности",-1)),fe={key:2,class:"dialog-project__loading"};function ve(e,o,E,c,p,h){const v=i("icon-close"),w=i("icon-checkmark"),k=i("hamburger-whatsapp"),m=i("nav-item"),a=i("hamburger-telegram"),b=i("button-middle"),D=i("p-super-small"),T=i("loading-comp"),q=i("dialog-form");return s(),r(j,null,[t("div",{class:"dialog-project",onClick:o[3]||(o[3]=x(l=>e.$emit("close"),["stop"]))},[t("div",{class:"dialog-project__container",onClick:o[2]||(o[2]=x(()=>{},["stop"]))},[n(v,{class:"dialog-project__close",onClick:o[0]||(o[0]=l=>e.$emit("close"))}),t("div",{class:y(["dialog-project__wrapper",{"dialog-project__wrapper_one-column":c.projectsStore.projectIsLoading}])},[c.projectsStore.projectIsLoading?g("",!0):(s(),r("div",oe,[(s(!0),r(j,null,C(this.projectsStore.project.images,(l,S)=>(s(),r("img",{key:S,class:"dialog-project__presentation-image",src:l.image_webp?l.image_webp:l.image,alt:l.alt},null,8,se))),128))])),c.projectsStore.projectIsLoading?(s(),r("div",fe,[n(T)])):(s(),r("div",re,[t("h2",ce,u(c.projectsStore.project.title),1),t("div",ie,[t("div",ne,[ae,c.projectsStore.project.project_link?(s(),r("a",{key:0,href:c.projectsStore.project.project_link,class:"dialog-project__info-link",target:"_blank"},u(c.projectsStore.project.project_link),9,le)):g("",!0),t("ul",_e,[(s(!0),r(j,null,C(this.projectsStore.project.features,(l,S)=>(s(),r("li",{class:"dialog-project__info-list-item",key:S},[n(w,{class:"dialog-project__info-list-item-icon",width:"24px",height:"24px"}),t("span",null,u(l.title),1)]))),128))])]),t("div",de,[pe,t("div",me,[t("div",ge,[n(m,{href:"https://wa.me/37491368838",target:"_blank"},{default:_(()=>[n(k,{class:"dialog-project__info-list-item-icon"})]),_:1}),n(m,{href:"https://t.me/code_mode7",target:"_blank"},{default:_(()=>[n(a,{class:"dialog-project__info-list-item-icon"})]),_:1})]),t("div",he,[n(m,{href:"mailto:info@mycodemode.ru"},{default:_(()=>[d(" info@mycodemode.ru ")]),_:1})]),t("div",je,[n(m,{href:"tel:+37491368838"},{default:_(()=>[d("+374 91 36 88 38")]),_:1})]),n(b,{class:"dialog-project__info-contacts-button",onClick:o[1]||(o[1]=l=>p.showDialog=!0)},{default:_(()=>[d("Обратный звонок")]),_:1}),n(D,{class:"dialog-project__info-contacts-policy"},{default:_(()=>[d(" Нажимая на кнопку, вы соглашаетесь с "),ue]),_:1})])])])]))],2)])]),p.showDialog?(s(),f(q,{key:0,onClose:o[4]||(o[4]=l=>p.showDialog=!1),type:"ring",blackText:!0},{default:_(()=>[d(" Заказать обратный звонок ")]),_:1})):g("",!0)],64)}const we=I(te,[["render",ve],["__scopeId","data-v-7e2064e0"]]),ke="/assets/projects_gear-BfN4UM0B.png",be={name:"projects-comp",components:{H2Custom:K,DialogForm:$,DialogProjects:we,LoadingComp:N},data(){return{currentBreakpoint:"",showDialogForm:!1,showDialogProject:!1}},setup(){return{projectsStore:z()}},mounted(){this.projectsStore.getProjects(),this.checkScreenWidth(),window.addEventListener("resize",this.checkScreenWidth)},beforeUnmount(){window.removeEventListener("resize",this.checkScreenWidth)},methods:{checkScreenWidth(){const e=window.innerWidth;e>=1200?this.currentBreakpoint="1200":e>=992?this.currentBreakpoint="992":e>=768?this.currentBreakpoint="768":e>=575?this.currentBreakpoint="575":e>=400?this.currentBreakpoint="400":this.currentBreakpoint="320"},getCoverImage(e){switch(this.currentBreakpoint){case"1200":return e.cover_webp?e.cover_webp:e.cover;case"992":return e.cover_960_webp?e.cover_960_webp:e.cover_960;case"768":return e.cover_740_webp?e.cover_740_webp:e.cover_740;case"575":return e.cover_560_webp?e.cover_560_webp:e.cover_560;case"400":return e.cover_380_webp?e.cover_380_webp:e.cover_380;case"320":return e.cover_314_webp?e.cover_314_webp:e.cover_314}},handleClick(e,o){e&&(this.projectsStore.getProject(o),this.showDialogProject=!0)}}},W=e=>(P("data-v-da132a5d"),e=e(),F(),e),Se={class:"projects",id:"examples"},ye={class:"container"},Ce={key:0,class:"projects__wrapper"},Ie={class:"projects__item-bg"},Be=["src"],De=["onClick"],Le={class:"projects__item-bg"},xe=["src"],$e={class:"projects__item"},Pe={class:"projects__item-bg projects__request"},Fe=W(()=>t("h3",{class:"projects__item-title projects__item-title_white"}," Какая задача у вас? ",-1)),Ne=W(()=>t("img",{class:"projects__request-gear",src:ke,alt:"Шестерёнка",width:"213px",height:"236px",loading:"lazy"},null,-1));function ze(e,o,E,c,p,h){const v=i("h2-custom"),w=i("loading-comp"),k=i("dialog-form"),m=i("dialog-projects");return s(),r(j,null,[t("section",Se,[t("div",ye,[n(v,{class:"projects__title"},{default:_(()=>[d("Наши проекты")]),_:1}),c.projectsStore.projectsIsLoading?(s(),f(w,{key:1})):(s(),r("div",Ce,[c.projectsStore.projects.length>0?(s(),r("div",{key:0,class:"projects__item",onClick:o[0]||(o[0]=a=>h.handleClick(c.projectsStore.projects[0].enable_detail,c.projectsStore.projects[0].url))},[t("div",Ie,[t("img",{class:"projects__item-bg-image",src:h.getCoverImage(c.projectsStore.projects[0]),alt:"Обложка проекта",loading:"lazy"},null,8,Be),t("h3",{class:y(["projects__item-title",{"projects__item-title_white":c.projectsStore.projects[0].title_alt_color}])},u(this.projectsStore.projects[0].title),3)])])):g("",!0),(s(!0),r(j,null,C(this.projectsStore.projects.slice(1),(a,b)=>(s(),r("div",{class:"projects__item",key:b,onClick:D=>h.handleClick(a.enable_detail,a.url)},[t("div",Le,[t("img",{class:"projects__item-bg-image",src:h.getCoverImage(a),alt:"Обложка проекта",loading:"lazy"},null,8,xe),t("h3",{class:y(["projects__item-title",{"projects__item-title_white":a.title_alt_color}])},u(a.title),3)])],8,De))),128)),t("div",$e,[t("div",Pe,[Fe,Ne,t("button",{class:"projects__request-button projects__link projects__item-title_white",onClick:o[1]||(o[1]=a=>p.showDialogForm=!0)}," Оставить заявку ")])])]))])]),p.showDialogForm?(s(),f(k,{key:0,onClose:o[2]||(o[2]=a=>p.showDialogForm=!1),type:"app",blackText:!0},{default:_(()=>[d(" Отправить ")]),_:1})):g("",!0),p.showDialogProject?(s(),f(m,{key:1,onClose:o[3]||(o[3]=a=>p.showDialogProject=!1)},{default:_(()=>[d(" Отправить ")]),_:1})):g("",!0)],64)}const Te=I(be,[["render",ze],["__scopeId","data-v-da132a5d"]]);export{Te as default};
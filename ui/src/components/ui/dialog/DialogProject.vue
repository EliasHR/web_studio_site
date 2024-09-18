<template>
    <div class="dialog-project" @click.stop="$emit('close')">
        <div class="dialog-project__container" @click.stop>
            <icon-close class="dialog-project__close" @click="$emit('close')" />
            <div class="dialog-project__wrapper">
                <div class="dialog-project__presentation">
                    <img
                        v-for="(presentation, index) in this.projectsStore.project.images"
                        :key="index"
                        class="dialog-project__presentation-image"
                        :src="
                            presentation.image_webp ? presentation.image_webp : presentation.image
                        "
                        :alt="presentation.alt"
                    />
                </div>
                <div class="dialog-project__info">
                    <h2 class="dialog-project__info-title">
                        {{ projectsStore.project.title }}
                    </h2>
                    <div class="dialog-project__info-wrapper">
                        <div class="dialog-project__info-description">
                            <h3 class="dialog-project__info-subtitle">
                                Особенности реализации проекта
                            </h3>
                            <a
                                v-if="projectsStore.project.project_link"
                                :href="projectsStore.project.project_link"
                                class="dialog-project__info-link"
                                target="_blank"
                            >
                                {{ projectsStore.project.project_link }}
                            </a>
                            <ul class="dialog-project__info-list">
                                <li
                                    class="dialog-project__info-list-item"
                                    v-for="(feature, index) in this.projectsStore.project.features"
                                    :key="index"
                                >
                                    <icon-checkmark
                                        class="dialog-project__info-list-item-icon"
                                        width="24px"
                                        height="24px"
                                    /><span>{{ feature.title }}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="dialog-project__info-contacts">
                            <h3
                                class="dialog-project__info-subtitle dialog-project__info-subtitle_mobile"
                            >
                                А какая задача у вас?<br />Свяжитесь с нами:
                            </h3>
                            <div class="dialog-project__info-contacts-wrapper">
                                <div class="dialog-project__info-contacts-social">
                                    <nav-item href="https://wa.me/37491368838" target="_blank">
                                        <hamburger-whatsapp
                                            class="dialog-project__info-list-item-icon"
                                        />
                                    </nav-item>
                                    <nav-item href="https://t.me/code_mode7" target="_blank">
                                        <hamburger-telegram
                                            class="dialog-project__info-list-item-icon"
                                        />
                                    </nav-item>
                                </div>
                                <div class="dialog-project__info-contacts-mail">
                                    <nav-item href="mailto:info@mycodemode.ru">
                                        info@mycodemode.ru
                                    </nav-item>
                                </div>
                                <div class="dialog-project__info-contacts-phone">
                                    <nav-item href="tel:+37491368838">+374 91 36 88 38</nav-item>
                                </div>
                                <button-middle
                                    class="dialog-project__info-contacts-button"
                                    @click="showDialog = true"
                                    >Обратный звонок</button-middle
                                >
                                <p-super-small class="dialog-project__info-contacts-policy">
                                    Нажимая на кнопку, вы соглашаетесь с
                                    <a
                                        class="dialog-project__info-contacts-link"
                                        href="Политика конфиденциальности Code mode.pdf"
                                        target="_blank"
                                        >политикой конфиденциальности</a
                                    >
                                </p-super-small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <dialog-form v-if="showDialog" @close="showDialog = false" :type="'ring'" :blackText="true">
        Заказать обратный звонок
    </dialog-form>
</template>

<script>
import IconClose from '@/components/ui/icons/IconClose.vue'
import IconCheckmark from '@/components/ui/icons/IconCheckmark.vue'
import HamburgerTelegram from '@/components/ui/icons/HamburgerTelegram.vue'
import HamburgerWhatsapp from '@/components/ui/icons/HamburgerWhatsapp.vue'
import NavItem from '@/components/ui/navbar/NavItem.vue'
import ButtonMiddle from '@/components/ui/buttons/ButtonMiddle.vue'
import PSuperSmall from '@/components/ui/typographics/PSuperSmall.vue'
import DialogForm from '@/components/ui/dialog/DialogForm.vue'
import { useProjectStore } from '@/stores/projects'

export default {
    name: 'dialog-project',
    components: {
        IconClose,
        IconCheckmark,
        HamburgerTelegram,
        HamburgerWhatsapp,
        NavItem,
        ButtonMiddle,
        PSuperSmall,
        DialogForm
    },
    data() {
        return {
            showDialog: false
        }
    },
    props: {
        type: {
            type: String,
            default: 'ring'
        },
        blackText: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const projectsStore = useProjectStore()
        return {
            projectsStore
        }
    },
    methods: {
        disableScroll() {
            document.body.style.overflow = 'hidden'
        },
        enableScroll() {
            document.body.style.overflow = ''
        }
    },
    mounted() {
        this.disableScroll()
    },
    unmounted() {
        this.enableScroll()
    }
}
</script>

<style lang="scss" scoped>
.dialog-project {
    z-index: 999;
    background-color: #eee9e380;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &__container {
        position: relative;
        //overflow: hidden;
    }
    &__wrapper {
        border: 2px solid #111827;
        border-radius: 20px;
        width: 1152px;
        height: 90vh;
        background: var(--primary-white);
        overflow: hidden;
        display: grid;
        grid-template-columns: auto 309px;
        box-sizing: border-box;
    }
    &__close {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 25px;
        height: 25px;
        z-index: 103;
        cursor: pointer;
    }
    &__presentation {
        width: 100%;
        overflow-y: auto; /* Измените overflow на overflow-y */
        overflow-x: hidden; /* Скрыть горизонтальную полосу прокрутки */
        text-align: center;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }
    &__presentation-image {
        width: auto;
        max-width: 100%;
        box-sizing: border-box;
        flex-shrink: 0;
        flex-grow: 0;
        align-self: center;
    }
    &__info {
        padding: 40px 21px;
        overflow: hidden scroll;
    }
    &__info-title {
        font: 700 24px / 1.5 var(--font-family);
        color: var(--primary-accent);
        margin-bottom: 32px;
    }
    &__info-description {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 24px;
    }
    &__info-subtitle {
        font: 700 18px / 1.66667 var(--font-family);
        color: #393c41;
        margin: 0;
    }
    &__info-link {
        font: 400 14px / 1.71429 var(--font-family);
        color: var(--primary-accent);
    }
    &__info-list {
        @include reset-list;
    }
    &__info-list-item {
        display: grid;
        grid-template-columns: 24px auto;
        gap: 16px;
        //align-items: center;
        font: 400 14px / 1.71429 var(--font-family);
        color: #393c41;
        margin-bottom: 8px;
    }
    &__info-list-item-icon {
        width: 24px;
        height: 24px;
    }
    &__info-contacts {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    &__info-contacts-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    &__info-contacts-social {
        display: flex;
        gap: 16px;
    }
    &__info-contacts-mail {
        & > a {
            font: 600 14px / 1.71429 var(--font-family);
            color: #000;
        }
    }
    &__info-contacts-phone {
        & > a {
            font: 700 22px / 1.54545 var(--font11);
            color: #393c41;
        }
    }
    &__info-contacts-button {
        width: 100%;
    }
    &__info-contacts-policy {
        color: var(--primary-dark-blue);
    }
    &__info-contacts-link {
        @include reset-link;
        text-decoration: underline;
        &:hover {
            color: var(--primary-accent);
        }
    }
}

//@media (max-width: 1399.99px) {}

@media (max-width: 1199.99px) {
    .dialog-project {
        &__wrapper {
            width: 960px;
        }
    }
}

@media (max-width: 991.99px) {
    .dialog-project {
        &__wrapper {
            grid-template-columns: auto 252px;
            width: 740px;
        }
        &__info-title {
            font-size: 22px;
            margin-bottom: 24px;
        }
    }
}

@media (max-width: 767.99px) {
    .dialog-project {
        &__wrapper {
            width: 560px;
            grid-template-columns: auto;
            overflow-y: auto;
            overflow-x: hidden;
        }
        &__presentation {
            overflow: visible;
            order: 1;
        }
        &__info {
            overflow: visible;
            order: 0;
        }
        &__info-wrapper {
            display: grid;
            grid-template-columns: auto 168px;
            gap: 24px;
        }
        &__info-subtitle_mobile {
            font: 700 14px / 1.71429 var(--font-family);
        }
        &__info-contacts {
            gap: 16px;
        }
    }
}

@media (max-width: 574.99px) {
    .dialog-project {
        &__wrapper {
            width: 90vw;
        }
        &__info-wrapper {
            display: grid;
            grid-template-columns: auto;
        }
        &__info-description {
            margin-bottom: 0px;
        }
        &__info-contacts-button {
            width: 168px;
            height: 32px;
        }
        &__info-contacts-wrapper {
            display: grid;
            grid-template-columns: 64px auto;
            gap: 8px 24px;
        }
        &__info-contacts-phone,
        &__info-contacts-button,
        &__info-contacts-policy {
            grid-column: span 2;
        }
    }
}

@media (max-width: 399.99px) {
    .dialog-project {
        &__info {
            padding: 40px 8px;
        }
    }
}
</style>

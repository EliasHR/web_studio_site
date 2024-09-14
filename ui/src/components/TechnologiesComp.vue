<template>
    <section class="technologies" id="technologies">
        <div class="container">
            <h2-custom class="technologies__title">Технологии</h2-custom>
            <div class="technologies__wrapper">
                <div class="technologies__text">
                    <p-small>
                        ИТ-специалисты работают с современным языком программирования и активно
                        применяют новейшие технологии.
                    </p-small>
                    <p-small>
                        Это позволяет разрабатывать надежное, масштабируемое и удобное в
                        использовании программное обеспечение, соответствующее требованиям
                        современного рынка.
                    </p-small>
                </div>
                <ol class="technologies__list">
                    <li
                        class="technologies__list-item"
                        title="JavaScript — это мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript."
                    >
                        <technologies-javascript width="32px" height="32px" /><span
                            >JavaScript</span
                        >
                    </li>
                    <li
                        class="technologies__list-item"
                        title="Vue.js — это JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов."
                    >
                        <technologies-vue width="32px" height="28px" /><span>Vue</span>
                    </li>
                    <li
                        class="technologies__list-item"
                        title="Python — это мультипарадигмальный высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью."
                    >
                        <technologies-python width="35px" height="34px" /><span>Python</span>
                    </li>

                    <li
                        class="technologies__list-item"
                        title="Django — это фреймворк с открытым исходным кодом для веб-приложений на языке Python."
                    >
                        <technologies-django width="69px" height="24px" /><span>Django</span>
                    </li>
                    <li
                        class="technologies__list-item"
                        title="PostgreSQL — это свободная объектно-реляционная система управления базами данных (СУБД)."
                    >
                        <technologies-postgre width="40px" height="35px" /><span>PostgreSQL</span>
                    </li>

                    <li
                        class="technologies__list-item"
                        title="Aiogram - это современный и полностью асинхронный фреймворк для Telegram Bot API."
                    >
                        <img
                            src="@/assets/img/technologies_aiogram.webp"
                            width="29px"
                            height="29px"
                        />
                        <span>Aiogram</span>
                    </li>
                    <li
                        class="technologies__list-item"
                        title="Docker - это платформа, предназначенная для того, чтобы помочь разработчикам создавать контейнерные приложения, предоставлять к ним общий доступ и запускать их."
                    >
                        <technologies-docker width="60px" height="35px" /><span>Docker</span>
                    </li>
                </ol>
            </div>
        </div>
    </section>
</template>

<script>
import H2Custom from '@/components/ui/typographics/H2Custom.vue'
import PSmall from '@/components/ui/typographics/PSmall.vue'
import TechnologiesPython from '@/components/ui/icons/TechnologiesPython.vue'
import TechnologiesVue from '@/components/ui/icons/TechnologiesVue.vue'
import TechnologiesDjango from '@/components/ui/icons/TechnologiesDjango.vue'
import TechnologiesPostgre from '@/components/ui/icons/TechnologiesPostgre.vue'
import TechnologiesDocker from '@/components/ui/icons/TechnologiesDocker.vue'
import TechnologiesJavascript from '@/components/ui/icons/TechnologiesJavascript.vue'

export default {
    name: 'technologies-comp',
    components: {
        H2Custom,
        PSmall,
        TechnologiesPython,
        TechnologiesVue,
        TechnologiesDjango,
        TechnologiesPostgre,
        TechnologiesDocker,
        TechnologiesJavascript
    }
}
</script>

<style lang="scss" scoped>
.technologies {
    scroll-margin-top: 96px;
    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 48px;
        padding: 0 24px;
    }
    &__title {
        padding-left: 24px;
        margin-bottom: 24px;
    }
    &__text {
        max-width: 464px;
    }
    &__list {
        @include reset-list;
        display: flex;
        justify-content: space-between;
    }
    &__list-item {
        border: 0.62px solid var(--tech-border);
        border-radius: 10px;
        width: 122px;
        height: 117px;
        padding: 22px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        gap: 12px;
    }
}

@media (max-width: 1399.99px) {
}

@media (max-width: 1199.99px) {
    .technologies {
        &__wrapper {
            padding: 0;
        }
        &__title {
            padding-left: 0px;
        }
    }
}

@media (max-width: 991.99px) {
    .technologies {
        scroll-margin-top: 64px;
        &__wrapper {
            padding: 0 24px;
            gap: 24px;
        }
        &__title {
            text-align: center;
        }
        &__text {
            max-width: none;
        }
        &__list {
            gap: 24px 68px;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
}

@media (max-width: 767.99px) {
    .technologies {
        &__list {
            gap: 24px;
        }
    }
}

@media (max-width: 574.99px) {
    .technologies {
        &__wrapper {
            padding: 0 8px;
        }
    }
}

@media (max-width: 399.99px) {
    .technologies {
        &__wrapper {
            padding: 0 4px;
        }
    }
}
</style>

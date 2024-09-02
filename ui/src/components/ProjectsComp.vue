<template>
    <section class="projects">
        <div class="container">
            <h2-custom class="projects__title">Наши проекты</h2-custom>
            <div class="projects__wrapper">
                <div class="projects__item">
                    <a href="#" class="projects__link">
                        <div class="projects__item-bg projects__first">
                            <h3 class="projects__item-title">
                                Справочник производителей перегородок
                            </h3>
                        </div>
                    </a>
                </div>

                <div class="projects__item">
                    <a href="#" class="projects__link">
                        <div class="projects__item-bg projects__second">
                            <h3 class="projects__item-title">Чат-бот для волейбольного клуба</h3>
                        </div>
                    </a>
                </div>

                <div class="projects__item">
                    <a href="#" class="projects__link">
                        <div class="projects__item-bg projects__third">
                            <h3 class="projects__item-title">Чат-бот Телеграм для доставки еды</h3>
                        </div>
                    </a>
                </div>

                <div class="projects__item">
                    <a href="#" class="projects__link">
                        <div class="projects__item-bg projects__fourth">
                            <h3 class="projects__item-title">
                                Сайт для компании по установке промышленных холодильников
                            </h3>
                        </div>
                    </a>
                </div>

                <div class="projects__item">
                    <a href="#" class="projects__link">
                        <div class="projects__item-bg projects__fifth">
                            <h3 class="projects__item-title">
                                Лендинг для продажи картин родословного древа
                            </h3>
                        </div>
                    </a>
                </div>

                <div class="projects__item">
                    <a href="#" class="projects__link">
                        <div class="projects__item-bg projects__sixth">
                            <h3 class="projects__item-title">
                                Сайт для пространства, где проводят праздники
                            </h3>
                        </div>
                    </a>
                </div>

                <div class="projects__item">
                    <a href="#" class="projects__link">
                        <div class="projects__item-bg projects__seventh">
                            <h3 class="projects__item-title">Логотип для транспортной компании</h3>
                        </div>
                    </a>
                </div>

                <div class="projects__item">
                    <div class="projects__item-bg projects__request">
                        <h3 class="projects__item-title">Какая задача у вас?</h3>
                        <a href="#" class="projects__request-button projects__link">
                            Оставить заявку
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import H2Custom from '@/components/ui/typographics/H2Custom.vue'
export default {
    name: 'projects-comp',
    components: {
        H2Custom
    }
}
</script>

<style lang="scss" scoped>
.projects {
    &__title {
        margin-bottom: 24px;
    }
    &__wrapper {
        display: grid;
        gap: 28px;
        grid-template-columns: repeat(3, auto);
        grid-template-rows: repeat(3, auto);
    }
    &__item {
        height: 336px;
        background: var(--neutral---300);
        border-radius: 8px;
    }
    &__item-bg {
        background-size: cover;
        padding: 24px;
        box-sizing: border-box;
        border-radius: 8px;
        height: 100%;
        width: 100%;
    }
    & .projects__item:first-child {
        grid-column: span 2;
    }
    &__item-title {
        margin: 0;
        font: 600 16px / 1.75 var(--font-family);
        color: var(--neutral-900);
        max-width: 316px;
    }
    &__link {
        &:hover {
            text-decoration: underline;
        }
    }

    &__first {
        background-image: url('@/assets/img/projects_1.png');
    }
    &__second {
        background-image: url('@/assets/img/projects_2.png');
    }
    &__fourth {
        background-image: url('@/assets/img/projects_4.png');
        & .projects__item-title {
            color: var(--primary-white);
        }
    }
    &__fifth {
        background-image: url('@/assets/img/projects_5.png');
    }
    &__sixth {
        background-image: url('@/assets/img/projects_6.png');
    }
    &__seventh {
        background-image: url('@/assets/img/projects_7.png');
    }
    &__request {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    &__request-button {
        align-self: flex-end;
        font: 400 14px / 1.71429 var(--font-family);
        text-decoration: underline;
        text-decoration-skip-ink: none;
        text-align: right;
        color: #000;
        margin-bottom: 18px;
    }
}
</style>

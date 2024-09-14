<template>
    <section class="services" id="services">
        <div class="container">
            <h2-custom class="services__title">Наши услуги</h2-custom>
            <div class="services__wrapper">
                <div class="services__item">
                    <div class="services__item-wrapper">
                        <div class="services__item-info">
                            <h3-custom class="services__item-title">Сайты и сервисы</h3-custom>
                            <div class="services__item-price">от 100.000 руб.</div>
                            <div class="services__item-list">
                                <p-super-small>
                                    Простые и высоконагруженные сайты с возможностью управлять
                                    контентом (CMS)
                                </p-super-small>
                                <p-super-small>Доработка функционала</p-super-small>
                                <p-super-small>Перенос сайта</p-super-small>
                                <p-super-small>
                                    Техническая поддержка и администрирование сайта
                                </p-super-small>
                            </div>
                        </div>
                        <button-small class="services__item-button">Оставить заявку</button-small>
                    </div>
                </div>
                <div class="services__item">
                    <div class="services__item-wrapper">
                        <div class="services__item-info">
                            <h3-custom class="services__item-title">Чат-боты</h3-custom>
                            <div class="services__item-price">от 30.000 руб.</div>
                            <div class="services__item-list">
                                <p-super-small>Телеграм-боты для коммуникации </p-super-small>
                                <p-super-small>Функциональные боты </p-super-small>
                                <p-super-small>Калькуляторы, парсеры и пр.</p-super-small>
                                <p-super-small>Интеграция с различными сервисами</p-super-small>
                            </div>
                        </div>
                        <button-small class="services__item-button">Оставить заявку</button-small>
                    </div>
                </div>
                <div class="services__item">
                    <div class="services__item-wrapper">
                        <div class="services__item-info">
                            <h3-custom class="services__item-title">Дизайн</h3-custom>
                            <div class="services__item-price">от 10.000 руб.</div>
                            <div class="services__item-list">
                                <p-super-small>Дизайн-сопровождение </p-super-small>
                                <p-super-small>
                                    Переработка существующего интерфейса или создание нового
                                </p-super-small>
                                <p-super-small>Улучшение и доработка дизайн проекта</p-super-small>
                                <p-super-small>Создание логотипа и фирменного стиля</p-super-small>
                            </div>
                        </div>
                        <button-small class="services__item-button">Оставить заявку</button-small>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import H2Custom from '@/components/ui/typographics/H2Custom.vue'
import H3Custom from '@/components/ui/typographics/H3Custom.vue'
import PSuperSmall from '@/components/ui/typographics/PSuperSmall.vue'
import ButtonSmall from '@/components/ui/buttons/ButtonSmall.vue'

export default {
    components: {
        H2Custom,
        H3Custom,
        PSuperSmall,
        ButtonSmall
    }
}
</script>

<style lang="scss" scoped>
.services {
    scroll-margin-top: 96px;
    &__title {
        margin-bottom: 34px;
        padding-left: 24px;
    }
    &__wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 28px;
    }
    &__item {
        border-radius: 8px;
        padding: 24px 28px;
        max-width: 365px;
        background: var(--primary-seryy);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
    }
    &__item-wrapper {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        height: 100%;
        gap: 16px;
    }
    &__item-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
        text-align: center;
    }
    &__item-price {
        font: 600 18px / 1.66667 var(--font-family);
        margin-bottom: 16px;
        text-align: center;
    }
    &__item-title {
        margin-bottom: 16px;
    }
    &__item-button {
        width: 168px;
    }
}
@media (max-width: 1199.99px) {
    .services {
        &__title {
            padding-left: 0;
        }
    }
}

@media (max-width: 991.99px) {
    .services {
        scroll-margin-top: 64px;
        &__title {
            text-align: center;
            margin-bottom: 24px;
        }
        &__wrapper {
            gap: 16px;
        }
        &__item {
            padding: 24px 20px;
        }
    }
}

@media (max-width: 767.99px) {
    .services {
        &__wrapper {
            grid-template-columns: auto;
        }
        /* &__title {
            text-align: center;
            margin-bottom: 24px;
        } */

        &__item {
            //padding: 24px 20px;
            max-width: 100%;
        }
        &__item-list {
            max-width: 316px;
        }
        &__item-button {
            height: 48px;
        }
    }
}

@media (max-width: 574.99px) {
}

@media (max-width: 399.99px) {
    .services {
        &__item {
            padding: 24px 0px;
        }
    }
}
</style>

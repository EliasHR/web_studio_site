<template>
    <section class="about">
        <div class="container">
            <!-- <img
                class="about__image"
                src="@/assets/img/about_1.png"
                alt="Картина семейного древа, стоящая на столе в окружении часов и цветка."
                width="560px"
                height="376px"
            /> -->
            <div class="about__content">
                <h2-custom class="about__title">О нас</h2-custom>
                <div class="about__wrapper">
                    <div class="about__text-wrapper">
                        <div class="about__text_offset">
                            <p-middle>
                                Мы являемся молодой студией it-разработки «Code mode».
                            </p-middle>
                            <p-middle>К нас обращаются, когда нужно:</p-middle>
                            <p-middle><b>– Создать чат-бот телеграм.</b></p-middle>
                        </div>
                        <div class="about__text_highlighted">
                            <p-super-small>
                                Сегодня чат-боты стали настоящим must-have для бизнеса. Они
                                позволяют убирать рутину и значительно облегчают бизнес-процессы и,
                                соответственно, увеличивают прибыль.
                            </p-super-small>
                            <p-super-small
                                >Мы разрабатываем боты «на коде», это означает, что функционал таких
                                ботов значительно шире, чем на конструкторе.</p-super-small
                            >
                        </div>

                        <p-middle><b>– Оптимизировать бизнес-процессы.</b></p-middle>
                        <p-super-small class="about__text_highlighted">
                            Иногда решение, предложенное специалистом способно освободить от рутины
                            и освободить значительное количество свободного времени.
                        </p-super-small>
                        <p-middle><b>– Доработать или «переделать» текущий сайт.</b></p-middle>
                        <p-super-small class="about__text_highlighted">
                            Сайты, созданные в 2000-2010 давно требуют технической и визуальной
                            доработки или полной переработки.
                        </p-super-small>
                        <div class="about__text_offset">
                            <p-middle>
                                Нам важен результат работы и доверительные долгосрочные отношения.
                            </p-middle>
                            <p-middle>
                                Code mode: «Создаем, внедряем, тестируем, поддерживаем!»
                            </p-middle>
                        </div>
                    </div>
                    <div class="about__swiper">
                        <img src="@/assets/img/about.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import H2Custom from '@/components/ui/typographics/H2Custom.vue'
import PMiddle from '@/components/ui/typographics/PMiddle.vue'
import PSuperSmall from '@/components/ui/typographics/PSuperSmall.vue'

export default {
    name: 'about-comp',
    components: {
        H2Custom,
        PMiddle,
        PSuperSmall
    }
}
</script>

<style lang="scss" scoped>
.about {
    /*     scroll-margin-top: 64px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 32px; */

    /* &__title {
        margin-bottom: 32px;
    }
    &__text {
        font-style: italic;
        margin-bottom: 8px;
    } */
    /*     &__author {
        font: 700 20px / 1.7 var(--font4);
        color: var(--primary-colors-3b2406);
        margin-top: 32px;
        text-align: right;
    } */
    &__content {
        position: relative;
    }
    &__title {
        position: absolute;
        left: 24px;
        top: 0;
        z-index: 10;
    }
    &__wrapper {
        display: flex;
        justify-content: space-between;
        gap: 76px;
    }
    &__text-wrapper {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 78px 24px 0px 24px;
    }
    &__text_highlighted {
        border-radius: 8px;
        padding: 16px;
        background: var(--primary-accent);
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    &__text_offset {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &__swiper {
        border-radius: 8px;
        width: 568px;
        height: 730px;
    }
}

@media (max-width: 1399.99px) {
}

@media (max-width: 1199.99px) {
    .about {
        gap: 28px;
        &__section {
            gap: 28px;
        }
        &__image {
            width: 467px;
        }
    }
}

@media (max-width: 991.99px) {
    .about {
        &__image {
            width: 370px;
        }
        &__text {
            font-size: 14px;
        }
    }
}

@media (max-width: 767.99px) {
    .about {
        gap: 28px;
        &__section {
            flex-direction: column-reverse;
            align-items: center;
            gap: 16px;
            &:last-child {
                flex-direction: column;
            }
        }
        &__image {
            width: 368px;
            height: auto;
        }
        &__title {
            margin-bottom: 24px;
        }
    }
}

@media (max-width: 574.99px) {
}

@media (max-width: 399.99px) {
    .about {
        gap: 20px;
        &__image {
            width: 314px;
        }
        &__title {
            margin-bottom: 16px;
        }
    }
}
</style>

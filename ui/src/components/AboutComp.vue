<template>
    <section class="about" id="about">
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
                        <picture>
                            <source
                                srcset="@/assets/img/about_320.png"
                                media="(max-width: 399.99px)"
                            />
                            <source
                                srcset="@/assets/img/about_740.png"
                                media="(max-width: 991.99px)"
                            />
                            <source
                                srcset="@/assets/img/about_960.png"
                                media="(max-width: 1199.99px)"
                            />

                            <img src="@/assets/img/about.png" alt="" srcset="" />
                        </picture>
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
    scroll-margin-top: 96px;
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
        padding: 0 24px;
    }
    &__text-wrapper {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 78px 0px 0px 0px;
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
        &__title {
            left: 0px;
        }
    }
}

@media (max-width: 991.99px) {
    .about {
        scroll-margin-top: 64px;
        &__title {
            left: 50%;
            transform: translateX(-50%);
        }
        &__wrapper {
            flex-direction: column;
        }
        &__text-wrapper {
            padding: 62px 0px 0px 0px;
        }
        &__swiper {
            width: 380px;
            height: 286px;
        }
        &__wrapper {
            gap: 24px;
            align-items: center;
        }
    }
}

@media (max-width: 767.99px) {
    .about {
        &__text-wrapper {
            gap: 16px;
        }
    }
}

@media (max-width: 574.99px) {
    .about {
        &__wrapper {
            padding: 0;
        }

        &__text-wrapper {
            padding: 62px 8px 0px 8px;
        }
    }
}

@media (max-width: 399.99px) {
    .about {
        &__text-wrapper {
            padding: 62px 4px 0px 4px;
        }
        &__swiper {
            width: 314px;
            height: 286px;
        }
    }
}
</style>

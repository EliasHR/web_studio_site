<template>
    <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"
        :navigation="{
            hideOnClick: true,
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom'
        }"
        :pagination="{
            clickable: true,
            el: '.swiper-pagination-custom',
            type: 'bullets'
        }"
        :loop="true"
        :speed="500"
    >
        <swiper-slide v-for="review in reviewsStore.reviews" v-bind:key="review.name"
            ><!-- :lazy="true"  -->
            <div class="swiper-slide__wrapper">
                <div class="swiper-slide__text-wrapper">
                    <p-small class="swiper-slide__text">«{{ review.text }}»</p-small>
                    <p class="swiper-slide__name">{{ review.name }}</p>
                    <!-- <p-small class="swiper-slide__text"
                        >«Мы сообществом дизайнеров обратились за помощью, чтобы создать для нас
                        чат-бот, который бы собирал по ключевым словам нужные задания на бирже
                        фриланса. Мы заплатили 30.000 руб. и буквально за пару заказов мы окупили
                        вложенные средства. Чат-бот в наше время очень выручает. Невозможно
                        постоянно сидеть на сайте и мониторить заказы. Теперь телеграм бот присылает
                        сообщение о поступающих заданиях с сайта и позволяет быстро реагировать и
                        отзываться на работу. Спасибо!»</p-small
                    >
                    <p class="swiper-slide__name">Татьяна Брусянцева, дизайнер</p> -->
                </div>
                <picture v-if="review.src" class="swiper-slide__image">
                    <!-- <source media="(min-width: 768px)" :srcset="review.srcset_desktop" />
                    <source media="(min-width: 400px)" :srcset="review.srcset_tablet" />
                    <source media="(max-width: 399.99px)" :srcset="review.srcset_mobile" /> -->
                    <img
                        loading="lazy"
                        :src="review.src"
                        :alt="review.alt"
                        class="swiper-slide__image"
                    />
                </picture>
                <picture class="swiper-slide__image" v-else>
                    <source
                        media="(max-width: 399.99px)"
                        srcset="@/assets/img/reviews_comma_320.png"
                    />
                    <source
                        media="(max-width: 991.99px)"
                        srcset="@/assets/img/reviews_comma_740.png"
                    />
                    <source
                        media="(max-width: 1199.99px)"
                        srcset="@/assets/img/reviews_comma_960.png"
                    />
                    <img
                        loading="lazy"
                        src="@/assets/img/reviews_comma.png"
                        alt="Большая кавычка"
                        class="swiper-slide__image"
                    />
                </picture>
            </div>
        </swiper-slide>
    </swiper>
    <div class="swiper-controlls">
        <div class="swiper-pagination-custom"></div>
        <div class="swiper-buttons">
            <div class="swiper-button-prev-custom"><swiper-prev /></div>
            <div class="swiper-button-next-custom"><swiper-next /></div>
        </div>
    </div>
</template>

<script>
import PSmall from '@/components/ui/typographics/PSmall.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import SwiperNext from '@/components/ui/icons/SwiperNext.vue'
import SwiperPrev from '@/components/ui/icons/SwiperPrev.vue'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useReviewStore } from '@/stores/reviews'

export default {
    name: 'swiper-comp',
    components: {
        Swiper,
        SwiperSlide,
        PSmall,
        SwiperNext,
        SwiperPrev
    },
    setup() {
        const reviewsStore = useReviewStore()
        return {
            modules: [Navigation, Pagination, Autoplay],
            reviewsStore
        }
    },
    mounted() {
        this.reviewsStore.getReviews()
    }
}
</script>

<style lang="scss">
.swiper {
    width: 1152px;
    height: 100%;

    &-slide {
        &__wrapper {
            display: grid;
            gap: 66px;
            grid-template-columns: auto auto;
            padding: 0 24px;
        }
        &__text {
            font: italic 400 16px / 1.75 var(--font5);
        }
        &__text-wrapper {
            margin-top: 80px;
            margin-bottom: 40px;
        }
        &__name {
            font: 700 18px / 1.66667 var(--font-family);
            text-align: right;
            //margin-bottom: 40px;
        }
        &__image {
            width: auto;
            height: 350px;
        }
    }
    &-controlls {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 10;
        width: 520px;
        display: flex;
        justify-content: space-between;
    }
    &-buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 20px;
        gap: 40px;
    }
    &-button-next-custom,
    &-button-prev-custom {
        cursor: pointer;
    }
    &-pagination-custom {
        margin-left: 24px;
        display: flex;
        //justify-content: center;
    }
    &-pagination-bullet {
        border-radius: 50%;
        background: var(--pagination-bullet) !important;
        box-sizing: border-box;
        opacity: 1;
        &-active {
            background: none !important;
            border: 1px solid var(--pagination-bullet);
        }
    }
}

//@media (max-width: 1359.98px) {}

@media (max-width: 1199.99px) {
    .swiper {
        width: 960px;
        &-slide {
            &__wrapper {
                //gap: 28px;
                padding: 0;
            }
            &__image {
                width: auto;
                height: auto;
                max-width: 378px;
            }
            &__text {
                &-wrapper {
                    margin-top: 80px;
                    margin-bottom: 10px;
                }
            }
        }
        &-controlls {
            width: 516px;
        }
        &-pagination-custom {
            margin-left: 0px;
        }
    }
}

@media (max-width: 991.99px) {
    .swiper {
        width: 740px;
        &-slide {
            &__wrapper {
                grid-template-columns: auto;
                grid-template-rows: 250px 300px;
                justify-items: center;
                //align-items: center;
                padding: 0 24px;
            }
            &__text-wrapper {
                margin-top: 0px;
                margin-bottom: 40px;
            }
            &__image {
                align-self: center;
            }
        }

        &-pagination-custom {
            justify-content: center;
        }
        &-controlls {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: auto;
            height: 70px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }
    }
}

@media (max-width: 767.99px) {
    .swiper {
        width: 560px;
        &-slide {
            &__wrapper {
                grid-template-rows: 300px 300px;
            }
        }
        &-controlls {
            left: 50%;
            top: 55%;
            transform: translate(-50%, -50%);
        }
    }
}

@media (max-width: 574.99px) {
    .swiper {
        width: 380px;
        &-slide {
            &__wrapper {
                grid-template-rows: 430px 300px;
                box-sizing: border-box;
                padding: 0;
            }
            &__text-wrapper {
                padding: 0 8px;
            }
        }
        &-controlls {
            top: 60%;
        }
    }
}
@media (max-width: 399.99px) {
    .swiper {
        width: 314px;
        &-slide {
            &__wrapper {
                grid-template-rows: 480px 300px;
            }
            &__text-wrapper {
                padding: 0 4px;
            }
            &__image {
                max-width: 314px;
            }
        }
        &-controlls {
            top: 65%;
        }
    }
}
</style>

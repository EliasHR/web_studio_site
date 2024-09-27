<template>
    <div class="swiper__main-wrapper">
        <h2-custom class="swiper__title">Отзывы наших клиентов</h2-custom>
        <div class="swiper__content">
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
                :lazy="true"
            >
                <swiper-slide v-for="review in reviewsStore.reviews" v-bind:key="review.name"
                    ><!-- :lazy="true"  -->
                    <div class="swiper-slide__wrapper">
                        <video
                            class="swiper-slide__video"
                            :src="review.video_file"
                            controls
                            v-if="review.video_file"
                            type="video/mp4"
                            :poster="
                                review.video_poster_webp
                                    ? review.video_poster_webp
                                    : review.video_poster
                            "
                            loading="lazy"
                        ></video>
                        <p-small class="swiper-slide__text" v-else>«{{ review.text }}»</p-small>
                        <p class="swiper-slide__name">{{ review.name }}</p>
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
        </div>
    </div>
</template>

<script>
import SwiperNext from '@/components/ui/icons/SwiperNext.vue'
import SwiperPrev from '@/components/ui/icons/SwiperPrev.vue'
import H2Custom from '@/components/ui/typographics/H2Custom.vue'
import PSmall from '@/components/ui/typographics/PSmall.vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useReviewStore } from '@/stores/reviews'

export default {
    name: 'swiper-comp',
    components: {
        H2Custom,
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
    }
}
</script>

<style lang="scss">
.swiper {
    width: 520px;
    &__title {
        margin-bottom: 24px !important;
        padding-left: 24px;
    }
    &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 16px;
        padding-left: 24px;
    }
    &-slide__text {
        font: italic 400 16px / 1.75 var(--font5);
    }
    &-slide__video {
        max-width: 100%;
        height: auto;
    }
    &-slide__name {
        font: 700 18px / 1.66667 var(--font-family);
        text-align: right;
        margin: 0;
        margin-top: 8px;
    }
    &-slide__image {
        width: auto;
        height: 350px;
    }

    &-controlls {
        width: 100%;
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
        display: flex;
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
        margin: 0;
        &__title {
            padding-left: 0px;
        }
        &__main-wrapper {
            padding-left: 0px;
        }
        &__content {
            padding-left: 0px;
        }
        &-slide__image {
            width: auto;
            height: auto;
            max-width: 378px;
        }
    }
}

@media (max-width: 991.99px) {
    .swiper {
        width: 692px;

        &__title {
            text-align: center;
        }
        &__main-wrapper {
            padding: 0px 24px;
        }
        &-slide__video {
            max-width: 464px;
            height: auto;
        }
        &-slide__name {
            text-align: center;
        }
        &-slide__wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &-controlls {
            flex-direction: column;
            gap: 20px;
        }
        &-pagination-custom {
            justify-content: center;
        }
    }
}

@media (max-width: 767.99px) {
    .swiper {
        width: 512px;
    }
}

@media (max-width: 574.99px) {
    .swiper {
        width: 358px;
        &__main-wrapper {
            padding: 0px 8px;
        }
        &-slide__video {
            max-width: 358px;
        }
        &-wrapper {
            align-items: center;
        }
    }
}
@media (max-width: 399.99px) {
    .swiper {
        width: 314px;
        &__main-wrapper {
            padding: 0px;
        }
        &-slide__video {
            max-width: 314px;
        }

        &-wrapper {
            align-items: center;
        }
    }
}
</style>

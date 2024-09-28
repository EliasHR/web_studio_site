<template>
    <section class="reviews" id="reviews">
        <div class="container">
            <div class="reviews__wrapper" v-if="!reviewsStore.reviewsIsLoading">
                <swiper-comp />
                <picture class="swiper-slide__image">
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
                        class="reviews__image"
                    />
                </picture>
            </div>
            <loading-comp v-else />
        </div>
    </section>
</template>

<script>
import LoadingComp from '@/components/ui/LoadingComp.vue'
import SwiperComp from '@/components/ui/swiper/SwiperComp.vue'
import { useReviewStore } from '@/stores/reviews'

export default {
    name: 'reviews-comp',
    components: {
        SwiperComp,
        LoadingComp
    },
    setup() {
        const reviewsStore = useReviewStore()
        reviewsStore.getReviews()
        return {
            reviewsStore
        }
    },
    mounted() {
        //this.reviewsStore.getReviews()
    }
}
</script>

<style lang="scss">
.reviews {
    scroll-margin-top: 96px;
    &__wrapper {
        display: grid;
        gap: 50px;
        grid-template-columns: auto auto;
    }
    &__title {
        margin-bottom: 24px;
    }
}
@media (max-width: 1399.99px) {
}

@media (max-width: 1199.99px) {
    .reviews {
        &__wrapper {
            gap: 25px;
        }
        &__image {
            width: auto;
            height: auto;
            max-width: 378px;
        }
    }
}

@media (max-width: 991.99px) {
    .reviews {
        scroll-margin-top: 64px;
        &__title {
            text-align: center;
            margin-bottom: 24px;
        }
        &__wrapper {
            grid-template-columns: auto;
            justify-items: center;
        }
    }
}

@media (max-width: 767.99px) {
}

@media (max-width: 574.99px) {
}

@media (max-width: 399.99px) {
    .reviews {
        &__image {
            max-width: 314px;
        }
    }
}
</style>

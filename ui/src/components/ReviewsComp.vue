<template>
    <section class="reviews">
        <div class="container">
            <div class="reviews__wrapper">
                <h2-custom class="reviews__title">Отзывы наших клиентов</h2-custom>
                <swiper-comp />
            </div>
        </div>
    </section>
</template>

<script>
import H2Custom from '@/components/ui/typographics/H2Custom.vue'
import SwiperComp from '@/components/ui/swiper/SwiperComp.vue'

export default {
    name: 'reviews-comp',
    components: {
        H2Custom,
        SwiperComp
    }
}
</script>

<style lang="scss" scoped>
.reviews {
    &__wrapper {
        position: relative;
        //height: 100%;
        /* height: 433px; */
    }
    &__title {
        position: absolute;
        left: 24px;
        top: 0;
        z-index: 10;
    }
}
@media (max-width: 1399.99px) {
}

@media (max-width: 1199.99px) {
}

@media (max-width: 991.99px) {
    .reviews {
        height: 750px;
    }
}

@media (max-width: 767.99px) {
}

@media (max-width: 574.99px) {
}

@media (max-width: 399.99px) {
    .reviews {
        height: 680px;
    }
}
</style>

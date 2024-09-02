<template>
    <section class="promo">
        <div class="container">
            <div class="promo__wrapper">
                <h2 class="promo__title">
                    Инструкция<br />
                    «Как оптимизировать сайт: 10 шагов»
                </h2>
                <a href="#">
                    <button-middle class="promo__button">Скачать</button-middle>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import ButtonMiddle from '@/components/ui/buttons/ButtonMiddle.vue'

export default {
    name: 'promo-comp',
    components: {
        ButtonMiddle
    }
}
</script>

<style lang="scss" scoped>
.promo {
    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background: var(--primary-seryy);
        height: 292px;
    }
    &__title {
        font: 700 34px / 1.58824 var(--font-family);
        text-align: center;
        color: var(--primary-white);
        margin: 0;
        margin-bottom: 24px;
    }
    &__button {
        width: 266px;
    }
}
@media (max-width: 1399.99px) {
}
/* 
@media (max-width: 1199.99px) {
    .promo {
        &__wrapper {
            width: 960px;
            background-position: 100% 100%;
        }
        &__title {
            font-size: 28px;
            line-height: 1.52;
        }
    }
}

@media (max-width: 991.99px) {
    .promo {
        &__wrapper {
            width: 740px;
            background-position: 92% 100%;
        }
    }
}

@media (max-width: 767.99px) {
    .promo {
        &__wrapper {
            width: 560px;
            background: url('@/assets/img/promo_bg_mobile.png');
        }
        &__title {
            font-size: 24px;
            line-height: 1.49;
        }
    }
}

@media (max-width: 574.99px) {
    .promo {
        &__wrapper {
            width: 368px;
            background: url('@/assets/img/promo_bg_mobile_small.png');
        }
        &__title {
            font: 700 22px / 1.63636 var(--font4);
        }
        &__button {
            width: 347px;
            font-size: 14px;
        }
    }
}

@media (max-width: 399.99px) {
    .promo {
        &__wrapper {
            width: 314px;
            height: 320px;
            background-size: contain;
            background-repeat: no-repeat;
        }
        &__title {
            font-size: 20px;
        }

        &__button {
            width: 294px;
        }
    }
} */
</style>

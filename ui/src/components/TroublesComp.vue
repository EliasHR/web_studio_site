<template>
    <section class="promo">
        <div class="container">
            <div class="promo__wrapper">
                <h2 class="promo__title">
                    Напишите о ваших проблемах в бизнесе –<br />
                    мы предложим решение
                </h2>
                <button-middle class="promo__button" @click="showDialog = true"
                    >Написать</button-middle
                >
            </div>
        </div>
    </section>
    <dialog-form v-if="showDialog" @close="showDialog = false" :type="'business'" :blackText="true">
        Отправить
    </dialog-form>
</template>

<script>
import ButtonMiddle from '@/components/ui/buttons/ButtonMiddle.vue'
import DialogForm from '@/components/ui/dialog/DialogForm.vue'

export default {
    name: 'promo-comp',
    components: {
        ButtonMiddle,
        DialogForm
    },
    data() {
        return {
            showDialog: false
        }
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

@media (max-width: 1199.99px) {
}

@media (max-width: 991.99px) {
    .promo {
        &__title {
            font-size: 24px;
            max-width: 483px;
        }
    }
}
@media (max-width: 767.99px) {
}

@media (max-width: 574.99px) {
    /* .promo {
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
    } */
}

@media (max-width: 399.99px) {
    .promo {
        &__title {
            max-width: 260px;
        }
    }
}
</style>

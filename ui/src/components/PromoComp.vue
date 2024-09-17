<template>
    <section class="promo">
        <div class="container">
            <div class="promo__wrapper">
                <h2 class="promo__title">
                    Обычно к нам обращаются, когда нужно: разработать телеграм бота или создать сайт
                </h2>

                <button-middle class="promo__button" @click="showDialog = true">
                    Обратиться
                </button-middle>
            </div>
        </div>
    </section>
    <dialog-form v-if="showDialog" @close="showDialog = false" :type="'app'" :blackText="true">
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
        max-width: 845px;
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
    .promo {
        &__title {
            max-width: 327px;
        }
    }
}

@media (max-width: 399.99px) {
}
</style>

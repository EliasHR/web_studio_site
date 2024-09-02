<template>
    <div class="choice-tree" @click.stop="$emit('close')">
        <div class="choice-tree__wrapper" @click.stop>
            <icon-close class="choice-tree__close" @click="$emit('close')" />
            <div v-if="showForm">
                <div class="choice-tree__title">Оставьте контакты</div>
                <form-order :treeType="treeType" @success="showForm = false" />
            </div>

            <div v-else class="choice-tree__success">
                <div class="choice-tree__text">Ваш заказ принят! Спасибо!</div>
                <div class="choice-tree__text">В ближайшее время мы с Вами свяжемся.</div>
            </div>
        </div>
    </div>
</template>

<script>
import FormOrder from '@/components/form/FormOrder.vue'
import FormMail from '@/components/icons/FormMail.vue'
import FormTelegram from '@/components/icons/FormTelegram.vue'
import FormWhatsapp from '@/components/icons/FormWhatsapp.vue'
import IconClose from '@/components/icons/IconClose.vue'

export default {
    name: 'choice-tree',
    components: {
        FormOrder,
        FormWhatsapp,
        FormMail,
        FormTelegram,
        IconClose
    },
    data() {
        return {
            showForm: true
        }
    },
    props: {
        treeType: String
    },
    methods: {
        disableScroll() {
            document.body.style.overflow = 'hidden'
        },
        enableScroll() {
            document.body.style.overflow = ''
        }
    },
    mounted() {
        this.disableScroll()
    },
    unmounted() {
        this.enableScroll()
    }
}
</script>

<style lang="scss" scoped>
.choice-tree {
    z-index: 999;
    background-color: #eee9e380;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &__wrapper {
        border-radius: 16px;
        width: 756px;
        min-height: 550px;
        background: var(--primary-colors-white);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        padding: 20px;
    }
    &__title {
        font: 700 20px / 1.7 var(--font4);
        text-align: center;
        color: var(--primary-colors-3b2406);
        margin-bottom: 16px;
    }
    &__text {
        text-align: center;
    }
    &__success {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 16px;
        width: 352px;
        font: 400 14px / 1.71429 var(--second-family);
        color: var(--secondary-accents-success);
    }
    &__link {
        @include reset-link;
        text-decoration: underline;
        &:hover {
            color: var(--primary-colors-6e4b1a);
        }
    }
    &__links {
        &-item {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
            gap: 8px;
            &-icon {
                width: 48px;
                height: 48px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
    &__close {
        position: absolute;
        right: 15px;
        top: 15px;
        z-index: 103;
        cursor: pointer;
    }
}

//@media (max-width: 1399.99px) {}

//@media (max-width: 1199.99px) {}

@media (max-width: 991.99px) {
    .choice-tree {
        &__wrapper {
            width: 656px;
        }
    }
}

@media (max-width: 767.99px) {
    .choice-tree {
        &__wrapper {
            width: 540px;
        }
    }
}

@media (max-width: 574.99px) {
    .choice-tree {
        &__wrapper {
            width: 90vw;
        }
        &__success {
            width: 80vw;
        }
    }
}

@media (max-width: 399.99px) {
}
</style>

<template>
    <div class="dialog-form" @click.stop="$emit('close')">
        <div class="dialog-form__container" @click.stop>
            <icon-close class="dialog-form__close" @click="$emit('close')" />
            <div class="dialog-form__wrapper">
                <picture class="dialog-form__illustration">
                    <!-- <source
                        srcset="@/assets/img/top_illustration_560.png"
                        media="(max-width: 767.99px)"
                    />
                    <source
                        srcset="@/assets/img/top_illustration_960.png"
                        media="(max-width: 1199.99px)"
                    /> -->
                    <img src="@/assets/img/form.png" />
                </picture>
                <div v-if="showForm">
                    <form-comp :type="type" @success="showForm = false" :blackText="blackText">
                        <slot></slot>
                    </form-comp>
                </div>

                <div v-else class="dialog-form__success">
                    <div class="dialog-form__text">Ваша заявка отправлена!</div>
                    <div class="dialog-form__text">Спасибо!</div>
                    <div class="dialog-form__text">В ближайшее время мы с Вами свяжемся.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormComp from '@/components/ui/form/FormComp.vue'
import IconClose from '@/components/ui/icons/IconClose.vue'

export default {
    name: 'dialog-form',
    components: {
        FormComp,
        IconClose
    },
    data() {
        return {
            showForm: true
        }
    },
    props: {
        type: {
            type: String,
            default: 'ring'
        },
        blackText: {
            type: Boolean,
            default: false
        }
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
.dialog-form {
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
    &__container {
        border-radius: 16px;
        width: 837px;
        min-height: 625px;
        background: var(--primary-white);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        padding: 20px 85px;
        box-sizing: border-box;
        overflow: hidden;
    }
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 46px;

        /* 
        
        width: 100%;
        padding: 24px;
        box-sizing: border-box; */
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
        //font: 400 14px / 1.71429 var(--second-family);
        //color: var(--secondary-accents-success);
    }
    &__link {
        @include reset-link;
        text-decoration: underline;
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
        right: 20px;
        top: 20px;
        width: 25px;
        height: 25px;
        z-index: 103;
        cursor: pointer;
    }
}

//@media (max-width: 1399.99px) {}

//@media (max-width: 1199.99px) {}

@media (max-width: 991.99px) {
    .dialog-form {
        &__container {
            width: 656px;
            max-height: 90vh;
        }
        &__illustration {
            display: none;
        }
    }
}

@media (max-width: 767.99px) {
    .dialog-form {
        &__container {
            width: 540px;
        }
    }
}

@media (max-width: 574.99px) {
    .dialog-form {
        &__container {
            width: 90vw;
            max-height: 90vh;
            min-height: 500px;
            padding: 15px;
        }
    }
}

@media (max-width: 399.99px) {
}
</style>

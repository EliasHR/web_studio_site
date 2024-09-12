<template>
    <section class="faq">
        <div class="container">
            <h2-custom class="faq__title">FAQ</h2-custom>
            <div class="faq__wrapper">
                <hr class="faq__line" />
                <div class="faq__question">
                    <div class="faq__question-title-wrapper" @click="question_1 = !question_1">
                        <h3 class="faq__question-title-text">
                            Предусмотрена ли гарантия на работы?
                        </h3>
                        <faq-arrow
                            class="faq__question-title-arrow"
                            :class="{ 'faq__question-title-arrow-active': question_1 }"
                        />
                    </div>
                    <Transition name="slide-fade">
                        <p-small class="faq__question-content" v-show="question_1">
                            Да. Мы вернем вам деньги, если не выполним условия по договору.
                        </p-small>
                    </Transition>
                </div>
                <hr class="faq__line" />
                <div class="faq__question">
                    <div class="faq__question-title-wrapper" @click="question_2 = !question_2">
                        <h3 class="faq__question-title-text">
                            Как происходит оплата? Разово или по частям
                        </h3>
                        <faq-arrow
                            class="faq__question-title-arrow"
                            :class="{ 'faq__question-title-arrow-active': question_2 }"
                        />
                    </div>
                    <Transition name="slide-fade">
                        <div v-show="question_2" class="faq__question-content-wrapper">
                            <p-small class="faq__question-content">
                                Мы работаем по agile системе, это означает, что берем оплату за
                                проект поэтапно.
                            </p-small>
                            <p-small class="faq__question-content">
                                Как показала практика это удобно и клиенту и нам.
                            </p-small>
                        </div>
                    </Transition>
                </div>
                <hr class="faq__line" />
                <div class="faq__question">
                    <div class="faq__question-title-wrapper" @click="question_3 = !question_3">
                        <h3 class="faq__question-title-text">Вы проводите обучение по продукту?</h3>
                        <faq-arrow
                            class="faq__question-title-arrow"
                            :class="{ 'faq__question-title-arrow-active': question_3 }"
                        />
                    </div>
                    <Transition name="slide-fade">
                        <p-small class="faq__question-content" v-show="question_3">
                            Да, мы записываем видео-уроки и при необходимости можем провести
                            онлайн-обучение для вас и ваших сотрудников
                        </p-small>
                    </Transition>
                </div>
                <hr class="faq__line" />
            </div>
        </div>
    </section>
</template>

<script>
import H2Custom from '@/components/ui/typographics/H2Custom.vue'
import FaqArrow from '@/components/ui/icons/FaqArrow.vue'
import PSmall from '@/components/ui/typographics/PSmall.vue'

export default {
    name: 'faq-comp',
    components: {
        H2Custom,
        FaqArrow,
        PSmall
    },
    data() {
        return {
            question_1: true,
            question_2: false,
            question_3: false
        }
    }
}
</script>

<style lang="scss" scoped>
.faq {
    //scroll-margin-top: 64px;
    &__title {
        padding-left: 24px;
        margin-bottom: 34px;
    }
    &__wrapper {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 21px;
        padding: 0 24px;
    }
    &__question {
        width: 100%;
        &-content {
            width: 755px;
            display: block;
        }
    }
    &__question-title-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        margin-bottom: 12px;
    }
    &__question-title-text {
        font: 600 18px / 1.66667 var(--second-family);
        margin: 0;
        //color: var(--primary-colors-3b2406);
    }
    &__question-title-arrow {
        width: 50px;
    }
    &__question-title-arrow-active {
        transform: rotate(-90deg);
    }
    &__question-content-wrapper {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    &__question-content {
        width: 755px;
        //display: block;
    }
    &__line {
        margin: 0;
        width: 100%;
    }
}
.slide-fade-enter-active {
    transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.5s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

@media (max-width: 1399.99px) {
}

@media (max-width: 1199.99px) {
}

@media (max-width: 991.99px) {
    .faq {
        width: 740px;
    }
}

@media (max-width: 767.99px) {
    .faq {
        width: 560px;
    }
}

@media (max-width: 574.99px) {
    .faq {
        width: 368px;
        &__question {
            &-title {
                &-text {
                    font-size: 16px;
                    line-height: 1.75;
                }
            }
            &-content {
                width: 368px;
            }
        }
    }
}

@media (max-width: 399.99px) {
    .faq {
        width: 314px;
        &__question {
            &-content {
                width: 314px;
            }
        }
    }
}
</style>

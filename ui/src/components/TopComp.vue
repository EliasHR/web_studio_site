<template>
    <section class="top">
        <div class="container">
            <div class="top__wrapper">
                <div class="top__info">
                    <div class="top__info-text">
                        <h1 class="top__title">
                            Разработка<br />
                            <span class="top__title_gradient">ботов</span> и
                            <span class="top__title_gradient">сайтов</span><br />
                            с гарантией результата
                        </h1>

                        <div class="top__text">
                            Создаем, внедряем, тестируем, поддерживаем it-продукты
                        </div>
                    </div>
                    <div class="top__actions">
                        <button-middle class="top__calculate" @click="showDialog = true"
                            >Рассчитать стоимость проекта</button-middle
                        >
                        <a class="top__link" href="https://t.me/code_mode7" target="_blank">
                            <button-middle class="top__tg-link"
                                >Написать в телеграм</button-middle
                            ></a
                        >
                    </div>
                </div>
                <picture>
                    <source
                        srcset="@/assets/img/top_illustration_560.png"
                        media="(max-width: 767.99px)"
                    />
                    <source
                        srcset="@/assets/img/top_illustration_960.png"
                        media="(max-width: 1199.99px)"
                    />
                    <img
                        class="top__illustration"
                        src="@/assets/img/top_illustration.png"
                        alt="Декоративный элемент главного блока страницы - треугольные скобки с косой чертой внутри"
                        width="500px"
                        height="350px"
                    />
                </picture>
            </div>

            <div class="top__bottom-section">
                <div class="top__gift">
                    <gift-comp />
                </div>
                <div class="top__services">
                    <ul class="top__services-list">
                        <li class="top__services-item">Телеграм бот</li>
                        <li class="top__services-item">Интеграции с CRM, 1С, МойСклад</li>
                        <li class="top__services-item top__services-item_gradient">
                            Решения для бизнеса
                        </li>
                        <li class="top__services-item">Интеграции с CRM, 1С, МойСклад</li>
                        <li class="top__services-item">Создание сайта</li>
                        <li class="top__services-item">Доработка, перенос, редизайн</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <dialog-form v-if="showDialog" @close="showDialog = false" :type="'cost'" :blackText="true">
        Рассчитать стоимость проекта
    </dialog-form>
</template>

<script>
import ButtonMiddle from '@/components/ui/buttons/ButtonMiddle.vue'
import GiftComp from '@/components/ui/GiftComp.vue'
import DialogForm from '@/components/ui/dialog/DialogForm.vue'

import top__illustration from '@/assets/img/top_illustration.png'

export default {
    name: 'top-comp',
    components: {
        ButtonMiddle,
        GiftComp,
        DialogForm
    },
    data() {
        return {
            showDialog: false
        }
    },
    head() {
        return {
            link: [
                {
                    rel: 'preload',
                    fetchpriority: 'high',
                    as: 'image',
                    href: top__illustration
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.top {
    padding: 24px 0;
    margin-bottom: 40px;
    margin-top: 96px;
    &__wrapper {
        background: var(--primary-seryy);
        border-radius: 8px;
        min-height: 449px;
        padding: 44px 24px 61px 24px;
        box-sizing: border-box;
        display: flex;
        align-items: end;
        justify-content: space-between;
        margin-bottom: 47px;
    }
    &__title {
        font: 700 60px / 1.3 var(--font11);
        color: var(--primary-white);
        @include reset-model;
    }
    &__title_gradient {
        background: linear-gradient(95deg, #badcff 0%, rgba(255, 255, 255, 0.96) 42%, #badcff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    &__info {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 24px;
    }
    &__info-text {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 8px;
    }
    &__text {
        font: 400 18px / 1.66667 var(--font-family);
        color: var(--primary-white);
    }
    &__actions {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: row;
        gap: 24px;
    }
    &__cactulate {
        width: 266px;
    }
    &__tg-link {
        @include reset-button;
        width: 266px;
        &:hover {
            background: none;
            text-decoration: underline;
            box-shadow: none;
        }
    }
    &__link {
        @include reset-link;
    }
    &__bottom-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__services-list {
        @include reset-list;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        max-width: 650px;
    }
    &__services-item {
        border-radius: 8px;
        padding: 6px 10px;
        font: 400 14px / 1.71429 var(--font-family);
        border: 2px solid var(--primary-accent);
        box-sizing: border-box;
    }
    &__services-item_gradient {
        border: none;
        border-width: 2px;
        background: linear-gradient(95deg, #badcff 0%, rgba(255, 255, 255, 0.96) 42%, #badcff 100%);
        position: relative; /* Относительное позиционирование */
        z-index: 2;
        &::after {
            content: '';
            border-radius: 8px;
            background-color: var(--primary-chernyy);
            position: absolute;
            left: 2px;
            right: 2px;
            top: 2px;
            bottom: 2px;
            z-index: -1;
        }
    }
}

@media (max-width: 1199.99px) {
    .top {
        &__illustration {
            margin-bottom: 80px;
            width: 297px;
            height: 249px;
        }
    }
}

@media (max-width: 991.99px) {
    .top {
        margin-bottom: 78px;
        margin-top: 64px;

        &__wrapper {
            min-height: 336px;
            position: relative;
            padding-top: 57px;
            padding-bottom: 64px;
        }
        &__title {
            font: 700 32px / 1.21875 var(--font11);
        }
        &__text {
            font: 400 14px / 1.71429 var(--font-family);
            max-width: 284px;
        }
        &__illustration {
            position: absolute;
            right: 30px;
            top: 30px;
            margin: 0;
            z-index: 0;
        }
        &__tg-link {
            z-index: 1;
        }
        &__bottom-section {
            align-items: start;
            flex-direction: column;
            gap: 48px;
        }
    }
}

@media (max-width: 767.99px) {
    .top {
        &__wrapper {
            min-height: 558px;
            flex-direction: column;
            align-items: center;
            justify-content: end;
            margin-bottom: 24px;
            padding-top: 48px;
            padding-bottom: 27px;
            gap: 16px;
        }
        &__title {
            text-align: center;
        }
        &__text {
            max-width: 100%;
        }
        &__info {
            align-items: center;
            gap: 40px;
        }
        &__info-text {
            align-items: center;
        }
        &__illustration {
            position: inherit;
            width: 282px;
            height: 182px;
        }
        &__actions {
            flex-direction: column;
            gap: 8px;
        }

        &__bottom-section {
            align-items: center;
            gap: 24px;
        }
        &__services-list {
            gap: 12px;
        }
    }
}

@media (max-width: 574.99px) {
    .top {
        &__wrapper {
            padding-left: 16px;
            padding-right: 16px;
        }
        &__info {
            gap: 16px;
        }
        &__text {
            text-align: center;
        }
    }
}

@media (max-width: 399.99px) {
    .top {
        &__wrapper {
            padding-bottom: 0;
        }
        &__info {
            gap: 8px;
        }
    }
}
</style>

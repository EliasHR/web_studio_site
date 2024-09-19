<template>
    <section class="not-found">
        <div class="container">
            <div class="not-found__wrapper">
                <div class="not-found__info">
                    <div class="not-found__info-text">
                        <h1 class="not-found__title">На этой странице ничего нет</h1>

                        <div class="not-found__text">
                            Кажется, что-то пошло не так! Запрашиваемая страница не существует.
                            Возможно, она устарела или была удалена.
                        </div>
                    </div>
                    <div class="not-found__actions">
                        <a href="/">
                            <button-middle class="not-found__calculate">
                                Вернуться на главную
                            </button-middle>
                        </a>
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
                    <img class="not-found__illustration" src="@/assets/img/top_illustration.png" />
                </picture>
            </div>
        </div>
    </section>
</template>

<script>
import ButtonMiddle from '@/components/ui/buttons/ButtonMiddle.vue'

export default {
    name: 'not-found-comp',
    components: {
        ButtonMiddle
    }
}
</script>

<style lang="scss" scoped>
.not-found {
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
    &__illustration {
        opacity: 0.2;
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
}

@media (max-width: 1199.99px) {
    .not-found {
        &__illustration {
            margin-bottom: 80px;
        }
    }
}

@media (max-width: 991.99px) {
    .not-found {
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
    .not-found {
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
        }
        &__actions {
            flex-direction: column;
            gap: 8px;
        }
    }
}

@media (max-width: 574.99px) {
    .not-found {
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
    .not-found {
        &__wrapper {
            padding-bottom: 0;
        }
        &__info {
            gap: 8px;
        }
    }
}
</style>

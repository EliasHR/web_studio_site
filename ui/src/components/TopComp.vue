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
                        <button-middle class="top__calculate"
                            >Рассчитать стоимость проекта</button-middle
                        >
                        <button-middle class="top__tg-link">Написать в телеграм</button-middle>
                    </div>
                </div>
                <img class="top__illustration" src="@/assets/img/top_illustration.png" />
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
</template>

<script>
import ButtonMiddle from '@/components/ui/buttons/ButtonMiddle.vue'
import GiftComp from '@/components/ui/GiftComp.vue'

export default {
    name: 'top-comp',
    components: {
        ButtonMiddle,
        GiftComp
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
        height: 449px;
        padding: 24px 24px 38px 24px;
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
            content: ''; /* Пустое содержимое */
            border-radius: 8px; /* Радиус скругления */
            background-color: var(--primary-chernyy);
            position: absolute; /* Абсолютное позиционирование */
            left: 2px;
            right: 2px;
            top: 2px;
            bottom: 2px; /* Положение псевдоэлемента */
            z-index: -1; /* Размещаем ниже текста */
        }
    }
}
</style>

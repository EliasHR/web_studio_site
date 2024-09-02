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
                        <li>Телеграм бот</li>
                        <li>Интеграции с CRM, 1С, МойСклад</li>
                        <li>Решения для бизнеса</li>
                    </ul>
                    <ul class="top__services-list">
                        <li>Доработка</li>
                        <li>Перенос</li>
                        <li>Редизайн сайта</li>
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
    &__wrapper {
        background: var(--primary-seryy);
        border-radius: 8px;
        height: 449px;
        padding: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 47px;
    }
    &__title {
        font: 700 44px / 1.31818 var(--font-family);
        color: var(--primary-white);
        margin: 0;
    }
    &__title_gradient {
        font: 700 44px / 1.31818 var(--font-family);
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
        align-items: flex-end;
    }
    &__services {
        display: flex;
        gap: 47px;
        margin-right: 150px;
    }
    &__services-list {
        @include reset-list;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
</style>

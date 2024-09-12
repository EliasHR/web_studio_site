<template>
    <section class="technologies">
        <div class="container">
            <h2-custom class="technologies__title">Технологии</h2-custom>
            <div class="technologies__wrapper">
                <div class="technologies__text">
                    <p-small>
                        ИТ-специалисты работают с современным языком программирования и активно
                        применяют новейшие технологии.
                    </p-small>
                    <p-small>
                        Это позволяет разрабатывать надежное, масштабируемое и удобное в
                        использовании программное обеспечение, соответствующее требованиям
                        современного рынка.
                    </p-small>
                </div>
                <ol class="technologies__list">
                    <li class="technologies__list-item">
                        <technologies-python width="35px" height="34px" /><span>Python</span>
                    </li>
                    <li class="technologies__list-item">
                        <technologies-vue width="32px" height="28px" /><span>Vue</span>
                    </li>
                    <li class="technologies__list-item">
                        <technologies-django width="69px" height="24px" /><span>Django</span>
                    </li>
                    <li class="technologies__list-item">
                        <technologies-postgre width="40px" height="35px" /><span>PostgreSQL</span>
                    </li>
                    <li class="technologies__list-item">
                        <img
                            src="@/assets/img/technologies_aiogram.webp"
                            width="29px"
                            height="29px"
                        /><span>Aiogram</span>
                    </li>
                    <li class="technologies__list-item">
                        <technologies-docker width="60px" height="35px" /><span>Docker</span>
                    </li>
                </ol>
            </div>
        </div>
    </section>
</template>

<script>
import H2Custom from '@/components/ui/typographics/H2Custom.vue'
import PSmall from '@/components/ui/typographics/PSmall.vue'
import TechnologiesPython from '@/components/ui/icons/TechnologiesPython.vue'
import TechnologiesVue from '@/components/ui/icons/TechnologiesVue.vue'
import TechnologiesDjango from '@/components/ui/icons/TechnologiesDjango.vue'
import TechnologiesPostgre from '@/components/ui/icons/TechnologiesPostgre.vue'
import TechnologiesDocker from '@/components/ui/icons/TechnologiesDocker.vue'

export default {
    name: 'technologies-comp',
    components: {
        H2Custom,
        PSmall,
        TechnologiesPython,
        TechnologiesVue,
        TechnologiesDjango,
        TechnologiesPostgre,
        TechnologiesDocker
    }
}
</script>

<style lang="scss" scoped>
.technologies {
    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 48px;
        padding: 0 24px;
    }
    &__title {
        padding-left: 24px;
    }
    &__text {
        max-width: 464px;
    }
    &__list {
        @include reset-list;
        display: flex;
        justify-content: space-between;
    }
    &__list-item {
        border: 0.62px solid var(--tech-border);
        border-radius: 10px;
        width: 122px;
        height: 117px;
        padding: 22px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        gap: 12px;
    }
}

@media (max-width: 1399.99px) {
}

@media (max-width: 1199.99px) {
}

@media (max-width: 991.99px) {
}

@media (max-width: 767.99px) {
}

@media (max-width: 574.99px) {
}

@media (max-width: 399.99px) {
}
</style>

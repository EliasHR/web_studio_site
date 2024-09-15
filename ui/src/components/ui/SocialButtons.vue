<template>
    <div class="social">
        <a href="#" class="social__link">
            <fixed-whats-app class="social__wa" />
        </a>
        <a href="#" class="social__link">
            <fixed-telegram class="social__tg" />
        </a>
    </div>
</template>

<script>
import FixedTelegram from '@/components/ui/icons/FixedTelegram.vue'
import FixedWhatsApp from '@/components/ui/icons/FixedWhatsApp.vue'

export default {
    name: 'social-buttons',
    components: {
        FixedTelegram,
        FixedWhatsApp
    }
}
</script>

<style lang="scss">
.social {
    width: 63px;
    height: 136px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 15;
}

@media (max-width: 1199.99px) {
}

@media (max-width: 991.99px) {
}

@media (max-width: 767.99px) {
}

@media (max-width: 574.99px) {
    .social {
        width: 48px;
        height: 101px;
        &__tg,
        &__wa {
            width: 48px;
            height: 48px;
        }
    }
}

@media (max-width: 399.99px) {
}
</style>

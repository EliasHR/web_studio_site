<template>
    <div class="social">
        <a href="#" class="social__link">
            <fixed-whats-app />
        </a>
        <a href="#" class="social__link">
            <fixed-telegram />
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

    /*     &__img {
        width: 56px;
        height: 56px;
        border-radius: 17px;
        z-index: 10;
    }

    &__link {
        width: 56px;
        height: 56px;
    } */
}
</style>

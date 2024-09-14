<template>
    <div class="floating-buttons">
        <social-buttons />
        <scroll-to-top />
    </div>
</template>

<script>
import ScrollToTop from '@/components/ui/ScrollToTop.vue'
import SocialButtons from '@/components/ui/SocialButtons.vue'
export default {
    name: 'floating-buttons',
    components: {
        ScrollToTop,
        SocialButtons
    }
}
</script>

<style lang="scss" scoped>
.floating-buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    min-height: 184px;
    gap: 24px;
    position: fixed;
    right: 5%;
    bottom: 5%;
    z-index: 99;
}
</style>

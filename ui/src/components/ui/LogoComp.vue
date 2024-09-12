<template>
    <div class="logo">
        <a class="logo__link" href="/">
            <logo-icon />
            <div class="logo__text">веб-разработка и программы</div>
        </a>
    </div>
</template>

<script>
import LogoIcon from '@/components/ui/icons/LogoIcon.vue'
export default {
    name: 'logo-comp',
    components: {
        LogoIcon
    }
}
</script>

<style lang="scss" scoped>
.logo {
    &__text {
        font: 400 11px / 0.42857 var(--font-family);
        color: var(--primary-chernyy);
    }
    &__link {
        @include reset-link;
    }
}
</style>

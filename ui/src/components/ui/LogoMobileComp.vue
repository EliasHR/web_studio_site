<template>
    <div class="logo">
        <a class="logo__link" href="/">
            <logo-mobile-icon class="logo__icon" />
            <div class="logo__text">веб-разработка и программы</div>
        </a>
    </div>
</template>

<script>
import LogoMobileIcon from '@/components/ui/icons/LogoMobileIcon.vue'
export default {
    name: 'logo-comp',
    components: {
        LogoMobileIcon
    }
}
</script>

<style lang="scss" scoped>
.logo {
    &__text {
        font: 400 7px / 0.42857 var(--font-family);
        color: var(--primary-white);
    }
    &__link {
        @include reset-link;
    }
    &__icon {
        width: 102px;
        height: 20px;
    }
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

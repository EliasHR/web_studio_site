<template>
    <div class="logo">
        <a class="logo__link" href="/">
            <logo-mobile-icon class="logo__icon" />
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
    &__link,
    &__icon {
        width: 93px;
        height: 29px;
        display: block;
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

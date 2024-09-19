<template>
    <div class="logo">
        <a class="logo__link" href="/" title="Переход на главную страницу сайта">
            <logo-icon class="logo__icon" width="161px" height="50px" />
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
    &__link {
        width: 161px;
        height: 50px;
        display: block;
    }
}
@media (max-width: 1199.99px) {
}

@media (max-width: 991.99px) {
    .logo {
        &__icon,
        &__link {
            width: 120px;
            height: 38px;
        }
    }
}

@media (max-width: 767.99px) {
}

@media (max-width: 574.99px) {
    .logo {
        &__icon,
        &__link {
            width: 84px;
            height: 28px;
        }
    }
}

@media (max-width: 399.99px) {
}
</style>

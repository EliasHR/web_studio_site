<template>
    <div class="logo">
        <a class="logo__link" href="/">
            <logo-icon class="logo__icon" />
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
@media (max-width: 1199.99px) {
}

@media (max-width: 991.99px) {
    .logo {
        &__icon {
            width: 115px;
            height: 25px;
        }
        &__text {
            font-size: 8px;
        }
    }
}

@media (max-width: 767.99px) {
}

@media (max-width: 574.99px) {
    .logo {
        &__icon {
            width: 84px;
            height: 18px;
        }
        &__text {
            font-size: 6px;
        }
        &__link {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
    }
}

@media (max-width: 399.99px) {
}
</style>

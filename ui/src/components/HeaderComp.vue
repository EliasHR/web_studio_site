<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <logo-comp />
                <div class="header__menu">
                    <div class="header__contact">
                        <contact-nav-bar />
                        <button-small>Обратный звонок</button-small>
                    </div>
                    <div class="header__nav">
                        <main-nav-bar />
                    </div>
                </div>
                <button-middle class="header__button-mobile">Обратный звонок</button-middle>
                <hamburger-menu class="header__hamburger" />
            </div>
        </div>
    </header>
</template>

<script>
import ButtonSmall from '@/components/ui/buttons/ButtonSmall.vue'
import ButtonMiddle from '@/components/ui/buttons/ButtonMiddle.vue'
import LogoComp from '@/components/ui/LogoComp.vue'
import ContactNavBar from '@/components/ui/navbar/ContactNavBar.vue'
import MainNavBar from '@/components/ui/navbar/MainNavBar.vue'
import HamburgerMenu from '@/components/ui/navbar/HamburgerMenu.vue'

export default {
    name: 'header-comp',
    components: {
        LogoComp,
        MainNavBar,
        ButtonSmall,
        ButtonMiddle,
        ContactNavBar,
        HamburgerMenu
    }
}
</script>

<style lang="scss" scoped>
.header {
    background: var(--primary-white);
    color: var(--primary-chernyy);
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    &__hamburger,
    &__button-mobile {
        display: none;
    }

    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__menu {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    &__contact {
        display: flex;
        justify-content: flex-end;
        gap: 53px;
    }
}

@media (max-width: 1199.99px) {
}

@media (max-width: 991.99px) {
    .header {
        height: 64px;
        color: var(--primary-white);
        &__menu {
            display: none;
        }

        &__button-mobile {
            display: block;
        }
        &__hamburger {
            display: flex;
            justify-content: end;
            width: 115px;
        }
    }
}

@media (max-width: 767.99px) {
}

@media (max-width: 574.99px) {
    .header {
        &__hamburger {
            width: 84px;
        }
    }
}

@media (max-width: 399.99px) {
    .header {
        &__hamburger {
            width: auto;
        }
        &__button-mobile {
            padding: 0 20px;
        }
    }
}
</style>

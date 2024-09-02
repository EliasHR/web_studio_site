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
            </div>
        </div>
    </header>
</template>

<script>
import LogoComp from '@/components/ui/LogoComp.vue'
import MainNavBar from '@/components/ui/navbar/MainNavBar.vue'
import ContactNavBar from '@/components/ui/navbar/ContactNavBar.vue'
import ButtonSmall from '@/components/ui/buttons/ButtonSmall.vue'

export default {
    name: 'header-comp',
    components: {
        LogoComp,
        MainNavBar,
        ButtonSmall,
        ContactNavBar
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
</style>

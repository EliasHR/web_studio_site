<template>
    <div class="sidemenu">
        <button
            class="sidemenu__btn"
            @click="navOpen = !navOpen"
            v-bind:class="{ active: navOpen }"
        >
            <icon-hamburger v-if="!navOpen" />
            <icon-close v-else />
        </button>
        <transition name="translateX">
            <nav v-show="navOpen" class="sidemenu__nav">
                <div class="sidemenu__wrapper">
                    <logo-mobile-comp class="sidemenu__logo" />

                    <div class="sidemenu__menu">
                        <ul class="sidemenu__list">
                            <li class="sidemenu__item">
                                <nav-item href="#services" @click="navOpen = !navOpen">
                                    Услуги
                                </nav-item>
                            </li>
                            <li class="sidemenu__item">
                                <nav-item href="#examples" @click="navOpen = !navOpen">
                                    Примеры проектов
                                </nav-item>
                            </li>
                            <li class="sidemenu__item">
                                <nav-item href="#about" @click="navOpen = !navOpen">
                                    О нас
                                </nav-item>
                            </li>
                            <li class="sidemenu__item">
                                <nav-item href="#technologies" @click="navOpen = !navOpen">
                                    Технологии
                                </nav-item>
                            </li>
                            <li class="sidemenu__item">
                                <nav-item href="#reviews" @click="navOpen = !navOpen">
                                    Отзывы
                                </nav-item>
                            </li>
                            <li class="sidemenu__item">
                                <nav-item href="#contacts" @click="navOpen = !navOpen">
                                    Контакты
                                </nav-item>
                            </li>
                            <li class="sidemenu__item">
                                <nav-item
                                    href="mailto:info@codemode.net"
                                    @click="navOpen = !navOpen"
                                >
                                    info@codemode.net
                                </nav-item>
                            </li>
                            <li class="sidemenu__item">
                                <nav-item href="tel:+37491368838" @click="navOpen = !navOpen">
                                    +374 91 36 88 38
                                </nav-item>
                            </li>
                        </ul>

                        <div class="sidemenu__social">
                            <nav-item href="#" @click="navOpen = !navOpen">
                                <hamburger-whatsapp />
                            </nav-item>
                            <nav-item href="#" @click="navOpen = !navOpen">
                                <hamburger-telegram />
                            </nav-item>
                        </div>
                    </div>
                </div>
            </nav>
        </transition>
    </div>
</template>

<script>
import LogoMobileComp from '@/components/ui/LogoMobileComp.vue'
import HamburgerTelegram from '@/components/ui/icons/HamburgerTelegram.vue'
import HamburgerWhatsapp from '@/components/ui/icons/HamburgerWhatsapp.vue'
import IconClose from '@/components/ui/icons/IconClose.vue'
import IconHamburger from '@/components/ui/icons/IconHamburger.vue'
import NavItem from '@/components/ui/navbar/NavItem.vue'

export default {
    name: 'hamburgerMenu',
    components: {
        IconHamburger,
        IconClose,
        NavItem,
        LogoMobileComp,
        HamburgerTelegram,
        HamburgerWhatsapp
    },
    data() {
        return {
            navOpen: false
        }
    },
    watch: {
        navOpen(value) {
            if (value === true) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.sidemenu {
    position: relative;
    &__nav {
        width: 280px;
        height: 340px;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 99;
        background: var(--primary-chernyy);
        overflow: hidden;
        // padding: 62px 21px 0 21px;
        padding: 20px;
        box-sizing: border-box;
        // box-shadow: 2px 0 3px$grey-6;
        // overflow-y: scroll;
    }
    &__btn {
        display: block;
        width: 50px;
        height: 50px;
        border: none;
        position: relative;
        z-index: 100;
        appearance: none;
        cursor: pointer;
        outline: none;
        background: inherit;
    }
    &__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    &__list {
        @include reset-list;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 8px;
    }
    &__menu {
        display: flex;
        justify-content: space-between;
        align-items: end;
    }

    &__item {
        font: 600 14px / 1.71429 var(--font-family);
    }
    &__social {
        display: flex;
        gap: 16px;
        align-items: end;
    }
}

.translateX-enter {
    transform: translateY(-200px);
    opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
    transform-origin: top left 0;
    transition: 0.5s ease;
}

.translateX-leave-to {
    transform: translateY(-200px);
    opacity: 0;
}
</style>

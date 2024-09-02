<template>
    <div id="sidemenu">
        <button
            class="sidemenu__btn"
            @click="navOpen = !navOpen"
            v-bind:class="{ active: navOpen }"
        >
            <icon-hamburger v-if="!navOpen" />
            <icon-close v-else />
        </button>
        <transition name="translateX">
            <nav v-show="navOpen">
                <div class="sidemenu__wrapper">
                    <header-logo-desktop class="sidemenu__logo" />
                    <ul class="sidemenu__list">
                        <li class="sidemenu__item">
                            <nav-item href="#catalog" @click="navOpen = !navOpen">Каталог</nav-item>
                        </li>
                        <li class="sidemenu__item">
                            <nav-item href="#about" @click="navOpen = !navOpen">О проекте</nav-item>
                        </li>
                        <li class="sidemenu__item">
                            <nav-item href="#order" @click="navOpen = !navOpen">
                                Процесс заказа
                            </nav-item>
                        </li>
                        <li class="sidemenu__item">
                            <nav-item href="#faq" @click="navOpen = !navOpen">FAQ</nav-item>
                        </li>
                        <li class="sidemenu__item">
                            <nav-item href="#contacts" @click="navOpen = !navOpen">
                                Контакты
                            </nav-item>
                        </li>
                    </ul>
                    <header-instagram-menu class="sidemenu__instagram" />
                </div>
            </nav>
        </transition>
    </div>
</template>

<script>
import IconHamburger from '@/components/icons/IconHamburger.vue'
import IconClose from '@/components/icons/IconClose.vue'
import HeaderLogoDesktop from '@/components/icons/HeaderLogoDesktop.vue'
import HeaderInstagramMenu from '@/components/icons/HeaderInstagramMenu.vue'
import NavItem from '@/components/navbar/NavItem.vue'

export default {
    name: 'hamburgerMenu',
    components: {
        IconHamburger,
        IconClose,
        HeaderLogoDesktop,
        HeaderInstagramMenu,
        NavItem
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
#sidemenu {
    position: relative;
    nav {
        width: 280px;
        height: 321px;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 99;
        background: var(--primary-colors-eee9e3);
        overflow: hidden;
        padding: 62px 21px 0 21px;
        box-sizing: border-box;
        // box-shadow: 2px 0 3px$grey-6;
        // overflow-y: scroll;
    }

    .sidemenu {
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

            span {
                display: block;
                width: 26px;
                height: 3px;
                margin: auto;
                background: var(--primary-colors-eee9e3);
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                transition: all 0.4s ease;
                border-radius: 10%;

                &.top {
                    transform: translateY(-8px);
                }

                &.bottom {
                    transform: translateY(8px);
                }
            }
            &.active {
                .top {
                    transform: rotate(-45deg);
                }
                .mid {
                    transform: translateX(-20px) rotate(360deg);
                    opacity: 0;
                }
                .bottom {
                    transform: rotate(45deg);
                }
            }
        }

        &__list {
            @include reset-list;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 18px;
        }

        &__item {
            font: 400 14px / 1.71429 var(--second-family);
        }
        &__logo {
            justify-content: start;
            position: absolute;
            top: 18px;
            left: 22px;
        }
        &__instagram {
            //z-index: 10100000;
        }
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

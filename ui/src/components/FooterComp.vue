<template>
    <footer class="footer">
        <div class="container">
            <h2-custom class="footer__title">IT-разработка для вашего бизнеса</h2-custom>
            <div class="footer__wrapper">
                <div class="footer__content">
                    <div class="footer__content-contacts">
                        <p-small>Армения, Ереван</p-small>
                        <a href="mailto:info@codemode.net" class="footer__link"
                            ><p-small>info@codemode.net</p-small></a
                        >
                        <div class="footer__content-social">
                            <a href="https://wa.me/37491368838" target="_blank"
                                ><footer-whats-app
                            /></a>
                            <a href="https://t.me/code_mode7" target="_blank"
                                ><footer-telegram
                            /></a>
                        </div>
                    </div>
                    <div class="footer__content-menu">
                        <footer-nav-bar />
                    </div>
                </div>
                <p-small class="footer__copyright">© 2022-{{ currentYear }} Code mode</p-small>
            </div>
        </div>
    </footer>
</template>

<script>
import H2Custom from '@/components/ui/typographics/H2Custom.vue'
import PSmall from '@/components/ui/typographics/PSmall.vue'
import FooterWhatsApp from '@/components/ui/icons/FooterWhatsApp.vue'
import FooterTelegram from '@/components/ui/icons/FooterTelegram.vue'
import FooterNavBar from '@/components/ui/navbar/FooterNavBar.vue'

export default {
    name: 'footer-comp',
    components: {
        H2Custom,
        PSmall,
        FooterWhatsApp,
        FooterTelegram,
        FooterNavBar
    },
    data() {
        return {
            currentYear: new Date().getFullYear()
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
    margin-bottom: 48px;
    &__title {
        font: 700 22px / 1.54545 var(--font11);
        padding-left: 24px;
        margin-bottom: 24px;
    }
    &__wrapper {
        padding: 0 24px;
    }
    &__content {
        display: flex;
        justify-content: space-between;
        margin-bottom: 76px;
    }
    &__content-contacts {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    &__content-menu {
        margin-right: 60px;
    }
    &__content-social {
        display: flex;
        gap: 12px;
    }
    &__link {
        color: var(--primary-white);
        &:hover {
            color: var(--primary-accent);
        }
    }
    &__copyright {
        text-align: center;
    }
}
@media (max-width: 1199.99px) {
    .footer {
        &__title {
            padding-left: 0px;
        }
        &__wrapper {
            padding: 0;
        }
    }
}

@media (max-width: 991.99px) {
    .footer {
        margin-bottom: 30px;
    }
}

@media (max-width: 767.99px) {
    .footer {
        &__title {
            text-align: center;
        }
        &__content {
            flex-direction: column;
            gap: 24px;
            margin-bottom: 48px;
        }
        &__content-contacts {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
    }
}

@media (max-width: 574.99px) {
}

@media (max-width: 399.99px) {
}
</style>

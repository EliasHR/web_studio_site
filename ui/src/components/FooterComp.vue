<template>
    <footer class="footer">
        <div class="container">
            <h2-custom class="footer__title">IT-разработка для вашего бизнеса</h2-custom>
            <div class="footer__wrapper">
                <div class="footer__content">
                    <div class="footer__content-contacts">
                        <p-small>Армения, Ереван</p-small>
                        <p-small>info@codemode.net</p-small>
                        <div class="footer__content-social">
                            <a href="#"><footer-whats-app /></a>
                            <a href="#"><footer-telegram /></a>
                        </div>
                    </div>
                    <div class="footer__content-menu">
                        <footer-nav-bar />
                    </div>
                </div>
                <p-small class="footer__copyright">© 2022-2024 Code mode</p-small>
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
    &__content-social {
        display: flex;
        gap: 12px;
    }
    &__copyright {
        text-align: center;
    }
}
</style>

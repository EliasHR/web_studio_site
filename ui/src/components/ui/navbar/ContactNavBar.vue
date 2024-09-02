<template>
    <nav class="contact-nav-bar">
        <div class="contact-nav-bar__social">
            <nav-item href="#"><header-whats-app /></nav-item>
            <nav-item href="#"><header-telegram /></nav-item>
        </div>
        <nav-item href="#">info@codemode.net</nav-item>
        <nav-item href="#">+374 91 36 88 38</nav-item>
    </nav>
</template>

<script>
import NavItem from '@/components/ui/navbar/NavItem.vue'
import HeaderTelegram from '@/components/ui/icons/HeaderTelegram.vue'
import HeaderWhatsApp from '@/components/ui/icons/HeaderWhatsApp.vue'

export default {
    name: 'contact-nav-bar',
    components: {
        NavItem,
        HeaderWhatsApp,
        HeaderTelegram
    }
}
</script>

<style lang="scss" scoped>
.contact-nav-bar {
    display: flex;
    gap: 32px;
    &__social {
        display: flex;
        gap: 8px;
    }
}

/* @media (max-width: 1199.99px) {
    .nav-bar {
        display: flex;
        gap: 30px;
    }
} */
</style>

<template>
    <nav class="footer-nav-bar">
        <nav-item href="/#services">Услуги</nav-item>
        <nav-item href="/#about">О нас</nav-item>
        <nav-item href="/#examples">Примеры проектов</nav-item>
        <nav-item href="/#reviews">Отзывы</nav-item>
        <nav-item href="/#technologies">Технологии</nav-item>
        <nav-item href="/#contacts">Контакты</nav-item>
    </nav>
</template>

<script>
import NavItem from '@/components/ui/navbar/NavItem.vue'
export default {
    name: 'footer-nav-bar',
    components: {
        NavItem
    }
}
</script>

<style lang="scss" scoped>
.footer-nav-bar {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: flex-end;
    gap: 24px 64px;
    & * {
        font-weight: 400;
    }
}

@media (max-width: 1199.99px) {
}

@media (max-width: 991.99px) {
}

@media (max-width: 767.99px) {
    .footer-nav-bar {
        justify-content: space-between;
        gap: 16px;
    }
}

@media (max-width: 574.99px) {
}

@media (max-width: 399.99px) {
}
</style>

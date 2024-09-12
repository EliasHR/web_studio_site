<template>
    <nav class="main-nav-bar">
        <nav-item href="#services">Услуги</nav-item>
        <nav-item href="#examples">Примеры проектов</nav-item>
        <nav-item href="#technologies">Технологии</nav-item>
        <nav-item href="#about">О нас</nav-item>
        <nav-item href="#reviews">Отзывы</nav-item>
        <nav-item href="#contacts">Контакты</nav-item>
    </nav>
</template>

<script>
import NavItem from '@/components/ui/navbar/NavItem.vue'
export default {
    name: 'main-nav-bar',
    components: {
        NavItem
    }
}
</script>

<style lang="scss" scoped>
.main-nav-bar {
    display: flex;
    gap: 48px;
    justify-content: flex-end;
}

/* @media (max-width: 1199.99px) {
    .nav-bar {
        display: flex;
        gap: 30px;
    }
} */
</style>

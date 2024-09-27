<script setup>
import { defineAsyncComponent } from 'vue'
import TopComp from '@/components/TopComp.vue'
const ServicesComp = defineAsyncComponent(() => import('@/components/ServicesComp.vue'))
const PromoComp = defineAsyncComponent(() => import('@/components/PromoComp.vue'))
const ProjectsComp = defineAsyncComponent(() => import('@/components/ProjectsComp.vue'))
const InstructionsComp = defineAsyncComponent(() => import('@/components/InstructionsComp.vue'))
const TroublesComp = defineAsyncComponent(() => import('@/components/TroublesComp.vue'))
const ReviewsComp = defineAsyncComponent(() => import('@/components/ReviewsComp.vue'))
const AboutComp = defineAsyncComponent(() => import('@/components/AboutComp.vue'))
const TechnologiesComp = defineAsyncComponent(() => import('@/components/TechnologiesComp.vue'))
const FaqComp = defineAsyncComponent(() => import('@/components/FaqComp.vue'))
const ContactsComp = defineAsyncComponent(() => import('@/components/ContactsComp.vue'))
</script>

<template>
    <top-comp />
    <main class="main">
        <services-comp />
        <instructions-comp />
        <projects-comp />
        <promo-comp />
        <about-comp />
        <troubles-comp />
        <technologies-comp />
        <reviews-comp />
        <faq-comp />
        <contacts-comp />
    </main>
</template>

<style lang="scss" scoped>
.main {
    display: grid;
    gap: 120px;
    margin-bottom: 120px;
}
@media (max-width: 1199.99px) {
}

@media (max-width: 991.99px) {
    .main {
        gap: 48px;
        margin-bottom: 48px;
    }
}

@media (max-width: 767.99px) {
}

@media (max-width: 574.99px) {
}

@media (max-width: 399.99px) {
}
</style>

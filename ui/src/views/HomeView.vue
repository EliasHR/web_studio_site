<script setup>
import { defineAsyncComponent } from 'vue'
import TopComp from '@/components/TopComp.vue'
import ServicesComp from '@/components/ServicesComp.vue'
import PromoComp from '@/components/PromoComp.vue'
//import ProjectsComp from '@/components/ProjectsComp.vue'
const ProjectsComp = defineAsyncComponent(() => import('@/components/ProjectsComp.vue'))
import InstructionsComp from '@/components/InstructionsComp.vue'
import TroublesComp from '@/components/TroublesComp.vue'
import ReviewsComp from '@/components/ReviewsComp.vue'
import AboutComp from '@/components/AboutComp.vue'
import TechnologiesComp from '@/components/TechnologiesComp.vue'
import FaqComp from '@/components/FaqComp.vue'
import ContactsComp from '@/components/ContactsComp.vue'
</script>

<template>
    <top-comp />
    <main class="main">
        <services-comp />
        <instructions-comp />
        <projects-comp />
        <!-- <ProjectsComp /> -->
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

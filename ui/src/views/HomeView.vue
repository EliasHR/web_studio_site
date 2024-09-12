<script setup>
import TopComp from '@/components/TopComp.vue'
import ServicesComp from '@/components/ServicesComp.vue'
import PromoComp from '@/components/PromoComp.vue'
import ProjectsComp from '@/components/ProjectsComp.vue'
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
</style>

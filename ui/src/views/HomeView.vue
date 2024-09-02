<script setup>
import TopComp from '@/components/TopComp.vue'
import ServicesComp from '@/components/ServicesComp.vue'
import PromoComp from '@/components/PromoComp.vue'
import ProjectsComp from '@/components/ProjectsComp.vue'
import InstructionsComp from '@/components/InstructionsComp.vue'
import TroublesComp from '@/components/TroublesComp.vue'
import ReviewsComp from '@/components/ReviewsComp.vue'
import AboutComp from '@/components/AboutComp.vue'
</script>

<template>
    <top-comp />
    <main class="main">
        <services-comp />
        <promo-comp />
        <projects-comp />
        <instructions-comp />
        <about-comp />
        <troubles-comp />
        <reviews-comp />
    </main>
</template>

<style lang="scss" scoped>
.main {
    display: grid;
    gap: 120px;
}
</style>

<script setup>
import { RouterView } from 'vue-router'
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
</script>

<template>
    <header-comp />
    <RouterView />
    <footer-comp />
</template>

<style scoped></style>

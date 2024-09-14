<script setup>
import { RouterView } from 'vue-router'
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import FloatingButtons from '@/components/ui/FloatingButtons.vue'
</script>

<template>
    <header-comp />
    <RouterView />
    <footer-comp />
    <floating-buttons />
</template>

<style scoped></style>

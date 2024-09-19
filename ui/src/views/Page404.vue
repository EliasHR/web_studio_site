<script setup>
import NotFoundComp from '@/components/NotFoundComp.vue'
</script>

<template>
    <not-found-comp />
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

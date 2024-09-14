<template>
    <h2 class="h2">
        <slot></slot>
    </h2>
</template>

<script>
export default {
    name: 'h2-custom'
}
</script>

<style lang="scss" scoped>
.h2 {
    font: 700 34px / 1.58824 var(--font-family);
    background: linear-gradient(95deg, #badcff 0%, rgba(255, 255, 255, 0.96) 42%, #badcff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
}

@media (max-width: 1199.99px) {
}
@media (max-width: 991.99px) {
    .h2 {
        font-size: 24px;
        line-height: 1.58333;
    }
}

@media (max-width: 767.99px) {
    .h2 {
        /* font-size: 24px;
        line-height: 1.46; */
    }
}
</style>

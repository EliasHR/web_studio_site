<template>
    <h3 class="h3">
        <slot></slot>
    </h3>
</template>

<script>
export default {
    name: 'h3-custom'
}
</script>

<style lang="scss" scoped>
.h3 {
    font: 700 24px / 1.58333 var(--font11);
    text-align: center;
    background: linear-gradient(95deg, #badcff 0%, rgba(255, 255, 255, 0.96) 42%, #badcff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
}

@media (max-width: 1199.99px) {
}
@media (max-width: 991.99px) {
    .h3 {
        font-size: 22px;
        line-height: 1.63636;
    }
}

@media (max-width: 767.99px) {
    .h3 {
    }
}
</style>

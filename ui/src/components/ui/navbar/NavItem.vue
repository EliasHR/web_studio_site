<template>
    <a class="nav-item">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: 'nav-item'
}
</script>

<style lang="scss" scoped>
.nav-item {
    font: 600 14px / 1.71429 var(--font-family);
    color: var(--primary-chernyy);
    cursor: pointer;
    @include reset-link;
    &:hover {
        //color: var(--primary-colors-a4ad3c);
        text-decoration: underline;
    }
    /* &:focus {
        color: var(--primary-colors-bbc274);
    } */
}
</style>

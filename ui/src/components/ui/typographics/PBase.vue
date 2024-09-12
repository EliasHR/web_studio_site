<template>
    <p class="paragraph">
        <slot></slot>
    </p>
</template>

<script>
export default {
    name: 'p-base'
}
</script>

<style lang="scss" scoped>
.paragraph {
    //font-family: 'Roboto', sans-serif;
    font-weight: 400;
    //color: var(--primary-colors-3b2406);
    margin: 0;
}
</style>

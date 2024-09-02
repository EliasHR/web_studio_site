<template>
    <p-base class="paragraph">
        <slot></slot>
    </p-base>
</template>

<script>
import PBase from '@/components/ui/typographics/PBase.vue'

export default {
    name: 'p-custom',
    components: {
        PBase
    }
}
</script>

<style lang="scss" scoped>
.paragraph {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.66667;
    color: var(--primary-colors-3b2406);
}
</style>

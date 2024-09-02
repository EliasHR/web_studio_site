<template>
    <p-base class="paragraph">
        <slot></slot>
    </p-base>
</template>

<script>
import PBase from '@/components/ui/typographics/PBase.vue'

export default {
    name: 'p-middle',
    components: {
        PBase
    }
}
</script>

<style lang="scss" scoped>
.paragraph {
    font-size: 18px;
    line-height: 1.66667;
}
</style>

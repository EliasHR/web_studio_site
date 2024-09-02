<template>
    <button-base :isLoading="isLoading" class="button-big">
        <slot></slot>
    </button-base>
</template>

<script>
import ButtonBase from '@/components/ui/buttons/ButtonBase.vue'

export default {
    name: 'button-big',
    components: {
        ButtonBase
    },
    props: {
        isLoading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.button-big {
    width: 368px;
    height: 64px;
}
</style>

<template>
    <button-base :isLoading="isLoading" class="button-middle">
        <slot></slot>
    </button-base>
</template>

<script>
import ButtonBase from '@/components/ui/buttons/ButtonBase.vue'

export default {
    name: 'button-middle',
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
.button-middle {
    padding: 0 23px;
    height: 48px;
}
</style>

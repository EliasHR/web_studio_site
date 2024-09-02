<template>
    <button-base :isLoading="isLoading" class="button-small">
        <slot></slot>
    </button-base>
</template>

<script>
import ButtonBase from '@/components/ui/buttons/ButtonBase.vue'

export default {
    name: 'button-small',
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
.button-small {
    width: 200px;
    height: 32px;
}
</style>

<template>
    <button class="button">
        <slot></slot>
        <IconLoadnig v-if="isLoading" />
    </button>
</template>

<script>
import IconLoadnig from '@/components/ui/icons/IconLoading.vue'

export default {
    name: 'button-base',
    components: {
        IconLoadnig
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
.button {
    background: var(--primary-accent);
    border-radius: 8px;
    border: none;
    font: 600 14px / 1.71429 var(--font-family);
    text-align: center;
    color: var(--primary-white);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    white-space: nowrap;

    &:hover {
        background: #6bb6fb;
        cursor: pointer;
    }

    &:focus {
        border: 1px solid var(--primary-accent);
        background: #6bb6fb;
    }
}
</style>

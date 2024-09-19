<template>
    <div class="loading">
        <div class="loading__wrapper">
            <loading-icon class="loading__locked" />
            <loading-icon class="loading__spinner" />
        </div>
    </div>
</template>

<script>
import LoadingIcon from '@/components/ui/icons/LoadingIcon.vue'
export default {
    name: 'loading-comp',
    components: {
        LoadingIcon
    }
}
</script>

<style lang="scss" scoped>
.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    &__wrapper {
        position: relative;
        width: 63px;
        height: 63px;
    }
    &__spinner {
        position: absolute;
        top: 0;
        left: 0;
        animation: spin 2s linear infinite; /* Добавляем анимацию */
    }
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>

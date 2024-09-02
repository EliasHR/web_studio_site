<!-- <template>
    <div class="picture-viewer" @click.stop="$emit('close')">
        <picture @click.stop>
            <source />
            <img class="picture-viewer__photo" :src="photo" alt="Картина - семейное древо" />
        </picture>
    </div>
</template> -->
<template>
    <div class="picture-viewer" @click.stop="$emit('close')">
        <icon-close class="picture-viewer__close" @click="$emit('close')" />
        <div class="picture-viewer__overlay"></div>
        <img
            class="picture-viewer__photo"
            :src="photo"
            alt="Картина - семейное древо"
            @click.stop
        />
    </div>
</template>

<script>
import IconClose from '@/components/icons/IconClose.vue'

export default {
    name: 'picture-viewer',
    components: {
        IconClose
    },
    props: {
        photo: File
    },
    methods: {
        disableScroll() {
            document.body.style.overflow = 'hidden'
        },
        enableScroll() {
            document.body.style.overflow = ''
        }
    },
    mounted() {
        this.disableScroll()
    },
    unmounted() {
        this.enableScroll()
    }
}
</script>

<style lang="scss" scoped>
.picture-viewer {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    z-index: 101;
    align-items: center;
    justify-content: center;
    &__close {
        position: fixed;
        right: 15px;
        top: 15px;
        z-index: 103;
        cursor: pointer;
    }
    &__overlay {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: var(--primary-colors-eee9e3);
        opacity: 0.8;
    }
    &__photo {
        position: relative;
        z-index: 102;
        opacity: 1;
        max-height: 100%;
        max-width: 100%;
    }
}
</style>

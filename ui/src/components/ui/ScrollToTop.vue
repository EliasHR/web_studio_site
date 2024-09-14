<template>
    <div class="scroll-button" v-show="scrollVisible" @click="scrollToTop">
        <span class="scroll-button__text">Наверх</span>
        <icon-scroll-to-top />
    </div>
</template>

<script>
import IconScrollToTop from '@/components/ui/icons/IconScrollToTop.vue'

export default {
    data() {
        return {
            scrollVisible: false
        }
    },
    components: {
        IconScrollToTop
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 200) {
                this.scrollVisible = true
            } else {
                this.scrollVisible = false
            }
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style lang="scss">
.scroll-button {
    @include reset-button;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    &:hover .scroll-button_color {
        stroke: var(--primary-accent);
    }
    &__text {
        font: 600 14px / 1.71429 var(--font-family);
        text-align: center;
        background: linear-gradient(95deg, #badcff 0%, rgba(255, 255, 255, 0.96) 42%, #badcff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}
</style>

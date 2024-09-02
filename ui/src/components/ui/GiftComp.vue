<template>
    <div class="gift">
        <img class="gift__pdf" src="@/assets/img/pdf.png" />

        <div class="gift__wrapper">
            <div class="gift__text">
                <p-small>Скачать бесплатно</p-small>
                <p-small><a class="gift__link" href="">Оптимизация сайта.pdf</a></p-small>
            </div>
            <gift-download class="geft__download" />
        </div>
    </div>
</template>

<script>
import GiftDownload from '@/components/ui/icons/GiftDownload.vue'
import PSmall from '@/components/ui/typographics/PSmall.vue'

export default {
    name: 'gift-comp',
    components: { GiftDownload, PSmall }
}
</script>

<style lang="scss" scoped>
.gift {
    width: 276px;
    height: 80px;
    margin-left: 24px;
    box-shadow: 0 4px 0 0 #007bff;
    background: #efefef;
    //transform: rotate(180deg);
    border-radius: 10px;
    position: relative;
    &__pdf {
        position: absolute;
        left: -25px;
        top: 20px;
    }
    &__text {
        font: 400 14px / 1.71429 var(--font-family);
        color: #000;
        margin-bottom: 12px;
    }
    &__wrapper {
        display: flex;
        padding: 12px 20px;
        justify-content: space-between;
        align-items: center;
    }
    &__link {
        @include reset-link;
        text-decoration: underline;
    }
}
</style>

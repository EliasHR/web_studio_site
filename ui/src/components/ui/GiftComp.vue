<template>
    <div class="gift">
        <img
            class="gift__pdf"
            src="@/assets/img/pdf.png"
            alt="Иконка PDF-файла"
            width="40px"
            height="40px"
        />
        <div class="gift__wrapper">
            <div class="gift__text">
                <div>Скачать бесплатно</div>
                <div>
                    <a class="gift__link" href="Оптимизация сайта.pdf" download
                        >Оптимизация сайта.pdf</a
                    >
                </div>
            </div>
            <a class="gift__link" href="Оптимизация сайта.pdf" download title="Скачать PDF-файл"
                ><gift-download class="geft__download"
            /></a>
        </div>
    </div>
</template>

<script>
import GiftDownload from '@/components/ui/icons/GiftDownload.vue'

export default {
    name: 'gift-comp',
    components: { GiftDownload }
}
</script>

<style lang="scss" scoped>
.gift {
    width: 252px;
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
    }
    &__wrapper {
        display: flex;
        padding: 16px 20px;
        justify-content: space-between;
        align-items: center;
    }
    &__link {
        @include reset-link;
        text-decoration: underline;
    }
}
@media (max-width: 1199.99px) {
}

@media (max-width: 991.99px) {
}

@media (max-width: 767.99px) {
}

@media (max-width: 574.99px) {
}

@media (max-width: 399.99px) {
}
</style>

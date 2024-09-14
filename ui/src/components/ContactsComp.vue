<template>
    <section class="contacts" id="contacts">
        <div class="container">
            <h2-custom class="contacts__title">Контакты</h2-custom>
            <div class="contacts__wrapper">
                <form-contacts />

                <div class="contacts__content">
                    <a href="tel:+37491368838">
                        <p-small class="contacts__phone">+374 91 36 88 38</p-small>
                    </a>
                    <p-small>Армения, Ереван</p-small>
                    <a href="mailto:info@codemode.net">
                        <p-small class="contacts__email">info@codemode.net</p-small>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import H2Custom from '@/components/ui/typographics/H2Custom.vue'
import FormContacts from '@/components/ui/form/FormContacts.vue'
import PSmall from '@/components/ui/typographics/PSmall.vue'

export default {
    name: 'contacts-comp',
    components: {
        H2Custom,
        FormContacts,
        PSmall
    }
}
</script>

<style lang="scss" scoped>
.contacts {
    scroll-margin-top: 96px;
    &__title {
        padding-left: 24px;
        margin-bottom: 34px;
    }
    &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;
        //width: 1152px;
        box-sizing: border-box;
        min-height: 502px;
        padding: 15px 68px;
        border-radius: 8px;
        background: url('@/assets/img/contacts_bg.png') no-repeat;
        background-size: 100% 100%;
    }
    &__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        gap: 24px;
    }
    &__phone {
        font: 700 24px / 1.5 var(--font-family);
        background: linear-gradient(95deg, #badcff 0%, rgba(255, 255, 255, 0.96) 42%, #badcff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        &:hover {
            background: inherit;
            background-clip: inherit;
            -webkit-background-clip: inherit;
            -webkit-text-fill-color: inherit;
            color: var(--primary-accent);
        }
    }
    &__email {
        font: 400 16px / 1.75 var(--font-family);
        color: var(--primary-white);
        &:hover {
            color: var(--primary-accent);
        }
    }
}

@media (max-width: 1399.99px) {
}

@media (max-width: 1199.99px) {
    .contacts {
        &__title {
            padding-left: 0px;
        }
    }
}

@media (max-width: 991.99px) {
    .contacts {
        scroll-margin-top: 64px;
        &__title {
            margin-bottom: 24px;
            text-align: center;
        }
        &__wrapper {
            flex-direction: column;
            gap: 65px;
            min-height: 707px;
            background: url('@/assets/img/contacts_bg_740.png') no-repeat center / cover;
        }
        &__content {
            align-items: center;
        }
    }
}

@media (max-width: 767.99px) {
}

@media (max-width: 574.99px) {
    .contacts {
        &__wrapper {
            padding: 15px;
        }
    }
}

@media (max-width: 399.99px) {
    .contacts {
        &__wrapper {
            padding: 15px 24px;
        }
    }
}
</style>

<template>
    <form class="form" @submit.prevent novalidate>
        <div class="form__field">
            <label class="form__label" for="name">Имя</label>
            <input-custom
                id="name"
                name="name"
                placeholder="Имя"
                v-model="state.name"
                required
                @blur="v$.name.$touch"
            />
            <div class="input-errors" v-for="error of v$.name.$errors" :key="error.$uid">
                <div class="form__error">{{ error.$message }}</div>
            </div>
        </div>
        <div class="form__field">
            <label class="form__label" for="phone">Телефон</label>
            <input-custom
                id="phone"
                name="phone"
                v-model="state.phone"
                placeholder="+7 900 555 77 55"
                required
                v-maska="'+7 ### ### ## ##'"
                @blur="v$.phone.$touch"
            />
            <div class="input-errors" v-for="error of v$.phone.$errors" :key="error.$uid">
                <div class="form__error">{{ error.$message }}</div>
            </div>
        </div>
        <p-super-small
            class="form__add-textarea"
            v-if="!showTextarea"
            @click="showTextarea = !showTextarea"
        >
            + Добавить сообщение
        </p-super-small>
        <div class="form__field" v-else>
            <label class="form__label" for="message">Сообщение</label>
            <textarea-custom
                id="message"
                name="message"
                placeholder="Введите текст"
                v-model="state.message"
                @blur="v$.message.$touch"
            ></textarea-custom>
            <div class="input-errors" v-for="error of v$.message.$errors" :key="error.$uid">
                <div class="form__error">{{ error.$message }}</div>
            </div>
        </div>
        <button-middle
            class="form__submit"
            type="submit"
            @click.stop="submit"
            :isLoading="isLoading"
        >
            Отправить
        </button-middle>
        <p-super-small class="form__policy">
            Нажимая на кнопку, вы соглашаетесь с
            <a class="form__link" href="Politika-konfidencialnosti DREVO.doc" target="_blank"
                >политикой конфиденциальности</a
            >
        </p-super-small>
        <div v-if="successMessage" class="form__success">
            {{ successMessage }}
        </div>
    </form>
</template>

<script>
import ButtonMiddle from '@/components/buttons/ButtonMiddle.vue'
import InputCustom from '@/components/form/InputCustom.vue'
import TextareaCustom from '@/components/form/TextareaCustom.vue'
import PSuperSmall from '@/components/typographics/PSuperSmall.vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, maxLength, minLength, required } from '@vuelidate/validators'
import axios from 'axios'
import { vMaska } from 'maska/vue'
import { reactive } from 'vue'

function getCookie(name) {
    let cookieValue = null
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';')
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim()
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === name + '=') {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
                break
            }
        }
    }
    return cookieValue
}
const csrftoken = getCookie('csrftoken')

export default {
    name: 'form-contacts',
    components: {
        ButtonMiddle,
        InputCustom,
        TextareaCustom,
        PSuperSmall
    },
    /* setup() {
        return { v$: useVuelidate() }
    }, */
    data() {
        return {
            showTextarea: false,
            isLoading: false,
            successMessage: ''
        }
    },
    directives: {
        maska: vMaska
    },
    methods: {
        async sendMessage() {
            try {
                this.isLoading = true
                const response = await axios
                    .post('https://famtreepicture.ru/api/send_application/', this.state, {
                        headers: { 'X-CSRFToken': csrftoken }
                    })
                    .then((response) => {
                        this.successMessage = 'Ваша заявка отправлена! Спасибо!'
                        this.v$.$reset()
                    })
                    .catch((error) => {})
                    .finally(() => {
                        this.isLoading = false
                        this.state.name = ''
                        this.state.phone = ''
                        this.state.message = ''
                    })
                // Handle success (e.g., show a success message, clear the form, etc.)
            } catch (error) {
                // Handle error (e.g., show an error message)
            }
        },
        async submit() {
            const result = await this.v$.$validate()
            if (!result) {
                // notify user form is invalid
                return
            }
            await this.sendMessage()
        }
    },
    setup() {
        const state = reactive({
            name: '',
            phone: '',
            message: ''
        })
        const rules = {
            name: {
                required: helpers.withMessage('Обязательное поле.', required),
                maxLength: helpers.withMessage(
                    'Имя не должно первышать 50 символов.',
                    maxLength(50)
                ),
                minLength: helpers.withMessage('Слишком короткое имя.', minLength(1))
            },
            phone: {
                required: helpers.withMessage('Обязательное поле.', required),
                minLength: helpers.withMessage('Некорректный номер.', minLength(16))
            },
            message: {
                maxLength: helpers.withMessage('Слишком длинное сообщение.', maxLength(10000))
            }
        }

        const v$ = useVuelidate(rules, state)

        return { state, v$ }
    }
}
</script>

<style lang="scss" scoped>
.form {
    max-width: 352px;
    &__field {
        margin-bottom: 16px;
    }
    &__label {
        font: 400 14px / 1.71429 var(--second-family);
        color: var(--primary-colors-3b2406);
    }
    &__error {
        font: 600 14px / 1.71429 var(--second-family);
        color: var(--secondary-accents-attention);
        margin: 0;
        margin-top: 6px;
    }
    &__add-textarea {
        cursor: pointer;
    }
    &__submit {
        margin: 16px 0;
    }
    &__link {
        @include reset-link;
        text-decoration: underline;
        &:hover {
            color: var(--primary-colors-a4ad3c);
        }
    }
    &__success {
        font: 600 14px / 1.71429 var(--second-family);
        color: var(--secondary-accents-success);
    }
}

//@media (max-width: 1399.99px) {}

//@media (max-width: 1199.99px) {}

//@media (max-width: 991.99px) {}

//@media (max-width: 767.99px) {}

@media (max-width: 574.99px) {
    .form {
        &__submit {
            font-size: 14px;
            line-height: 1.71429;
        }
    }
}

@media (max-width: 399.99px) {
    .form {
        max-width: 294px;
        &__submit {
            max-width: 294px;
        }
    }
}
</style>

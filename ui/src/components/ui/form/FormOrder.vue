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

        <input-custom id="tree_type" name="tree_type" hidden v-model="state.treeType" />

        <div class="form__field">
            <div class="form__file-pinned" v-if="fileName">
                <div class="form__file-pinned-name">
                    <form-file />
                    <div class="form__label form__file-name">{{ fileName }}</div>
                </div>
                <form-cancel class="form__cancel" @click="resetFile" />
            </div>
            <div class="form__file" @click="triggerFileUpload" v-else>
                <div class="form__label">Прикрепить схему древа</div>
                <form-add />
                <input-file-custom
                    id="file"
                    name="file"
                    v-model="state.file"
                    required
                    hidden
                    ref="fileInput"
                    @change="handleFileChange"
                    @blur="v$.file.$touch"
                />
            </div>
            <div class="input-errors" v-for="error of v$.file.$errors" :key="error.$uid">
                <div class="form__error">{{ error.$message }}</div>
            </div>
        </div>

        <div class="form__field form__instructions">
            <div class="form__label">
                Создайте схему
                <a class="form__link" href="https://famiry.ru/" target="_blank">здесь</a>
            </div>

            <div class="form__label">
                <a
                    class="form__link"
                    href="https://drive.google.com/file/d/10InAft0YoCe-29zLVVCBRGEbhzubT7rH/view"
                    target="_blank"
                >
                    Инструкция
                </a>
                по созданию схемы
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
    </form>
</template>

<script>
import ButtonMiddle from '@/components/buttons/ButtonMiddle.vue'
import InputCustom from '@/components/form/InputCustom.vue'
import InputFileCustom from '@/components/form/InputFileCustom.vue'
import FormAdd from '@/components/icons/FormAdd.vue'
import FormCancel from '@/components/icons/FormCancel.vue'
import FormFile from '@/components/icons/FormFile.vue'
import PSuperSmall from '@/components/typographics/PSuperSmall.vue'
import { fileFormatValidator } from '@/validators/fileValidators'
import { useVuelidate } from '@vuelidate/core'
import { helpers, maxLength, minLength, required } from '@vuelidate/validators'
import axios from 'axios'
import { vMaska } from 'maska/vue'
import { computed, reactive } from 'vue'

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
    name: 'form-order',
    components: {
        ButtonMiddle,
        InputCustom,
        PSuperSmall,
        FormAdd,
        FormFile,
        FormCancel,
        InputFileCustom
    },
    data() {
        return {
            showTextarea: false,
            isLoading: false,
            fileName: ''
        }
    },
    props: {
        treeType: String
    },
    directives: {
        maska: vMaska
    },
    methods: {
        async sendOrder() {
            try {
                this.isLoading = true
                // Создаем объект FormData
                const formData = new FormData()
                formData.append('name', this.state.name)
                formData.append('phone', this.state.phone)
                formData.append('tree_type', this.state.tree_type)
                formData.append('file', this.state.file)
                const response = await axios
                    /* .post('https://famtreepicture.ru/api/send_order/', this.state, {
                        headers: { 'X-CSRFToken': csrftoken }
                    }) */
                    .post('https://famtreepicture.ru/api/send_order/', formData, {
                        headers: { 'X-CSRFToken': csrftoken, 'Content-Type': 'multipart/form-data' }
                    })
                    .then((response) => {
                        this.$emit('success')
                        this.v$.$reset()
                    })
                    .catch((error) => {})
                    .finally(() => {
                        this.isLoading = false
                        this.state.name = ''
                        this.state.phone = ''
                        this.state.tree_type = ''
                        this.state.file = null
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
            await this.sendOrder()
        },
        triggerFileUpload() {
            if (this.$refs.fileInput) {
                this.$refs.fileInput.click()
            }
        },
        handleFileChange(event) {
            const file = event.target.files[0]
            if (file) {
                this.fileName = file.name // Получаем имя файла
                this.state.file = file
            } else {
                this.fileName = '' // Если файл не выбран, очищаем имя файла
                this.state.file = null
            }
        },
        resetFile() {
            this.fileName = ''
            this.state.file = '' // Сброс значения в модели
            //this.$refs.fileInput.value = null // Сброс значения в input
        }
    },
    setup(props) {
        const state = reactive({
            name: '',
            phone: '',
            tree_type: computed(() => props.treeType || '')
        })
        const allowedFormats = [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/bmp',
            'image/webp',
            'image/svg+xml',
            'application/pdf'
        ]

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
            file: {
                required: helpers.withMessage('Прикрепите файл со схемой.', required),
                fileFormat: helpers.withMessage(
                    'Не поддерживаемый формат.',
                    fileFormatValidator(allowedFormats)
                )
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
    gap: 16px;
    display: flex;
    flex-direction: column;
    &__field {
        // margin-bottom: 16px;
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
        //margin: 0px 0;
    }
    &__link {
        @include reset-link;
        text-decoration: underline;
        &:hover {
            color: var(--primary-colors-a4ad3c);
        }
    }
    &__file {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 48px;
        &:hover {
            cursor: pointer;
        }
        &-pinned {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 13px;
            &-name {
                display: flex;
                gap: 22px;
            }
        }
        &-name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 230px;
        }
    }
    &__instructions {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    &__cancel {
        cursor: pointer;
    }
}

//@media (max-width: 1399.99px) {}

//@media (max-width: 1199.99px) {}

//@media (max-width: 991.99px) {}

//@media (max-width: 767.99px) {}

@media (max-width: 574.99px) {
    .form {
        width: 80vw;
        &__submit {
            width: 80vw;
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

<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        type="file"
        class="input"
        ref="fileInput"
        @change="$emit('change', $event)"
    />
</template>

<script>
export default {
    name: 'input-custom',
    props: ['modelValue'],
    emits: ['update:modelValue'],
    methods: {
        click() {
            this.$refs.fileInput.click()
        }
    }
}
</script>

<style lang="scss" scoped>
.input {
    border: 1px solid var(--primary-colors-86755d);
    border-radius: 8px;
    height: 48px;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
    color: var(--primary-colors-404511);
    &::placeholder {
        color: var(--primary-colors-bbc274);
        opacity: 1;
    }
    &:focus,
    &:active {
        border-color: var(--primary-colors-404511);
    }
}
</style>

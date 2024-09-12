<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        type="text"
        class="input"
    />
</template>

<script>
export default {
    name: 'input-custom',
    props: ['modelValue'],
    emits: ['update:modelValue']
}
</script>

<style lang="scss" scoped>
.input {
    border: 2px solid var(--primary-accent);
    border-radius: 8px;
    height: 48px;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;

    &::placeholder {
        color: var(--neutral---400);
        opacity: 1;
    }
    &:focus,
    &:active {
        //    border-color: var(--primary-colors-404511);
    }
}
</style>

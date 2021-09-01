<script setup lang="ts">
    import { ref } from '@vue/reactivity'

    const isOpen = ref(false)

    const toggleOpen = () => {
        isOpen.value = !isOpen.value
    }
</script>

<template>
    <div @click="toggleOpen()">
        <slot name="trigger" :isOpen="isOpen"></slot>
    </div>
    <slot v-if="isOpen" name="content"></slot>
</template>

<style scoped></style>

<script setup lang="ts">
    const props = defineProps<{
        title: string
    }>()
</script>

<template>
    <button class="simple-button">
        {{ props.title }}
    </button>
</template>

<style scoped>
    .simple-button {
        font-size: 14px;

        color: #3c4043;
        background-color: #f8f9fa;
        border: 0;
        border-radius: 4px;

        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .simple-button:hover {
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        border: 1px solid #dadce0;

        padding-top: 9px;
        padding-bottom: 9px;
        padding-left: 19px;
        padding-right: 19px;
    }
</style>

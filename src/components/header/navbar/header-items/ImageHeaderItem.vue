<script setup lang="ts">
    const props = defineProps<{
        imageSrc: string
        href: string
    }>()
</script>

<template>
    <a :href="props.href" class="header-item">
        <img :src="props.imageSrc" alt="Profile picture" />
    </a>
</template>

<style scoped>
    .header-item {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        height: 2.5rem;
        width: 2.5rem;

        color: rgba(0, 0, 0, 0.87);
    }

    .header-item:hover {
        background-color: rgba(60, 64, 67, 0.08);
        border-radius: 50%;
    }

    .header-item img {
        height: 80%;
        width: 80%;

        border-radius: 50%;
    }
</style>

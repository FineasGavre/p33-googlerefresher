<script setup lang="ts">
    const props = defineProps({
        href: String,
        icon: String
    })
</script>

<template>
    <a :href="props.href" class="header-item">
        <font-awesome-icon :icon="props.icon"></font-awesome-icon>
    </a>
</template>

<style scoped>
    .header-item {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        height: 2.5rem;
        width: 2.5rem;

        color: rgba(0, 0, 0, 0.71);
    }

    .header-item:hover {
        background-color: rgba(60, 64, 67, 0.08);
        border-radius: 50%;
    }
</style>
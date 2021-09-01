<script setup lang="ts">
    const props = defineProps<{
        title: string
        icon: string
    }>()
</script>

<template>
    <div class="application-grid-menu-item">
        <font-awesome-icon :icon="props.icon"></font-awesome-icon>
        <span>{{ props.title }}</span>
    </div>
</template>

<style scoped>
    .application-grid-menu-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 0.5rem;

        padding: 1rem;
    }

    .application-grid-menu-item:hover {
        border-radius: 6px;
        background-color: #a0b8fa3f;
    }

    .application-grid-menu-item span {
        display: block;

        overflow: hidden;
        overflow-wrap: break-word;
        white-space: nowrap;
        text-align: center;

        width: 3rem;
        text-overflow: ellipsis;
    }

    .application-grid-menu-item:hover span {
        overflow: visible;
        white-space: normal;
    }
</style>

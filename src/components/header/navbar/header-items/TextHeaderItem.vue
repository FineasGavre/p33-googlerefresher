<script setup lang="ts">
    const props = defineProps<{
        title: string
        href: string
    }>()
</script>

<template>
    <a :href="props.href" class="header-item">
        {{ props.title }}
    </a>
</template>

<style scoped>
    .header-item {
        color: rgba(0, 0, 0, 0.87);
        line-height: 24px;
        vertical-align: middle;
        font-size: 13px;
        text-decoration: none;
    }

    .header-item:hover {
        text-decoration: underline !important;
    }
</style>

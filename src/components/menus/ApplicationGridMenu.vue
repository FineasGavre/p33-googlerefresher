<script setup lang="ts">
import ApplicationGridMenuItem from "./ApplicationGridMenuItem.vue";
</script>

<template>
    <div class="application-grid">
        <ApplicationGridMenuItem title="Hello world" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
        <ApplicationGridMenuItem title="Hello" icon="th"></ApplicationGridMenuItem>
    </div>
</template>

<style scoped>
    .application-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));

        padding-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
    }
</style>
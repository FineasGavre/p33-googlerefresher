<script setup lang="ts">
import TextHeaderItem from "./TextHeaderItem.vue"

</script>

<template>
    <div class="header-wrapper">
        <TextHeaderItem href="#" title="Gmail"></TextHeaderItem>
        <TextHeaderItem href="#" title="Images"></TextHeaderItem>
        <TextHeaderItem href="#" title="test"></TextHeaderItem>
    </div>
</template>

<style scoped>
    .header-wrapper {
        align-self: flex-end;

        height: 3rem;
        margin-right: 1rem;

        display: inline-flex;
        align-items: center;
        gap: 1rem;
    }
</style>
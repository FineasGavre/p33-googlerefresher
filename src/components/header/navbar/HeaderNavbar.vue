<script setup lang="ts">
import TextHeaderItem from "./header-items/TextHeaderItem.vue"
import IconHeaderItem from "./header-items/IconHeaderItem.vue";
import ImageHeaderItem from "./header-items/ImageHeaderItem.vue";

</script>

<template>
    <div class="header-wrapper">
        <TextHeaderItem href="#" title="Gmail"></TextHeaderItem>
        <TextHeaderItem href="#" title="Images"></TextHeaderItem>
        <div class="icon-section">
            <IconHeaderItem href="#" icon="th"></IconHeaderItem>
            <ImageHeaderItem href="#" image-src="https://gravatar.com/avatar/4e80bfb86b3568db48394df076350190?s=400&d=robohash&r=x"></ImageHeaderItem>
        </div>
    </div>
</template>

<style scoped>
    .header-wrapper {
        align-self: flex-end;

        height: 4rem;
        margin-right: 1rem;

        display: inline-flex;
        align-items: center;
        gap: 1rem;
    }

    .icon-section {
        display: inline-flex;
        align-items: center;

        gap: 0.5rem;
    }
</style>
<script setup lang="ts">
    import { ref } from "@vue/reactivity"

    const isOpen = ref(false)

    const toggleOpen = () => {
        console.log('toggled open')
        isOpen.value = !isOpen.value
        console.log(isOpen.value)
    }
</script>

<template>
        <div @click="toggleOpen()">
            <slot name="trigger"></slot>
        </div>
        <div class="dropdown-content" v-if="isOpen">
            <slot></slot>
        </div>
</template>

<style scoped>
    .dropdown-content {
        overflow-y: scroll;
        position: absolute;
        
        top: var(--navbar-size);
        right: 1rem;

        height: calc(var(--navbar-size) * 4);
        width: calc(var(--navbar-size) * 4);

        background-color: white;
        border-radius: 6px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    
        scrollbar-width: thin;
    }
</style>

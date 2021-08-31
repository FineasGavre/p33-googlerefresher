<script setup lang="ts">
    import HeaderNavbar from "./components/header/navbar/HeaderNavbar.vue"
</script>

<template>
    <div class="wrapper">
        <HeaderNavbar></HeaderNavbar>
    </div>
</template>

<style>
    #app {
        font-family: Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
    }
</style>

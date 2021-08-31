<script setup lang="ts">
    import HeaderNavbar from "./components/header/navbar/HeaderNavbar.vue"
    import Searchbar from "./components/search/Searchbar.vue";

</script>

<template>
    <div class="wrapper">
        <HeaderNavbar></HeaderNavbar>
        <div class="main-content">
            <img src="./assets/images/google-logo.png" alt="Google logo" />
            <Searchbar></Searchbar>
        </div>
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

    .main-content {
        margin-top: 8rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
</style>

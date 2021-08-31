<script setup lang="ts">
    import HeaderNavbar from "./components/header/navbar/HeaderNavbar.vue"
    import Searchbar from "./components/search/Searchbar.vue";
import SimpleButton from "./components/buttons/SimpleButton.vue";

</script>

<template>
    <div class="wrapper">
        <HeaderNavbar></HeaderNavbar>
        <div class="main-content">
            <img src="./assets/images/google-logo.png" alt="Google logo" />
            <Searchbar></Searchbar>
            <div class="button-group">
                <SimpleButton title="Google Search"></SimpleButton>
                <SimpleButton title="I'm Feeling Norocos"></SimpleButton>
            </div>
            <div class="language-cta">
                <span>Google offered in:</span>
                <a href="#">Română</a>
                <a href="#">magyar</a>
                <a href="#">Deutsch</a>
            </div>
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

    .button-group {
        display: inline-flex;
        align-items: center;
        gap: 1rem;
    }

    .language-cta {
        color: #3c4043;
        font-size: 13px;

        display: inline-flex;
        gap: 8px;
    }
</style>

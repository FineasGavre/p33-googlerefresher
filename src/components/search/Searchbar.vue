<script setup lang="ts"></script>

<template>
    <div class="search-bar">
        <font-awesome-icon class="icon" icon="search"></font-awesome-icon>
        <input type="text" />
        <font-awesome-icon class="icon" icon="microphone"></font-awesome-icon>
    </div>
</template>

<style scoped>
    .search-bar {
        min-width: 24rem;
        width: 35%;

        padding-left: 0.8rem;
        padding-right: 0.8rem;

        border-radius: 24px;
        border: solid 1px rgb(233, 225, 229);

        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    .search-bar:focus-within {
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.6);
    }

    .search-bar input {
        color: rgba(0, 0, 0, 0.87);

        max-width: 75vw;
        width: 100%;

        border: 0;
    }

    .search-bar input:focus {
        outline: none;
    }

    .icon {
        color: #9aa0a6;

        margin-top: 1rem;
        margin-bottom: 1rem;
    }
</style>

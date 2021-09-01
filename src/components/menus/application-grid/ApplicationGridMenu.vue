<script setup lang="ts">
    import ApplicationGridMenuItem from "../application-grid/ApplicationGridMenuItem.vue";
</script>

<template>
    <div class="menu-panel">
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
    </div>
</template>

<style scoped>
    .menu-panel {
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
    }

    .application-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));

        padding-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
    }
</style>
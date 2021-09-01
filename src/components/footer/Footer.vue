<script setup lang="ts"></script>

<template>
    <div class="footer-wrapper">
        <div class="country-section">Romania</div>
        <div class="footer-button-group">
            <div class="group">
                <a href="#">About</a>
                <a href="#">Advertising</a>
                <a href="#">Business</a>
                <a href="#">How Search works</a>
            </div>
            <div class="spacer"></div>
            <div class="group">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Settings</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .footer-wrapper {
        display: flex;
        flex-direction: column;

        color: rgba(0, 0, 0, 0.54);
        background-color: rgb(242, 242, 242);
    }

    .country-section {
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 2rem;

        font-size: 15px;

        border-bottom: 1px solid rgb(218, 220, 224);
    }

    .footer-button-group {
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 2rem;

        display: inline-flex;
        gap: 1rem;

        font-size: 14px;
    }

    .group {
        display: inline-flex;
        gap: 1rem;
    }

    .footer-button-group a {
        color: rgba(0, 0, 0, 0.54);
        text-decoration: none;
    }

    .footer-button-group a:hover {
        text-decoration: underline;
    }

    .footer-button-group a:last-child {
        margin-right: 2rem;
    }

    .spacer {
        flex-grow: 1;
    }

    @media screen and (max-width: 1200px) {
        .footer-button-group {
            justify-content: space-around;
        }

        .spacer {
            flex-grow: 0;
        }
    }

    @media screen and (max-width: 720px) {
        .footer-button-group {
            flex-direction: column;
        }

        .group {
            justify-content: center;
        }
    }
</style>

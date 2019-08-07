<template>
    <div id="app">
        <header-view />
        <router-view />
        <footer-view />
    </div>
</template>

<script>
    import HeaderView from './components/HeaderView';
    import FooterView from './components/FooterView';

    export default {
        name: 'App',
        components: { FooterView, HeaderView },
        metaInfo: {
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato|Raleway&display=swap' }
            ]
        }
    };
</script>

<style lang="scss">
    @import "./assets/colors";

    html, body {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: 'Raleway', Arial, sans-serif;
        font-size: 12pt;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    h1, h2, h3 {
        font-family: 'Lato', Arial, sans-serif;
        font-size: 18pt;
        margin: 0;
        padding: 6px;
        box-sizing: border-box;
        font-weight: normal;
    }

    p {
        margin: 0;
        padding: 6px;
        box-sizing: border-box;
    }

    .dark20 {
        background-color: $dark20;
        color: $dark20-font;
        &.inactive { color: adjust-color($dark20-font, $alpha: -.6); }
    }

    .dark40 {
        background-color: $dark40;
        color: $dark40-font;
        &.inactive { color: adjust-color($dark40-font, $alpha: -.6); }
    }

    .dark60 {
        background-color: $dark60;
        color: $dark60-font;
        &.inactive { color: adjust-color($dark60-font, $alpha: -.6); }
    }

    .dark80 {
        background-color: $dark80;
        color: $dark80-font;
        &.inactive { color: adjust-color($dark80-font, $alpha: -.6); }
    }

    .dark100 {
        background-color: $dark100;
        color: $dark100-font;
        &.inactive { color: adjust-color($dark100-font, $alpha: -.6); }
    }

    .dark120 {
        background-color: $dark120;
        color: $dark120-font;
        &.inactive { color: adjust-color($dark120-font, $alpha: -.6); }
    }
</style>

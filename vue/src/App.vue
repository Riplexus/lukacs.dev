<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App',
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
        background-color: $dark120;
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

    .dark20 { @include color($dark20, $dark20-font); }
    .dark40 { @include color($dark40, $dark40-font); }
    .dark60 { @include color($dark60, $dark60-font); }
    .dark80 { @include color($dark80, $dark80-font); }
    .dark100 { @include color($dark100, $dark100-font); }
    .dark120 { @include color($dark120, $dark120-font); }

    .light20 { @include color($light20, $light20-font); }
    .light40 { @include color($light40, $light40-font); }
    .light60 { @include color($light60, $light60-font); }
    .light80 { @include color($light80, $light80-font); }
    .light100 { @include color($light100, $light100-font); }
    .light120 { @include color($light120, $light120-font); }

    .pink20 { @include color($pink20, $pink20-font); }
    .pink40 { @include color($pink40, $pink40-font); }
    .pink60 { @include color($pink60, $pink60-font); }
    .pink80 { @include color($pink80, $pink80-font); }
    .pink100 { @include color($pink100, $pink100-font); }
    .pink120 { @include color($pink120, $pink120-font); }

    .green20 { @include color($green20, $green20-font); }
    .green40 { @include color($green40, $green40-font); }
    .green60 { @include color($green60, $green60-font); }
    .green80 { @include color($green80, $green80-font); }
    .green100 { @include color($green100, $green100-font); }
    .green120 { @include color($green120, $green120-font); }

    .purple20 { @include color($purple20, $purple20-font); }
    .purple40 { @include color($purple40, $purple40-font); }
    .purple60 { @include color($purple60, $purple60-font); }
    .purple80 { @include color($purple80, $purple80-font); }
    .purple100 { @include color($purple100, $purple100-font); }
    .purple120 { @include color($purple120, $purple120-font); }
</style>

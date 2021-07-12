<template>
    <div>
        <router-view class="main" />
        <!--<header-view class="black120" />-->
        <!--<footer-view class="black120" />-->
    </div>
</template>

<script>
    import HeaderView from './components/03.sections/HeaderView';
    import FooterView from './components/03.sections/FooterView';

    export default {
        name: 'App',
        components: {FooterView, HeaderView},
        metaInfo: {
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato|Raleway&display=swap' }
            ]
        }
    };
</script>

<style lang="scss">
    @import "./assets/colors";

    html, body, figure {
        margin: 0;
        padding: 0;
    }

    html {
        font-family: 'Raleway', Arial, sans-serif;
        font-size: 12pt;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3 {
        font-family: 'Lato', Arial, sans-serif;
        font-size: 18pt;
        margin: 0;
        padding: 6px;
        box-sizing: border-box;
        font-weight: normal;
    }

    a, a:visited, a:active, a:hover {
        color: inherit;
    }

    p {
        margin: 0;
        padding: 6px;
        box-sizing: border-box;
    }

    *[hidden] {
        display: none;
    }

    .main {
        overflow: hidden;
    }

    .section {
        position: relative;
        max-width: 1400px;
        margin: auto;
        padding: 0 60px;
    }

    .article {
        flex: 1 0 250px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-start;

        h2 {
            flex: 0 0 calc(100% - 12px);
            margin: 0 6px 12px;
            min-height: 29px + 12px;
        }

        p {
            flex: 1 0 250px;
            max-width: 450px;
            min-height: 100px;
            margin: 6px;
        }
    }

    .bold {
        font-weight: 700;
    }

    .big {
        font-size: 18pt;
    }

    .italic {
        font-style: italic;
    }

    .black20 { @include color($black, 1); }
    .black40 { @include color($black, 2); }
    .black60 { @include color($black, 3); }
    .black80 { @include color($black, 4); }
    .black100 { @include color($black, 5); }
    .black120 { @include color($black, 6); }

    .dark20 { @include color($dark, 1); }
    .dark40 { @include color($dark, 2); }
    .dark60 { @include color($dark, 3); }
    .dark80 { @include color($dark, 4); }
    .dark100 { @include color($dark, 5); }
    .dark120 { @include color($dark, 6); }

    .light20 { @include color($light, 1); }
    .light40 { @include color($light, 2); }
    .light60 { @include color($light, 3); }
    .light80 { @include color($light, 4); }
    .light100 { @include color($light, 5); }
    .light120 { @include color($light, 6); }

    .pink20 { @include color($pink, 1); }
    .pink40 { @include color($pink, 2); }
    .pink60 { @include color($pink, 3); }
    .pink80 { @include color($pink, 4); }
    .pink100 { @include color($pink, 5); }
    .pink120 { @include color($pink, 6); }

    .green20 { @include color($green, 1); }
    .green40 { @include color($green, 2); }
    .green60 { @include color($green, 3); }
    .green80 { @include color($green, 4); }
    .green100 { @include color($green, 5); }
    .green120 { @include color($green, 6); }

    .purple20 { @include color($purple, 1); }
    .purple40 { @include color($purple, 2); }
    .purple60 { @include color($purple, 3); }
    .purple80 { @include color($purple, 4); }
    .purple100 { @include color($purple, 5); }
    .purple120 { @include color($purple, 6); }
</style>

<template>
    <header class="c-welcome">
        <section class="section">
            <h1>Hello there.</h1>
        </section>
    </header>
</template>

<script>
    export default {
        name: 'WelcomeView'
    };
</script>

<style scoped lang="scss">
    .c-welcome {
        text-align: right;
        min-height: calc(100vh - 40px - 400px - 200px);
    }
</style>

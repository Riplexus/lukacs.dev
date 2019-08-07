<template>
    <section class="colors">
        <color-view class="colors__color" color="dark20" />
        <color-view class="colors__color" color="dark40" />
        <color-view class="colors__color" color="dark60" />
        <color-view class="colors__color" color="dark80" />
        <color-view class="colors__color" color="dark100" />
        <color-view class="colors__color" color="dark120" />
    </section>
</template>

<script>
    import ColorView from "../components/ColorView";
    export default {
        name: 'Colors',
        components: {ColorView}
    };
</script>

<style scoped lang="scss">
    section {
        display: flex;

        .colors__color {
            flex: 1 1 100/6%;
        }
    }
</style>

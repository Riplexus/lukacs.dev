<template>
    <div class="p-colors">
        <section class="p-colors__palette">
            <color-view class="p-colors__color" color="black100" />
            <color-view class="p-colors__color" color="dark60" />
            <color-view class="p-colors__color" color="purple100" />
            <color-view class="p-colors__color" color="pink80" />
            <color-view class="p-colors__color" color="green60" />
        </section>

        <section class="p-colors__hues">
            <color-view class="p-colors__color" color="black20" />
            <color-view class="p-colors__color" color="black40" />
            <color-view class="p-colors__color" color="black60" />
            <color-view class="p-colors__color" color="black80" />
            <color-view class="p-colors__color" color="black100" />
            <color-view class="p-colors__color" color="black120" />
        </section>

        <section class="p-colors__hues">
            <color-view class="p-colors__color" color="dark20" />
            <color-view class="p-colors__color" color="dark40" />
            <color-view class="p-colors__color" color="dark60" />
            <color-view class="p-colors__color" color="dark80" />
            <color-view class="p-colors__color" color="dark100" />
            <color-view class="p-colors__color" color="dark120" />
        </section>

        <section class="p-colors__hues">
            <color-view class="p-colors__color" color="light20" />
            <color-view class="p-colors__color" color="light40" />
            <color-view class="p-colors__color" color="light60" />
            <color-view class="p-colors__color" color="light80" />
            <color-view class="p-colors__color" color="light100" />
            <color-view class="p-colors__color" color="light120" />
        </section>

        <section class="p-colors__hues">
            <color-view class="p-colors__color" color="purple20" />
            <color-view class="p-colors__color" color="purple40" />
            <color-view class="p-colors__color" color="purple60" />
            <color-view class="p-colors__color" color="purple80" />
            <color-view class="p-colors__color" color="purple100" />
            <color-view class="p-colors__color" color="purple120" />
        </section>

        <section class="p-colors__hues">
            <color-view class="p-colors__color" color="pink20" />
            <color-view class="p-colors__color" color="pink40" />
            <color-view class="p-colors__color" color="pink60" />
            <color-view class="p-colors__color" color="pink80" />
            <color-view class="p-colors__color" color="pink100" />
            <color-view class="p-colors__color" color="pink120" />
        </section>

        <section class="p-colors__hues">
            <color-view class="p-colors__color" color="green20" />
            <color-view class="p-colors__color" color="green40" />
            <color-view class="p-colors__color" color="green60" />
            <color-view class="p-colors__color" color="green80" />
            <color-view class="p-colors__color" color="green100" />
            <color-view class="p-colors__color" color="green120" />
        </section>
    </div>
</template>

<script>
    import ColorView from '../02.items/ColorView'

    export default {
        name: 'Colors',
        components: { ColorView }
    }
</script>

<style scoped lang="scss">
    .p-colors__palette,
    .p-colors__hues {
        display: flex;
        border-bottom: 3px solid black;
        border-left: 3px solid black;
        border-right: 3px solid black;

        &:first-child {
            border-top: 3px solid black;
        }

        .p-colors__color {
            flex: 1 1 100/6%;
        }
    }
</style>

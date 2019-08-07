<template>
    <div class="section-start" :class="colorA">
        <div class="section-start__line" :class="lineClasses"></div>
    </div>
</template>

<script>
    export default {
        name: 'SectionStartView',

        props: {
            colorA: {
                type: String,
                required: true
            },
            colorB: {
                type: String,
                required: true
            },
            ltr: {
                type: Boolean,
                default: true
            }
        },

        computed: {
            lineClasses() {
                return {
                    [this.colorB]: true,
                    ltr: this.ltr
                };
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../assets/colors";

    .section-start {
        position: relative;
        overflow: hidden;
    }

    .section-start__line {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        &.dark20 { background: linear-gradient(to top left, $dark20 0%, $dark20 calc(50% - 0.8px), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%); }
        &.dark40 { background: linear-gradient(to top left, $dark40 0%, $dark40 calc(50% - 0.8px), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%); }
        &.dark60 { background: linear-gradient(to top left, $dark60 0%, $dark60 calc(50% - 0.8px), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%); }
        &.dark80 { background: linear-gradient(to top left, $dark80 0%, $dark80 calc(50% - 0.8px), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%); }
        &.dark100 { background: linear-gradient(to top left, $dark100 0%, $dark100 calc(50% - 0.8px), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%); }
        &.dark120 { background: linear-gradient(to top left, $dark120 0%, $dark120 calc(50% - 0.8px), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%); }

        &.ltr {
            &.dark20 { background: linear-gradient(to top right, $dark20 0%, $dark20 calc(50% - 0.8px), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%); }
            &.dark40 { background: linear-gradient(to top right, $dark40 0%, $dark40 calc(50% - 0.8px), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%); }
            &.dark60 { background: linear-gradient(to top right, $dark60 0%, $dark60 calc(50% - 0.8px), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%); }
            &.dark80 { background: linear-gradient(to top right, $dark80 0%, $dark80 calc(50% - 0.8px), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%); }
            &.dark100 { background: linear-gradient(to top right, $dark100 0%, $dark100 calc(50% - 0.8px), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%); }
            &.dark120 { background: linear-gradient(to top right, $dark120 0%, $dark120 calc(50% - 0.8px), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%); }
        }
    }
</style>

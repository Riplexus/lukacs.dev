<template>
    <div class="section-start" :class="{ [colorAName+colorALevel]: true }">
        <div class="section-start__line section-start__line--5" :class="{ [colorBName+colorBLevel]: true }"></div>
        <div class="section-start__line section-start__line--4" :class="{ [colorBName+colorBLevel]: true }"></div>
        <div class="section-start__line section-start__line--3 ltr" :class="{ [colorBName+colorBLevel]: true }"></div>
        <div class="section-start__line section-start__line--2" :class="{ [colorBName+colorBLevel]: true }"></div>
        <div class="section-start__line section-start__line--1" :class="{ [colorBName+colorBLevel]: true }"></div>
    </div>
</template>

<script>
    export default {
        name: 'SectionStartView',

        props: {
            colorAName: {
                type: String,
                required: true
            },
            colorALevel: {
                type: Number,
                required: true
            },
            colorBName: {
                type: String,
                required: true
            },
            colorBLevel: {
                type: Number,
                required: true
            },
            ltr: {
                type: Boolean,
                default: true
            }
        },

        created() {
            if (typeof window !== 'undefined') {
                window.addEventListener('scroll', this.handleScroll);
            }
        },

        mounted() {
            this.handleScroll();
        },

        destroyed() {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', this.handleScroll);
            }
        },

        methods: {
            handleScroll() {
                const position = this.$el.getBoundingClientRect();
                this.$el.style.height = `${position.top / window.innerHeight * 170 + 30}px`;
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../assets/colors";

    .section-start {
        position: relative;
        overflow: hidden;
        height: 200px;
    }

    .section-start__line {
        position: absolute;
        bottom: 0;
        width: 100%;

        &::after {
            content: '';
            position: absolute;
            right: 0;
            bottom: -400px;
            left: 0;
            height: 400px;
        }

        @mixin triangleRTL($color) {
            background: linear-gradient(to top left, $color 0%, $color calc(50% - 0.8px), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);

            &::after {
                background: $color;
            }
        }

        @mixin triangleLTR($color) {
            background: linear-gradient(to top right, $color 0%, $color calc(50% - 0.8px), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
        }

        &.dark20 { @include triangleRTL($dark20); }
        &.dark40 { @include triangleRTL($dark40); }
        &.dark60 { @include triangleRTL($dark60); }
        &.dark80 { @include triangleRTL($dark80); }
        &.dark100 { @include triangleRTL($dark100); }
        &.dark120 { @include triangleRTL($dark120); }

        &.light20 { @include triangleRTL($light20); }
        &.light40 { @include triangleRTL($light40); }
        &.light60 { @include triangleRTL($light60); }
        &.light80 { @include triangleRTL($light80); }
        &.light100 { @include triangleRTL($light100); }
        &.light120 { @include triangleRTL($light120); }

        &.pink20 { @include triangleRTL($pink20); }
        &.pink40 { @include triangleRTL($pink40); }
        &.pink60 { @include triangleRTL($pink60); }
        &.pink80 { @include triangleRTL($pink80); }
        &.pink100 { @include triangleRTL($pink100); }
        &.pink120 { @include triangleRTL($pink120); }

        &.green20 { @include triangleRTL($green20); }
        &.green40 { @include triangleRTL($green40); }
        &.green60 { @include triangleRTL($green60); }
        &.green80 { @include triangleRTL($green80); }
        &.green100 { @include triangleRTL($green100); }
        &.green120 { @include triangleRTL($green120); }

        &.purple20 { @include triangleRTL($purple20); }
        &.purple40 { @include triangleRTL($purple40); }
        &.purple60 { @include triangleRTL($purple60); }
        &.purple80 { @include triangleRTL($purple80); }
        &.purple100 { @include triangleRTL($purple100); }
        &.purple120 { @include triangleRTL($purple120); }

        &.ltr {
            &.dark20 { @include triangleLTR($dark20); }
            &.dark40 { @include triangleLTR($dark40); }
            &.dark60 { @include triangleLTR($dark60); }
            &.dark80 { @include triangleLTR($dark80); }
            &.dark100 { @include triangleLTR($dark100); }
            &.dark120 { @include triangleLTR($dark120); }

            &.light20 { @include triangleLTR($light20); }
            &.light40 { @include triangleLTR($light40); }
            &.light60 { @include triangleLTR($light60); }
            &.light80 { @include triangleLTR($light80); }
            &.light100 { @include triangleLTR($light100); }
            &.light120 { @include triangleLTR($light120); }

            &.pink20 { @include triangleLTR($pink20); }
            &.pink40 { @include triangleLTR($pink40); }
            &.pink60 { @include triangleLTR($pink60); }
            &.pink80 { @include triangleLTR($pink80); }
            &.pink100 { @include triangleLTR($pink100); }
            &.pink120 { @include triangleLTR($pink120); }

            &.green20 { @include triangleLTR($green20); }
            &.green40 { @include triangleLTR($green40); }
            &.green60 { @include triangleLTR($green60); }
            &.green80 { @include triangleLTR($green80); }
            &.green100 { @include triangleLTR($green100); }
            &.green120 { @include triangleLTR($green120); }

            &.purple20 { @include triangleLTR($purple20); }
            &.purple40 { @include triangleLTR($purple40); }
            &.purple60 { @include triangleLTR($purple60); }
            &.purple80 { @include triangleLTR($purple80); }
            &.purple100 { @include triangleLTR($purple100); }
            &.purple120 { @include triangleLTR($purple120); }
        }
    }

    .section-start__line--1 {
        height: 50%;
        bottom: 0;
        opacity: 1;
    }

    .section-start__line--2 {
        height: 13%;
        bottom: 52%;
        opacity: .6;
    }

    .section-start__line--3 {
        height: 19%;
        bottom: 69%;
        opacity: .3;
    }

    .section-start__line--4 {
        height: 51%;
        bottom: 42%;
        opacity: .1;
    }

    .section-start__line--5 {
        height: 10%;
        bottom: 90%;
        opacity: .1;
    }
</style>

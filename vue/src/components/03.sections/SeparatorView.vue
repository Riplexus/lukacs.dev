<template>
    <figure class="c-separator" :class="colorA">
        <div class="svg-def">
            <svg id="tree" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L50 0 L100 100 Z"/>
            </svg>
        </div>

        <div class="c-separator__line c-separator__line--5 triangle" :class="colorB">
            <div v-if="withOrnaments">
                <div class="c-separator__tree c-separator__tree--5-a">
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
                    <svg><use xlink:href="#tree"/></svg>
                </div>
                <div class="c-separator__tree c-separator__tree--5-b">
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
                    <svg><use xlink:href="#tree"/></svg>
                </div>
                <div class="c-separator__tree c-separator__tree--5-c">
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
                    <svg><use xlink:href="#tree"/></svg>
                </div>
            </div>
        </div>
        <div class="c-separator__line c-separator__line--4 triangle" :class="colorB"></div>
        <div class="c-separator__line c-separator__line--3 triangle ltr" :class="colorB">
            <div v-if="withOrnaments">
                <div class="c-separator__tree c-separator__tree--3-a">
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
                    <svg><use xlink:href="#tree"/></svg>
                </div>
                <div class="c-separator__tree c-separator__tree--3-b">
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
                    <svg><use xlink:href="#tree"/></svg>
                </div>
                <div class="c-separator__tree c-separator__tree--3-c">
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
                    <svg><use xlink:href="#tree"/></svg>
                </div>
                <div class="c-separator__tree c-separator__tree--3-d">
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
                    <svg><use xlink:href="#tree"/></svg>
                </div>
            </div>
        </div>
        <div class="c-separator__line c-separator__line--2 triangle" :class="colorB">
            <div v-if="withOrnaments">
                <div class="c-separator__tree c-separator__tree--2-a">
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
                    <svg><use xlink:href="#tree"/></svg>
                </div>
                <div class="c-separator__tree c-separator__tree--2-b">
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
                    <svg><use xlink:href="#tree"/></svg>
                </div>
                <div class="c-separator__tree c-separator__tree--2-c">
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
                    <svg><use xlink:href="#tree"/></svg>
                </div>
            </div>
        </div>
        <div class="c-separator__line c-separator__line--1 triangle" :class="colorB">
            <div v-if="withOrnaments">
                <div class="c-separator__tree c-separator__tree--1-a">
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
                    <svg><use xlink:href="#tree"/></svg>
                </div>
                <div class="c-separator__tree c-separator__tree--1-b">
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
                    <svg><use xlink:href="#tree"/></svg>
                </div>
                <div class="c-separator__tree c-separator__tree--1-c">
                    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
                    <svg><use xlink:href="#tree"/></svg>
                </div>
            </div>
        </div>
    </figure>
</template>

<script>
    export default {
        name: 'SeparatorView',

        props: {
            colorA: {
                type: String,
                required: true
            },
            colorB: {
                type: String,
                required: true
            },
            withOrnaments: {
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
    @import "../../assets/colors";

    .c-separator {
        position: relative;
        height: 200px;
    }

    .svg-def {
        display: none;
    }

    .c-separator__line {
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
    }

    .c-separator__line--1 {
        height: 50%;
        bottom: 0;
        opacity: 1;
    }

    .c-separator__line--2 {
        height: 13%;
        bottom: 52%;
        opacity: .6;
    }

    .c-separator__line--3 {
        height: 19%;
        bottom: 69%;
        opacity: .3;
    }

    .c-separator__line--4 {
        height: 51%;
        bottom: 42%;
        opacity: .1;
    }

    .c-separator__line--5 {
        height: 10%;
        bottom: 90%;
        opacity: .1;
    }

    .c-separator__tree {
        display: inline-block;
        position: absolute;
        bottom: 0;

        svg {
            position: absolute;
            top: 0;
            left: -50%;
            bottom: 0;
            right: 0;
            height: 100%;
            width: 100%;
        }
    }

    @mixin tree($position, $treeHeight, $treeWidth, $rotate: 0) {
        height: calc(#{$position} + #{$treeHeight});
        left: calc(#{$position});
        transform: rotate($rotate);

        img { height: $treeWidth; }

        .ltr & {
            height: calc(100% - #{$position} + #{$treeHeight});
        }
    }

    .c-separator__tree--1-a { @include tree(20%, 25px, 100%, -5deg); }
    .c-separator__tree--1-b { @include tree(60%, 23px, 100%, -3deg); }
    .c-separator__tree--1-c { @include tree(62%, 25px, 100%); }
    .c-separator__tree--2-a { @include tree(25%, 18px, 100%, -2deg); }
    .c-separator__tree--2-b { @include tree(27%, 16px, 100%, -2deg); }
    .c-separator__tree--2-c { @include tree(50%, 16px, 100%, -2deg); }
    .c-separator__tree--3-a { @include tree(34%, 14px, 100%, 2deg); }
    .c-separator__tree--3-b { @include tree(36%, 12px, 100%, 2deg); }
    .c-separator__tree--3-c { @include tree(40%, 14px, 100%, 2deg); }
    .c-separator__tree--3-d { @include tree(43%, 11px, 100%, 2deg); }
    .c-separator__tree--5-a { @include tree(55%, 12px, 100%); }
    .c-separator__tree--5-b { @include tree(56%, 12px, 100%); }
    .c-separator__tree--5-c { @include tree(58%, 12px, 100%); }
</style>

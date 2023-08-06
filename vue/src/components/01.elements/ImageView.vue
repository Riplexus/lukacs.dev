<template>
    <figure class="c-image">
        <img
            v-if="src"
            v-lazy-src="src"
            :alt="alt"
            class="c-image__item"
            @load="imageLoaded">
        <transition name="fade">
            <div v-if="!isLoaded" class="c-image__placeholder placeholder"></div>
        </transition>
        <div class="font c-image__border" />
    </figure>
</template>

<script>
    export default {
        name: 'ImageView',

        props: {
            src: {
                type: String,
                default: null
            },
            alt: {
                type: String,
                required: true
            }
        },

        data () {
            return {
                isLoaded: false
            }
        },

        methods: {
            imageLoaded () {
                this.isLoaded = true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/colors";

    .c-image {
        position: relative;
        transition: opacity .2s;
    }

    .c-image__placeholder {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 12px;
        transition: opacity .2s;

        .inactive & {
            opacity: .5;
        }
    }

    .c-image__border {
        position: absolute;
        top: 12px;
        left: 12px;
        right: 12px;
        bottom: 12px;
        border: 6px solid;
        border-radius: 12px;
        background: transparent;
    }

    .c-image__item {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        border-radius: 12px;
        transition: opacity .2s;

        .inactive & {
            opacity: .1;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>

<style lang="scss">
    .inactive .image {
        opacity: .4;
    }
</style>

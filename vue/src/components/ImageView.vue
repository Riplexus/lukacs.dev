<template>
    <figure class="image">
        <transition name="fade">
            <div v-if="!isLoaded" class="image__placeholder"></div>
        </transition>
        <img v-lazy-src="src" :alt="alt" @load="imageLoaded">
    </figure>
</template>

<script>
    export default {
        name: 'ImageView',

        props: {
            src: {
                type: String,
                required: true
            },
            alt: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                isLoaded: false
            };
        },

        methods: {
            imageLoaded() {
                this.isLoaded = true;
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../assets/colors.scss";

    .image {
        position: relative;
        transition: opacity .2s;
    }

    .image__placeholder {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $dark80;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
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

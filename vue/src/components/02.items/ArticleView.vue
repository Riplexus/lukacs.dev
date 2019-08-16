<template>
    <article class="c-article">
        <image-view
            :src="imgSrc"
            alt="project image"
            class="c-article__image" />

        <section class="article">
            <h2>Project A: a simple refactoring</h2>
            <p>Let's get wild today. All you need is a dream in your heart, and an almighty knife. Anything you want
                to do you can do here.</p>
            <p>Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. There
                are no limits in this world. Trees grow however makes them happy. Here we're limited by the time we
                have.</p>
            <p>Tree trunks grow however makes them happy. Every highlight needs it's own personal shadow. Isn't that
                fantastic that you can make whole mountains in minutes?</p>
        </section>
    </article>
</template>

<script>
    import ImageView from '../01.elements/ImageView';

    export default {
        name: 'ArticleView',
        components: { ImageView },

        data() {
            const random = Math.random()*1000|0;

            return {
                imgSrc: `https://picsum.photos/400/200?grayscale&random=${random}`
            };
        }
    };
</script>

<style scoped lang="scss">
    .c-article {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        padding: 0 0 24px;
        max-width: 1400px;
        box-sizing: border-box;
        margin: auto;

        .c-article__image {
            width: 400px;
            height: 200px;
            margin: 6px 24px 24px;
        }
    }
</style>

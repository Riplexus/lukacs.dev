<template>
    <article class="article">
        <image-view
            :src="imgSrc"
            alt="project image"
            class="article__image" />

        <section>
            <h2 class="article__header">Project A: a simple refactoring</h2>
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
    import ImageView from './ImageView';

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
    .article {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        padding: 6px;

        .article__image {
            width: 400px;
            height: 200px;
        }

        section {
            flex: 1 0 300px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            align-content: flex-start;

            .article__header {
                flex: 0 0 100%;
            }

            p {
                flex: 1 0 200px;
                max-width: 400px;
            }
        }
    }
</style>

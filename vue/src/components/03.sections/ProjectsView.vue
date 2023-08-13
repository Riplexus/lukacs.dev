<template>
    <section v-if="articles.length" class="section c-projects">
        <article-view v-for="article in articles" :key="article.id" />
    </section>
    <section v-else class="section c-projects">
        <article-view />
        <article-view />
    </section>
</template>

<script>
    import ArticleView from '../02.items/ArticleView.vue'

    export default {
        name: 'ProjectsView',
        components: { ArticleView },

        data () {
            return {
                articles: []
            }
        }
    }
</script>

<style scoped lang="scss">
    .c-projects {
        height: 50vh;
        padding: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h1 {
        opacity: .5;
    }
</style>

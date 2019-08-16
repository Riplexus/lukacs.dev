<template>
    <section class="section c-projects">
        <article-view />
        <article-view />
        <article-view />
    </section>
</template>

<script>
    import ArticleView from '../02.items/ArticleView';
    export default {
        name: 'ProjectsView',
        components: { ArticleView }
    };
</script>

<style scoped lang="scss">
    .c-projects {
        padding: 60px 0;
    }
</style>

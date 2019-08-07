<template>
    <div class="index">
        <section class="index__tech-radar dark80" :class="{ inactive: activeSection !== 'tech-radar' }" ref="tech-radar">
            <h2>TechRadar</h2>
        </section>

        <section-start-view
            class="index__projects-start"
            colorA="dark80"
            colorB="dark100"
            :ltr="false" />

        <section class="index__projects dark100" :class="{ inactive: activeSection !== 'projects' }" ref="projects">
            <article-view />
            <article-view />
            <article-view />
        </section>

        <section-start-view
            class="index__footer-start"
            colorA="dark100"
            colorB="dark120"
            :ltr="true" />
    </div>
</template>

<script>
    import ArticleView from '../components/ArticleView';
    import SectionStartView from '../components/SectionStartView';

    export default {
        name: 'Index',
        components: { SectionStartView, ArticleView },

        computed: {
            activeSection() {
                return this.$store.state.activeSection;
            }
        },

        watch: {
            activeSection() {
                const route = this.activeSection === 'tech-radar' ? 'home' : this.activeSection;

                if (this.$route.name !== route) {
                    this.$router.replace({
                        name: route
                    });
                }
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
                const center = window.scrollY + window.innerHeight / 2;

                let activeSection = null;

                if (window.scrollY + window.innerHeight >= document.body.clientHeight - 100) {
                    activeSection = 'footer';
                } else {
                    let dist = Infinity;
                    for (let section in this.$refs) {
                        let distToSection = Math.abs(this.$refs[section].offsetHeight - center);
                        if (dist > distToSection) {
                            dist = distToSection;
                            activeSection = section;
                        }
                    }
                }

                if (activeSection !== this.activeSection) {
                    this.$store.commit('setActiveSection', activeSection);
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../assets/colors";

    section {
        transition: color .2s;

        & > * {
            margin: auto;
            max-width: 1400px;
        }
    }

    .index__projects-start {
        height: 100px;
    }

    .index__projects {
        padding: 42px 0;
    }

    .index__tech-radar {
        min-height: 500px;
    }

    .index__footer-start {
        height: 20px;
    }
</style>

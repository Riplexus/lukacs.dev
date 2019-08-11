<template>
    <div class="index">
        <section class="index__tech-radar dark80" :class="{ inactive: !techRadarActive }" ref="tech-radar">
            <h2>TechRadar</h2>
        </section>

        <door-view />

        <section-start-view
            class="index__projects-start"
            colorA="dark80"
            colorB="dark100"
            :ltr="false" />

        <section class="index__projects dark100" :class="{ inactive: !projectsActive }" ref="projects">
            <article-view />
            <article-view />
            <article-view />
        </section>

        <section-start-view
            class="index__footer-start"
            colorA="dark100"
            colorB="dark120"
            :ltr="true" />

        <footer-view :class="{ inactive: !footerActive }" ref="footer"/>
    </div>
</template>

<script>
    import ArticleView from '../components/ArticleView';
    import SectionStartView from '../components/SectionStartView';
    import FooterView from '../components/FooterView';
    import DoorView from '../components/DoorView';

    export default {
        name: 'Index',
        components: { DoorView, SectionStartView, ArticleView, FooterView },

        computed: {
            activeSections() {
                return this.$store.state.activeSections;
            },
            techRadarActive() {
                return !this.activeSections.length || this.activeSections.indexOf('tech-radar') !== -1;
            },
            projectsActive() {
                return !this.activeSections.length || this.activeSections.indexOf('projects') !== -1;
            },
            footerActive() {
                return !this.activeSections.length || this.activeSections.indexOf('footer') !== -1;
            }
        },

        watch: {
            activeSections() {
                for (let section in this.$refs) {
                    if (this.activeSections.indexOf(section) === -1) { continue; }
                    const route = section === 'tech-radar' ? 'home' : section;
                    if (this.$route.name !== route) {
                        this.$router.replace({
                            name: route
                        });
                    }
                    break;
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
                const top = window.innerHeight * .4;
                const bottom = window.innerHeight * .6;

                for (let section in this.$refs) {
                    const position = (this.$refs[section].$el || this.$refs[section]).getBoundingClientRect();
                    const isVisible = position.bottom >= top && position.top <= bottom;
                    const isActive = this.activeSections.indexOf(section) !== -1;

                    if (isVisible && !isActive) {
                        this.$store.commit('addActiveSection', section);
                    } else if (!isVisible && isActive) {
                        this.$store.commit('removeActiveSection', section);
                    }

                    // stop the loop if our current element is already below the viewport bottom
                    if (position.top >= bottom) {
                        break;
                    }
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

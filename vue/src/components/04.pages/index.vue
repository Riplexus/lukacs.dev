<template>
    <main class="p-index" role="main">
        <welcome-view class="black100" />

        <tech-radar-view
            class="dark60 toDark60"
            :class="{ inactive: !techRadarActive }"
            ref="tech-radar" />

        <separator-view
            color-a="dark60"
            color-b="black100" />

        <projects-view
            class="black100"
            :class="{ inactive: !projectsActive }"
            ref="projects" />

        <separator-view
            color-a="black100"
            color-b="black120"
            :with-ornaments="false" />
    </main>
</template>

<script>
    import TechRadarView from '../03.sections/TechRadarView';
    import ProjectsView from '../03.sections/ProjectsView';
    import SeparatorView from '../03.sections/SeparatorView';
    import WelcomeView from '../03.sections/WelcomeView';

    export default {
        name: 'Index',
        components: { WelcomeView, ProjectsView, TechRadarView, SeparatorView },

        computed: {
            activeSections() {
                return this.$store.state.activeSections;
            },
            techRadarActive() {
                return !this.activeSections.length || this.activeSections.indexOf('tech-radar') !== -1;
            },
            projectsActive() {
                return !this.activeSections.length || this.activeSections.indexOf('projects') !== -1;
            }
        },

        watch: {
            activeSections() {
                for (let section in this.$refs) {
                    if (this.activeSections.indexOf(section) === -1) { continue; }
                    const route = section === 'welcome' || section === 'tech-radar' ? 'home' : section;
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
    @import "../../assets/colors";

    .p-index > * {
        transition: color .2s;
    }

    .toDark60 {
        background: linear-gradient(to top, nth(map-get($dark, 'bgr'), 3) 0%, nth(map-get($black, 'bgr'), 5) 70%);
    }
</style>

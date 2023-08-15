<template>
  <main class="p-index" role="main">
    <tech-radar-view
      class="dark60 toDark60"
      :class="{ inactive: !isTechRadarActive.value }"
      :ref="el => { sections['tech-radar'] = el }" />

    <separator-view
      color-a="dark60"
      color-b="black100" />
  </main>
</template>

<script>
  import { ref, computed, watch } from 'vue'
  import TechRadarView from '../03.sections/TechRadarView.vue'
  import SeparatorView from '../03.sections/SeparatorView.vue'
  import { useActiveSectionStore } from '@/stores/activeSection'

  export default {
    name: 'IndexPage',
    components: {
      TechRadarView,
      SeparatorView
    },
    setup() {
      const sections = ref({})

      const activeSectionStore = useActiveSectionStore()
      const activeSections = computed(() => activeSectionStore.activeSections)
      const isTechRadarActive = computed(() => !activeSections.value.length || activeSections.value.indexOf('tech-radar') !== -1)

      watch(activeSections, () => {
        const activeSection = activeSections.value[0]
        const route = activeSection === 'welcome' || activeSection === 'tech-radar' ? 'home' : activeSection

        if (this.$route.name !== route) {
          this.$router.replace({ name: route })
        }
      })

      return {
        sections,
        activeSectionStore,
        activeSections,
        isTechRadarActive
      }
    },

    created() {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', this.handleScroll)
      }
    },

    mounted() {
      this.handleScroll()
    },

    unmounted() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', this.handleScroll)
      }
    },

    methods: {
      handleScroll() {
        const top = window.innerHeight * 0.4
        const bottom = window.innerHeight * 0.6

        for (const section in this.sections) {
          const position = (this.sections[section].$el || this.sections[section]).getBoundingClientRect()
          const isVisible = position.bottom >= top && position.top <= bottom
          const isActive = this.activeSections.indexOf(section) !== -1

          if (isVisible && !isActive) {
            this.activeSectionStore.addActiveSection(section)
          } else if (!isVisible && isActive) {
            this.activeSectionStore.removeActiveSection(section)
          }

          // stop the loop if our current element is already below the viewport bottom
          if (position.top >= bottom) break
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @use "sass:map";
  @use "sass:list";
  @import "../../assets/colors";

  .p-index > * {
    transition: color .2s;
  }

  .toDark60 {
    background: linear-gradient(to top, list.nth(map.get($dark, 'bgr'), 3) 0%, list.nth(map.get($black, 'bgr'), 5) 100%);
  }
</style>

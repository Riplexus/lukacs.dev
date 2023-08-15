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

<script setup>
  import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import TechRadarView from '../03.sections/TechRadarView.vue'
  import SeparatorView from '../03.sections/SeparatorView.vue'
  import { useActiveSectionStore } from '@/stores/activeSection'
  import debounce from '@/helpers/debounce'

  const router = useRouter()
  const route = useRoute()
  const sections = ref({})

  const activeSectionStore = useActiveSectionStore()
  const isTechRadarActive = computed(() => !activeSectionStore.activeSections.length || activeSectionStore.activeSections.indexOf('tech-radar') !== -1)

  const updateActiveSections = debounce(() => {
    const top = window.innerHeight * 0.4
    const bottom = window.innerHeight * 0.6

    for (const section in sections.value) {
      const position = (sections.value[section].$el || sections.value[section])?.getBoundingClientRect()
      const isVisible = position.bottom >= top && position.top <= bottom
      const isActive = activeSectionStore.activeSections.indexOf(section) !== -1

      if (isVisible && !isActive) {
        activeSectionStore.addActiveSection(section)
      } else if (!isVisible && isActive) {
        activeSectionStore.removeActiveSection(section)
      }

      // stop the loop if our current element is already below the viewport bottom
      if (position.top >= bottom) break
    }
  }, 50)

  onMounted(() => {
    window.addEventListener('scroll', updateActiveSections)
    updateActiveSections()

    watch(activeSectionStore.activeSections, () => {
      const activeSection = activeSectionStore.activeSections[0]
      const activeRoute = activeSection === 'welcome' || activeSection === 'tech-radar' ? 'home' : activeSection

      if (route.name !== activeRoute) {
        router.replace({ name: activeRoute })
      }
    })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSections)
  })
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

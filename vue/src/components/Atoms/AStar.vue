<template>
  <figure class="a-star absolute rounded-full opacity-50 bg-transparent" ref="root" />
</template>

<script setup>
  import { onMounted, onBeforeUnmount, ref, computed, watch, watchEffect, reactive } from 'vue';
  import random from '@/helpers/random';

  const getRandom = reactive({ fn: random() });

  const props = defineProps({
    density: {
      type: Number,
      default: 10,
    },
    seed: {
      type: String,
      default: 'STARS',
    },
    size: {
      type: Number,
      default: 1,
    },
    animationDelay: {
      type: Number,
      default: 0,
    },
  });

  watchEffect(() => { getRandom.fn = random(props.seed); });
  watch(() => props.density, () => { getRandom.fn = random(props.seed); });

  const root = ref(null);
  const width = ref(1000);
  const height = ref(1000);

  const resizeObserver = new ResizeObserver(([entry]) => {
    getRandom.fn = random(props.seed);
    width.value = entry.contentBoxSize?.[0].inlineSize;
    height.value = entry.contentBoxSize?.[0].blockSize;
  });

  onMounted(() => {
    const parent = root.value?.parentElement;
    if (parent) resizeObserver.observe(parent);
  });

  onBeforeUnmount(() => {
    const parent = root.value?.parentElement;
    if (parent) resizeObserver.unobserve(parent);
  });

  const size = computed(() => `${props.size}px`);
  const animationDelay = computed(() => `${props.animationDelay}s`);
  const starCount = computed(() => width.value * height.value / 1000 ** 2 * props.density);
  const boxShadow = computed(() => {
    return Array.from({ length: starCount.value })
      .map(() => `${getRandom.fn(width.value)}px ${getRandom.fn(height.value)}px rgb(255, 255, 255)`)
      .join(', ');
  });
</script>

<style lang="scss" scoped>
  .a-star {
    box-shadow: v-bind(boxShadow);
    height: v-bind(size);
    width: v-bind(size);
    animation: sparkle 20s linear v-bind(animationDelay) infinite;
  }
</style>

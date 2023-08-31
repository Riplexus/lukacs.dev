<template>
  <a-star v-for="n in Math.round(density/2/2.75)" :key="n" :size="1" :animation-delay="n" :density="density/5" :seed="`${seed}_SMALL_${n}`" />
  <a-star v-for="n in Math.round(density/2/2.75)" :key="n" :size="2" :animation-delay="n" :density="density/5" :seed="`${seed}_MEDIUM_${n}`" />
  <a-star v-for="n in Math.round(density/2/5.5)" :key="n" :size="3" :animation-delay="n" :density="density/5" :seed="`${seed}_LARGE_${n}`" />
  <a-star v-for="n in Math.round(density/2/11)" :key="n" :size="4" :animation-delay="n" :density="density/5" :seed="`${seed}_HUGE_${n}`"  />
</template>

<script setup>
  import AStar from '@/components/Atoms/AStar.vue';

  defineProps({
    density: {
      type: Number,
      default: 70,
    },
    // groups: {
    //   type: Number,
    //   default: 55,
    // },
    seed: {
      type: String,
      default: 'STARS',
    },
  });
</script>

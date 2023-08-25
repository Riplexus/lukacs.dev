<template>
  <a-star v-for="n in 10" :key="n" />
</template>

<script setup>
  import AStar from '@/components/Atoms/AStar.vue';
</script>

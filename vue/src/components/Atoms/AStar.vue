<template>
  <figure class="a-star" :class="`a-star-${id}`" />
</template>

<script setup>
  const random = (limit) => Math.round(Math.random() * limit);
  const size = `${random(4)}px`;
  const animationDelay = `${random(20)}s`;
  const boxShadow = Array.from({ length: 100 }).map(() => `${random(3000)}px ${random(3000)}px rgb(255, 255, 255)`).join(', ');
</script>

<style lang="scss" scoped>
  @use "sass:math";
  @use "sass:list";
  @import "../../assets/animations";

  .a-star {
    box-shadow: v-bind(boxShadow);
    background: transparent;
    height: v-bind(size);
    width: v-bind(size);
    border-radius: 50%;
    opacity: .5;
    animation: sparkle 20s linear v-bind(animationDelay) infinite;
  }
</style>

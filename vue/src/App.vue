<template>
  <router-view class="overflow-hidden" />
  <o-footer />
</template>

<script setup>
  import OFooter from '@/components/Organisms/OFooter.vue';
</script>

<style lang="scss">
  @use "sass:map";
  @use "sass:list";

  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    font-family: Raleway, sans-serif;
    font-size: 11pt;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 500px;
  }

  figure {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    font-family: Lato, Arial, sans-serif;
    font-size: 18pt;
    margin: 0;
    padding: 6px;
    box-sizing: border-box;
    font-weight: normal;
  }

  a, a:visited, a:active, a:hover {
    color: inherit;
  }

  p {
    margin: 0;
    padding: 6px;
    box-sizing: border-box;
  }

  .section {
    position: relative;
    max-width: 1400px;
    margin: auto;
    padding: 0 60px;
  }

  .article {
    flex: 1 0 250px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;

    h2 {
      flex: 0 0 calc(100% - 12px);
      margin: 0 6px 6px;
      min-height: 29px + 12px;
    }

    p {
      flex: 1 0 calc(250px - 12px);
      max-width: 450px;
      min-height: 100px;
      margin: 6px;
    }
  }
</style>

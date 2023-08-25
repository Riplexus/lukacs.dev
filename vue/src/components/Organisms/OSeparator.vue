<template>
  <figure class="c-separator" :class="[`bg-${colorA}`]" ref="root">
    <div class="svg-def">
      <svg id="tree" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100 L50 0 L100 100 Z"/>
      </svg>
    </div>

    <div class="c-separator__line c-separator__line--5" :class="[`bg-${colorB}`, `after:bg-${colorB}`, `bg-triangle-${colorB}`]">
      <div v-if="withOrnaments">
        <div class="c-separator__tree c-separator__tree--5-a">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
          <svg><use xlink:href="#tree"/></svg>
        </div>
        <div class="c-separator__tree c-separator__tree--5-b">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
          <svg><use xlink:href="#tree"/></svg>
        </div>
        <div class="c-separator__tree c-separator__tree--5-c">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
          <svg><use xlink:href="#tree"/></svg>
        </div>
      </div>
    </div>
    <div class="c-separator__line c-separator__line--4" :class="[`bg-${colorB}`, `after:bg-${colorB}`, `bg-triangle-${colorB}`]"></div>
    <div class="c-separator__line c-separator__line--3 ltr" :class="[`bg-${colorB}`, `after:bg-${colorB}`, `bg-triangle-${colorB}`]">
      <div v-if="withOrnaments">
        <div class="c-separator__tree c-separator__tree--3-a">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
          <svg><use xlink:href="#tree"/></svg>
        </div>
        <div class="c-separator__tree c-separator__tree--3-b">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
          <svg><use xlink:href="#tree"/></svg>
        </div>
        <div class="c-separator__tree c-separator__tree--3-c">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
          <svg><use xlink:href="#tree"/></svg>
        </div>
        <div class="c-separator__tree c-separator__tree--3-d">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
          <svg><use xlink:href="#tree"/></svg>
        </div>
      </div>
    </div>
    <div class="c-separator__line c-separator__line--2" :class="[`bg-${colorB}`, `after:bg-${colorB}`, `bg-triangle-${colorB}`]">
      <div v-if="withOrnaments">
        <div class="c-separator__tree c-separator__tree--2-a">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
          <svg><use xlink:href="#tree"/></svg>
        </div>
        <div class="c-separator__tree c-separator__tree--2-b">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
          <svg><use xlink:href="#tree"/></svg>
        </div>
        <div class="c-separator__tree c-separator__tree--2-c">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
          <svg><use xlink:href="#tree"/></svg>
        </div>
      </div>
    </div>
    <div class="c-separator__line c-separator__line--1" :class="[`bg-${colorB}`, `after:bg-${colorB}`, `bg-triangle-${colorB}`]">
      <div v-if="withOrnaments">
        <div class="c-separator__tree c-separator__tree--1-a">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
          <svg><use xlink:href="#tree"/></svg>
        </div>
        <div class="c-separator__tree c-separator__tree--1-b">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
          <svg><use xlink:href="#tree"/></svg>
        </div>
        <div class="c-separator__tree c-separator__tree--1-c">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' height='1' width='1'></svg>" alt="tree">
          <svg><use xlink:href="#tree"/></svg>
        </div>
      </div>
    </div>
  </figure>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  defineProps({
    colorA: {
      type: String,
      required: true,
    },
    colorB: {
      type: String,
      required: true,
    },
    withOrnaments: {
      type: Boolean,
      default: true,
    },
  });

  const root = ref(null);
  const height = ref(null);

  const updateHeight = () => {
    const position = root.value.getBoundingClientRect();
    height.value = `${Math.round(position.top / window.innerHeight * 170 + 30)}px`;
  };

  const fpsInterval = 1000 / 60;
  let then;
  let done;
  function step() {
    if (!then) then = Date.now();
    const now = Date.now();
    const elapsed = now - then;
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      if (height.value !== root.value.style.height) {
        root.value.style.height = height.value;
      }
    }
    if (!done) window.requestAnimationFrame(step);
  }

  onMounted(() => {
    window.addEventListener('resize', updateHeight);
    window.addEventListener('scroll', updateHeight);
    updateHeight();
    window.requestAnimationFrame(step);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateHeight);
    window.removeEventListener('scroll', updateHeight);
    done = true;
  });
</script>

<style scoped lang="scss">
  .c-separator {
    position: relative;
    height: 200px;
  }

  .svg-def {
    display: none;
  }

  .c-separator__line {
    position: absolute;
    bottom: 0;
    width: 100%;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: -400px;
      left: 0;
      height: 400px;
    }
  }

  .c-separator__line--1 {
    height: 50%;
    bottom: 0;
    opacity: 1;
  }

  .c-separator__line--2 {
    height: 13%;
    bottom: 52%;
    opacity: .6;
  }

  .c-separator__line--3 {
    height: 19%;
    bottom: 69%;
    opacity: .3;
  }

  .c-separator__line--4 {
    height: 51%;
    bottom: 42%;
    opacity: .1;
  }

  .c-separator__line--5 {
    height: 10%;
    bottom: 90%;
    opacity: .1;
  }

  .c-separator__tree {
    display: inline-block;
    position: absolute;
    bottom: 0;

    svg {
      position: absolute;
      inset: 0 0 0 -50%;
      height: 100%;
      width: 100%;
    }
  }

  @mixin tree($position, $treeHeight, $treeWidth) {
    height: calc(#{$position} + #{$treeHeight});
    left: calc(#{$position});

    img { height: $treeWidth; }

    .ltr & {
      height: calc(100% - #{$position} + #{$treeHeight});
    }
  }

  .c-separator__tree--1-a { @include tree(20%, 25px, 100%); }
  .c-separator__tree--1-b { @include tree(60%, 23px, 100%); }
  .c-separator__tree--1-c { @include tree(62%, 25px, 100%); }
  .c-separator__tree--2-a { @include tree(25%, 18px, 100%); }
  .c-separator__tree--2-b { @include tree(27%, 16px, 100%); }
  .c-separator__tree--2-c { @include tree(50%, 16px, 100%); }
  .c-separator__tree--3-a { @include tree(34%, 14px, 100%); }
  .c-separator__tree--3-b { @include tree(36%, 12px, 100%); }
  .c-separator__tree--3-c { @include tree(40%, 14px, 100%); }
  .c-separator__tree--3-d { @include tree(43%, 11px, 100%); }
  .c-separator__tree--5-a { @include tree(55%, 12px, 100%); }
  .c-separator__tree--5-b { @include tree(56%, 12px, 100%); }
  .c-separator__tree--5-c { @include tree(58%, 12px, 100%); }
</style>

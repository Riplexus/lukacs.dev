<template>
  <section class="c-tech-radar relative">
    <m-stars />
    <div class="bg-gradient-to-b from-ebony-900 from-opacity-0 to-ebony-900 to-opacity-55 absolute top-85% left-0 right-0 bottom-0" />

    <article class="section c-tech-radar__content">
      <figure class="c-tech-radar__image">
        <div
          class="c-tech-radar__level c-tech-radar__assess"
          :class="{ 'active': selection === 'assess' }"
          @click="select('assess', $event)">
          <div
            v-for="n in assessIndizes"
            :key="n"
            class="c-tech-radar__tech c-tech-radar__tech--assess"
            :class="getClasses(n+1, 's')" />
        </div>

        <div
          class="c-tech-radar__level c-tech-radar__trial"
          :class="{ 'active': selection === 'trial' }"
          @click="select('trial', $event)">
          <div
            v-for="n in trialsIndizes"
            :key="n"
            class="c-tech-radar__tech c-tech-radar__tech--trial"
            :class="getClasses(n+1, 't')" />
        </div>

        <div
          class="c-tech-radar__level c-tech-radar__adopt"
          :class="{ 'active': selection === 'adopt' }"
          @click="select('adopt', $event)">
          <div
            v-for="n in adoptsIndizes"
            :key="n"
            class="c-tech-radar__tech c-tech-radar__tech--adopt"
            :class="getClasses(n+1, 'a')" />
        </div>
      </figure>

      <!--            <section v-if="!selection" class="article c-tech-radar__details">-->
      <!--                <h2>Technology Radar</h2>-->
      <!--                <p>Living in a fast changing world where your colleagues greet you daily with "look at this new-->
      <!--                    framework" it became useful to thoroughly validate upcoming trends first.</p>-->
      <!--                <p>One way of keeping track of your evaluation process is with a <span class="italic">technology radar</span> following-->
      <!--                    the principles and ideas of <a href="https://www.thoughtworks.com/" target="_blank" rel="noopener">ThoughtWorks</a>.</p>-->
      <!--                <p>Take a look at their work. I find it especially useful in business environments with large teams to-->
      <!--                    maintain a stable technology stack. Touch or click the rings for my personal technology stack.</p>-->
      <!--            </section>-->

      <section v-if="selection === 'assess'" class="article c-tech-radar__details">
        <h2>Technology Radar - Assess</h2>
        <ul v-for="n in 4" :key="n">
          <template v-for="i in 6">
            <li v-if="assess[n*i]" :key="n*i">
              {{ assess[n*i].title }}
            </li>
          </template>
        </ul>
      </section>

      <section v-else-if="selection === 'trial'" class="article c-tech-radar__details">
        <h2>Technology Radar - Trial</h2>
        <ul v-for="n in 4" :key="n">
          <template v-for="i in 6">
            <li :key="n*i" v-if="trials[n*i]">
              {{ trials[n*i].title }}
            </li>
          </template>
        </ul>
      </section>

      <section v-else-if="selection === 'adopt'" class="article c-tech-radar__details">
        <h2>Technology Radar - Adopt</h2>
        <ul v-for="n in 4" :key="n">
          <template v-for="i in 6">
            <li :key="n*i" v-if="adopts[n*i]">
              {{ adopts[n*i].title }}
            </li>
          </template>
        </ul>
      </section>
    </article>
  </section>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import MStars from '@/components/Molecules/MStars.vue';

  const dummyData = [
    // tools
    { title: '1' },
    { title: '2' },
    { title: '3' },
    null,
    { title: '5' },
    { title: '6' },
    // languages & frameworks
    { title: '6' },
    { title: '6' },
    { title: '6' },
    { title: '6' },
    { title: '6' },
    { title: '6' },
    // platforms
    { title: '6' },
    { title: '6' },
    { title: '6' },
    { title: '6' },
    { title: '6' },
    { title: '6' },
    // techniques
    { title: '6' },
    { title: '6' },
    { title: '6' },
    { title: '6' },
    { title: '6' },
    { title: '6' },
  ];

  const selection = ref(null);
  const assess = ref(JSON.parse(JSON.stringify(dummyData)));
  const trials = ref(JSON.parse(JSON.stringify(dummyData)));
  const adopts = ref(JSON.parse(JSON.stringify(dummyData)));

  const getValidIndizes = (arr) => arr.map((_, i) => i).filter(_ => !!arr[_]);
  const assessIndizes = computed(() => getValidIndizes(assess.value));
  const trialsIndizes = computed(() => getValidIndizes(trials.value));
  const adoptsIndizes = computed(() => getValidIndizes(adopts.value));

  const deselect = () => {
    document.removeEventListener('click', deselect);
    selection.value = null;
  };
  const select = (ring, ev) => {
    if (ring === selection.value) { return deselect(); }
    document.removeEventListener('click', deselect);
    // this.selection = ring
    document.addEventListener('click', deselect);
    ev.stopPropagation();
  };

  const getClasses = (n, prefix) => {
    return {
      [`c-tech-radar__tech--${prefix}${n}`]: true,
      [`c-tech-radar__tech--${n <= 6 ? 'tool' : n <= 12 ? 'language' : n <= 18 ? 'platform' : 'teq'}`]: true,
    };
  };
</script>

<style scoped lang="scss">
  @use "sass:color";
  @use "sass:math";
  @use "sass:list";

  $totalWidth: 500px;
  $bgr-color: rgb(255 255 255);
  $ratio: math.div(4, 9);
  $adoptSize: 40%;
  $trialSize: (100% - $adoptSize) * $ratio + $adoptSize;
  $assessSize: (100% - $trialSize) * $ratio + $trialSize;
  $holdSize: (100% - $assessSize) * $ratio + $assessSize;

  .c-tech-radar {
    min-height: 500px;
    height: 70vh;
    display: flex;
  }

  .c-tech-radar__content {
    flex: 1;
    height: 500px;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
  }

  .c-tech-radar__image {
    flex: 0 0 $totalWidth;
    min-height: $totalWidth;
    position: relative;
    transition: opacity .2s;

    .inactive & {
      opacity: .3;
    }
  }

  /*
   * Tech Radar level rings
   */

  .c-tech-radar__level {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border-style: solid;
    box-sizing: border-box;
  }

  @mixin level($size, $prevSize: 0, $borderMargin: 7px) {
    width: $size;
    height: $size;
    margin-top: - math.div($size, 2);
    margin-left: - math.div($size, 2);
    border-width: math.div(math.div($size - $prevSize, 100%), 2) * $totalWidth - $borderMargin;

    // cursor: pointer;
    opacity: .5;
    animation: sparkle 20s linear math.random(8) + 0s infinite;

    // &:hover,
    // &.active,
    // &:hover.active {
    //     animation: none;
    //     opacity: 1;
    // }
  }

  @mixin levelBackground($background) {
    border-width: 0;
    background: $background;

    // &:hover { background: fade-in($background, .02); }
    // &.active { background: fade-in($background, .06); }
    // &:hover.active { background: fade-in($background, .08); }
  }

  @mixin levelBorder($background) {
    border-color: $background;

    // &:hover { border-color: fade-in($background, .02); }
    // &.active { border-color: fade-in($background, .06); }
    // &:hover.active { border-color: fade-in($background, .08); }
  }

  .c-tech-radar__adopt {
    $background: color.adjust($bgr-color, $alpha: -1);

    @include level($adoptSize, $adoptSize);
    @include levelBackground($background);
  }

  .c-tech-radar__trial {
    $background: color.adjust($bgr-color, $alpha: -1);

    @include level($trialSize, $adoptSize);
    @include levelBorder($background);
  }

  .c-tech-radar__assess {
    $background: color.adjust($bgr-color, $alpha: -1);

    @include level($assessSize, $trialSize);
    @include levelBorder($background);
  }

  /*
     * Tech Radar techs
     */

  .c-tech-radar__tech { position: absolute; }

  @mixin background($color) {
    background: $color;
    .c-tech-radar__trial & { background: color.adjust($color, $lightness: 15%); }
    .c-tech-radar__assess & { background: color.adjust($color, $lightness: 40%); }
  }

  .c-tech-radar__tech--tool { @include background(#379392); }
  .c-tech-radar__tech--language { @include background(#d62828); }
  .c-tech-radar__tech--platform { @include background(#f46036); }
  .c-tech-radar__tech--teq { @include background(#1481ba); }

  @mixin tech($size, $radius, $angle) {
    width: $size;
    height: $size;
    border-radius: 100%;
    top: 50%;
    left: 50%;
    margin-top: - math.div($size, 2) - math.div($radius, 400px) * $totalWidth;
    margin-left: - math.div($size, 2);
    transform: rotate($angle);
    transform-origin: math.div($size, 2) math.div($size, 2) + math.div($radius, 400px) * $totalWidth;
  }

  $size: math.div(4px, 400px) * $totalWidth;
  .c-tech-radar__tech--s1 { @include tech($size, 147px, 8deg); }
  .c-tech-radar__tech--s2 { @include tech($size, 151px, 23deg); }
  .c-tech-radar__tech--s3 { @include tech($size, 152px, 38deg); }
  .c-tech-radar__tech--s4 { @include tech($size, 149px, 58deg); }
  .c-tech-radar__tech--s5 { @include tech($size, 150px, 75deg); }
  .c-tech-radar__tech--s6 { @include tech($size, 155px, 84deg); }
  .c-tech-radar__tech--s7 { @include tech($size, 147px, 98deg); }
  .c-tech-radar__tech--s8 { @include tech($size, 154px, 110deg); }
  .c-tech-radar__tech--s9 { @include tech($size, 152px, 128deg); }
  .c-tech-radar__tech--s10 { @include tech($size, 149px, 148deg); }
  .c-tech-radar__tech--s11 { @include tech($size, 150px, 162deg); }
  .c-tech-radar__tech--s12 { @include tech($size, 152px, 174deg); }
  .c-tech-radar__tech--s13 { @include tech($size, 147px, 188deg); }
  .c-tech-radar__tech--s14 { @include tech($size, 151px, 203deg); }
  .c-tech-radar__tech--s15 { @include tech($size, 146px, 218deg); }
  .c-tech-radar__tech--s16 { @include tech($size, 149px, 238deg); }
  .c-tech-radar__tech--s17 { @include tech($size, 152px, 258deg); }
  .c-tech-radar__tech--s18 { @include tech($size, 155px, 264deg); }
  .c-tech-radar__tech--s19 { @include tech($size, 147px, -8deg); }
  .c-tech-radar__tech--s20 { @include tech($size, 155px, -23deg); }
  .c-tech-radar__tech--s21 { @include tech($size, 152px, -38deg); }
  .c-tech-radar__tech--s22 { @include tech($size, 151px, -60deg); }
  .c-tech-radar__tech--s23 { @include tech($size, 150px, -75deg); }
  .c-tech-radar__tech--s24 { @include tech($size, 153px, -84deg); }

  $size: math.div(8px, 400px) * $totalWidth;
  .c-tech-radar__tech--t1 { @include tech($size, 101px, 4deg); }
  .c-tech-radar__tech--t2 { @include tech($size, 119px, 21deg); }
  .c-tech-radar__tech--t3 { @include tech($size, 113px, 42deg); }
  .c-tech-radar__tech--t4 { @include tech($size, 120px, 56deg); }
  .c-tech-radar__tech--t5 { @include tech($size, 103px, 72deg); }
  .c-tech-radar__tech--t6 { @include tech($size, 109px, 84deg); }
  .c-tech-radar__tech--t7 { @include tech($size, 104px, 94deg); }
  .c-tech-radar__tech--t8 { @include tech($size, 119px, 111deg); }
  .c-tech-radar__tech--t9 { @include tech($size, 113px, 132deg); }
  .c-tech-radar__tech--t10 { @include tech($size, 120px, 146deg); }
  .c-tech-radar__tech--t11 { @include tech($size, 103px, 162deg); }
  .c-tech-radar__tech--t12 { @include tech($size, 109px, 174deg); }
  .c-tech-radar__tech--t13 { @include tech($size, 104px, 184deg); }
  .c-tech-radar__tech--t14 { @include tech($size, 119px, 201deg); }
  .c-tech-radar__tech--t15 { @include tech($size, 102px, 215deg); }
  .c-tech-radar__tech--t16 { @include tech($size, 113px, 236deg); }
  .c-tech-radar__tech--t17 { @include tech($size, 103px, 252deg); }
  .c-tech-radar__tech--t18 { @include tech($size, 109px, 264deg); }
  .c-tech-radar__tech--t19 { @include tech($size, 120px, -4deg); }
  .c-tech-radar__tech--t20 { @include tech($size, 104px, -21deg); }
  .c-tech-radar__tech--t21 { @include tech($size, 113px, -36deg); }
  .c-tech-radar__tech--t22 { @include tech($size, 120px, -56deg); }
  .c-tech-radar__tech--t23 { @include tech($size, 103px, -72deg); }
  .c-tech-radar__tech--t24 { @include tech($size, 119px, -84deg); }

  $size: math.div(12px, 400px) * $totalWidth;
  .c-tech-radar__tech--a1 { @include tech($size, 65px, 14deg); }
  .c-tech-radar__tech--a2 { @include tech($size, 40px, 27deg); }
  .c-tech-radar__tech--a3 { @include tech($size, 60px, 38deg); }
  .c-tech-radar__tech--a4 { @include tech($size, 25px, 62deg); }
  .c-tech-radar__tech--a5 { @include tech($size, 63px, 58deg); }
  .c-tech-radar__tech--a6 { @include tech($size, 47px, 80deg); }
  .c-tech-radar__tech--a7 { @include tech($size, 65px, 104deg); }
  .c-tech-radar__tech--a8 { @include tech($size, 40px, 117deg); }
  .c-tech-radar__tech--a9 { @include tech($size, 60px, 128deg); }
  .c-tech-radar__tech--a10 { @include tech($size, 25px, 152deg); }
  .c-tech-radar__tech--a11 { @include tech($size, 63px, 148deg); }
  .c-tech-radar__tech--a12 { @include tech($size, 47px, 170deg); }
  .c-tech-radar__tech--a13 { @include tech($size, 65px, 194deg); }
  .c-tech-radar__tech--a14 { @include tech($size, 40px, 207deg); }
  .c-tech-radar__tech--a15 { @include tech($size, 60px, 218deg); }
  .c-tech-radar__tech--a16 { @include tech($size, 25px, 242deg); }
  .c-tech-radar__tech--a17 { @include tech($size, 63px, 238deg); }
  .c-tech-radar__tech--a18 { @include tech($size, 47px, 260deg); }
  .c-tech-radar__tech--a19 { @include tech($size, 65px, -14deg); }
  .c-tech-radar__tech--a20 { @include tech($size, 40px, -27deg); }
  .c-tech-radar__tech--a21 { @include tech($size, 60px, -38deg); }
  .c-tech-radar__tech--a22 { @include tech($size, 35px, -62deg); }
  .c-tech-radar__tech--a23 { @include tech($size, 63px, -58deg); }
  .c-tech-radar__tech--a24 { @include tech($size, 64px, -80deg); }
</style>

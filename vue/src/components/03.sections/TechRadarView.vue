<template>
    <section class="c-tech-radar">
        <div class="stars_large" />
        <div class="stars_medium" />
        <div class="stars_small" />

        <article class="section c-tech-radar__content">
            <figure class="c-tech-radar__image">
                <section class="c-tech-radar__level c-tech-radar__hold">
                </section>

                <section class="c-tech-radar__level c-tech-radar__assess"
                         :class="{ 'active': selection === 'assess' }"
                         @click="select('assess', $event)">
                    <div v-for="n in assessIndizes"
                         :key="n"
                         class="c-tech-radar__tech c-tech-radar__tech--assess"
                         :class="getClasses(n+1, 's')" />
                </section>

                <section class="c-tech-radar__level c-tech-radar__trial"
                         :class="{ 'active': selection === 'trial' }"
                         @click="select('trial', $event)">
                    <div v-for="n in trialsIndizes"
                         :key="n"
                         class="c-tech-radar__tech c-tech-radar__tech--trial"
                         :class="getClasses(n+1, 't')" />
                </section>

                <section class="c-tech-radar__level c-tech-radar__adopt"
                         :class="{ 'active': selection === 'adopt' }"
                         @click="select('adopt', $event)">
                    <div v-for="n in adoptsIndizes"
                         :key="n"
                         class="c-tech-radar__tech c-tech-radar__tech--adopt"
                         :class="getClasses(n+1, 'a')" />
                </section>
            </figure>

            <section v-if="!selection" class="article c-tech-radar__details">
                <h2>Technology Radar</h2>
                <p>Living in a fast changing world where your colleagues greet you daily with "look at this new
                    framework" it became useful for the mental health to thoroughly validate upcoming trends first.</p>
                <p>One way of keeping track of your evaluation process is with a <span class="italic">technology radar</span> following
                    the principles and ideas of <a href="https://www.thoughtworks.com/" target="_blank" rel="noopener">ThoughtWorks</a>.</p>
                <p>Take a look at their work. It's especially useful in business environments with large teams to
                    maintain a stable technology stack. Touch or click the rings for my personal technology stack.</p>
            </section>

            <section v-else-if="selection === 'assess'" class="article c-tech-radar__details">
                <h2>Technology Radar - Assess</h2>
                <ul v-for="n in 4" :key="n">
                    <li v-for="i in 6" :key="n*i" v-if="assess[n*i]">
                        {{ assess[n*i].title }}
                    </li>
                </ul>
            </section>

            <section v-else-if="selection === 'trial'" class="article c-tech-radar__details">
                <h2>Technology Radar - Trial</h2>
                <ul v-for="n in 4" :key="n">
                    <li v-for="i in 6" :key="n*i" v-if="trials[n*i]">
                        {{ trials[n*i].title }}
                    </li>
                </ul>
            </section>

            <section v-else-if="selection === 'adopt'" class="article c-tech-radar__details">
                <h2>Technology Radar - Adopt</h2>
                <ul v-for="n in 4" :key="n">
                    <li v-for="i in 6" :key="n*i" v-if="adopts[n*i]">
                        {{ adopts[n*i].title }}
                    </li>
                </ul>
            </section>
        </article>

    </section>
</template>

<script>
    export default {
        name: 'TechRadarView',

        data() {
            return {
                selection: null,
                assess: [
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
                    { title: '6' }
                ],
                trials: [
                    // tools
                    { title: '1' },
                    { title: '2' },
                    { title: '3' },
                    { title: '4' },
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
                    { title: '6' }
                ],
                adopts: [
                    // tools
                    { title: '1' },
                    { title: '2' },
                    { title: '3' },
                    { title: '4' },
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
                    { title: '6' }
                ]
            };
        },

        computed: {
            assessIndizes() {
                return this.assess.map((_, i) => i).filter(_ => !!this.assess[_]);
            },
            trialsIndizes() {
                return this.trials.map((_, i) => i).filter(_ => !!this.trials[_]);
            },
            adoptsIndizes() {
                return this.adopts.map((_, i) => i).filter(_ => !!this.adopts[_]);
            }
        },

        methods: {
            select(ring, ev) {
                if (ring === this.selection) { return this.deselect(); }
                document.removeEventListener('click', this.deselect);
                this.selection = ring;
                document.addEventListener('click', this.deselect);
                ev.stopPropagation();
            },
            deselect() {
                document.removeEventListener('click', this.deselect);
                this.selection = null;
            },
            getClasses(n, prefix) {
                return {
                    [`c-tech-radar__tech--${prefix}${n}`]: true,
                    [`c-tech-radar__tech--${n <= 6 ? 'tool' : n <= 12 ? 'language' : n <= 18 ? 'platform' : 'teq'}`]: true
                };
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../../assets/colors";

    $totalWidth: 400px;
    $totalHeight: 400px;
    $bgr-color: rgba(255, 255, 255, .15);

    $ratio: 4/9;
    $adoptSize: 40%;
    $trialSize: (100% - $adoptSize) * $ratio + $adoptSize;
    $assessSize: (100% - $trialSize) * $ratio + $trialSize;
    $holdSize: (100% - $assessSize) * $ratio + $assessSize;

    .c-tech-radar__content {
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: center;
        min-height: 100%;
        max-width: 1400px;
        margin: auto;
    }

    .c-tech-radar__image {
        flex: 0 0 $totalWidth;
        min-height: $totalHeight;
        position: relative;
        margin: 6px 24px;
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
        margin-top: -$size/2;
        margin-left: -$size/2;
        border-width: ($size - $prevSize) / 100% / 2 * $totalWidth - $borderMargin;
    }

    .c-tech-radar__adopt {
        @include level($adoptSize, $adoptSize);

        cursor: pointer;
        border-width: 0;
        background: $bgr-color;
        &:hover { background: fade-in($bgr-color, .02); }
        &.active { background: fade-in($bgr-color, .06); }
        &:hover.active { background: fade-in($bgr-color, .08); }
    }

    .c-tech-radar__trial {
        @include level($trialSize, $adoptSize);

        cursor: pointer;
        border-color: fade-out($bgr-color, .04);
        &:hover { border-color: fade-out($bgr-color, .02); }
        &.active { border-color: fade-in($bgr-color, .02); }
        &:hover.active { border-color: fade-in($bgr-color, .04); }
    }

    .c-tech-radar__assess {
        @include level($assessSize, $trialSize);

        cursor: pointer;
        border-color: fade-out($bgr-color, .08);
        &:hover { border-color: fade-out($bgr-color, .06); }
        &.active { border-color: fade-out($bgr-color, .02); }
        &:hover.active { border-color: $bgr-color; }
    }

    .c-tech-radar__hold {
        @include level($holdSize, $assessSize);

        border-color: fade-out($bgr-color, .12);
    }

    /*
     * Tech Radar techs
     */

    .c-tech-radar__tech { position: absolute; }

    .c-tech-radar__tech--assess { opacity: .3; }
    .c-tech-radar__tech--trial { opacity: .6; }
    .c-tech-radar__tech--adopt { opacity: .9; }

    .c-tech-radar__tech--tool { background: #379392; }
    .c-tech-radar__tech--language { background: #D62828; }
    .c-tech-radar__tech--platform { background: #f46036; }
    .c-tech-radar__tech--teq { background: #1481ba; }

    @mixin tech($size, $radius, $angle) {
        width: $size;
        height: $size;
        border-radius: 40%;
        top: 50%;
        left: 50%;
        margin-top: -$size/2 - $radius;
        margin-left: -$size/2;
        transform: rotate($angle);
        transform-origin: $size/2 $size/2 + $radius;
    }

    $size: 10px;
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

    $size: 14px;
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

    $size: 16px;
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

    /*
     * Night sky
     */

    @function stars($stars) {
        $shadow: ();

        @for $i from 1 to $stars {
            $shadow: append($shadow, (random(2000) + 0px) (random(800) + 0px) rgba(255, 255, 255, .4), comma)
        }

        @return $shadow;
    }

    .stars_large {
        box-shadow: stars(120);
        background: transparent;
        height: 3px;
        width: 3px;
    }

    .stars_medium {
        box-shadow: stars(200);
        background: transparent;
        height: 2px;
        width: 2px;
    }

    .stars_small {
        box-shadow: stars(280);
        background: transparent;
        height: 1px;
        width: 1px;
    }
</style>

<template>
    <section class="c-tech-radar">
        <div class="stars_large" />
        <div class="stars_medium" />
        <div class="stars_small" />

        <article class="section c-tech-radar__content">
            <figure class="c-tech-radar__image">
                <section class="c-tech-radar__level c-tech-radar__hold">
                </section>

                <section class="c-tech-radar__level c-tech-radar__assess">
                </section>

                <section class="c-tech-radar__level c-tech-radar__trial">
                </section>

                <section class="c-tech-radar__level c-tech-radar__adopt">
                </section>
            </figure>

            <section class="article c-tech-radar__details">
                <h2>Tech Radar</h2>
                <p>Let's get wild today. All you need is a dream in your heart, and an almighty knife. Anything you want
                    to do you can do here.</p>
                <p>Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. There
                    are no limits in this world. Trees grow however makes them happy. Here we're limited by the time we
                    have.</p>
                <p>Tree trunks grow however makes them happy. Every highlight needs it's own personal shadow. Isn't that
                    fantastic that you can make whole mountains in minutes?</p>
            </section>
        </article>

    </section>
</template>

<script>
    export default {
        name: 'TechRadarView'
    };
</script>

<style scoped lang="scss">
    @import "../../assets/colors";

    $totalWidth: 400px;
    $totalHeight: 400px;
    $bgr-color: rgba(255, 255, 255, .15);

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

    @mixin level($width, $height, $prevWidth: 0, $borderMargin: 7px) {
        width: $width;
        height: $height;
        margin-top: -$height/2;
        margin-left: -$width/2;
        border-width: ($width - $prevWidth) / 100% / 2 * $totalWidth - $borderMargin;
    }

    $ratio: 4/9;
    $levelWidth: 40%;

    .c-tech-radar__adopt {
        @include level($levelWidth, $levelWidth);

        border-width: 0;
        background: $bgr-color;
        &:hover { background: fade-in($bgr-color, .05); }
    }

    $prevWidth: $levelWidth;
    $levelWidth: (100% - $levelWidth) * $ratio + $levelWidth;

    .c-tech-radar__trial {
        @include level($levelWidth, $levelWidth, $prevWidth);

        border-color: fade-out($bgr-color, .04);
        &:hover { border-color: fade-in($bgr-color, .01); }
    }

    $prevWidth: $levelWidth;
    $levelWidth: (100% - $levelWidth) * $ratio + $levelWidth;

    .c-tech-radar__assess {
        @include level($levelWidth, $levelWidth, $prevWidth);

        border-color: fade-out($bgr-color, .08);
        &:hover { border-color: fade-out($bgr-color, .03); }
    }

    $prevWidth: $levelWidth;
    $levelWidth: (100% - $levelWidth) * $ratio + $levelWidth;

    .c-tech-radar__hold {
        @include level($levelWidth, $levelWidth, $prevWidth);

        border-color: fade-out($bgr-color, .12);
    }

    /*
     * Night sky
     */

    @function box-shadow($stars) {
        $bxshadow: ();

        @for $i from 1 to $stars {
            $bxshadow: append($bxshadow, (random(2000) + 0px) (random(800) + 0px) rgba(255, 255, 255, .4), comma)
        }

        @return unquote($bxshadow);
    }

    .stars_large {
        box-shadow: box-shadow(120);
        background: transparent;
        height: 3px;
        width: 3px;
    }

    .stars_medium {
        box-shadow: box-shadow(200);
        background: transparent;
        height: 2px;
        width: 2px;
    }

    .stars_small {
        box-shadow: box-shadow(280);
        background: transparent;
        height: 1px;
        width: 1px;
    }
</style>

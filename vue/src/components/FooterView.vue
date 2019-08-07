<template>
    <div class="footer dark120" :class="{ inactive: activeSection !== 'footer' }">
        <p>
            Impressum
        </p>
    </div>
</template>

<script>
    export default {
        name: 'FooterView',

        computed: {
            activeSection() {
                return this.$store.state.activeSection;
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../assets/colors";

    .footer {
        min-height: 400px;
        transition: color .2s;
    }
</style>

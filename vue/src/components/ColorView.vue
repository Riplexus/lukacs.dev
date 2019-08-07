<template>
    <div class="color" :class="color">
        <h2 class="color__type">{{ color }}</h2>
        <p class="color__text-title">The quick onyx goblin jumps over the lazy dwarf.</p>
        <p class="color__text">The quick onyx goblin jumps over the lazy dwarf.</p>
        <p class="color__text-bold">The quick onyx goblin jumps over the lazy dwarf.</p>
    </div>
</template>

<script>
    export default {
        name: 'ColorView',
        props: {
            color: {
                type: String,
                required: true
            }
        }
    };
</script>

<style scoped lang="scss">
    .color {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
    }

    .color__type {
        margin-bottom: 24px;
    }

    .color__text-title {
        font-size: 18pt;
    }

    .color__text-bold {
        font-weight: 700;
    }
</style>

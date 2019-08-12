<template>
    <div class="color" :class="color">
        <h2 class="color__type">{{ color }}</h2>
        <p class="big">The quick onyx goblin jumps over the lazy dwarf.</p>
        <p class="bold">The quick onyx goblin jumps over the lazy dwarf.</p>
        <p>The quick onyx goblin jumps over the lazy dwarf.</p>
        <p class="emphasis">The quick onyx goblin jumps over the lazy dwarf.</p>
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
</style>

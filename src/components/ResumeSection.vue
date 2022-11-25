<template>
    <section class="mb-4">
        <h2 class="text-2xl mb-2">{{ String(props.title).toUpperCase() }}</h2>
        <div class="text-gray-300">
            <slot />
        </div>
    </section>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
    },
});
</script>

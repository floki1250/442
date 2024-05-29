<template>
    <div
        class="h-60 relative rounded-xl bg-gray-100 dark:bg-gray-800 w-80 md:w-80 lg:w-96 shadow-md overflow-hidden group">
        <img :src="$props.img ? $props.img : '/logo.svg'" :alt="$props.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125">
        <div
            class="absolute bottom-0 left-0 w-full h-20 bg-white/80 dark:bg-black/80 px-2 py-1 transition-all duration-500 overflow-hidden group-hover:h-40">
            <h1
                class="text-lg font-bold p-1 whitespace-nowrap transition-all duration-500 group-hover:whitespace-normal">
                {{ $props.title }}
            </h1>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    title: { type: String, default: "Title" },
    img: { type: String, default: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55" },
})
</script>

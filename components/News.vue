<template>
    <div class="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <div v-for="(el, index) in newsdata" :key="index" class="w-full">
            <div>
                {{ newsdata }}
                <NuxtLink :to="`${el?.url}`" target="_blank" class="block">
                    <MagicCard :title="el.title" :img="el.img" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const newsdata = ref([]);

onMounted(async () => {
    try {
        newsdata.value = await $fetch('/api/get-news');
        console.log(newsdata.value);
    } catch (error) {
        console.error(error);
    }
});
</script>

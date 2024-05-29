<template>
    <div class="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <div v-for="(el, index) in news.articles" :key="index" class="w-full">
            <div>
                <NuxtLink :to="`${el?.url}`" target="_blank" class="block">
                    <MagicCard :title="el.title" :img="el.urlToImage" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const keywords = 'Football OR Soccer';
const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(keywords)}&language=en&apiKey=${config.public.apiKey}`;
const { data: news } = await useAsyncData('news', () =>
    $fetch(url)
);
</script>

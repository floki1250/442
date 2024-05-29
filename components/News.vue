<template>
    <div class="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <div v-for="(el, index) in news" :key="index" class="w-full">
            <div>
                <NuxtLink :to="`${el?.url}`" target="_blank" class="block">
                    <MagicCard :title="el.title" :img="el.img" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data: news } = await useAsyncData('news', () =>
    $fetch('https://footballnewsapi.netlify.app/.netlify/functions/api/news/onefootball')
);
</script>

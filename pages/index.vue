<template>
    <div class="h-screen w-full home-screen flex justify-center items-center ">

        <div
            class="fixed bottom-0 mb-8 z-50 h-fit p-4 bg-black/70 border border-lime-400/50 backdrop-blur-md rounded-lg flex flex-col justify-center items-center">
            <UButtonGroup size="sm" orientation="horizontal">
                <UInput placeholder="Enter Match Code" v-model="match" />
                <UButton icon="i-heroicons-plus" :to="match">Join Match</UButton>
            </UButtonGroup>
            <UButton icon="i-heroicons-plus" block class="mt-4">Organise New Match</UButton>
        </div>
    </div>
</template>
<script setup lang="ts">
const match = ref('')
definePageMeta({
    colorMode: 'dark',
})
</script>
<style lang="scss">
.home-screen {
    background: url('/messi.jpg');
    background-size: cover;
    background-position: center;
}
</style>

<template>
    <div class="h-[50vh] w-full flex justify-center items-center flex-col">
        <div class="flex justify-between m-4 mb-6">
            <div
                class="text-4xl lg:text-8xl  rounded-full bg-white dark:bg-gray-900 w-24 h-24 lg:w-44 lg:h-44 flex justify-center items-center shadow-md">
                <UIcon name="i-heroicons-home" />
            </div>
            <div class="text-4xl lg:text-8xl w-24 h-24 lg:w-44 lg:h-44 flex justify-center items-center">
                -
            </div>
            <div
                class="text-4xl lg:text-8xl rounded-full bg-white dark:bg-gray-900 w-24 h-24 lg:w-44 lg:h-44 flex justify-center items-center shadow-md">
                <UIcon name="i-heroicons-home" />
            </div>
        </div>
    </div>
    <loading />
    {{ route.params.match }}
    <div class="p-4 flex justify-around w-full h-full text-md   dark:border-gray-800">

        <div class="flex flex-col bg-white p-4 rounded-lg">
            <h1 class="text-4xl">Club List 1</h1>
            <UDivider />
            <div v-for="(i, index) in 10" :key="index">
                <div class="text-xl p-2 bg-gray-50 border-2 border-teal-300 m-1 rounded-lg hover:bg-teal-200">
                    <p>{{ i }} - Adam</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col bg-white p-4 rounded-lg">
            <h1 class="text-4xl">Club List 2</h1>
            <UDivider />
            <div v-for="(i, index) in 10" :key="index">
                <div class="text-xl p-2 bg-gray-50 border-2 border-teal-300 m-1 rounded-lg hover:bg-teal-200">
                    <p>{{ i }} - Adam</p>
                </div>
            </div>
        </div>


    </div>

</template>
<script setup lang="ts">

const route = useRoute()
</script>
<style lang="scss" scoped>
.box:hover {
    --border-angle: 0turn;
    --main-bg: conic-gradient(from var(--border-angle), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0) 95%);
    border: solid 2px transparent;
    --gradient-border: conic-gradient(from var(--border-angle),
            transparent 25%,
            #08f,
            #f03 99%,
            transparent);

    background: var(--main-bg) padding-box, var(--gradient-border) border-box,
        var(--main-bg) border-box;

    background-position: center center;

    animation: bg-spin 10s linear infinite;




    @keyframes bg-spin {
        to {
            --border-angle: 1turn;
        }
    }
}

@property --border-angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0turn;
}
</style>

<template>
    <div class="w-full bg-gray-100 dark:bg-gray-800 my-4 rounded-lg p-2">
        <div class="flex justify-between items-center p-2 ">
            <h1 class="text-2xl  ">Match Code : <span class="text-lime-300 font-mono font-bold uppercase">{{
                route.params.match }}</span>
            </h1>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12t.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2t2.125.875T21 5t-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12t-.025.363t-.075.337l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19t-.875 2.125T18 22" />
                </svg></div>
        </div>
        <hr class="my-4 dark:border-black" />
        <div
            class="date  flex justify-between text-xl font-mono font-bold bg-white dark:bg-gray-900 rounded-lg p-2 hover:bg-lime-400  hover:dark:bg-lime-400">
            <div class="pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v4.675q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712V10H5v10h5.8q.425 0 .713.288T11.8 21t-.288.713T10.8 22zm13 1q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m1.675-2.625l.7-.7L18.5 17.8V15h-1v3.2z" />
                </svg>
            </div>
            <input type="date" name="Date" id="" placeholder="Enter Date">
            <input type="time" name="time" id="" placeholder="Enter time">
        </div>
        <div>
            <div class="bg-white dark:bg-gray-900 my-4 rounded-lg p-2 hover:bg-lime-400  hover:dark:bg-lime-400">
                <UInput v-model="data.stadium" type="text" placeholder=" Enter stadium name" variant="none"
                    class="w-full">
                    <template #leading>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M3 7V3l4 2zm15 0V3l4 2zm-7-1V2l4 2zM9 21.875q-1.3-.125-2.55-.375t-2.238-.612t-1.6-.838T2 19v-9q0-.625.788-1.162t2.137-.95t3.175-.65T12 7t3.9.238t3.175.65t2.138.95T22 10v9q0 .575-.612 1.05t-1.6.838t-2.238.612t-2.55.375V17H9zM12 11q2.425 0 4.188-.288T19 10.05q0-.125-1.9-.587T12 9t-5.1.463t-1.9.587q1.05.375 2.812.663T12 11" />
                        </svg>
                    </template>
                </UInput>
            </div>
        </div>
    </div>

    <UTabs :items="items" class="w-full">
        <template #team-1>

            <div v-for="(i, index) in 7" :key="index">
                <div
                    class="text-xl p-2 rounded-lg hover:bg-lime-400  hover:dark:bg-lime-400 flex bg-gray-100 dark:bg-gray-800 m-1 ">
                    <span class="font-bold">{{ i }}</span>
                    <UInput :id="'input' + index" v-model="data.team1[index]" type="text"
                        placeholder='Enter Player Name' variant="none" class="w-full">
                    </UInput>
                </div>
            </div>
        </template>
        <template #team-2>

            <div v-for="(i, index) in 7" :key="index">
                <div
                    class="text-xl p-2 rounded-lg hover:bg-lime-400  hover:dark:bg-lime-400 flex bg-gray-100 dark:bg-gray-800 m-1 ">
                    <span class="font-bold">{{ i }}</span>
                    <UInput :id="'input' + index" v-model="data.team2[index]" type="text"
                        placeholder="Enter Player Name" variant="none" class="w-full">
                    </UInput>
                </div>
            </div>

        </template>
    </UTabs>


</template>
<script setup lang="ts">

const route = useRoute()
const items = [{
    label: 'Team 1',
    slot: 'team-1'
}, {
    label: 'Team 2',
    slot: 'team-2'
}]

const data = ref({
    code: "",
    stadium: "",
    date: "",
    team1: [], team2: []
})
</script>
<style lang="scss" scoped>
.date input {
    background: transparent;
    outline: none;
}
</style>

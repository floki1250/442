<template>
    <div class="h-screen w-full home-screen   flex justify-center items-center">

        <div
            class="fixed bottom-0  mb-8 my-4 z-50 h-fit p-4 bg-black/70 border border-lime-400/50 backdrop-blur-md rounded-lg flex flex-col justify-center items-center">
            <div class="flex">
                <UInput variant="outline" placeholder="Enter Match Code" v-model="match" size="md" class="pr-1" />
                <UButton label="View Match" :to="match" class="pl-1">
                    <template #leading>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                            <path fill="currentColor"
                                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 39.38l24.79-17.05a88.41 88.41 0 0 1 36.18 27l-8 26.94c-.2 0-.41.1-.61.17l-22.82 7.41a7.59 7.59 0 0 0-1 .4L136 88.62V64zM95.24 46.33L120 63.38v25.24l-28.56 19.67a7.59 7.59 0 0 0-1-.4l-22.82-7.41c-.2-.07-.41-.12-.61-.17l-8-26.94a88.41 88.41 0 0 1 36.23-27.04m-13 129.09H53.9a87.4 87.4 0 0 1-13.79-43.07l22-16.88a5.77 5.77 0 0 0 .58.22l22.83 7.42a7.83 7.83 0 0 0 .93.22l10.79 31.42c-.15.18-.3.36-.44.55l-14.1 19.41a7.8 7.8 0 0 0-.46.71M150.69 213a88.16 88.16 0 0 1-45.38 0l-10.06-28.4c.13-.16.27-.31.39-.48l14.11-19.42a7.66 7.66 0 0 0 .46-.7h35.58a7.66 7.66 0 0 0 .46.7l14.11 19.42c.12.17.26.32.39.48Zm23.07-37.61a7.8 7.8 0 0 0-.46-.71l-14.11-19.38c-.14-.19-.29-.37-.44-.55l10.79-31.42a7.83 7.83 0 0 0 .93-.22l22.83-7.42a5.77 5.77 0 0 0 .58-.22l22 16.88a87.4 87.4 0 0 1-13.79 43.07Z" />
                        </svg>
                    </template>
                </UButton>
            </div>
            <UButton block label="Organise a Match" class="mt-4" @click="onSubmit()">
                <template #leading>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2">
                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0M3 9h3v6H3zm15 0h3v6h-3z" />
                            <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm9-2v14" />
                        </g>
                    </svg>
                </template>
            </UButton>
        </div>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    colorMode: 'dark',
})
interface MatchData {
    code: string;
    date: string;
    team1: string[];
    team2: string[];
    stadium: string;
    readonly: boolean;
    date_updated: string;
}

const router = useRouter()
const toast = useToast()
const match = ref('')
let currentSequence = "AAB";
async function onSubmit () {
    try {
        const matchcode = generateString();
        await $fetch("/api/match", {
            method: "POST", body: {
                code: matchcode,
                date: "",
                team1: [],
                team2: [],
                stadium: "",
                readonly: false,
                date_updated: "",
            }
        });
        router.push('/' + matchcode)
    } catch {
        toast.add({
            id: 'error',
            title: 'Error',
            description: 'Error Creating. Please try again. ',
            icon: 'i-heroicons-x-circle',
            color: 'red',
        })
    }

}


function incrementAlphabetSequence (seq: string) {
    let arr = seq.split('');
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 'Z') {
            arr[i] = 'A';
        } else {
            arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1);
            return arr.join('');
        }
    }
    arr.unshift('A');
    return arr.join('');
}

function generateString () {
    const year = new Date().getFullYear();
    const yearLastTwoDigits = year.toString().slice(-2);
    const result = currentSequence + yearLastTwoDigits;
    currentSequence = incrementAlphabetSequence(currentSequence);
    return result;
}



</script>
<style lang="scss">
.home-screen {
    background: url('/messi2.jpg');
    background-size: cover contain;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
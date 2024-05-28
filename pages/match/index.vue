<template>
    <div class="w-full h-screen   flex justify-center">
        <div class="sm:w-full lg:w-96 p-4  flex flex-col justify-center items-center  backdrop-blur-md  ">
            <div class="px-4 ">
                <svg width="256" height="256" viewBox="0 0 164 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M42.3 0L8.225 33.605V41.125H31.725V21.15L41.125 11.75V57.575H31.725V49.35H0V33.37C0 32.43 0 31.6858 0 31.1375C0.0783333 30.5892 0.195831 30.1192 0.352498 29.7275C0.509164 29.2575 0.744171 28.8658 1.0575 28.5525C1.37084 28.1608 1.7625 27.6908 2.2325 27.1425L29.14 0H42.3ZM103.345 0L69.2702 33.605V41.125H92.7702V21.15L102.17 11.75V57.575H92.7702V49.35H61.0452V33.37C61.0452 32.43 61.0452 31.6858 61.0452 31.1375C61.1235 30.5892 61.241 30.1192 61.3977 29.7275C61.5543 29.2575 61.7893 28.8658 62.1027 28.5525C62.416 28.1608 62.8077 27.6908 63.2777 27.1425L90.1852 0H103.345ZM163.215 57.575H122.09V45.2375L153.815 21.9725V8.225H131.49V16.45H122.09V8.225C122.09 5.95333 122.873 4.03417 124.44 2.4675C126.085 0.822501 128.043 0 130.315 0H154.99C157.261 0 159.18 0.822501 160.747 2.4675C162.392 4.03417 163.215 5.95333 163.215 8.225V25.2625L132.077 48.175V49.35H163.215V57.575Z"
                        fill="white" />
                </svg>
            </div>
            <div class="w-full">
                <UInput variant="outline" placeholder="Enter Match Code" v-model="matchInput" size="md"
                    class="w-full" />
            </div>
            <div class="flex mt-4 justify-between items-center  w-full">
                <UButton label="View Match" :to="`match/${match}`" class="mr-4">
                    <template #leading>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                            <path fill="currentColor"
                                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 39.38l24.79-17.05a88.41 88.41 0 0 1 36.18 27l-8 26.94c-.2 0-.41.1-.61.17l-22.82 7.41a7.59 7.59 0 0 0-1 .4L136 88.62V64zM95.24 46.33L120 63.38v25.24l-28.56 19.67a7.59 7.59 0 0 0-1-.4l-22.82-7.41c-.2-.07-.41-.12-.61-.17l-8-26.94a88.41 88.41 0 0 1 36.23-27.04m-13 129.09H53.9a87.4 87.4 0 0 1-13.79-43.07l22-16.88a5.77 5.77 0 0 0 .58.22l22.83 7.42a7.83 7.83 0 0 0 .93.22l10.79 31.42c-.15.18-.3.36-.44.55l-14.1 19.41a7.8 7.8 0 0 0-.46.71M150.69 213a88.16 88.16 0 0 1-45.38 0l-10.06-28.4c.13-.16.27-.31.39-.48l14.11-19.42a7.66 7.66 0 0 0 .46-.7h35.58a7.66 7.66 0 0 0 .46.7l14.11 19.42c.12.17.26.32.39.48Zm23.07-37.61a7.8 7.8 0 0 0-.46-.71l-14.11-19.38c-.14-.19-.29-.37-.44-.55l10.79-31.42a7.83 7.83 0 0 0 .93-.22l22.83-7.42a5.77 5.77 0 0 0 .58-.22l22 16.88a87.4 87.4 0 0 1-13.79 43.07Z" />
                        </svg>
                    </template>
                </UButton>
                <UButton label="Organise a Match" @click="onSubmit()" class="ml-4">
                    <template #leading>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2">
                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0M3 9h3v6H3zm15 0h3v6h-3z" />
                                <path
                                    d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm9-2v14" />
                            </g>
                        </svg>
                    </template>
                </UButton>
            </div>

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
const matchInput = computed({
    get () {
        return match.value.toUpperCase();
    },
    set (value) {
        match.value = value.toUpperCase();
    }
});
async function verifyCode (code: any) {
    const { data: matchs } = await useFetch<MatchData>(`/api/match`, {
        method: "GET",
        query: { code: code },
    });
    if (!matchs.value) {
        return false
    } else return true
}
async function onSubmit () {
    try {
        const matchcode = generateRandomString();
        if (await verifyCode(matchcode)) {
            toast.add({
                id: 'error',
                title: 'Error',
                description: 'Error Creating Code Already Exists. ',
                icon: 'i-heroicons-x-circle',
                color: 'red',
            })
            return;
        } else {
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
        }
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


function generateRandomString (): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}



</script>
<style scoped lang="scss">
.blur-blob {
    filter: blur(60px);
    transition-duration: 2s;
    transition-timing-function: cubic-bezier(.075, .82, .165, 1);
    border-radius: 9999px;
    z-index: -10;
}
</style>

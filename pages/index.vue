<template>
    <div class="w-full pt-20 flex justify-center">
        <div class="w-full ">
            <Livescore />
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

<template>
  <div class="min-h-screen bg-[#f7f7f7] dark:bg-black">
    <NuxtLayout>
      <NuxtLoadingIndicator color="#9cf21a" />
      <header
        class="fixed top-0 z-50  w-full border-b border-gray-200 dark:border-gray-600 bg-background/90 backdrop-blur  p-2">
        <div class="flex justify-between items-center h-12">
          <div class="image">

            <NuxtLink to="/" class="text-3xl font-bold">
              <svg width="64" height="24" viewBox="0 0 164 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M42.3 0L8.225 33.605V41.125H31.725V21.15L41.125 11.75V57.575H31.725V49.35H0V33.37C0 32.43 0 31.6858 0 31.1375C0.0783333 30.5892 0.195831 30.1192 0.352498 29.7275C0.509164 29.2575 0.744171 28.8658 1.0575 28.5525C1.37084 28.1608 1.7625 27.6908 2.2325 27.1425L29.14 0H42.3ZM103.345 0L69.2702 33.605V41.125H92.7702V21.15L102.17 11.75V57.575H92.7702V49.35H61.0452V33.37C61.0452 32.43 61.0452 31.6858 61.0452 31.1375C61.1235 30.5892 61.241 30.1192 61.3977 29.7275C61.5543 29.2575 61.7893 28.8658 62.1027 28.5525C62.416 28.1608 62.8077 27.6908 63.2777 27.1425L90.1852 0H103.345ZM163.215 57.575H122.09V45.2375L153.815 21.9725V8.225H131.49V16.45H122.09V8.225C122.09 5.95333 122.873 4.03417 124.44 2.4675C126.085 0.822501 128.043 0 130.315 0H154.99C157.261 0 159.18 0.822501 160.747 2.4675C162.392 4.03417 163.215 5.95333 163.215 8.225V25.2625L132.077 48.175V49.35H163.215V57.575Z"
                  fill="white" />
              </svg>
            </NuxtLink>
          </div>
          <div class=" w-fit flex  justify-center p-1 ">
            <div
              class="text-black dark:text-white hover:bg-white dark:hover:bg-gray-900 rounded-full p-2 m-0.5 w-full h-full whitespace-nowrap">
              <NuxtLink to="/"
                class="text-black dark:text-white  font-semibold hover:text-riptide-400 group transition-all ease-linear duration-500">
                <Icon name="i-tabler-soccer-field" class="text-2xl group-hover:text-lime-500" />
                <span class="p-2 hidden group-hover:inline lg:inline group-hover:text-lime-500">LiveScore</span>
              </NuxtLink>
            </div>
            <div
              class="text-black dark:text-white hover:bg-white dark:hover:bg-gray-900 rounded-full p-2 m-0.5 w-full h-full whitespace-nowrap">
              <NuxtLink to="/news"
                class="text-black dark:text-white  font-semibold hover:text-riptide-400 group transition-all ease-linear duration-500">
                <Icon name="i-heroicons-newspaper" class="text-2xl group-hover:text-lime-500" />
                <span class="p-2 hidden group-hover:inline lg:inline group-hover:text-lime-500">Football News</span>
              </NuxtLink>
            </div>
            <div
              class="text-black dark:text-white hover:bg-white dark:hover:bg-gray-900 rounded-full p-2 m-0.5 w-full h-full whitespace-nowrap">
              <NuxtLink to="/match"
                class="text-black dark:text-white  font-semibold hover:text-riptide-400 group transition-all ease-linear duration-500">
                <Icon name="i-bx-football" class="text-2xl group-hover:text-lime-500" />
                <span class="p-2 hidden group-hover:inline lg:inline group-hover:text-lime-500">Organize Match</span>
              </NuxtLink>
            </div>
          </div>
          <div class="relative flex justify-center ">

            <div @mouseenter="show = true" class=" info p-2">
              <UIcon name="i-heroicons-information-circle" class="text-2xl" />
            </div>

            <transition name="fade">
              <div
                class=" p-1 py-4 absolute z-50 top-0 left-0 rounded-xl bg-gray-100 border-white dark:bg-gray-800  border dark:border-gray-600 shadow-2xl "
                v-if="show" @mouseleave="show = false">
                <div
                  @click="$colorMode.preference == 'light' ? $colorMode.preference = 'dark' : $colorMode.preference = 'light'">
                  <UIcon class="text-2xl hover:text-lime-400"
                    :name="$colorMode.preference == 'light' ? 'i-heroicons-sun' : 'i-heroicons-moon'" />
                </div>
                <div>
                  <NuxtLink to="https://www.buymeacoffee.com/AdamDardour" class="text-2xl hover:text-lime-400"
                    target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2">
                        <path stroke-dasharray="48" stroke-dashoffset="48" d="M17 9v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9z">
                          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0" />
                        </path>
                        <path stroke-dasharray="14" stroke-dashoffset="14"
                          d="M17 14H20C20.55 14 21 13.55 21 13V10C21 9.45 20.55 9 20 9H17">
                          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s"
                            values="14;28" />
                        </path>
                      </g>
                      <mask id="lineMdCoffeeLoop0">
                        <path fill="none" stroke="#fff" stroke-width="2"
                          d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4">
                          <animateMotion calcMode="linear" dur="3s" path="M0 0v-8" repeatCount="indefinite" />
                        </path>
                      </mask>
                      <rect width="24" height="0" y="7" fill="currentColor" mask="url(#lineMdCoffeeLoop0)">
                        <animate fill="freeze" attributeName="y" begin="0.8s" dur="0.6s" values="7;2" />
                        <animate fill="freeze" attributeName="height" begin="0.8s" dur="0.6s" values="0;5" />
                      </rect>
                    </svg>
                  </NuxtLink>
                </div>
                <div>
                  <NuxtLink to="https://github.com/floki1250" class="text-2xl hover:text-lime-400" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
                        <g fill="#fff">
                          <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
                          <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
                        </g>
                      </mask>
                      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2">
                        <path stroke-dasharray="30" stroke-dashoffset="30"
                          d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21">
                          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0" />
                        </path>
                        <path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19">
                          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s"
                            values="10;0" />
                          <animate attributeName="d" dur="3s" repeatCount="indefinite"
                            values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5" />
                        </path>
                      </g>
                      <rect width="8" height="4" x="8" y="11" fill="currentColor" mask="url(#lineMdGithubLoop0)">
                        <animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite"
                          values="11;11;7;7;11;11" />
                      </rect>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </transition>
          </div>

        </div>
      </header>
      <UContainer>
        <NuxtPage />
      </UContainer>
      <UNotifications />
    </NuxtLayout>

  </div>
</template>
<script setup lang="ts">
const show = ref(false);

</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}



.light .image svg path {
  fill: #000;
  stroke: #fff;
}
</style>

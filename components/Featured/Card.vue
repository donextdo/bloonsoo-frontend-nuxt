<script setup>

const isFav = ref(false)

</script>

<template>
    
    <div class="w-full flex flex-col gap-4 text-white select-none xl:gap-6">

        <div class="w-full h-60 rounded-lg shadow-lg xl:h-80 relative overflow-hidden">

            <FeaturedSwiper />

            <h3 class="text-xs font-bold absolute bottom-0 left-0 right-0 w-full p-4 bg-black bg-opacity-20 z-30 xl:text-sm pointer-events-none">
                $ 1000 - 5000 USD
            </h3>

            <div class="absolute top-4 right-4 z-30">
                <font-awesome-icon class="text-white text-2xl cursor-pointer" :icon="isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" @click.prevent="() => isFav = !isFav" />
            </div>

        </div>

        <div class="flex flex-col">
            <h4 class="text-sm font-semibold text-black xl:text-base">
                Well Furnished Apartment
            </h4>

            <p class="text-xs text-gray-500 xl:text-sm">
                100 Whatever Street, USA
            </p>

            <div class="flex gap-4 mt-2 xl:gap-5">

                <div class="flex gap-2 items-center">
                    <FeaturedIconsRoom class="w-4 h-4 xl:w-5 xl:h-5"/>
                    <span class="text-black font-bold text-xs xl:text-base">2</span>
                </div>

                <div class="flex gap-2 items-center">
                    <FeaturedIconsTub class="w-4 h-4 xl:w-5 xl:h-5"/>
                    <span class="text-black font-bold text-xs xl:text-base">2</span>
                </div>

                <div class="flex gap-2 items-center">
                    <FeaturedIconsBeds class="w-4 h-4 xl:w-5 xl:h-5"/>
                    <span class="text-black font-bold text-xs xl:text-base">2</span>
                </div>

                <div class="flex gap-2 items-center">
                    <FeaturedIconsFoot class="w-4 h-4 xl:w-5 xl:h-5"/>
                    <span class="text-black font-bold text-xs xl:text-base">0</span>
                </div>
                
            </div>
        </div>

    </div>

</template>
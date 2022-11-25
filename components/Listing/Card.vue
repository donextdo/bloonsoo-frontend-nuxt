<script setup>

defineProps({
    title: String,
    path: String
})

</script>

<template>
    
    <div class="w-full h-72 bg-white shadow-lg shadow-gray-400 lg:h-80 rounded-lg p-3 flex flex-col justify-between">

        <div class="w-full h-2/5">

            <slot></slot>

        </div>
        
        <div class="flex flex-col items-center gap-2">
            <h3 class="text-base text-center font-bold text-gray-800">
                {{ title }}
            </h3>

            <span class="text-sm text-center text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </span>

            <NuxtLink :to="path" class="py-2 px-6 my-2 lg:my-0 xl:my-4 xl:py-3 rounded-lg text-xs xl:text-sm text-white font-semibold bg-blue-700 hover:bg-blue-900">
                List Your Property
            </NuxtLink>
        </div>

    </div>

</template>
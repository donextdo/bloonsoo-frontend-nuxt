<script setup>

defineProps({
    title: String
})

</script>

<template>
    
    <div class="w-full h-72 bg-white shadow-lg rounded-lg p-3 xl:h-80 flex flex-col justify-between">

        <div class="w-full h-3/4">

            <slot></slot>

        </div>
        
        <div class="pl-2">
            <h3 class="text-base font-bold text-gray-800">
                {{ title }}
            </h3>

            <span class="text-sm text-gray-500">
                Lorem ipsum dolor.
            </span>
        </div>

    </div>

</template>
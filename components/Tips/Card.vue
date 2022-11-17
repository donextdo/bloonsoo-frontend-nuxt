<script setup>

const isFav = ref(false)

</script>

<template>
    
    <div class="w-full flex flex-col gap-4 text-white select-none xl:gap-6">

        <div class="w-full h-60 rounded-lg shadow-lg xl:h-80 relative overflow-hidden">

            <slot></slot>

        </div>

        <div class="flex flex-col">
            <h4 class="text-sm font-semibold text-black xl:text-base">
                Choose the right property
            </h4>

            <p class="text-xs text-gray-500 xl:text-sm">
                Economy
            </p>

        </div>

    </div>

</template>
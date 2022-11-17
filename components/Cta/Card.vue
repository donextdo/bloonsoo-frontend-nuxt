<script setup>

defineProps({
    content: Object
})

</script>

<template>
    
    <div class="absolute top-16 left-20 bottom-16 w-2/5 rounded-sm bg-black bg-opacity-30  py-10 px-14 text-white font-montserrat flex flex-col justify-between">

        <div>

            <h1 class="text-4xl font-bold leading-10 mb-4 max-w-xs">
                {{ content.title }}
            </h1>

            <p class="text-base font-normal leading-7 max-w-sm">
                {{ content.desc }}
            </p>

        </div>

        <slot></slot>
        
    </div>

</template>
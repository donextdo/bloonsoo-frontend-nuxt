<script setup>

defineProps({
    images: {
        type: Array,
        default: []
    }
})

const emits = defineEmits(['onClick'])

const handleClick = () => {
    emits('onClick')
}

</script>


<template>
    
    <div class="w-full h-70vh grid grid-cols-3 grid-rows-2 gap-4 relative">
        
        <div class="w-full h-full row-span-2 col-span-2 relative">
            <img :src="images[0]" alt="" class="w-full h-full object-cover">

            <button @click="handleClick()" class="absolute inset-0 bg-transparent"></button>    
        </div>

        <div class="w-full h-full col-span-1 row-span-1 relative">
            <img :src="images[1]" alt="" class="w-full h-full object-cover">

            <button @click="handleClick()" class="absolute inset-0 bg-transparent"></button>
        </div>

        <div class="w-full h-full col-span-1 row-span-1 relative">
            <img :src="images[2]" alt="" class="w-full h-full object-cover">

            <button @click="handleClick()" class="absolute inset-0 bg-black bg-opacity-30 grid place-items-center hover:bg-opacity-50">

                <h4 class="text-white font-extrabold text-base">
                    <span class="text-4xl">+</span><span class="text-6xl">{{ images.length - 2 }}</span> 
                    photos
                </h4>

            </button>
        </div>

    </div>

</template>
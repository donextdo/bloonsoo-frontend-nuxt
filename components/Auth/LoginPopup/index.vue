<script setup>

const emits = defineEmits(['onClose'])

const handleClose = () => {
    emits('onClose')
}

</script>

<template>
  
    <div class="fixed inset-0 bg-black bg-opacity-40 grid place-items-center z-40 py-20">

        <div class="w-80 h-max bg-white rounded-lg relative shadow-md overflow-visible flex flex-col gap-4 px-6 py-4">

            <div class="w-full flex flex-col gap-6">
                
                <h4 class="text-base font-semibold text-gray-800 mt-4">
                    You need to sign in before booking
                </h4>

                <NuxtLink to="/login" 
                class="rounded-full flex items-center justify-center py-2 w-24 gradient-btn col-span-2 mt-2 ml-auto">
                    Sign in
                </NuxtLink>

            </div>

            <button @click="handleClose" class="absolute right-4 top-4 w-6 h-6 z-50">
                <font-awesome-icon icon="fa-solid fa-times" class="text-red-600 text-xl"/>
            </button>

        </div>


    </div>

</template>
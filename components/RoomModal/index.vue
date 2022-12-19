<script setup>

const emits = defineEmits(['onClose'])

defineProps({
    room: {
        type: Object
    },
    address: {
        type: String
    }
})

const handleClose = () => {
    emits('onClose')
}


</script>

<template>
  
    <div class="fixed inset-0 bg-black bg-opacity-40 grid place-items-center z-40 overflow-y-scroll font-montserrat py-20">

        <div class="w-[70vw] h-max bg-white rounded-lg relative shadow-md overflow-hidden flex flex-col gap-4 px-8 py-10">

            <h4 class="text-xl font-bold"> 
                {{ room.room_type }} - {{ room.room_name }}
            </h4>    

            <p class="text-sm text-gray-600">
                {{ address.street_address }}, {{ address.country }}
            </p>

            <GalleryModalSwiper :images="room.gallery_images"/>
        </div>

        <button @click="handleClose" class="fixed left-10 top-10 w-6 h-6 z-50">
            <font-awesome-icon icon="fa-solid fa-times" class="text-white text-3xl"/>
        </button>

    </div>

</template>
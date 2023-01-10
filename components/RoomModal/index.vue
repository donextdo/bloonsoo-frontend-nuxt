<script setup>

const emits = defineEmits(['onClose'])

const props = defineProps({
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

const handleClick = () => {
    useRouter().push({path: '/coming_soon'})
}

</script>

<template>
  
    <div class="fixed inset-0 bg-black bg-opacity-40 grid place-items-center z-40 overflow-y-scroll font-montserrat py-20">

        <div class="w-[70vw] h-max bg-white rounded-lg relative shadow-md overflow-hidden flex flex-col gap-4 px-8 py-10">

            <h4 class="text-xl font-bold"> 
                {{ room.room_type }} - {{ room.room_name }}
            </h4>    

            <p class="text-sm font-medium text-gray-600">
                {{ address.street_address }}, {{ address.country }}
            </p>

            <GalleryModalSwiper :images="room.gallery_images"/>

            <h4 class="text-base font-semibold mt-4">
                Room Size : {{ room.room_size }} 
            </h4>

            <p class="text-base">
                Comfy beds, 8.8 — Based on 14 reviews 
            </p>

            <p class="text-base">
                This double room has air conditioning, tea/coffee maker and electric kettle. 
            </p>

            <div class="flex flex-col gap-4 mt-6">
                <h4 class="text-base font-semibold">
                    In your private bathroom 
                </h4>

                <div class="grid grid-cols-4 text-gray-500">

                    <div class="flex items-center gap-2">
                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl"/>
                        <span class="text-sm font-semibold">
                            Towels
                        </span>
                    </div>

                    <div class="flex items-center gap-2">
                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl"/>
                        <span class="text-sm font-semibold">
                            Toilet Papers
                        </span>
                    </div>

                </div>
            </div>

            <div class="flex flex-col gap-4 mt-6">
                <h4 class="text-base font-semibold">
                    Room Facilities 
                </h4>

                <div class="grid grid-cols-4 gap-4 text-gray-500">

                    <div v-for="(facility, index) in room.facilities" :key="index" 
                    class="flex items-center gap-2">
                        <font-awesome-icon icon="fa-solid fa-check" class="text-xl"/>
                        <span class="text-sm font-semibold">
                            {{ facility }}
                        </span>
                    </div>

                </div>
            </div>

            <button @click="handleClick" class="w-4/5 mx-auto mt-6 py-4 bg-blue-700 text-white font-semibold text-base rounded-lg hover:bg-blue-900">
                Continue Booking
            </button>

        </div>

        <button @click="handleClose" class="fixed left-10 top-10 w-6 h-6 z-50">
            <font-awesome-icon icon="fa-solid fa-times" class="text-white text-3xl"/>
        </button>

    </div>

</template>
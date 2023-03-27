<script setup>
defineProps({
    headers: {
        type: Array
    },
    bookings: {
        type: Boolean,
        default: false
    },
    total: {
        type: String,
        default: 'LKR 000000'
    }
})

const emits = defineEmits(['onResAllClick'])

const handleResAllClick = () => {
    emits('onResAllClick')
}

</script>

<template>
    
    <div class="">

        <div >

          <div 
            :class="bookings && 'bg-green-700 shadow-md w-full px-5  rounded-lg'"
            class="w-full col-span-2 px-6 h-24 flex items-center relative">
                <div v-if="bookings" class="w-2 bg-gray-100 h-24 absolute top-0 bottom-0 -left-2"></div>

                <h3 v-if="!bookings">
                    
                </h3>

                <div v-if="bookings" class="flex flex-col items-center gap-3 mx-auto">
                    <h3 class="text-sm text-white">
                        TOTAL: {{ total }}
                    </h3>

                    <button
                    @click="handleResAllClick"
                    class="px-6 py-1 gradient-btn rounded-full">
                        Reserve All
                    </button>
                </div>
            </div>

        </div>
    </div>

</template>
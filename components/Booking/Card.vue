<script setup>

import { BookingStatus, BookingStatusColor } from '../../utils/constants/bookingConstants'

const props = defineProps({
    booking: {
        type: Object
    }
})

const getColor = (status) => {
    if(status == 0) {
        return 'bg-blue-500'
    }
    else if(status == 1) {
        return 'bg-green-500'
    }
    else {
        return 'bg-red-300'
    }
}

const expand = ref(false)

const toggleExpand = () => {
    expand.value = !expand.value
}

</script>


<template>
    
    <div 
    :class="expand ? 'h-max' : 'h-[5.5rem]'"
    class="w-full px-4 py-6 pr-16 flex flex-col gap-8 bg-white rounded-md shadow-md overflow-hidden relative transition-all duration-300">

        <div class="grid grid-cols-3 pb-5 border-b border-gray-400">

            <div class="flex flex-col">
                <h3 class="text-lg font-bold"> 
                    {{ booking.hotel_id.property_name }}
                </h3>    

                <p class="text-sm font-medium text-gray-600">
                    {{ booking.hotel_id.property_address.street_address }}, {{ booking.hotel_id.property_address.country }}
                </p>    

            </div>

            <span 
                :class="getColor(booking?.status)"
                class="text-xs h-max font-medium w-max text-blask tracking-wider py-[2px] px-3 rounded-md">
                    {{ BookingStatus[booking?.status] }}
            </span>
            
            <h3 class="text-lg font-bold ml-auto"> 
                Total Price: {{ booking.total }}
            </h3>

        </div>

        <section v-for="(room, index) in booking.booked_rooms" :key="index" class="flex flex-col gap-6">
                <div class="flex flex-col pb-5 gap-4 border-b border-gray-400">

                <h4 class="text-base font-semibold text-gray-900">
                    Total length of stay: 
                    <span class="font-medium"> 
                        {{ `${room.nights} nights` }} {{ `${room.adults} adults` }} {{ room.children > 0 ? `${room.children} children` : '' }}
                    </span> 
                </h4>

                <div class="w-2/5 grid grid-cols-2 gap-4 text-sm text-gray-900">
                    <div class="flex flex-col gap-2">
                        <span class="font-medium">
                            Check In
                        </span>
                        <span class="font-semibold">
                            {{ new Date(room.check_in).toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" })}}
                        </span>
                    </div>

                    <div class="flex flex-col gap-2">
                        <span class="font-medium">
                            Check Out
                        </span>
                        <span class="font-semibold">
                            {{ new Date(room.check_out).toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" }) }}
                        </span>
                    </div>
                </div>

                </div>

                <div class="flex flex-col pb-5 gap-2 border-b border-gray-400">

                    <h4 class="text-base font-semibold">
                        {{ room.rooms }} x {{ room.room_type }} {{ room.room_name }} 
                    </h4>

                </div>

                <div class="flex items-center justify-between pb-5 gap-2 border-b border-gray-400">
                    <h3 class="text-lg font-bold">
                        Price
                    </h3>

                    <h3 class="text-lg font-bold">
                        {{ room.total }}
                    </h3>
                </div>

        </section>

        <button 
        @click="toggleExpand"
        class="absolute top-8 right-6">
            <font-awesome-icon v-if="!expand" icon="fa-solid fa-chevron-down" class="text-lg text-blue-700" />
            <font-awesome-icon v-if="expand" icon="fa-solid fa-chevron-up" class="text-lg text-blue-700" />
        </button>

    </div>

</template>
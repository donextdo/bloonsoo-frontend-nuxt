<script setup>
import { storeToRefs } from "pinia"
import { useBookingStore } from "~~/stores/bookingStore"

const bookingStore = useBookingStore()

const { hotel, bookings } = storeToRefs(bookingStore)

const router = useRouter()
const route = useRoute()

const goBack = () => {
    router.replace({ path: route.fullPath+'#rooms-area'})
    router.go(-1)

    setTimeout(() => {
        let element = document.getElementById("rooms-area")
        console.log(element)
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth"
        })
    }, 3000)
}

</script>

<template>
    
    <div class="shadow-md rounded-lg bg-white w-full px-5 py-8">

        <h4 class="font-semibold mb-8 text-base">Your booking details</h4>

        <div 
        v-for="(booking, index) in bookings" :key="index"
        class="w-full">
            <div class="grid grid-cols-2 gap-4 mb-5">

                <div class="border-r border-gray-400 flex flex-col gap-3 items-start text-sm pr-2">
                    <p>Check-in</p>
                    <p class="font-semibold">
                        {{ booking.checkInDate.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" }) }}
                    </p>
                    <p>{{ hotel?.policies.check_in_form }} - {{ hotel?.policies.check_in_untill }}</p>
                </div>

                <div class="pl-2 flex flex-col items-start gap-3 text-sm">
                    <p>Check-out</p>
                    <p class="font-semibold">
                        {{ booking.checkOutDate.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" }) }}
                    </p>
                    <p>{{ hotel?.policies.check_out_form }} - {{ hotel?.policies.check_out_untill }}</p>
                </div>

                </div>

                <p class="font-semibold text-sm mb-5 pb-5 border-b border-gray-400">
                    Total length of stay: {{ `${booking.nights} nights` }} {{ `${booking.adults} adults` }} {{ booking.children > 0 ? `${booking.children} children` : '' }}
                </p>

                <div class="mb-5 pb-5 border-b border-gray-400">
                    <p class="font-semibold mb-3">You selected: </p>
                    <p class="text-gray-600 text-base">
                        {{ booking.rooms }} x {{ booking.roomType }} {{ booking.roomName }}
                    </p>
                </div>
        </div>

        <button @click="goBack" class="font-semibold text-base text-blue-600">Change your selection</button>

    </div>

</template>
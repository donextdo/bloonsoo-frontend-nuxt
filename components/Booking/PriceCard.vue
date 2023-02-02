<script setup>
import { storeToRefs } from "pinia"
import { useBookingStore } from "~~/stores/bookingStore"

const bookingStore = useBookingStore()

const { totalPrice } = storeToRefs(bookingStore)

</script>

<template>
    
    <div class="shadow-md rounded-lg bg-white w-full px-5 py-8">

        <div class="grid grid-cols-2 gap-2 border-b-2 border-gray-200 pb-6 mb-5">
            <div>
                <p class="font-semibold text-lg text-gray-700">Price</p>
                <!-- <p class="text-gray-500 text-sm">( your currency )</p> -->
            </div>
            <div>
                <p class="font-semibold text-lg text-gray-700 float-right">{{ totalPrice }}</p>
            </div>
        </div>

        <div class="border-b-2 border-gray-200 pb-6 mb-5">
            <div class="flex items-center justify-between">
                <div>
                    <p class="font-medium text-base">Property's Currency</p>
                        
                </div>

                <div>
                    <p class="font-medium text-base">{{ totalPrice }}</p>
                </div>

            </div>

            <!-- <p class="text-gray-500 text-sm">in USS ( for 2 nights & all guests ) </p> -->

        </div>

        <p class="text-gray-500 mb-4 text-base">*This price is converted to show you the approximate cost in LKR. You'll pay in USS or LKR. The exchange rate might change before you pay. </p>

        <p class="text-gray-500 text-base">Keep in mind that your card issuer may charge you a foreign transaction fee. </p>
    
    </div>

</template>
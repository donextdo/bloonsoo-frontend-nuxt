<script setup>

    defineProps({
        final: {
            type: Boolean,
            default: false
        }
    })

</script>

<template>
    
    <div class="w-full grid grid-cols-3 gap-2">
        <div class="booking-tab">
            <span class="span-point">
                1
            </span>

            <span class="text-base font-semibold">
                Booking Details
            </span>
        </div>

        <div class="booking-tab">
            <span class="span-point">
                2
            </span>

            <span class="text-base font-semibold">
                Your Details
            </span>
        </div>

        <div :class="final ? 'border-blue-500' : 'border-gray-200'" class="booking-tab">
            <span class="span-point">
                3
            </span>

            <span class="text-base font-semibold">
                Final Setup
            </span>
        </div>
    </div>

</template>
<script setup>


</script>

<template>
    
    <div class="shadow-md rounded-lg bg-white w-full px-5 py-8">

        <h4 class="font-semibold mb-8 text-base">Your booking details</h4>

        <div class="grid grid-cols-2 gap-4 mb-5">

            <div class="border-r-2 border-gray-200 flex flex-col gap-3 items-start text-sm pr-2">
                <p>Check-in</p>
                <p class="font-semibold">Mon, Dec 5, 2022</p>
                <p>2:00 PM — 11:30 PM </p>
            </div>

            <div class="pl-2 flex flex-col items-start gap-3 text-sm">
                <p>Check-out</p>
                <p class="font-semibold">Mon, Dec 5, 2022</p>
                <p>2:00 PM — 11:30 PM </p>
            </div>

        </div>

        <p class="font-semibold mb-5 pb-5 border-b-2 border-gray-200">Total length of stay: 1 night. 3 adults </p>

        <p class="font-semibold mb-3">You selected: </p>
        <p class="mb-5 text-gray-600 text-base">Standard Double City View with Early Check-in at 11 AM & Late Check-out at 3 PM (on Availability) </p>

        <NuxtLink to="#" class="font-semibold text-base text-blue-600">Change your selection</NuxtLink>

    </div>

</template>
<script setup>

defineProps({
    payload: {
        type: Array
    }
})

</script>


<template>
    
    <div class="w-full flex flex-col gap-3">

        <div class="w-full bg-blue-700 rounded-md gap-2 grid grid-cols-12 items-center text-white text-base font-semibold">

            <div class="w-full col-span-4 px-6 h-24 flex items-center">
                <h3>
                    Room Type
                </h3>
            </div>

            <div class="w-full col-span-1 px-6 h-24 flex items-center">
                <h3>
                    Sleeps
                </h3>
            </div>

            <div class="w-full col-span-2 px-6 h-24 flex items-center">
                <h3>
                    Price for one night
                </h3>
            </div>

            <div class="w-full col-span-2 px-6 h-24 flex items-center">
                <h3>
                    Your choices
                </h3>
            </div>

            <div class="w-full col-span-1 px-6 h-24 flex items-center">
                <h3>
                    Rooms
                </h3>
            </div>

            <div class="w-full col-span-2 px-6 h-24 flex items-center">
                <h3>
                    Actions
                </h3>
            </div>

        </div>

        <SharedRow v-for="dto in payload" :key="dto._id" :dto="dto"/>

    </div>

</template>
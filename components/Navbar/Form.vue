<script setup>
    const model = ref('')
    const cities = ref([
        'Galle', 'Colombo', 'Matara', 'Anuradhapura'
    ])

    const error = ref(false)

</script>

<template>
    <div class="relative mx-auto md:container px-20 -mt-14">
    
        <form class="relative w-full h-full border-4 rounded-lg px-8 py-4 bg-white border-blue-500 flex flex-col gap-4 md:px-24" action="">
            
            <!-- LOCATION  -->
            <div>

                <label class="font-montserrat text-sm font-bold text-slate-700" for="">Location</label>

                <div class="relative w-full mt-2">

                    <input type="text" class="w-full px-12 py-2 border border-slate-400 rounded-lg text-slate-700 text-sm font-semibold focus:border-blue-500 focus:border focus:outline-none" placeholder="Which city do you prefer?">

                    <font-awesome-icon icon="fa-solid fa-location-dot" class="absolute left-4 top-0 bottom-0 my-auto text-slate-700 text-2xl" />

                </div>

               <small v-show="error" class="text-red-900 font-semibold">Please provide a location</small>

            </div>

            <div class="flex flex-col lg:flex-row gap-4">

                <!-- CHECK IN DATE -->
                <div class="w-full">

                    <label class="font-montserrat text-sm font-bold text-slate-700" for="">Check in</label>
                    
                    <div class="relative w-full mt-2">

                        <input type="date" class="w-full px-12 py-2 border border-slate-400 rounded-lg text-slate-700 text-sm font-semibold focus:border-blue-500 focus:border focus:outline-none" placeholder="Add dates">

                        <font-awesome-icon icon="fa-solid fa-calendar" class="absolute left-4 top-0 bottom-0 my-auto text-slate-700 text-xl" />

                    </div>

                    <small v-show="error" class="text-red-900 font-semibold">Please provide a location</small>

                </div>
                
                <!-- CHECK OUT DATE -->
                <div class="w-full">

                    <label class="font-montserrat text-sm font-bold text-slate-700" for="">Check out</label>

                    <div class="relative w-full mt-2">

                        <input type="date" class="w-full px-12 py-2 border border-slate-400 rounded-lg text-slate-700 font-semibold text-sm focus:border-blue-500 focus:border focus:outline-none appearance-none" placeholder="Add dates">

                        <font-awesome-icon icon="fa-solid fa-calendar" class="absolute left-4 top-0 bottom-0 my-auto text-slate-700 text-xl" />

                    </div>

                    <small v-show="error" class="text-red-900 font-semibold">Please provide a location</small>

                </div> 
            </div>
            
            <!-- GUESTS  -->
            <div>

                <label class="font-montserrat text-sm font-bold text-slate-700" for="">Guests</label>

                <div class="relative w-full mt-2">

                    <input type="text" class="w-full px-12 py-2 border border-slate-400 rounded-lg text-slate-700 font-semibold text-sm focus:border-blue-500 focus:border focus:outline-none" placeholder="Add Guests">

                    <font-awesome-icon icon="fa-solid fa-user" class="absolute left-4 top-0 bottom-0 my-auto text-slate-700 text-2xl" />

                </div>

                <small v-show="error" class="text-red-900 font-semibold">Please provide a location</small>

            </div>

            <button class="py-3 px-6 -mb-10 rounded-full text-sm text-black font-semibold bg-gradient-to-b from-darkyellow to-semidarkyellow hover:from-semidarkyellow hover:to-darkyellow">Search</button>

        </form>

    </div>  

</template>

<style scoped>

input[type="date"] {
    appearance: none;
    -webkit-appearance: none;
    position: relative;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}
</style>

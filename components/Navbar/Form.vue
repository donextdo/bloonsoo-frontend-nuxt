<script setup>
// import { SharedDateInput } from '~~/.nuxt/components';

    const model = ref('')
    const cities = ref([
        'Galle', 'Colombo', 'Matara', 'Anuradhapura'
    ])

    const router = useRouter()

    const city = ref(null)

    const error = ref(false)

    const checkIn = ref('')
    const checkOut = ref('')
    const guestPanel = ref(false)
    const adults = ref(2)
    const children = ref(0)
    const rooms = ref(1)
    const setGuests = ref(false)

    // onMounted(() => {
    //     const today = new Date()
    //     const month = String(today.getMonth() + 1).padStart(2, '0')
    //     const day = String(today.getDate()).padStart(2, '0')
    //     const tomorrow = String(today.getDate() + 1).padStart(2, '0')
    //     const year = today.getFullYear()

    //     checkIn.value = `${year}-${month}-${day}`
    //     checkOut.value = `${year}-${month}-${tomorrow}`
    // })

    const handleGuestClick = () => {
        guestPanel.value = !guestPanel.value
        setGuests.value = true
    }

    const handleIncrease = (e) => {
        if(e.target.name == 'adults') {
            adults.value++
        }
        else if(e.target.name == 'children') {
            children.value++
        }
        else {
            rooms.value++
        }
    }

    const handleDecrease = (e) => {
        if(e.target.name == 'adults') {
            adults.value > 1 && adults.value--
        }
        else if(e.target.name == 'children') {
            children.value > 0 && children.value--
        }
        else {
            rooms.value > 1 && rooms.value--
        }
    }

    const handleClick = () => {
        router.push(`/search?query=${city.value}`)
    }

</script>

<template>
    <div class="relative mx-auto md:container px-10 md:px-20 -mt-14 z-20">
    
        <form class="relative w-full h-full border-4 rounded-lg px-8 py-4 bg-white border-blue-500 flex flex-col gap-4 md:px-24" action="">
            
            <!-- LOCATION  -->
            <div>

                <label class="font-montserrat text-sm font-bold text-slate-700" for="">Location</label>

                <div class="relative w-full mt-2">

                    <input
                    v-model="city"
                    type="text" class="w-full px-12 py-2 border border-slate-400 rounded-lg text-slate-700 text-sm font-semibold focus:border-blue-500 focus:border focus:outline-none" placeholder="Which city do you prefer?">

                    <font-awesome-icon icon="fa-solid fa-location-dot" class="absolute left-4 top-0 bottom-0 my-auto text-slate-700 text-2xl" />

                </div>

               <small v-show="error" class="text-red-900 font-semibold">Please provide a location</small>

            </div>

            <div class="grid gird-rows-2 lg:grid-cols-2 gap-4">

                <!-- CHECK IN DATE -->
                <!-- <div class="w-full">

                    <label class="font-montserrat text-sm font-bold text-slate-700" for="">Check in</label>
                    
                    <div class="relative w-full mt-2">

                        <input type="date" class="w-full px-12 py-2 border border-slate-400 rounded-lg text-slate-700 text-sm font-semibold focus:border-blue-500 focus:border focus:outline-none" placeholder="Add dates">

                        <font-awesome-icon icon="fa-solid fa-calendar" class="absolute left-4 top-0 bottom-0 my-auto text-slate-700 text-xl" />

                    </div>

                    <small v-show="error" class="text-red-900 font-semibold">Please provide a location</small>

                </div> -->
                
                <!-- CHECK OUT DATE -->
                <!-- <div class="w-full">

                    <label class="font-montserrat text-sm font-bold text-slate-700" for="">Check out</label>

                    <div class="relative w-full mt-2">

                        <input type="date" class="w-full px-12 py-2 border border-slate-400 rounded-lg text-slate-700 font-semibold text-sm focus:border-blue-500 focus:border focus:outline-none appearance-none" placeholder="Add dates">

                        <font-awesome-icon icon="fa-solid fa-calendar" class="absolute left-4 top-0 bottom-0 my-auto text-slate-700 text-xl" />

                    </div>

                    <small v-show="error" class="text-red-900 font-semibold">Please provide a location</small>

                </div>  -->
                <SharedDateInput
                    label="Check In"
                    v-model="checkIn"
                />
                <SharedDateInput
                    label="Check Out"
                    v-model="checkOut"
                />
            </div>
            
            <!-- GUESTS  -->
            <!-- <div>

                <label class="font-montserrat text-sm font-bold text-slate-700" for="">Guests</label>

                <div class="relative w-full mt-2">

                    <input type="text" class="w-full px-12 py-2 border border-slate-400 rounded-lg text-slate-700 font-semibold text-sm focus:border-blue-500 focus:border focus:outline-none" placeholder="Add Guests">

                    <font-awesome-icon icon="fa-solid fa-user" class="absolute left-4 top-0 bottom-0 my-auto text-slate-700 text-2xl" />

                </div>

                <small v-show="error" class="text-red-900 font-semibold">Please provide a location</small>

            </div> -->

            <div class="flex flex-col gap-2 items-start w-full relative">
                <label class="text-gray-600 text-sm font-bold" >Guests</label>

                <div class="w-full relative h-max">
                    <button
                    @click="handleGuestClick"
                    type="button"
                    class="w-full px-12 py-2 border border-slate-400 rounded-lg text-slate-700 font-semibold text-sm focus:border-blue-500 focus:border focus:outline-none flex items-center justify-start"
                    >
                        {{setGuests ? `${adults} Adults &bullet; ${children} Children &bullet; ${rooms} Room` : 'Add Guests'}}  
                    </button>

                    <font-awesome-icon icon="fa-solid fa-user" class="absolute left-4 top-0 bottom-0 my-auto text-slate-700 text-lg" />

                </div>

                <div 
                :class="guestPanel ? 'scale-y-100' : 'scale-y-0'" 
                class="w-1/3 p-4 flex flex-col gap-4 absolute -top-24 left-0 right-0 z-10 bg-white shadow-md mx-auto transition-all overflow-hidden border border-slate-400 rounded-md origin-center">

                    <h4 class="text-sm font-bold text-gray-600">
                        Guests
                    </h4>

                    <div class="flex items-center justify-between text-sm font-semibold text-gray-500">
                        <span>
                            Adults
                        </span>

                        <div class="flex items-center gap-4">
                            <button 
                            @click.prevent="handleDecrease"
                            name="adults"
                            class="control-btn">
                                -
                            </button>

                            <span class="w-4 text-center">{{ adults }}</span>

                            <button 
                            @click.prevent="handleIncrease"
                            name="adults"
                            class="control-btn">
                                +
                            </button>
                        </div>
                    </div>

                    <div class="flex items-center justify-between text-sm font-semibold text-gray-500">
                        <span>
                            Children
                        </span>

                        <div class="flex items-center gap-4">
                            <button 
                            @click.prevent="handleDecrease"
                            name="children"
                            class="control-btn">
                                -
                            </button>

                            <span class="w-4 text-center">{{ children }}</span>

                            <button 
                            @click.prevent="handleIncrease"
                            name="children"
                            class="control-btn">
                                +
                            </button>
                        </div>
                    </div>

                    <div class="flex items-center justify-between text-sm font-semibold text-gray-500">
                        <span>
                            Rooms
                        </span>

                        <div class="flex items-center gap-4">
                            <button 
                            @click.prevent="handleDecrease"
                            name="rooms"
                            class="control-btn">
                                -
                            </button>

                            <span class="w-4 text-center">{{ rooms }}</span>

                            <button 
                            @click.prevent="handleIncrease"
                            name="rooms"
                            class="control-btn">
                                +
                            </button>
                        </div>
                    </div>

                    <button 
                    @click.prevent="handleGuestClick"
                    class="px-6 py-2 gradient-btn w-3/4 rounded-md self-center">
                        Done
                    </button>

                </div>

            </div>

            <button 
            :disabled="!city"
            @click.prevent="handleClick" class="py-3 px-6 -mb-10 rounded-full text-sm text-black font-semibold bg-gradient-to-b from-darkyellow to-semidarkyellow hover:from-semidarkyellow hover:to-darkyellow">Search</button>

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

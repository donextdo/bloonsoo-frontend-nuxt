<script setup>

const showCalendar = ref(false)
const guestPanel = ref(false)
const adults = ref(2)
const children = ref(0)
const rooms = ref(1)


const handleGuestClick = () => {
    guestPanel.value = !guestPanel.value
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

const handleCalendar = () => {
    showCalendar.value = !showCalendar.value
}

</script>

<template>
    
    <div class="relative mx-auto md:container px-20 -mt-8 z-20 font-montserrat">

        <div 
        class="relative w-full h-16 border-2 rounded-lg bg-white 
        border-blue-500 grid grid-cols-4">

            <div class="relative w-full h-full">

                <input 
                    type="text" 
                    class="w-full h-full pl-12 pr-6 py-2 text-slate-700 text-sm font-semibold focus:outline-none rounded-l-lg border-r-2 border-blue-500" 
                    placeholder="Location" value="Location">

                <font-awesome-icon icon="fa-solid fa-location-dot" class="absolute left-4 top-0 bottom-0 my-auto text-slate-700 text-xl" />

            </div>

            <div class="w-full h-full relative">
                <button 
                @click="handleCalendar"
                class="px-4 py-2 flex items-center gap-4 w-full h-full border-r-2 border-blue-500">
                
                    <font-awesome-icon icon="fa-solid fa-calendar" class="text-slate-700 text-lg" />

                    <span class="font-semibold text-sm text-slate-700">
                        Check In - Check Out
                    </span>

                </button>

                <div 
                :class="showCalendar ? 'scale-y-100' : 'scale-y-0'"
                class="px-4 py-8 w-[40rem] grid grid-cols-7 gap-4
                absolute top-16 left-0 z-10 
                bg-white shadow-lg transition-all duration-300 
                overflow-hidden border border-slate-400 rounded-md origin-top">
                
                    <SharedDateInput 
                        class="col-span-3"
                    />
                    <SharedDateInput 
                        class="col-span-3"
                    />

                    <button 
                    @click.prevent="handleCalendar"
                    class="px-4 py-2 gradient-btn rounded-md">
                        Done
                    </button>
                
                </div>
            </div>

            <div class="w-full h-full relative">
                <button 
                @click="handleGuestClick"
                class="px-4 py-2 flex items-center gap-4 w-full h-full">
                
                    <font-awesome-icon icon="fa-solid fa-user" class="text-slate-700 text-lg" />

                    <span class="font-semibold text-sm text-slate-700">
                        Guests 
                    </span>

                </button>

                <div 
                :class="guestPanel ? 'scale-y-100' : 'scale-y-0'" 
                class="p-4 flex flex-col gap-4 absolute top-16 left-0 right-0 z-10 bg-white shadow-lg transition-all duration-300 overflow-hidden border border-slate-400 rounded-md origin-top">

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
            class="gradient-btn w-full h-full rounded-0 rounded-r-lg">
                Search
            </button>




        </div>
    </div>

</template>
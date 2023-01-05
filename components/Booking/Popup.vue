<script setup>

const emits = defineEmits(['onClose', 'onSubmit'])

const props = defineProps({
    roomId: {
        type: String
    }
})

const checkIn = ref('')
const checkOut = ref('')
const guestPanel = ref(false)
const adults = ref(2)
const children = ref(0)
const rooms = ref(1)
const setGuests = ref(false)

onMounted(() => {
    const today = new Date()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    const tomorrow = String(today.getDate() + 1).padStart(2, '0')
    const year = today.getFullYear()

    checkIn.value = `${year}-${month}-${day}`
    checkOut.value = `${year}-${month}-${tomorrow}`
})

const handleClose = () => {
    emits('onClose')
}

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

const onSubmit = () => {
    const checkInDate = new Date(checkIn.value)
    const checkOutDate = new Date(checkOut.value)

    const nights = (checkOutDate - checkInDate) / 86400000

    const payload = {
        _id: props.roomId,
        nights,
        adults: adults.value,
        children: children.value,
        rooms: rooms.value
    }

    emits('onSubmit', payload)
}

</script>

<template>
  
    <div class="fixed inset-0 bg-black bg-opacity-40 grid place-items-center z-40 py-20">

        <div class="w-[60vw] h-max bg-white rounded-lg relative shadow-md overflow-visible flex flex-col gap-4 px-24 py-10">

            <div class="w-full grid grid-cols-2 gap-6">
                <SharedDateInput
                    label="Check In"
                    v-model="checkIn"
                />
                <SharedDateInput
                    label="Check Out"
                    v-model="checkOut"
                />

                <div class="flex flex-col gap-2 items-start col-span-2 relative">
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
                    class="w-1/2 p-4 flex flex-col gap-4 absolute -top-14 left-0 right-0 z-10 bg-white shadow-md mx-auto transition-all overflow-hidden border border-slate-400 rounded-md origin-center">

                        <h4 class="text-sm font-bold text-gray-600">
                            Guests
                        </h4>

                        <div class="flex items-center justify-between text-sm font-semibold text-gray-500">
                            <span>
                                Adults
                            </span>

                            <div class="flex items-center gap-4">
                                <button 
                                @click="handleDecrease"
                                name="adults"
                                class="control-btn">
                                    -
                                </button>

                                <span class="w-4 text-center">{{ adults }}</span>

                                <button 
                                @click="handleIncrease"
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
                                @click="handleDecrease"
                                name="children"
                                class="control-btn">
                                    -
                                </button>

                                <span class="w-4 text-center">{{ children }}</span>

                                <button 
                                @click="handleIncrease"
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
                                @click="handleDecrease"
                                name="rooms"
                                class="control-btn">
                                    -
                                </button>

                                <span class="w-4 text-center">{{ rooms }}</span>

                                <button 
                                @click="handleIncrease"
                                name="rooms"
                                class="control-btn">
                                    +
                                </button>
                            </div>
                        </div>

                        <button 
                        @click="handleGuestClick"
                        class="px-6 py-2 gradient-btn w-3/4 rounded-md self-center">
                            Done
                        </button>

                    </div>
                    

                    <!-- <small v-if="error" class="text-xs text-red-600">
                        {{ errorMessage }}
                    </small> -->

                </div>

                <button 
                @click="onSubmit"
                class="rounded-full py-3 gradient-btn col-span-2 mt-6">
                    Done
                </button>

            </div>

            <button @click="handleClose" class="absolute right-4 top-4 w-6 h-6 z-50">
                <font-awesome-icon icon="fa-solid fa-times" class="text-red-600 text-xl"/>
            </button>

        </div>


    </div>

</template>
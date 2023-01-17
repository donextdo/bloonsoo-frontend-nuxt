<script setup>

const emits = defineEmits(['onClose', 'onSubmit'])

const props = defineProps({
    propertyName: {
        type: String
    },
    propertyAddress: {
        type: Object
    },
    bookings: {
        type: Array
    },
    policies: {
        type: Object
    }
})

const handleClose = () => {
    emits('onClose')
}


const onSubmit = () => {
    emits('onSubmit')
}

const totalPrice = computed(() => {
    let total = 0
    let currency
    props.bookings.forEach(b => {
        const priceSplit = b.totalPrice.split(' ')

        currency = priceSplit[0]
        total = total + parseInt(priceSplit[1])
    })

    return `${currency} ${total}`
})

</script>

<template>
  
    <div class="fixed inset-0 bg-black bg-opacity-40 grid place-items-center z-40 py-20">

        <div class="w-[70vw] max-h-full bg-white rounded-lg relative shadow-md overflow-visible flex flex-col gap-6 px-8 py-10 overflow-y-scroll !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-gray-500">

            <div class="flex flex-col pb-5 gap-2 border-b border-gray-400">

                <h3 class="text-xl font-bold"> 
                    {{ propertyName }}
                </h3>    

                <p class="text-sm font-medium text-gray-600">
                    {{ propertyAddress.street_address }}, {{ propertyAddress.country }}
                </p>

                <div class="flex gap-1 w-max">
                    <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-xs"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-xs"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-xs"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-xs"/>
                    <font-awesome-icon icon="fa-regular fa-star" class="text-semidarkyellow text-xs"/>
                </div>

            </div>

            <section v-for="(book, index) in bookings" :key="index" class="flex flex-col gap-6">
                <div class="flex flex-col pb-5 gap-4 border-b border-gray-400">

                <h4 class="text-base font-semibold text-gray-900">
                    Total length of stay: 
                    <span class="font-medium"> 
                        {{ `${book.nights} nights` }} {{ `${book.adults} adults` }} {{ book.children > 0 ? `${book.children} children` : '' }}
                    </span> 
                </h4>

                <div class="w-2/5 grid grid-cols-2 gap-4 text-sm text-gray-900">
                    <div class="flex flex-col gap-2">
                        <span class="font-medium">
                            Check In
                        </span>
                        <span class="font-semibold">
                            {{ book.checkInDate.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" }) }}
                        </span>
                        <span class="font-medium">
                            {{ policies.check_in_form }} - {{ policies.check_in_untill }}
                        </span>
                    </div>

                    <div class="flex flex-col gap-2">
                        <span class="font-medium">
                            Check Out
                        </span>
                        <span class="font-semibold">
                            {{ book.checkOutDate.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" }) }}
                        </span>
                        <span class="font-medium">
                            {{ policies.check_out_form }} - {{ policies.check_out_untill }}
                        </span>
                    </div>
                </div>

                </div>

                <div class="flex flex-col pb-5 gap-2 border-b border-gray-400">

                    <h4 class="text-base font-semibold">
                        {{ book.rooms }} x {{ book.roomType }} {{ book.roomName }} 
                    </h4>
                    <!-- <h4 class="text-base font-semibold">
                        1 x Deluxe Lake View King Total cost to cancel 
                    </h4> -->

                </div>

                <div class="flex items-center justify-between pb-5 gap-2 border-b border-gray-400">
                    <h3 class="text-lg font-bold">
                        Price
                    </h3>

                    <h3 class="text-lg font-bold">
                        {{ book.totalPrice }}
                    </h3>
                </div>

            </section>

            <div class="flex flex-col gap-2">

                <div class="flex items-center justify-between">
                    <h3 class="text-lg font-bold">
                        Total Price
                    </h3>

                    <h3 class="text-lg font-bold">
                        {{ totalPrice }}
                    </h3>
                </div>

                <p class="text-sm">
                    TAX (2.50%) not included VAT (15%) not included Property service charge (10%) not included City tax (1.01%)
                </p>

                <p class="text-sm">
                    * This price is converted to show you the approximate cost in LKR. You'll pay in US$ or LKR. The exchange rate might change before you pay.
                </p> 

                <p class="text-sm">
                    Keep in mind that your card issuer may charge you a foreign transaction fee.
                </p>

                <button 
                @click="onSubmit"
                class="mt-4 w-2/3 mx-auto py-3 btn-accent">
                    Continue Booking
                </button>

                </div>

            <button @click="handleClose" class="absolute right-4 top-4 w-6 h-6 z-50">
                <font-awesome-icon icon="fa-solid fa-times" class="text-red-600 text-xl"/>
            </button>

        </div>


    </div>

</template>
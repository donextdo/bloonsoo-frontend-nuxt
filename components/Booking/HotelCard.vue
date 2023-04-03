<script setup>

const props = defineProps({
    propertyName: {
        type: String
    },
    coverImg: {
        type: String
    },
    address: {
        type: Object
    }
})

</script>

<template>
    
    <div class="bg-white shadow-md w-[90vw] md:w-full grid md:grid-cols-5">

        <img :src="coverImg" 
            class="w-full aspect-square object-cover col-span-3 md:col-span-2"
            alt=""
        >

        <div class="w-full md:col-span-3 h-full p-6 flex flex-col">

            <div class="md:flex items-start justify-between mb-5">

                <div class="">
                    <h3 class="text-lg font-bold text-blue-700"> 
                        {{ propertyName }} 
                    </h3>    

                    <p class="text-sm font-medium text-gray-600">
                        {{ address?.street_address }}, {{ address?.country }}
                    </p>
                </div>

                <div class="flex gap-1 w-max">
                    <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-sm"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-sm"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-sm"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-sm"/>
                    <font-awesome-icon icon="fa-regular fa-star" class="text-semidarkyellow text-sm"/>
                </div>

            </div>

            <h5 class="text-[#048919] font-semibold text-sm mb-5">
                Excellet Location - 9.0
            </h5>

            <p class="text-sm text-gray-600 md:w-4/5 mb-5 md:mb-0">
                Deluxe Double Room with Free Late check out till 4PM (STA), Free High Tea from Thursday to Sunday, 15% Off on F&B, 10% Off on Laundry & Free access to the Infinity Pool
            </p>

            <div class="w-full flex items-center justify-between mt-auto mb-6">
                <HotelFacility class="!p-0 !w-max" icon="kitchen" label="Kitchen"/>
                <HotelFacility class="!p-0 !w-max" icon="ac" label="Air Conditioner"/>
                <HotelFacility class="!p-0 !w-max" icon="washer" label="Washer"/>
            </div>

        </div>
    </div>

</template>
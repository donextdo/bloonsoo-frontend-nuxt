<script setup>
const props = defineProps({
    dto: {
        type: Object
    }
})


const emits = defineEmits(['onClick'])

const handleClick = () => {
    emits('onClick', 
        props.dto._id
    )
}

</script>

<template>
    
    <div class="bg-white shadow-md w-full px-5 pr-10 mb-10 ">

        <div class="py-2">


                    <h3 class="text-base font-bold text-blue-700 py-2" @click="handleClick"> 
                        {{ dto.room_type }}
                    </h3>    

                    <p class="text-sm font-medium text-gray-600 py-2" @click="handleClick">
                        {{ dto.room_name }}
                    </p>

                    <div v-for="(bed, index) in dto.beds" :key="index" class="flex gap-2 items-center">
                        <SharedLogosBed />
                        <span class="text-sm font-semibold text-gray-800 py-2 pl-10">
                            {{ bed.no_of_beds }}  {{ bed.bed_type }}
                        </span>
                    </div>

                    <div class="text-sm text-gray-800">
                        <p class="text-justify py-2">
                            {{ dto.room_size }}
                            {{ dto.facilities.join(" ")}}
                        </p>
                    </div>

                    <div class="flex gap-2 items-center">
                        <font-awesome-icon v-for="n in dto.guests" :key="n" icon="fa-solid fa-user" class="text-sm text-gray-800"/>
                        <p class="text-sm text-justify py-2 font-semibold pl-10">
                            Person can Sleep
                        </p>
                    </div>

                    <div class="flex gap-2 items-center">
                        <h4 class="text-sm text-gray-800 font-semibold text-center">
                            {{ dto.price_for_one_night }}
                        </h4>
                        <p class="text-sm text-justify py-2 font-semibold pl-1">
                            Per Night
                        </p>
                    </div>

                    <div class="flex items-center gap-3">

                        <font-awesome-icon icon="fa-solid fa-coffee" class="text-gray-800 text-sm"/>

                        <h4 class="text-sm text-gray-800 font-semibold py-2 pl-9">

                            {{ dto.is_breakfast_available ? `Breakfast Available ${dto.breakfast_price}` : 'Breakfast not available' }}
                        </h4>

                    </div>

                    <div class="flex items-center gap-3">

                        <font-awesome-icon icon="fa-solid fa-check" class="text-green-500 text-sm"/>

                        <h4 class="text-xs text-green-500 font-semibold py-2 pl-10">
                            Free cancellation within 24 hours
                        </h4>

                    </div>

                    <div class="w-full p-4 h-full flex items-center flex-row gap-10 justify-center">
                        <slot name="rooms"></slot>
                        <slot name="actions"></slot>

                    </div>



        </div>
    </div>

</template>
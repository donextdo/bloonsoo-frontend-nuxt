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
    
    <div class="bg-white shadow-md w-full px-5 my-5 ">

        <div class="py-2">


                    <h3 class="text-base font-bold text-blue-700 py-2" @click="handleClick"> 
                        {{ dto.room_type }}
                    </h3>    

                    <p class="text-sm font-medium text-gray-600 py-2" @click="handleClick">
                        {{ dto.room_name }}
                    </p>

                    <div class="grid grid-cols-4 gap-4">
                        <div class="col-span-1 mx-auto my-auto">
                            <SharedLogosBed />
                        </div>

                        <div class="col-span-3">
                            <div v-for="(bed, index) in dto.beds" :key="index">
                       
                                <span class="text-sm font-semibold text-gray-800">
                                    {{ bed.no_of_beds }}  {{ bed.bed_type }}
                                </span>
                            </div>
                        </div>

                    </div>



                    <div class="text-sm text-gray-800">
                        <p class="text-justify py-2">
                            {{ dto.room_size }}
                            {{ dto.facilities.join(" ")}}
                        </p>
                    </div>

                    <div class="grid grid-cols-8 gap-4">

                        <div class="col-span-2 ">

                            <div class="grid grid-rows-4 space-y-6 mx-auto my-auto">

                                <div class="flex flex-row ">
                                    <font-awesome-icon v-for="n in dto.guests" :key="n" icon="fa-solid fa-user" class="text-sm text-gray-800 mx-auto my-auto"/>
                                </div>


                                <h4 class="text-sm text-gray-800 font-semibold text-center ">
                                    {{ dto.price_for_one_night }}
                                </h4>

                                <font-awesome-icon icon="fa-solid fa-coffee" class="text-gray-800 text-sm mx-auto my-auto"/>

                                <font-awesome-icon icon="fa-solid fa-check" class="text-green-500 text-sm mx-auto my-auto "/>

                            </div>


                            
                        </div>

                        <div class="col-span-5">
                            <div class="grid grid-rows-4 space-y-4">
                                <p class="text-sm text-justify  font-semibold py-3">
                                    Person can Sleep
                                </p>

                                <p class="text-sm text-justify font-semibold ">
                                    Per Night
                                </p>

                                <h4 class="text-sm text-gray-800 font-semibold">
                                    {{ dto.is_breakfast_available ? `Breakfast Available ${dto.breakfast_price}` : 'Breakfast not available' }}
                                </h4>

                                <h4 class="text-xs text-green-500 font-semibold">
                                    Free cancellation within 24 hours
                                    
                                </h4>
                            </div>

                        </div>

                    </div>

                    <!-- <div class="flex gap-2 items-center">


                    </div> -->

                    <div class="w-full p-4 h-full flex items-center flex-row gap-10 justify-center">
                        <!-- <slot name="rooms"></slot> -->
                        <slot name="actions"></slot>

                    </div>



        </div>
    </div>

</template>
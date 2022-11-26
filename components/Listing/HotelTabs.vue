<script setup>

defineProps({
    active_1: {
        type: Boolean,
        default: false
    },
    active_2: {
        type: Boolean,
        default: false
    },
    active_3: {
        type: Boolean,
        default: false
    },
    active_4: {
        type: Boolean,
        default: false
    },
    active_5: {
        type: Boolean,
        default: false
    },
    active_6: {
        type: Boolean,
        default: false
    }
})

</script>


<template>
    
    <div class="md:container mx-auto flex gap-2 items-center justify-center mb-4">

        <button 
        :class="active_1 ? 'border-blue-500' : 'border-gray-200'" 
        class="w-44 h-16 border-b-8 flex justify-center items-start pt-2 hover:border-blue-500">

            <span class="text-gray-500 text-sm font-semibold text-center">Basic Information</span>

        </button>

        <button
        :class="active_2 ? 'border-blue-500' : 'border-gray-200'" 
        class="w-44 h-16 border-b-8 flex justify-center items-start pt-2 hover:border-blue-500">

            <span class="text-gray-500 text-sm font-semibold text-center"> Layout and <br> pricing</span>

        </button>

        <button 
        :class="active_3 ? 'border-blue-500' : 'border-gray-200'" 
        class="w-44 h-16 border-b-8 flex justify-center items-start pt-2 hover:border-blue-500">

            <span class="text-gray-500 text-sm font-semibold text-center">Facilities and <br> Amenities</span>

        </button>

        <button 
        :class="active_4 ? 'border-blue-500' : 'border-gray-200'" 
        class="w-44 h-16 border-b-8 flex justify-center items-start pt-2 hover:border-blue-500">

            <span class="text-gray-500 text-sm font-semibold text-center">Images</span>

        </button>

        <button 
        :class="active_5 ? 'border-blue-500' : 'border-gray-200'" 
        class="w-44 h-16 border-b-8 flex justify-center items-start pt-2 hover:border-blue-500">

            <span class="text-gray-500 text-sm font-semibold text-center">Policies</span>

        </button>

        <button 
        :class="active_6 ? 'border-blue-500' : 'border-gray-200'" 
        class="w-44 h-16 border-b-8 flex justify-center items-start pt-2 hover:border-blue-500">

            <span class="text-gray-500 text-sm font-semibold text-center">Payments</span>
            
        </button>

    </div>

</template>
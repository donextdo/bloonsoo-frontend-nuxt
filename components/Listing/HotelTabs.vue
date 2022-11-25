<script setup>

defineProps({
    activeTab: String
})

</script>


<template>
    
    <div class="md:container mx-auto flex gap-2 items-center justify-center mb-6">

        <button 
        :class="activeTab == 1 ? 'border-blue-500' : 'border-gray-200'" 
        class="w-44 h-16 border-b-8 flex justify-center items-start pt-2 hover:border-blue-500">

            <span class="text-gray-500 text-sm font-semibold text-center">Basic Information</span>

        </button>

        <button
        :class="activeTab == 2 ? 'border-blue-500' : 'border-gray-200'" 
        class="w-44 h-16 border-b-8 flex justify-center items-start pt-2 hover:border-blue-500">

            <span class="text-gray-500 text-sm font-semibold text-center"> Layout and <br> pricing</span>

        </button>

        <button 
        :class="activeTab == 3 ? 'border-blue-500' : 'border-gray-200'" 
        class="w-44 h-16 border-b-8 flex justify-center items-start pt-2 hover:border-blue-500">

            <span class="text-gray-500 text-sm font-semibold text-center">Facilities and <br> Amenities</span>

        </button>

        <button 
        :class="activeTab == 4 ? 'border-blue-500' : 'border-gray-200'" 
        class="w-44 h-16 border-b-8 flex justify-center items-start pt-2 hover:border-blue-500">

            <span class="text-gray-500 text-sm font-semibold text-center">Images</span>

        </button>

        <button 
        :class="activeTab == 5 ? 'border-blue-500' : 'border-gray-200'" 
        class="w-44 h-16 border-b-8 flex justify-center items-start pt-2 hover:border-blue-500">

            <span class="text-gray-500 text-sm font-semibold text-center">Policies</span>

        </button>

        <button 
        :class="activeTab == 6 ? 'border-blue-500' : 'border-gray-200'" 
        class="w-44 h-16 border-b-8 flex justify-center items-start pt-2 hover:border-blue-500">

            <span class="text-gray-500 text-sm font-semibold text-center">Payments</span>
            
        </button>

    </div>

</template>
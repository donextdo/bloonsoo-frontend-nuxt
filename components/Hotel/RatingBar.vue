<script setup>

const props = defineProps({
    label: {
        type: String
    },
    rating: {
        type: String
    }
})

const RATINGS = {
    "0.0" : 0,
    "0.5" : 1,
    "1.0" : 2,
    "1.5" : 3,
    "2.0" : 4,
    "2.5" : 5,
    "3.0" : 6,
    "3.5" : 7,
    "4.0" : 8,
    "4.5" : 9,
    "5.0" : 10
}

const rate = ref()

onMounted(() => {
    rate.value = RATINGS[props.rating]
})



</script>


<template>
    
    <div class="w-full flex items-center justify-between py-2 text-sm font-semibold">

        <span>{{ label }}</span>

        <div class="flex items-center gap-4">

            <div class="grid grid-cols-10 w-32 rounded-sm bg-gray-300 h-1">

                <span v-show="(rate === 1)" class="bg-blue-600 h-1 col-span-1 rounded-md"></span>
                <span v-show="(rate === 2)" class="bg-blue-600 h-1 col-span-2 rounded-md"></span>
                <span v-show="(rate === 3)" class="bg-blue-600 h-1 col-span-3 rounded-md"></span>
                <span v-show="(rate === 4)" class="bg-blue-600 h-1 col-span-4 rounded-md"></span>
                <span v-show="(rate === 5)" class="bg-blue-600 h-1 col-span-5 rounded-md"></span>
                <span v-show="(rate === 6)" class="bg-blue-600 h-1 col-span-6 rounded-md"></span>
                <span v-show="(rate === 7)" class="bg-blue-600 h-1 col-span-7 rounded-md"></span>
                <span v-show="(rate === 8)" class="bg-blue-600 h-1 col-span-8 rounded-md"></span>
                <span v-show="(rate === 9)" class="bg-blue-600 h-1 col-span-9 rounded-md"></span>
                <span v-show="(rate === 10)" class="bg-blue-600 h-1 col-span-10 rounded-md"></span>

            </div>

            <span>{{ rating }}</span>
        </div>

    </div>

</template>
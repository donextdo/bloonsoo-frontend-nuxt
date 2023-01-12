<script setup>

defineProps({
    label: {
        type: String
    },
    icon: {
        type: String
    }
})

</script>


<template>
    
    <div class="text-gray-600 text-sm font-semibold w-full py-4 px-2 pl-6 flex items-center justify-start gap-3">

        <IconsKitchen v-if="icon === 'kitchen'" class="w-5 h-5"/>
        <IconsTelevision v-if="icon === 'television'" class="w-5 h-5" />
        <IconsCleaning v-if="icon === 'cleaning'" class="w-5 h-5" />
        <IconsAc v-if="icon === 'ac'" class="w-5 h-5" />
        <IconsWifi v-if="icon === 'wifi'" class="w-5 h-5"/>
        <IconsTelephone v-if="icon === 'telephone'" class="w-5 h-5"/>
        <IconsWasher v-if="icon === 'washer'" class="w-5 h-5"/>
        <IconsBalcony v-if="icon === 'balcony'" class="w-5 h-5"/>
        <IconsKingBed v-if="icon === 'kingbed'" class="w-5 h-5"/>
        <IconsDailyCleaning  v-if="icon === 'dailycleaning'" class="w-5 h-5" />
        <IconsFireExt v-if="icon === 'fireext'" class="w-5 h-5"/>
        <IconsDisinfections v-if="icon === 'disinfections'" class="w-5 h-5"/>
        <IconsSmoke v-if="icon === 'smoke'" class="w-5 h-5"/>
        <IconsSparkle v-if="icon === 'sparkle'" class="w-5 h-5" />

        <h4> 
            {{ label }}
        </h4>

    </div>

</template>
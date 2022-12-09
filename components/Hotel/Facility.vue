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
    
    <div class="text-gray-600 text-sm font-semibold w-full py-4 px-2 pl-6 flex items-center justify-start gap-4">

        <IconsKitchen v-if="icon === 'kitchen'"/>
        <IconsTelevision v-if="icon === 'television'" />
        <IconsCleaning v-if="icon === 'cleaning'" />
        <IconsAc v-if="icon === 'ac'" />
        <IconsWifi v-if="icon === 'wifi'"/>
        <IconsTelephone v-if="icon === 'telephone'"/>
        <IconsWasher v-if="icon === 'washer'"/>
        <IconsBalcony v-if="icon === 'balcony'"/>
        <IconsKingBed v-if="icon === 'kingbed'"/>
        <IconsDailyCleaning  v-if="icon === 'dailycleaning'" />
        <IconsFireExt v-if="icon === 'fireext'"/>
        <IconsDisinfections v-if="icon === 'disinfections'"/>
        <IconsSmoke v-if="icon === 'smoke'"/>

        <h4> 
            {{ label }}
        </h4>

    </div>

</template>
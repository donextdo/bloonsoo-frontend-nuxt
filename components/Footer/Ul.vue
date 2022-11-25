<script setup>

defineProps({
    data: Array
})

</script>


<template>
    
    <ul class="text-sm font-normal flex flex-col gap-3">
        <li v-for="link in data" :key="link.title">
            <NuxtLink :to="link.path">
                {{ link.title }}
            </NuxtLink> 
        </li>
    </ul>

</template>
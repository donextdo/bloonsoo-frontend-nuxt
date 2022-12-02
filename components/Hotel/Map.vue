<template>
    <div class="w-full h-36 rounded-lg relative overflow-hidden shadow-md">

    <img src="@/assets/map/map.jpg" class="w-full h-full object-cover" alt="">

    <div class="absolute inset-0 grid place-items-center">
        <nuxt-link to="#" 
            class="py-3 px-10 inline-block rounded-full 
            w-max text-sm text-black 
            font-bold bg-gradient-to-b
            from-darkyellow to-semidarkyellow
            hover:from-semidarkyellow
            hover:to-darkyellow">
            Show on map
        </nuxt-link>
    </div>

    </div>
</template>
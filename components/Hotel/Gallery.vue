<template>
    
    <div class="w-full h-70vh grid grid-cols-3 grid-rows-2 gap-4 relative">
        
        <div class="w-full h-full row-span-2 col-span-2">
            <img src="@/assets/hotel_images/img-2.png" alt="" class="w-full h-full object-cover">
        </div>

        <div class="w-full h-full col-span-1 row-span-1">
            <img src="@/assets/hotel_images/img-3.png" alt="" class="w-full h-full object-cover">

        </div>

        <div class="w-full h-full col-span-1 row-span-1 relative">
            <img src="@/assets/hotel_images/img-4.png" alt="" class="w-full h-full object-cover">

            <NuxtLink to="#" class="absolute inset-0 bg-black bg-opacity-30 grid place-items-center hover:bg-opacity-50">

                <h4 class="text-white font-extrabold text-base">
                    <span class="text-4xl">+</span><span class="text-6xl">20</span> 
                    photos
                </h4>

            </NuxtLink>
        </div>

    </div>

</template>
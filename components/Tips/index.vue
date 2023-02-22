<template>
    
    <section class="px-10 md:px-20 my-16 md:container md:mx-auto flex flex-col items-center font-montserrat">

        <h1 class="text-3xl w-full text-left font-semibold leading-10 mb-12">
            Hotel Reservation Guides & Tips
        </h1>

        <div class="w-full grid md:grid-cols-2 gap-x-4 gap-y-8 justify-items-center lg:grid-cols-3 md:gap-x-8 lg:gap-y-16">
            
             <TipsCard>
                <img src="@/assets/tips/image_1.jpg" loading="lazy" class="w-full h-full object-cover" alt="">
             </TipsCard>

             <TipsCard>
                <img src="@/assets/tips/image_2.jpg" loading="lazy" class="w-full h-full object-cover" alt="">
             </TipsCard>

             <TipsCard>
                <img src="@/assets/tips/image_3.jpg" loading="lazy" class="w-full h-full object-cover" alt="">
             </TipsCard>

        </div>

        <nuxt-link to="#" 
            class="py-4 px-10 inline-block rounded-full mt-12
            w-max text-sm text-black 
            font-bold bg-gradient-to-b 
            from-darkyellow to-semidarkyellow 
            hover:from-semidarkyellow 
            hover:to-darkyellow">
            View All Blogs
        </nuxt-link>

    </section>

</template>
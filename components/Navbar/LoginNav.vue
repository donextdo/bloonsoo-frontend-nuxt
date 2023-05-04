

<template>
    
    <nav class="py-8 bg-darkblue text-white font-montserrat">
        <div class="px-4 flex items-center justify-between relative md:px-2 md:container md:mx-auto">
            
            <NuxtLink to="/">
                <!-- <h1 class="text-3xl font-bold">
                    LOGO
                </h1> -->
                <img src="../../assets/logo.png" alt="" class="w-36 md:w-64 ">
            </NuxtLink>
            

        </div>

    </nav>

    <slot></slot>

</template>

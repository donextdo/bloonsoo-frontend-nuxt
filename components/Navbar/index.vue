<script setup>

const model = ref('')
const cities = ref([
    'Galle', 'Colombo', 'Matara', 'Anuradhapura'
])

</script>

<template>
    
    <nav class="py-8 bg-darkblue text-white font-montserrat">
        <div class="px-4 flex items-center justify-between md:px-2 md:container md:mx-auto">
            
            <h1 class="text-3xl font-bold">
                LOGO
            </h1>

            <div class="flex gap-5">

                <div class="flex gap-2">
                    <NuxtLink class="py-2 px-6 rounded-full text-sm text-black font-semibold bg-gradient-to-b from-darkyellow to-semidarkyellow hover:from-semidarkyellow hover:to-darkyellow" to="#">Become A Host</NuxtLink>

                    <button class="flex gap-3 rounded-full px-1 bg-white items-center justify-between">
                        <font-awesome-icon icon="fa-solid fa-bars" class="text-blue-700 ml-3"/>

                        <div class="bg-blue-700 w-8 h-8 p-1 rounded-full">
                            <font-awesome-icon icon="fa-solid fa-user" class="text-white"/>
                        </div>
                    </button>
                </div>

                <div class="flex gap-2 font-semibold">
                    <NuxtLink class="px-6 py-2 rounded-full border  border-darkyellow text-sm text-white hover:bg-gradient-to-b hover:from-darkyellow hover:to-semidarkyellow hover:text-black" to="#">Login</NuxtLink>

                    <NuxtLink class="px-6 py-2 rounded-full border  border-darkyellow text-sm text-white hover:bg-gradient-to-b hover:from-darkyellow hover:to-semidarkyellow hover:text-black" to="#">Register</NuxtLink>
                </div>

            </div>

        </div>

        <div class="px-4 mt-6 font-normal flex space-x-2 items-center justify-start md:px-2 md:container md:mx-auto">
            <button class="flex border-2 py-2 px-4 rounded-full border-white gap-2 items-center justify-center">
                <NavbarIconsRoom />
                <span class="text-sm">Rooms</span>
            </button>

            <button class="flex py-2 px-4 rounded-full border-white gap-2 items-center justify-center">
                <NavbarIconsFlats />
                <span class="text-sm">Flats</span>
            </button>

            <button class="flex py-2 px-4 rounded-full border-white gap-2 items-center justify-center">
                <font-awesome-icon icon="fa-solid fa-hotel" class="w-4 h-4" />
                <span class="text-sm">Hotels</span>
            </button>

            <button class="flex py-2 px-4 rounded-full border-white gap-2 items-center justify-center">
                <font-awesome-icon icon="fa-solid fa-house-chimney" class="w-4 h-4" />
                <span class="text-sm">Villas</span>
            </button>

            <button class="flex py-2 px-4 rounded-full border-white gap-2 items-center justify-center">
                <NavbarIconsFlight />
                <span class="text-sm">Flights</span>
            </button>
        </div>

        <div class="relative mx-auto h-44 flex flex-col justify-center md:container px-20">
            <h1 class=" text-3xl font-bold">
                Find your next stay
            </h1>

            <p class="mt-3 text-sm font-nornal">
                Search low prices on hotels, homes and much more...
            </p>
        </div>

    </nav>

    <NavbarForm />

</template>

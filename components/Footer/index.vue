<script setup>

import { ref } from 'vue'

const find = ref([    
    {
        title: 'Homes',
        path: '#'
    },
    {
        title: 'Apartments',
        path: '#'
    },
    {
        title: 'Villas',
        path: '#'
    },
    {
        title: 'Hotels',
        path: '#'
    }
])

const company = ref([    
    {
        title: 'About Us',
        path: '#'
    },
    {
        title: 'Booking',
        path: '#'
    },
    {
        title: 'Contact Us',
        path: '#'
    },
    {
        title: 'Blogs',
        path: '#'
    }
])

const helpCenter = ref([    
    {
        title: 'Find a Property',
        path: '#'
    },
    {
        title: 'How To Host',
        path: '#'
    },
    {
        title: 'Why Us',
        path: '#'
    },
    {
        title: 'FAQs',
        path: '#'
    },
    {
        title: 'Rental Guids',
        path: '#'
    }
])

const blogs = ref([    
    {
        title: 'Lorem Ipsum',
        path: '#'
    },
    {
        title: 'Dolor Sit',
        path: '#'
    },
    {
        title: 'Magna Aliqua',
        path: '#'
    },
    {
        title: 'LDuis Aute',
        path: '#'
    },
    {
        title: 'Lorem Ipsum',
        path: '#'
    },
])

</script>


<template>
    
    <footer class="bg-white text-black font-montserrat">

        <div class="md:container mx-auto px-10 lg:px-32 py-20 w-full flex flex-col gap-12">

            <div class="grid grid-cols-2 gap-y-10 gap-x-10 md:gap-0 md:grid-cols-4 justify-items-center">

                <div class="w-full flex flex-col lg:pl-16">
                    <h3 class="text-base md:text-lg font-bold mb-6">
                        FIND
                    </h3>

                    <FooterUl :data="find"/>

                </div>

                <div class="w-full flex flex-col lg:pl-16">
                    <h3 class="text-base md:text-lg font-bold mb-6">
                        COMPANY
                    </h3>

                    <FooterUl :data="company"/>

                </div>

                <div class="w-full flex flex-col lg:pl-16">
                    <h3 class="text-base md:text-lg font-bold mb-6">
                        HELP CENTER
                    </h3>

                    <FooterUl :data="helpCenter"/>

                </div>

                <div class="w-full flex flex-col lg:pl-16">
                    <h3 class="text-base md:text-lg font-bold mb-6">
                        BLOGS
                    </h3>

                    <FooterUl :data="blogs"/>

                </div>

            </div>

            <!-- <div class="flex w-full gap-10 justify-center items-center">

                <a href="#" class="h-6">
                    <img src="@/assets/brands/booking.png" class="h-full w-full object-contain" alt="">
                </a>

                <a href="#" class="h-6">
                    <img src="@/assets/brands/priceline.png" class="h-full w-full object-contain" alt="">
                </a>

                <a href="#" class="h-6">
                    <img src="@/assets/brands/kayak.png" class="h-full w-full object-contain" alt="">
                </a>

                <a href="#" class="h-6">
                    <img src="@/assets/brands/agoda.png" class="h-full w-full object-contain" alt="">
                </a>

                <a href="#" class="h-6">
                    <img src="@/assets/brands/rentalcars.png" class="h-full w-full object-contain" alt="">
                </a>

                <a href="#" class="h-6">
                    <img src="@/assets/brands/opentable.png" class="h-full w-full object-contain" alt="">
                </a>

            </div> -->

        </div>

        <div class="md:container mx-auto px-4 md:px-1 py-8 md:flex items-center justify-between border-t-2 border-gray-400">

            <div class="flex flex-col md:flex-row">
                <h4 class="text-sm md:text-base text-center font-semibold mb-2 md:mb-0">
                &copy; 2023 Bloonsoo | All rights reserved  
            </h4>
            <h4 class="text-sm md:text-base text-center font-semibold mb-5 md:mb-0 mx-1 text-blue-700">
                Powered by Marriextransfer Private Limited
            </h4>
            </div>

            
            <div class="flex gap-4 items-center justify-center">

                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-square-facebook" class="text-blue-700 text-lg md:text-2xl"/>
                </a>

                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-twitter" class="text-blue-700 text-lg md:text-2xl"/>
                </a>

                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-instagram" class="text-blue-700 text-lg md:text-2xl"/>
                </a>

                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-linkedin" class="text-blue-700 text-lg md:text-2xl"/>
                </a>

            </div>

        </div>

    </footer>

</template>
<script setup>

definePageMeta({
    layout: 'listing',
    middleware: ['auth']
})

</script>


<template>
    
   <section class="text-black font-montserrat md:container mx-auto px-2 flex flex-col gap-14 py-10">


        <main class="grid grid-cols-4 items-start gap-8 w-full">

          <aside class="w-full col-span-1 h-full flex flex-col gap-6">

            <div class="shadow-md rounded-lg bg-white w-full px-5 py-8">

              <div class="w-1/3 aspect-square rounded-full mx-auto overflow-hidden">
                <div class="w-full h-full object-cover">
                <img src="../../assets/avatar/user_img.png"  alt="">
                </div>
              </div>

              <div class="py-2">
                <h1 class="text-center font-bold text-xl my-2">Regina George</h1>

                <div class="w-full flex items-center gap-4 justify-center my-2">
                  <HotelFacility class="!p-0 !w-max" icon="location" label="Kurunegala"/>
                </div>

                <div class="w-full flex items-center gap-4 justify-center mx-5 my-2 mb-10 ">
                  <HotelFacility class="!p-0 !w-max" icon="mail" label="Regina@fun.com"/>
                </div>
              </div>

              <div class="mx-8 mt-5 ">
                <h1 class="font-semibold text-xl text-gray-700 mb-2">Identity Verification</h1>
                <p class="text-gray-500 mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>


                <h1 class="font-semibold text-2xl  mb-4">Regina George</h1>

                <div class="w-full flex items-center gap-4 my-2 ">
                  <font-awesome-icon icon="fa-solid fa-check" class="text-green-600 text-xl"/>
                    <p class="font-medium">Email Confirmed</p>
                </div>

                <div class="w-full flex items-center gap-4 my-2 ">
                  <font-awesome-icon icon="fa-solid fa-check" class="text-green-600 text-xl"/>
                    <p class="font-medium">Mobile Confirmed</p>
                </div>

                <button class="mt-10 w-full h-10 aspect-square rounded-3xl grid place-items-center bg-gradient-to-b from-darkyellow to-semidarkyellow hover:from-semidarkyellow hover:to-darkyellow font-semibold mb-10">
                Edit Profile
              </button>

              </div>

            </div>
          </aside>      

            <section class="w-full col-span-3 grid grid-col gap-6 my-2">

              <div class="grid grid-cols-6 items-start gap-4 w-full">
                <div class="w-full col-span-5 h-full flex flex-col gap-2 ">

                  <h1 class="text-3xl font-semibold ">Hello, Regina George</h1>
                  <p class="text-gray-500 text-md mb-5">Joined in 2021</p>

                  <h1 class="text-xl font-semibold">About me</h1>
                  <p class="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,</p>

                  <div class="w-full flex items-center gap-3 my-2 ">
                      <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-lg"/>
                      <p class="font-medium text-lg">0 Reviews</p>
                  </div>

                  <nuxt-link to="" class="text-blue-700 font-semibold underline">Reviewed By You</nuxt-link>

                  <button class="mt-2 w-full h-16 font-semibold mb-2 bg-gray-100 border-gray-300 border-2">
                    <div class="w-full flex items-center gap-3 mx-3">
                      <HotelFacility class="!p-0 !w-max" icon="message" label="Message"/>
                  </div>
                  </button>

                  <button class="mt-2 w-full h-16 font-semibold mb-2 bg-gray-100 border-gray-300 border-2">
                    <div class="w-full flex items-center gap-3 mx-3">
                      <HotelFacility class="!p-0 !w-max" icon="notification" label="Notifications"/>
                  </div>
                  </button>

                  <button class="mt-2 w-full h-16 font-semibold mb-2 bg-gray-100 border-gray-300 border-2">
                    <div class="w-full flex items-center gap-3 mx-3">
                      <HotelFacility class="!p-0 !w-max" icon="reservation" label="Reservations"/>
                  </div>
                  </button>

                  <button class="mt-2 w-full h-16 font-semibold mb-2 bg-gray-100 border-gray-300 border-2">
                    <div class="w-full flex items-center gap-3 mx-3">
                      <HotelFacility class="!p-0 !w-max" icon="wishlist" label="Wishlists"/>
                  </div>
                  </button>


                </div>


                

                <div class="w-full col-span-1 h-full flex flex-col gap-6">
                  <font-awesome-icon icon="fa-solid fa-bars" class="text-4xl text-blue-700" />
                </div>

              </div>



            </section>



            

        </main>
   </section>

</template>

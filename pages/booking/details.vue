<script setup>

definePageMeta({
    layout: 'listing'
})

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

</script>


<template>
    
   <section class="text-black font-montserrat md:container mx-auto px-2 flex flex-col gap-14 py-6">

        <BookingTabs/>

        <main class="grid grid-cols-3 gap-8 w-full">

            <section class="w-full col-span-2 grid grid-col gap-4">

                <BookingHotelCard />

                <div class="  shadow-md  w-full h-40 p-5 mb-4">
                    <p class="font-bold mb-5">Your booking details </p>
                    
                    <div class=" flex row px-6 mb-2">
                        <font-awesome-icon icon="fa-solid fa-circle-check" class="text-green-600 text-xl mx-6" />
                        <p class=" text-md  ">No payment is required to secure this booking. You'll pay during your stay. </p>
                    </div>

                </div>

                <!-- <BookingDetailsInfo /> -->

                <ListingFormCard label="Enter your details">

                    <div class="grid grid-cols-2 gap-x-8 gap-y-6 px-4">



                        <SharedRadioGroup 
                        title="Are you traveling for work?"
                        class="col-span-2" 
                        v-model="ownMultipleHotels" 
                        :options="[{data: 'yes', label: 'yes'}, {data: 'no', label: 'no'}]"
                        :error="ownMultipleHotelsError"
                        name="group1"
                        errorMessage="Please select an option"
                        />


                        <div class="flex flex-col gap-2 items-start  col-start-1">

                        <SharedTextInput label="First Name" v-model="firstName" :error="firstNameError" errorMessage="First Name cannot be empty" placeholder="Regina" />


                        </div>

                        <div class="flex flex-col gap-2 items-start col-start-2">

                        <SharedTextInput label="Last Name" v-model="lastName" :error="lastNameError" errorMessage="Last Name cannot be empty" placeholder="George" />

                        </div>

                    </div>

                    <SharedTextInput label="Email Address" v-model="email" :error="emailError" errorMessage="Email Address cannot be empty" placeholder="Regina@fun.com" class="w-3/5 px-4" />

                    <p class="text-sm text-gray-500 px-4">
                        This name will be seen to guests
                    </p>

                    <SharedTextInput label="Confirm Email Address" v-model="email" :error="emailError" errorMessage="Email Address cannot be empty" placeholder="Regina@fun.com" class="w-3/5 px-4" />


                            
                        <p class=" mx-4 text-sm font-bold text-gray-700">Who are you booking for?</p>
                        <div class="flex items-center  mx-8">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-1" class="ml-2 text-sm"> I'm the main guest</label>
                        </div>
                        <div class="flex items-center mx-8">
                            <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-2" class="ml-2 text-sm "> I'm booking for someone else </label>
                        </div>

                                
                        



                    </ListingFormCard>

                    <ListingFormCard label="Standard Double City View with Early Check-in at 11 AM & Late Check-out at 3 PM (on Availability)">

                    <div class="px-6 mb-6">
                        <div class="w-full flex items-center mb-2">
                            <font-awesome-icon icon="fa fa-ban" class="text-gray-700 text-xl mx-6"/>
                            <p>Total cost to cancel</p>
                        </div>

                        <div class="w-full flex items-center mb-2 mx-6">
                            <HotelFacility class="!p-0 !w-max mr-3" icon="sparkle"/> 
                            <p class="text-gray-500">Sparkly clean rooms  </p>
                        </div>

                        <div class="w-full flex items-center mb-2">
                            <font-awesome-icon icon="fa-solid fa-ban-smoking" class="text-gray-500 text-xl mx-6" /> 
                            <p class="text-gray-500">No smoking </p>
                        </div>

                    </div>

                    <div class="w-full flex items-center justify-between mt-auto mb-6 px-6">
                        <HotelFacility class="!p-0 !w-max" icon="kitchen" label="Kitchen"/>
                        <HotelFacility class="!p-0 !w-max" icon="ac" label="Air Conditioner"/>
                        <HotelFacility class="!p-0 !w-max" icon="washer" label="Washer"/>
                        <HotelFacility class="!p-0 !w-max" icon="kingbed" label="King size bed"/>
                        <HotelFacility class="!p-0 !w-max" icon="cleaning" label="Cleaning Service"/>
                    </div>

                    <div>
                    <p class="text-sm font-semibold text-gray-600 px-4 mb-6">
                    Your Genius benefits
                    </p>

                    <div class=" flex row px-6 mb-2">
                        <font-awesome-icon icon="fa-solid fa-circle-check" class="text-green-600 text-xl mx-6" />
                    <p class=" text-sm font-semibold text-gray-600">10% discount</p>
                    </div>

                    <p class="mx-24 text-sm ">You're getting a 10% discount on the price of this option before taxes and fees apply. </p>
                    </div>

                    <p class="text-sm font-semibold text-gray-600 px-4 mb-6">
                    Guests: 2 adults
                    </p>

                    <SharedTextInput label="Full guest name" v-model="guestName" :error="guestNameError" errorMessage="Full guest name cannot be empty" placeholder="Regina George" class="w-3/5 px-4" />


                    </ListingFormCard>

                    <ListingFormCard label="Your arrival time ">

                    <div class="px-4 flex flex-col gap-6">

                        <div class="w-full grid grid-cols-2 gap-6">

                            <SharedDropDown 
                            label="Add your estimated arrival time (optional) " 
                            v-model="country"
                            :options="['9:00 AM — 10:00 AM ', '10:00 AM — 11:00 AM ', '11:00 AM — 12:00 AM ']" 
                            class="col-start-1" />

                        </div>
                    </div>

                    </ListingFormCard>

            </section>

            <aside class="w-full col-span-1 h-full flex flex-col gap-4">

                <!-- <BookingCheckIn /> -->

                <div class="  shadow-md  w-full p-5 mb-4">
                    <p class="font-semibold mb-8 text-gray-700 text-md">Your booking details  </p>

                    <div class="grid grid-cols-2 gap-1 mb-5 ">

                        <div class="border-r-2 border-gray-400 p-2 ">
                            <p>Check-in</p>
                            <p class="font-semibold text-gray-700">Mon, Dec 5, 2022</p>
                            <p>2:00 PM — 11:30 PM </p>

                        </div>

                        <div class="p-2">
                            <p>Check-out</p>
                            <p class="font-semibold text-gray-700">Mon, Dec 5, 2022</p>
                            <p>2:00 PM — 11:30 PM </p>
                        </div>

                    </div>

                        <p class="font-semibold mb-5 pb-5 border-b-2 border-gray-400 text-gray-700">Total length of stay: 1 night. 3 adults </p>

                        <p class="font-semibold mb-3 text-gray-700">You selected: </p>
                        <p class="mb-5 text-gray-600">Standard Double City View with Early Check-in at 11 AM & Late Check-out at 3 PM (on Availability) </p>

                        <p class="font-semibold text-blue-600">Change your selection </p>

                </div>

                <div class="  shadow-md  w-full mb-4">

                <div class="grid grid-cols-2 gap-2 border-b-2 border-gray-300 p-6 mb-5">
                    <div>
                        <p class="font-semibold text-lg text-gray-700">Price</p>
                        <p class="text-gray-500">( your currency )</p>
                    </div>

                    <div>
                        <p class="font-semibold text-lg text-gray-700 float-right"> LKR 158,239.99</p>
                    </div>

                </div>

                <div class="border-b-2 border-gray-300 p-6 mb-5">
                    <div class="grid grid-cols-2 gap-2  ">
                    <div>
                        <p class=" text-lg">Property's Currency</p>
                        
                    </div>

                    <div>
                        <p class=" text-lg float-right"> US$430.57</p>
                    </div>

                </div>

                <p class="text-gray-500"> in USS ( for 2 nights & all guests ) </p>

                </div>



                <p class="px-6 text-gray-500">*This price is converted to show you the approximate cost in LKR. You'll pay in USS or LKR. The exchange rate might change before you pay. </p>
                <p class="p-6 mb-2 text-gray-500">Keep in mind that your card issuer may charge you a foreign transaction fee. </p>
                </div>

                <div class="  shadow-md  w-full p-5 mb-6">

                <p class="font-semibold text-lg mb-2 text-gray-700">Payment shedule</p>
                <p class=" text-md mb-5 text-green-600">No payment today. You’ll pay when you stay</p>

                </div>

                <div class="  shadow-md w-full p-5 mb-6">
                            
                            <p class="font-semibold text-lg mb-2 text-gray-700">Cancellation fee</p>

                            <div class="grid grid-cols-2 gap-2 mb-5">
                                <div>
                                    <p class="text-gray-600" >If you cancel you will pay </p>
                                </div>

                                <div>
                                    <p class=" float-right text-gray-600"> LKR 4900</p>
                                </div>

                            </div>

                </div>

            </aside>

            

        </main>
        <button @click="createHotel" class="w-full py-4 btn-accent">
            Next
        </button>
   </section>

</template>
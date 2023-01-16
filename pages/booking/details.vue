<script setup>

definePageMeta({
    layout: 'listing'
})

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

</script>


<template>
    
   <section class="text-black font-montserrat md:container mx-auto px-2 flex flex-col gap-14 py-6">

        <BookingTabs />

        <main class="grid grid-cols-3 items-start gap-8 w-full">

            <section class="w-full col-span-2 grid grid-col gap-6">

                <BookingHotelCard />

                <div class="bg-white shadow-md w-full p-5 pb-8">
                    <h4 class="font-bold text-lg mb-4">Your booking details</h4>
                    
                    <div class="flex items-center text-gray-600 font-semibold gap-4">
                        <font-awesome-icon icon="fa-solid fa-circle-check" class="text-green-600 text-xl" />
                        <p class="text-base">No payment is required to secure this booking. You'll pay during your stay. </p>
                    </div>

                </div>

                <ListingFormCard label="Enter your details">

                    <div class="grid grid-cols-2 gap-x-16 gap-y-6 px-4">

                        <SharedRadioGroup 
                        title="Are you traveling for work?"
                        class="col-span-2" 
                        v-model="ownMultipleHotels" 
                        :options="[{data: 'yes', label: 'yes'}, {data: 'no', label: 'no'}]"
                        :error="ownMultipleHotelsError"
                        name="group1"
                        errorMessage="Please select an option"
                        />

                        <SharedTextInput label="First Name" v-model="firstName" :error="firstNameError" errorMessage="First Name cannot be empty" placeholder="Regina" />

                        <SharedTextInput label="Last Name" v-model="lastName" :error="lastNameError" errorMessage="Last Name cannot be empty" placeholder="George" />

                        <div class="flex flex-col gap-2">
                            <SharedTextInput label="Email Address" v-model="email" :error="emailError" errorMessage="Email Address cannot be empty" placeholder="Regina@fun.com" />

                            <p class="text-sm text-gray-500">
                                Confirmation email sent to this address 
                            </p>
                        </div>
                        
                        <SharedTextInput label="Confirm Email Address" v-model="email" :error="emailError" errorMessage="Email Address cannot be empty" placeholder="Regina@fun.com" class="col-start-1" />

                        <SharedRadioGroup 
                        title="Who are you booking for?"
                        class="col-start-1" 
                        v-model="ownMultipleHotels" 
                        :options="[
                            {data: 'yes', label: `I'm the main guest`}, 
                            {data: 'no', label: ` I'm booking for someone else `}
                        ]"
                        :error="ownMultipleHotelsError"
                        name="group1"
                        errorMessage="Please select an option"
                        vertical
                        />

                    </div>

                </ListingFormCard>

                <ListingFormCard label="Standard Double City View with Early Check-in at 11 AM & Late Check-out at 3 PM (on Availability)">

                    <div class="flex flex-col gap-8 px-4">

                        <div class="flex flex-col gap-2">
                            <div class="w-full flex items-center gap-3">
                                <font-awesome-icon icon="fa fa-ban" class="text-gray-700 text-xl"/>
                                <p class="text-gray-500 font-semibold">Total cost to cancel</p>
                            </div>

                            <div class="w-full flex items-center gap-3">
                                <IconsSparkle class="w-5 h-5"/>
                                <p class="text-gray-500">Sparkly clean rooms</p>
                            </div>

                            <div class="w-full flex items-center gap-3">
                                <font-awesome-icon icon="fa-solid fa-ban-smoking" class="text-gray-500 text-xl" /> 
                                <p class="text-gray-500">No smoking </p>
                            </div>
                        </div>

                        <div class="w-full flex items-center justify-between">
                            <HotelFacility class="!p-0 !w-max" icon="kitchen" label="Kitchen"/>
                            <HotelFacility class="!p-0 !w-max" icon="ac" label="Air Conditioner"/>
                            <HotelFacility class="!p-0 !w-max" icon="washer" label="Washer"/>
                            <HotelFacility class="!p-0 !w-max" icon="kingbed" label="King size bed"/>
                            <HotelFacility class="!p-0 !w-max" icon="cleaning" label="Cleaning Service"/>
                        </div>

                        <div class="flex flex-col gap-4">
                            <h4 class="text-sm font-semibold text-gray-600">
                                Your Genius benefits
                            </h4>

                            <div class="flex gap-4 items-start">
                                <font-awesome-icon icon="fa-solid fa-circle-check" class="text-green-600 text-xl" />
                                <p class="text-sm text-gray-600">
                                    <span class="text-black font-semibold block">10% discount</span>
                                    You're getting a 10% discount on the price of this option before taxes and fees apply.
                                </p>
                            </div>
                        </div>

                        <p class="text-sm font-semibold text-gray-600">
                            Guests: 2 adults
                        </p>

                        <div class="grid grid-cols-2 gap-x-16">
                            <SharedTextInput label="Full guest name" v-model="guestName" :error="guestNameError" errorMessage="Full guest name cannot be empty" placeholder="Regina George" />
                        </div>
                        
                    </div>

                </ListingFormCard>

                <ListingFormCard label="Your arrival time ">

                    <div class="px-4 flex flex-col gap-6">

                        <div class="w-full grid grid-cols-2 gap-x-16">

                            <SharedDropDown 
                            label="Add your estimated arrival time (optional) " 
                            v-model="country"
                            :options="['9:00 AM — 10:00 AM', '10:00 AM — 11:00 AM', '11:00 AM — 12:00 AM']" 
                            class="col-start-1" />

                        </div>
                    </div>

                </ListingFormCard>

            </section>

            <aside class="w-full col-span-1 h-full flex flex-col gap-6">

                <BookingDetailsCard />

                <BookingPriceCard />

                <div class="shadow-md rounded-lg bg-white w-full px-5 py-8">
                    <h4 class="font-semibold mb-4 text-base">Payment shedule</h4>
                    <p class=" text-base text-green-600">No payment today. You’ll pay when you stay</p>
                </div>

                <div class="shadow-md rounded-lg bg-white w-full px-5 py-8">
                            
                    <h4 class="font-semibold mb-4 text-base">Cancellation fee</h4>

                    <div class="flex items-center justify-between gap-8">
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

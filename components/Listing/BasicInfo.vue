<script setup>

import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import { ref } from 'vue'
import '@/assets/css/phoneNumberInput.css'

const name = ref('')
const rating = ref('N/A')

const nameErr = ref(false)

const phoneNumber = ref()
const results = ref()

const checkvl = ref()

</script>


<template>
    
    <section class="w-full flex flex-col gap-10">

        <ListingFormCard label="Name and Ratings">

            <div class="grid grid-cols-2 gap-x-8 gap-y-2 px-4">

                <SharedTextInput label="Name of your Property" v-model="name" :error="nameErr" errorMessage="please enter name" />

                <SharedDropDown label="Star Rating" v-model="rating" slot>
                
                    <option value="N/A" 
                    class="text-sm font-semibold text-gray-500 appearance-none">
                        N/A
                    </option>

                    <option value="1" 
                    class="text-sm font-semibold text-gray-500 flex gap-2 items-center appearance-none">                       
                        1 &starf;
                    </option>

                    <option value="2" 
                    class="text-sm font-semibold text-gray-500 flex gap-2 items-center appearance-none">                       
                        2 &starf;&starf;
                    </option>

                    <option value="3" 
                    class="text-sm font-semibold text-gray-500 flex gap-2 items-center appearance-none">                       
                        3 &starf;&starf;&starf;
                    </option>

                    <option value="4" 
                    class="text-sm font-semibold text-gray-500 flex gap-2 items-center appearance-none">                       
                        4 &starf;&starf;&starf;&starf;
                    </option>

                    <option value="5" 
                    class="text-sm font-semibold text-gray-500 flex gap-2 items-center appearance-none">                       
                        5 &starf;&starf;&starf;&starf;&starf;
                    </option>

                    <option value="6" 
                    class="text-sm font-semibold text-gray-500 flex gap-2 items-center appearance-none">                       
                        6 &starf;&starf;&starf;&starf;&starf;&starf;
                    </option>

                    <option value="7" 
                    class="text-sm font-semibold text-gray-500 flex gap-2 items-center appearance-none">                       
                        7 &starf;&starf;&starf;&starf;&starf;&starf;&starf;
                    </option>
                
                </SharedDropDown>

                <p class="text-sm text-gray-500">
                    This name will be seen to guests
                </p>

            </div>

        </ListingFormCard>
           
        <ListingFormCard label="Contact Details">

            <div class="grid grid-cols-2 gap-x-8 gap-y-6 px-4">

                <SharedTextInput label="Contact name" v-model="name" :error="nameErr" errorMessage="please enter name" />

                <div class="flex flex-col gap-2 items-start col-start-1">

                    <label :class="results?.isValid ? 'text-red-600' : 'text-gray-600' " class="text-sm font-semibold">Phone Number</label>


                    <ClientOnly>
                    <MazPhoneNumberInput
                        v-model="phoneNumber"
                        show-code-on-list
                        :preferred-countries="['LK', 'FR', 'BE', 'DE', 'US', 'GB']"
                        no-example size="sm"
                        @update="results = $event"
                        :success="results?.isValid"
                    />
                    </ClientOnly>

                </div>

                <div class="flex flex-col gap-2 items-start col-start-2">

                    <label :class="results?.isValid ? 'text-red-600' : 'text-gray-600' " class="text-sm font-semibold">Alternative Phone Number</label>


                    <ClientOnly>
                    <MazPhoneNumberInput
                        v-model="phoneNumber"
                        show-code-on-list
                        :preferred-countries="['LK', 'FR', 'BE', 'DE', 'US', 'GB']"
                        no-example size="sm"
                        @update="results = $event"
                        :success="results?.isValid"
                    />
                    </ClientOnly>

                </div>

                <SharedRadioGroup 
                title="Do you own multiple hotels, or are you a part of a property management company?"
                class="col-span-2" 
                v-model="checkvl" 
                :options="[{data: 'yes', label: 'yes'}, {data: 'no', label: 'no'}]
                "/>

            </div>

        </ListingFormCard>

        <ListingFormCard label="Do you use a channel manager?">

            <div class="px-4">
                <p class="text-sm text-gray-600 font-semibold mb-4 text-justify">
                    A channel manager is a tool that lets you choose what you sell across all the different sites you might list your place on. You can then set your prices and open and close dates in your calendar on all of these sites in one place. 
                    <br> <br>
                    If you use a channel manager, tell us below. Well use this information to help you connect it to Bloonsoo.com in the future. It also helps if you tell us the brand name of your channel manager. 
                </p>

                <SharedRadioGroup 
                v-model="checkvl" 
                :options="[{data: 'yes', label: 'yes'}, {data: 'no', label: 'no'}]
                "/>
            </div>

        </ListingFormCard>

    </section>

</template>


<style scoped>



</style>
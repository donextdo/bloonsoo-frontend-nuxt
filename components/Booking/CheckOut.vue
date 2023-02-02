<script setup>

const nameError = ref(false)

const emailError = ref(false)

const addressError = ref(false)

const cityError = ref(false)

const stateError = ref(false)

const zipError = ref(false)

const cardNameError = ref(false)

const expMonthError = ref(false)

const expYearError = ref(false)

const cvvError = ref(false)


</script>

<template>
  
    <div class="fixed inset-0 bg-black bg-opacity-40 grid place-items-center z-40 py-20">

        <div class="w-[70vw] max-h-full bg-white rounded-lg relative shadow-md overflow-visible flex flex-col gap-6 px-8 py-10 overflow-y-scroll !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-gray-500">

          <div class="grid grid-cols-3 gap-10">
            <div class="col-span-1">
              <div class="flex flex-col pb-5 gap-2">

                <h3 class="text-xl font-bold mb-2"> 
                  Card Holder Details
                </h3>
              
              </div>

              <SharedTextInput label="Full Name" v-model="name" :error="nameError" errorMessage="Full Name cannot be empty" class="mb-3" placeholder="Regina" />

              <SharedTextInput label="Email Address" v-model="email" :error="emailError" errorMessage="Email Address cannot be empty" class="mb-3" placeholder="Regina@fun.com" />

              <SharedTextInput label="Address" v-model="address" :error="addressError" errorMessage="Address cannot be empty" class="mb-3" placeholder="285 15/2" />

              <SharedTextInput label="City" v-model="city" :error="cityError" errorMessage="City cannot be empty" class="mb-3" placeholder="Colombo" />


              <div class="grid grid-cols-2 gap-6">

                <SharedTextInput label="State" v-model="state" :error="stateError" errorMessage="State cannot be empty" class="mb-3" placeholder="WP" />

                <SharedTextInput label="Zip" v-model="zip" :error="zipError" errorMessage="Zip cannot be empty" class="mb-3" placeholder="50000" />

              </div>
            </div>

            <div class="col-span-1">


              <div class="mb-8 mt-12">
                <label class=" text-gray-600 text-sm font-semibold">Accepted Card</label>
                <div class="flex gap-3 w-max mt-4 ">
                  <font-awesome-icon icon="fab fa-cc-visa" class="text-blue-900 text-2xl"/>
                  <font-awesome-icon icon="fa-brands fa-cc-amex" class="text-blue-600 text-2xl"/>
                  <font-awesome-icon icon="fa-brands fa-cc-mastercard" class="text-red-600 text-2xl"/>
                  <font-awesome-icon icon="fa-brands fa-cc-discover" class="text-yellow-500 text-2xl"/>
                  <font-awesome-icon icon="fa-brands fa-bitcoin" class="text-semidarkyellow text-2xl" />
                </div>
              </div>

              <SharedTextInput label="Name on Card" v-model="cardName" :error="cardNameError" errorMessage="Name on Card cannot be empty" class="mb-3" placeholder="Master Card" />

              <SharedTextInput label="Credit card number" v-model="cardNumber" :error="cardNumberError" errorMessage="Credit card number cannot be empty" class="mb-3" placeholder="1111-2222-3333-4444" />

              <SharedTextInput label="Exp Month" v-model="expMonth" :error="expMonthError" errorMessage="Exp Month cannot be empty" class="mb-3" placeholder="September" />


              <div class="grid grid-cols-2 gap-6">

                <SharedTextInput label="Exp Year" v-model="expYear" :error="expYearError" errorMessage="Exp Year cannot be empty" class="mb-3" placeholder="2024" />

                <SharedTextInput label="CVV" v-model="cvv" :error="cvvError" errorMessage="CVV cannot be empty" class="mb-3" placeholder="858" />

              </div>
              
            </div>

            <div class="col-span-1">

              <div class="grid grid-cols-2 gap-6 pb-5">
                
                <div>
                  <h3 class="text-xl font-bold"> 
                    Cart
                  </h3>
                </div>

                <div>
                    <h3 class="text-xl font-bold pb-5 float-right"> 
                      <font-awesome-icon icon="fa-solid fa-cart-shopping" class=" text-xl mt-1" />
                      4
                    </h3>

                </div>

              </div>

              <div class="flex items-center justify-between border-b border-gray-400 mb-5">
                <div class="font-medium text-base">
                    <p class=" mb-4">Item 1</p> 
                    <p class="mb-4">Item 2</p> 
                    <p class="mb-4">Item 3</p> 
                    <p class="mb-4">Item 4</p> 


                </div>

                <div class="font-medium text-base">
                    <p class="text-gray-600 mb-4">$250 </p>
                    <p class="text-gray-600 mb-4">$250 </p>
                    <p class="text-gray-600 mb-4">$400 </p>
                    <p class="text-gray-600 mb-4">$500 </p>

                </div>


            </div>


            <div class="flex items-center justify-between">
                  <div class="font-medium text-base">
                      <p class=" mb-4">Total</p>


                  </div>

                  <div class="font-medium text-base">
                      <p class="text-gray-600 mb-4">$1900 </p>

                  </div>

                </div>
          </div>



          </div>



            <button @click="handleClose" class="absolute right-4 top-4 w-6 h-6 z-50">
                <font-awesome-icon icon="fa-solid fa-times" class="text-red-600 text-xl"/>
            </button>

            <button @click="handleBooking" class="w-full py-4 btn-accent">
              Complete Checkout
            </button>
          </div>


    </div>

</template>
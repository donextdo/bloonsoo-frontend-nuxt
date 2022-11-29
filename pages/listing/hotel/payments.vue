<script setup>
definePageMeta({
  layout: "listing",
});

const router = useRouter();

const postNext = () => {
  router.push({ path: "/listing/hotel/payments" });
};
</script>

<template>
  <section
    class="md:container mx-auto px-10 py-16 flex flex-col gap-8 text-black font-montserrat"
  >
    <h2 class="text-2xl font-semibold">List your property on Bloonsoo.com</h2>
    <ListingHotelTabs active_1 active_2 active_3 active_4 active_5 active_6 />
    <ListingFormCard label="Guest payment options">
      <div class="ml-3">
        <p class="pb-4 text-sm font-bold text-gray-600">
          Can you charge credit cards at the property?
        </p>
        <input type="radio" name="gender" /> <span>Yes</span>
        <input type="radio" name="gender" class="ml-16" /> <span>No</span>
        <p class="py-4 font-bold text-gray-600">
          How do guests book and how do they pay?
        </p>
        <p class="text-sm font-bold text-gray-600">
          To initially secure a reservation we allow guests In use all major
          credit cards, However. when it comes to collecting payment, you can
          specify the
          <span class="block">
            payment methods you accept at your property.
          </span>
        </p>
      </div>
    </ListingFormCard>

    <!-- <ListingFormCard label="Commission payments"> -->
    <div
      class="bg-gray-100 rounded-md w-full flex flex-col gap-6 py-8 px-6 font-montserrat"
    >
      <div class="grid md:grid-cols-2">
        <h4 class="text-lg text-gray-600 font-semibold">Commission payments</h4>
        <p class="text-end text-md text-gray-600 font-semibold">
          Commission percentage :<span class="text-xl text-black block"
            >15%</span
          >
        </p>
      </div>

      <div class="grid gap-6 pl-3 md:grid-cols-2">
        <div>
          <SharedDropDown
            class="w-11/12"
            label="What name should be placed on the invoice (e.g. legal/company name)?"
            v-model="roomType"
            errorMessage="please enter"
            :options="['John', 'John']"
          />
          <p class="py-5 pt-6 text-sm font-bold text-gray-700">
            Does this recipient have the same address as your property?
          </p>
          <input type="radio" name="gender" /> <span>Yes</span>
          <input type="radio" name="gender" class="ml-16" /> <span>No</span>
        </div>

        <div>
          <p class="font-bold text-gray-600">
            How your commission works for you
          </p>
          <div class="py-2 text-sm">
            <div class="flex items-center">
              <font-awesome-icon
                icon="fa-circle-check"
                class="text-green-700 text-md"
              />
              <p class="py-2 pl-2">No hidden fees—one flat commission rate</p>
            </div>
            <div class="flex items-center">
              <font-awesome-icon
                icon="fa-circle-check"
                class="text-green-700 text-md"
              />
              <p class="py-2 pl-2">Pay only for bookings that stay</p>
            </div>
            <div class="flex items-center">
              <font-awesome-icon
                icon="fa-circle-check"
                class="text-green-700 text-md"
              />

              <p class="py-2 pl-2">24/7 personal support by phone or e-mail</p>
            </div>
            <div class="flex items-center">
              <font-awesome-icon
                icon="fa-circle-check"
                class="text-green-700 text-md"
              />
              <p class="py-2 pl-2">
                Strong search engine presence for more bookings
              </p>
            </div>
            <div class="flex items-center">
              <font-awesome-icon
                icon="fa-circle-check"
                class="text-green-700 text-md"
              />
              <p class="py-2 pl-2">
                Property advice and analytics to increase performance
              </p>
            </div>
            <div class="flex items-center">
              <font-awesome-icon
                icon="fa-circle-check"
                class="text-green-700 text-md"
              />
              <p class="py-2 pl-2">Instant confirmations to save you time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </ListingFormCard> -->

    <ListingFormCard label="Your availability to guests">
      <div class="ml-3">
        <p class="py-4 text-sm font-bold text-gray-600">
          When is the first date that guests can check in?
        </p>
        <p class="text-sm text-justify">
          <span></span>To help you start earning, we automatically make your
          property open for bookings for the next 18 months. If you would like
          to make changes to your
          <span class="block"
            >availability before opening, you can choose 'complete registration
            and open later'. Your availability can also be adjusted after you
            open for bookings.</span
          >
        </p>
        <p class="py-5 pt-8 text-sm font-bold text-gray-600">
          To complete your registration, please tick the boxes below
        </p>
        <div class="flex mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          />
          <label for="default-checkbox" class="ml-2 text-sm"
            >I certify that this is a legitimate accommodation business with all
            necessary licenses and permits, which can be shown upon first
            request. Booking.com B.V. reserves the right to verify and
            investigate any details provided in this registration.
          </label>
        </div>
        <div class="flex mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          />
          <label for="default-checkbox" class="ml-2 text-sm"
            >I have react accepted and agreed to the General Delivery Terms and
            Privacy Statement. Booking.com enables accommodations and guests to
            communicate through Etooking.com, which receives and processes
            communications in accordance with the Booking.com Privacy Statement
            and General Delivery Terms.
          </label>
        </div>
        <p class="py-5 text-sm font-bold text-gray-600">
          Almost done! You can always change the information even after you
          completed the registration!
        </p>
      </div>
    </ListingFormCard>
    <button
      @click="addRoom"
      class="w-full py-4 bg-blue-700 text-white font-semibold text-lg rounded-lg hover:bg-blue-900 text-bold"
    >
      Complete registration and open tot bookings
    </button>
    <button
      @click="addRoom"
      class="w-full px-4 py-4 font-semibold text-lg text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent text-bold"
    >
      Complete Registration and open later
    </button>
  </section>
</template>

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
    <h2 class="text-2xl font-semibold mb-6">
      List your property on Bloonsoo.com
    </h2>
    <ListingHotelTabs active_1 active_2 active_3 active_4 active_5 />

    <ListingFormCard label="Cancellations">

      <div class="grid grid-cols-2 gap-x-8 gap-y-6 px-4">

        <SharedDropDown
         
          label="How many days in advance can guests cancel free of charge?"
          v-model="roomType"
          errorMessage="please enter"
          :options="[
            'Day of arrival (18:00)',
            'Day of arrival (19:00)',
            'Day of arrival (20:00)',
          ]"
        />

        <SharedDropDown
          class="pl-3"
          label="How many days in advance can guests cancel free of charge?"
          v-model="roomType"
          errorMessage="please enter"
          :options="[
            'No reservation needed',
            'No reservation needed',
            'No reservation needed',
          ]"
        />

      </div>
      <div class="flex flex-col gap-2 px-4">
        <p class="text-sm font-semibold text-gray-600">
          The guest must cancel by 18:00 on the day of arrival or pay 100% of
          the price for the fit st night.
        </p>
        <p class="text-sm font-semibold text-gray-500">
          Please note. You'll be able to make changes to your policies later on.
          this is just to get you started.
        </p>
      </div>
    </ListingFormCard>

    <ListingFormCard label="Protect against accidental bookings">

      <div class="grid grid-cols-2 gap-x-8 gap-y-6 px-4">

        <div class="flex items-center gap-4">

          <span class="text-sm font-semibold text-gray-600">Yes</span>
          <label class="relative cursor-pointer ml-5">

            <input type="checkbox" value="" class="sr-only peer" />

            <div
              class="w-11 h-6 bg-gray-200 focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>

          </label>

        </div>
      </div>

      <div class="px-4">
        <p class="text-sm text-gray-600 font-semibold">
          To save your time handling accidental bookings, we automatically wave
          the cancellation fees for the guests who cancel the booking
          <br>
          within the first 2 hours after made the booking. You can change this
          period of time later in your property management platform.
        </p>
      </div>
    </ListingFormCard>

    <div class="grid md:grid-cols-2 gap-6">


      <ListingFormCard label="Check in">
        <div class="px-4 flex flex-col gap-6">

          <SharedDropDown
            label="From"
            v-model="roomType"
            errorMessage="please enter"
            :options="['06:00', '07:00', '08:00']"
          />

          <SharedDropDown
            label="Untill"
            v-model="roomType"
            errorMessage="please enter"
            :options="['18:00', '19:00', '20:00']"
          />

        </div>
          
      </ListingFormCard>

      
      <ListingFormCard label="Check out">

        <div class="px-4 flex flex-col gap-6">

          <SharedDropDown
            label="From"
            v-model="roomType"
            errorMessage="please enter"
            :options="['06:00', '07:00', '08:00']"
          />

          <SharedDropDown
            label="Untill"
            v-model="roomType"
            errorMessage="please enter"
            :options="['18:00', '19:00', '20:00']"
          />

        </div>
          
      </ListingFormCard>
    </div>

    <ListingFormCard label="Children and Pets">
      <div class="px-4">

        <SharedRadioGroup 
          title="Children Can you accommodate children? (You can specify the ages and
          prices later)"
          :options="[{data: 'yes', label: 'yes'}, {data: 'no', label: 'no'}]"
          name="children"
          errorMessage="Please select an option"
          />
        
                   
        <SharedDropDown
          class="pt-7 w-96"
          label="Pets"
          v-model="roomType"
          errorMessage="please enter"
          :options="['Yes', 'No']"
        />

      </div>

    </ListingFormCard>

    <button
      @click="postNext"
      class="w-full py-4 bg-blue-700 text-white font-semibold text-base rounded-lg hover:bg-blue-900"
    >
      Next
    </button>

  </section>
</template>

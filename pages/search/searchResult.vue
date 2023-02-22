<script setup>

definePageMeta({
  layout: 'mini-searchbar'
})

const popularFilter = [
    {data: 'Apartments', label: 'Apartments'}, 
    {data: 'Book without credit card', label: 'Book without credit card'}, 
    {data: 'Hotels', label: 'Hotels'}, 
    {data: 'No prepaymentl', label: 'No prepaymentl'},
    {data: 'Holiday homes', label: 'Holiday homes'},
    {data: 'Less than 1 km from location', label: 'Less than 1 km from location'},
    {data: 'Breakfast & dinner included', label: 'Breakfast & dinner included'},
    {data: 'Free cancellation', label: 'Free cancellation'}



]

</script>

<template>

  <section class="md:container mx-auto px-10 py-12 flex flex-col items-center gap-10 text-black font-montserrat">

    <main class="grid grid-cols-4 items-start gap-12 w-full">

      <aside class="w-full col-span-1 h-full">

        <ListingFormCard label="Filter By ">

          <h1 class="font-bold">Popular filters</h1>

          <!-- <div class="flex gap-3 mb-3">
              <input 
                type="checkbox" 
                id="checkbox-confirm" value="" 
                v-model="updatesEmailConfirmation"
                class="w-5 h-5 text-blue-600">

              <label for="checkbox-confirm" 
                     class="text-sm ">
                     Apartments
              </label>
              <p 
                  class="text-sm ">
                  20
              </p>
          </div>

                    <div class="flex gap-3 mb-3">
              <input 
                type="checkbox" 
                id="checkbox-confirm" value="" 
                v-model="updatesEmailConfirmation"
                class="w-5 h-5 text-blue-600">

              <label for="checkbox-confirm" 
                     class="text-sm ">
                     Apartments
              </label>
              <p 
                  class="text-sm ">
                  20
              </p>
          </div> -->

            <SharedCheckboxGroup
                v-model="popular"
                row_6
                class="items-start"
                :options="popularFilter"
                />

                <!-- <div class="flex-col">
                  <p>20</p>
                <p>20</p>
                <p>20</p>
                </div> -->

         



        </ListingFormCard>

        <HotelMap />

      </aside>

      <section class="w-full col-span-3 flex flex-col relative">

        <div class="grid grid-cols-3 items-start gap-12 w-full mb-10">

          <div class="w-full col-start-1 h-full">

            <h1 class="font-bold text-3xl mb-10">120 Results Found</h1>

            <SharedDropDown 
                    label="" 
                    :options="['Sort by: Top picks for long stays']" 
                    class=" bg-darkblue text-white font-montserrat " />

          </div>

          <div class="w-full col-start-3 h-full ">
            <HotelMap />

          </div>

        </div>

        <SearchHotelCard/>

        <SearchHotelCard/>

        <SearchHotelCard/>

        <SearchHotelCard/>

        <SearchHotelCard/>

        <SearchHotelCard/>




      </section>

    </main>

  </section>

</template>


<style scoped>

.gradient-text {
  background-clip: text;
  color: transparent;
}

</style>

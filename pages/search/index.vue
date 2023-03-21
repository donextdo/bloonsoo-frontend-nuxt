<script setup>

definePageMeta({
  layout: 'mini-searchbar'
})

const route = useRoute()

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

const hotels = ref([])

onMounted(async () => {
  await serachHotels()
})

async function serachHotels() {

  const seachText = route.query.query

  try {
    const data = await $fetch(`${baseUrl}/api/hotel/search`, {
            method: 'POST',
            body: { query: seachText }
        })

    hotels.value = data
  }
  catch(error) {
    console.log(error)
  }
}

// const popularFilter = [
//     {data: 'Apartments', label: 'Apartments'}, 
//     {data: 'Book without credit card', label: 'Book without credit card'}, 
//     {data: 'Hotels', label: 'Hotels'}, 
//     {data: 'No prepaymentl', label: 'No prepaymentl'},
//     {data: 'Holiday homes', label: 'Holiday homes'},
//     {data: 'Less than 1 km from location', label: 'Less than 1 km from location'},
//     {data: 'Breakfast & dinner included', label: 'Breakfast & dinner included'},
//     {data: 'Free cancellation', label: 'Free cancellation'}
// ]

</script>

<template>

  <section class="md:container mx-auto px-10 py-12 flex flex-col items-center gap-10 text-black font-montserrat">

    <main class=" w-full md:px-32">

      <section class="flex flex-col gap-6 relative">

        <!-- <div class="grid grid-cols-3 items-start gap-12 w-full mb-10"> -->

          <!-- <div class="w-full col-span-3 h-full"> -->

            <h1 class="font-bold text-lg md:text-3xl mb-10">{{ hotels.length }} Results Found for "{{ route.query.query }}"</h1>

            <!-- <SharedDropDown 
                    label="" 
                    :options="['Sort by: Top picks for long stays']" 
                    class=" bg-darkblue text-white font-montserrat " /> -->

          <!-- </div> -->

          <!-- <div class="w-full col-start-3 h-full ">
            <HotelMap />
          </div> -->

        <!-- </div> -->

        <SearchHotelCard v-for="(hotel, index) in hotels" :key="index" :hotel="hotel"/>

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

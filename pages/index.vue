<script setup>

const cta1 = {
    title: 'Try Hosting With Us',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

const cta2 = {
    title: 'Browse For More Properties',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

</script>


<template>

    <div>

        <!-- <Navbar /> -->

        <Hotels />

        <WhyChooseUs />

        <Hotels title="Top Rated Properties" topRated/>

        <Cta :content="cta1"> 

            <template v-slot:image>
                <img src="../assets/cta/cta_image1.jpg" 
                loading="lazy" 
                class="w-full h-full object-cover" 
                alt="">
            </template>

            <template v-slot:button>
                <nuxt-link to="/listing/"
                class="py-4 px-10 inline-block rounded-full 
                w-max text-sm text-black 
                font-bold bg-gradient-to-b
                from-darkyellow to-semidarkyellow
                hover:from-semidarkyellow
                hover:to-darkyellow">
                    Become A Host
                </nuxt-link>
            </template>
            
        </Cta>

        <Featured />

        <Cta :content="cta2">

            <template v-slot:image>
                <img src="../assets/cta/cta_image2.jpg" 
                loading="lazy" 
                class="w-full h-full object-cover" 
                alt="">
            </template>

            <template v-slot:button>
                <nuxt-link to="#" 
                class="py-4 px-10 inline-block rounded-full 
                w-max text-sm text-black 
                font-bold bg-gradient-to-b 
                from-darkyellow to-semidarkyellow 
                hover:from-semidarkyellow 
                hover:to-darkyellow">
                    Find A Property
                </nuxt-link>
            </template>
            
        </Cta>

        <Tips />

        <Testimonials />

        <Cta noCard>

            <template v-slot:image>
                <img src="../assets/cta/cta_image3.jpg" 
                loading="lazy" 
                class="w-full h-full object-cover" 
                alt="">
            </template>

        </Cta>

        <!-- <Newsletter /> -->

        <!-- <Footer /> -->

    </div>
  
</template>
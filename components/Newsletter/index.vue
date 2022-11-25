<template>
    
    <section class="w-full py-10 bg-lightblue font-montserrat">
   
        <div class="md:container md:mx-auto px-32 ">
            
            <div class="flex items-center gap-16">
                <div>
                    <h3 class="text-xl text-black font-bold">
                        NEWSLETTER
                    </h3>

                    <p class="text-sm text-black">
                        Stay Upto Date
                    </p>
                </div>

                <div class="w-full h-max relative">
                    <input type="text" class="w-full px-4 py-3 bg-white border border-gray-400 rounded-full text-black text-sm  focus:outline-none" placeholder="Your Email Here">

                    <button class="absolute right-0 top-0 p-2 h-full aspect-square rounded-full grid place-items-center bg-gradient-to-b from-darkyellow to-semidarkyellow hover:from-semidarkyellow hover:to-darkyellow">
                        <NewsletterLogo />
                    </button>
                </div>

            </div>

            <div class="flex w-full items-center justify-center mt-4 gap-3">
                <input type="checkbox" class="w-4 h-4">

                <p class="text-xs text-black font-semibold">
                    Send me a link to get the FREE Bloonsoo app!
                </p>
            </div>

        </div>
    </section>

</template>
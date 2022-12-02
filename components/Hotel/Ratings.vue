<template>
    
    <div class="w-full bg-gray-200 flex flex-col gap-4 rounded-lg shadow-md p-6 font-montserrat text-black">

          <div class="text-lg font-bold flex justify-between items-center gap-4">
            
            <h2>
                Ratings
            </h2>
            
            <div class="flex items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-base"/>

                <p>4.0</p>
            </div>

            

          </div>

          <div class="w-full flex flex-col">

            <HotelRatingBar label="Facilities" rating="5.0"/>
            <HotelRatingBar label="Communication" rating="4.0"/>
            <HotelRatingBar label="Hygiene" rating="5.0"/>
            <HotelRatingBar label="Location of Property" rating="4.5"/>
            <HotelRatingBar label="Value for Money" rating="4.0"/>

          </div>
        
    </div>

</template>
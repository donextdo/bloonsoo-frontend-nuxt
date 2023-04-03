<template>
    
    <div>
        <Navbar short>
            <NavbarSearch class="hidden md:block" />
            <NavbarMiniSearch class="block md:hidden" />
        </Navbar>

        <div>
            <slot />
        </div>

        <Newsletter />

        <Footer />
    </div>

</template>
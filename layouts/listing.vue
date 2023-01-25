<template>
    
    <div>
        <Navbar short>
            <NavbarSearch />
        </Navbar>

        <div>
            <slot />
        </div>

        <Newsletter />

        <Footer />
    </div>

</template>

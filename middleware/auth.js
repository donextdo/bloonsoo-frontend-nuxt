import { useAuthStore } from "~~/stores/authStore";
import { useRouter } from "vue-router";
import { useLocalStorage } from "@vueuse/core";

const authStore = useAuthStore()


// export default function() {
//     if(!authStore.user) {
//         const router = useRouter()
//         router.push('/login')
//     }
// }

// export default function(context) {
//     if(!authStore.user) {
//         context.app.router.push('/login')
//     }
// }

export default defineNuxtRouteMiddleware( async (to) => {
    // await authStore.getAuthUser()
    const token = useLocalStorage('token').value
    if(!token) {
        console.log('first')
        return '/login'
    }
})  

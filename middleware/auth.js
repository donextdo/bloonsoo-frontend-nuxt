import { useAuthStore } from "~~/stores/authStore";
import { useRouter } from "vue-router";

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
    await authStore.getAuthUser()
    if(!authStore.user) {
        return '/login'
    }
})

import { useAuthStore } from "~~/stores/authStore";

const authStore = useAuthStore()

export default function(context) {
    try {
        authStore.getAuthUser()
    } catch (error) {
        console.log(error)
    }
}
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

let development = process.env.NODE_ENV !== 'production'

const baseUrl = development ? 'http://localhost:9000' :' http://api.marriextransfer.com'

export const useAuthStore = defineStore('auth', {
    state: () => ({  
        user: null 
    }),

    getters: {
        getToken() {
            return useLocalStorage('token')
        }
    },

    actions: {
        async getAuthUser() {
            try {
                
                this.user = await $fetch(`${baseUrl}/api/auth/user`, {
                    headers: {
                        authorization: `Bearer ${useLocalStorage('token').value}`
                    }
                })

                console.log(this.user)

            } catch (error) {
                throw error
            }
        },

        async nuxtServerInit(context) {
            try {
                if (token) {
                    const user = await $fetch(`${baseUrl}/api/auth/user`, {
                        headers: {
                            authorization: `Bearer ${useLocalStorage('token').value}`
                        }
                    })
                    this.user = user
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})

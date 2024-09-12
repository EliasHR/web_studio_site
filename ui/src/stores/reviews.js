import axios from 'axios'
import { defineStore } from 'pinia'

const apiUrl = import.meta.env.VITE_VUE_APP_API_URL

export const useReviewStore = defineStore('review', {
    state: () => ({
        reviews: {}
    }),
    actions: {
        async getReviews() {
            try {
                const response = await axios.get(apiUrl + '/reviews/')
                this.reviews = response.data
            } catch (e) {
                console.log(e)
            }
        }
    }
})

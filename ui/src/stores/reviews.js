import axios from 'axios'
import { defineStore } from 'pinia'

const apiUrl = import.meta.env.VITE_VUE_APP_API_URL

export const useReviewStore = defineStore('review', {
    state: () => ({
        reviews: {},
        reviewsIsLoading: false
    }),
    actions: {
        async getReviews() {
            try {
                this.reviewsIsLoading = true
                const response = await axios.get(apiUrl + '/reviews/')
                this.reviews = response.data
                this.reviewsIsLoading = false
            } catch (e) {
                console.log(e)
            }
        }
    }
})

import axios from 'axios'
import { defineStore } from 'pinia'

const apiUrl = import.meta.env.VITE_VUE_APP_API_URL

export const useProjectStore = defineStore('projects', {
    state: () => ({
        projects: [],
        project: []
    }),
    actions: {
        async getProjects() {
            try {
                const response = await axios.get(apiUrl + '/projects/')
                this.projects = response.data
            } catch (e) {
                console.log(e)
            }
        },
        async getProject(project_url) {
            try {
                const response = await axios.get(project_url)
                this.project = response.data
            } catch (e) {
                console.log(e)
            }
        }
    }
})

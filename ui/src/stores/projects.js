import axios from 'axios'
import { defineStore } from 'pinia'

const apiUrl = import.meta.env.VITE_VUE_APP_API_URL

export const useProjectStore = defineStore('projects', {
    state: () => ({
        projects: [],
        projectsIsLoading: false,
        project: [],
        projectIsLoading: false
    }),
    actions: {
        async getProjects() {
            try {
                this.projectsIsLoading = true
                const response = await axios.get(apiUrl + '/projects/')
                this.projects = response.data
                this.projectsIsLoading = false
            } catch (e) {
                console.log(e)
            }
        },
        async getProject(project_url) {
            try {
                this.projectIsLoading = true
                const response = await axios.get(project_url)
                this.project = response.data
                this.projectIsLoading = false
            } catch (e) {
                console.log(e)
            }
        }
    }
})

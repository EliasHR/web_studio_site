<template>
    <section class="projects">
        <div class="container">
            <h2-custom class="projects__title">Наши проекты</h2-custom>
            <div class="projects__wrapper">
                <div class="projects__item" v-if="projectsStore.projects.length > 0">
                    <a href="#" class="projects__link">
                        <div
                            class="projects__item-bg"
                            :style="{ backgroundImage: `url(${projectsStore.projects[0].cover})` }"
                        >
                            <h3
                                class="projects__item-title"
                                :class="{
                                    'projects__item-title_white':
                                        projectsStore.projects[0].title_alt_color
                                }"
                            >
                                {{ this.projectsStore.projects[0].title }}
                            </h3>
                        </div>
                    </a>
                </div>

                <div
                    class="projects__item"
                    v-for="(project, index) in this.projectsStore.projects.slice(1)"
                    :key="index"
                >
                    <a href="#" class="projects__link">
                        <div
                            class="projects__item-bg"
                            :style="{ backgroundImage: `url(${project.cover})` }"
                        >
                            <h3
                                class="projects__item-title"
                                :class="{ 'projects__item-title_white': project.title_alt_color }"
                            >
                                {{ project.title }}
                            </h3>
                        </div>
                    </a>
                </div>

                <div class="projects__item">
                    <div class="projects__item-bg projects__request">
                        <h3 class="projects__item-title projects__item-title_white">
                            Какая задача у вас?
                        </h3>
                        <img
                            class="projects__request-gear"
                            src="@/assets/img/projects_gear.png"
                            alt="Шестерёнка"
                            width="213px"
                            height="236px"
                        />
                        <a
                            href="#"
                            class="projects__request-button projects__link projects__item-title_white"
                        >
                            Оставить заявку
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import H2Custom from '@/components/ui/typographics/H2Custom.vue'
import { useProjectStore } from '@/stores/projects'

export default {
    name: 'projects-comp',
    components: {
        H2Custom
    },
    setup() {
        const projectsStore = useProjectStore()
        return {
            projectsStore
        }
    },
    mounted() {
        this.projectsStore.getProjects()
    }
}
</script>

<style lang="scss" scoped>
.projects {
    &__title {
        margin-bottom: 24px;
    }
    &__wrapper {
        display: grid;
        gap: 28px;
        grid-template-columns: repeat(3, auto);
        grid-template-rows: repeat(3, auto);
    }
    &__item {
        height: 336px;
        background-color: var(--primary-seryy);
        border-radius: 8px;
    }
    &__item-bg {
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 24px;
        box-sizing: border-box;
        border-radius: 8px;
        height: 100%;
        width: 100%;
        border: 1px solid transparent;
        &:hover {
            border-color: var(--primary-accent);
        }
    }
    & .projects__item:first-child {
        grid-column: span 2;
    }
    &__item-title {
        margin: 0;
        font: 600 16px / 1.75 var(--font-family);
        color: var(--primary-dark-blue);
        max-width: 316px;
    }
    &__item-title_white {
        color: var(--primary-white);
    }
    &__link {
        &:hover {
            text-decoration: underline;
        }
    }
    &__request {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    &__request-gear {
        align-self: center;
    }
    &__request-button {
        align-self: flex-end;
        font: 400 14px / 1.71429 var(--font-family);
        text-decoration: underline;
        text-decoration-skip-ink: none;
        text-align: right;
        color: var(--primary-white);
        margin-bottom: 18px;
        margin-right: 18px;
    }
}
</style>

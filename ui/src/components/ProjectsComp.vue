<template>
    <section class="projects" id="examples">
        <div class="container">
            <h2-custom class="projects__title">Наши проекты</h2-custom>
            <div class="projects__wrapper" v-if="!projectsStore.projectsIsLoading">
                <div
                    class="projects__item"
                    v-if="projectsStore.projects.length > 0"
                    @click="
                        handleClick(
                            projectsStore.projects[0].enable_detail,
                            projectsStore.projects[0].url
                        )
                    "
                >
                    <div
                        class="projects__item-bg"
                        :style="{
                            backgroundImage: `url(${getCoverImage(projectsStore.projects[0])})`
                        }"
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
                </div>

                <div
                    class="projects__item"
                    v-for="(project, index) in this.projectsStore.projects.slice(1)"
                    :key="index"
                    @click="handleClick(project.enable_detail, project.url)"
                >
                    <div
                        class="projects__item-bg"
                        :style="{ backgroundImage: `url(${getCoverImage(project)})` }"
                    >
                        <h3
                            class="projects__item-title"
                            :class="{ 'projects__item-title_white': project.title_alt_color }"
                        >
                            {{ project.title }}
                        </h3>
                    </div>
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
                        <button
                            class="projects__request-button projects__link projects__item-title_white"
                            @click="showDialogForm = true"
                        >
                            Оставить заявку
                        </button>
                    </div>
                </div>
            </div>
            <loading-comp v-else />
        </div>
    </section>
    <dialog-form
        v-if="showDialogForm"
        @close="showDialogForm = false"
        :type="'app'"
        :blackText="true"
    >
        Отправить
    </dialog-form>
    <dialog-projects v-if="showDialogProject" @close="showDialogProject = false">
        Отправить
    </dialog-projects>
</template>

<script>
import DialogForm from '@/components/ui/dialog/DialogForm.vue'
import DialogProjects from '@/components/ui/dialog/DialogProject.vue'
import LoadingComp from '@/components/ui/LoadingComp.vue'
import H2Custom from '@/components/ui/typographics/H2Custom.vue'
import { useProjectStore } from '@/stores/projects'

export default {
    name: 'projects-comp',
    components: {
        H2Custom,
        DialogForm,
        DialogProjects,
        LoadingComp
    },
    data() {
        return {
            currentBreakpoint: '',
            showDialogForm: false,
            showDialogProject: false
        }
    },
    setup() {
        const projectsStore = useProjectStore()
        projectsStore.getProjects()
        return {
            projectsStore
        }
    },
    mounted() {
        //this.projectsStore.getProjects()
        // Проверка ширины экрана при загрузке
        this.checkScreenWidth()

        // Добавление слушателя для изменения ширины экрана
        window.addEventListener('resize', this.checkScreenWidth)
    },
    beforeUnmount() {
        // Удаление слушателя при уничтожении компонента
        window.removeEventListener('resize', this.checkScreenWidth)
    },
    methods: {
        checkScreenWidth() {
            const width = window.innerWidth
            if (width >= 1200) {
                this.currentBreakpoint = '1200'
            } else if (width >= 992) {
                this.currentBreakpoint = '992'
            } else if (width >= 768) {
                this.currentBreakpoint = '768'
            } else if (width >= 575) {
                this.currentBreakpoint = '575'
            } else if (width >= 400) {
                this.currentBreakpoint = '400'
            } else {
                this.currentBreakpoint = '320'
            }
        },
        getCoverImage(project) {
            switch (this.currentBreakpoint) {
                case '1200':
                    return project.cover_webp ? project.cover_webp : project.cover
                case '992':
                    return project.cover_960_webp ? project.cover_960_webp : project.cover_960
                case '768':
                    return project.cover_740_webp ? project.cover_740_webp : project.cover_740
                case '575':
                    return project.cover_560_webp ? project.cover_560_webp : project.cover_560
                case '400':
                    return project.cover_380_webp ? project.cover_380_webp : project.cover_380
                case '320':
                    return project.cover_314_webp ? project.cover_314_webp : project.cover_314
            }
        },
        handleClick(enable_detail, project_url) {
            if (enable_detail) {
                this.projectsStore.getProject(project_url)
                this.showDialogProject = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.projects {
    scroll-margin-top: 96px;
    min-height: 1142px;
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
        cursor: pointer;
        &:hover .projects__item-title {
            text-decoration: underline;
        }
    }
    &__item-bg {
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 24px;
        box-sizing: border-box;
        border-radius: 8px;
        height: 100%;
        width: 100%;
        //border: 1px solid transparent;
        &:hover {
            box-shadow: 0 0 10px 2px #268eed;
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
        @include reset-button;
    }
}

@media (max-width: 1199.99px) {
    .projects {
        min-height: 1870px;
        &__wrapper {
            gap: 28px;
            grid-template-columns: repeat(2, auto);
            grid-template-rows: auto;
        }

        & .projects__item:last-child {
            grid-column: 2;
        }
    }
}

@media (max-width: 991.99px) {
    .projects {
        min-height: 2862px;
        scroll-margin-top: 64px;
        &__title {
            text-align: center;
        }
        &__wrapper {
            gap: 16px;
            grid-template-columns: auto;
            grid-template-rows: auto;
            //grid-auto-rows: auto;
        }
        & .projects__item:first-child {
            grid-column: 1;
        }
        & .projects__item:last-child {
            grid-column: 1;
        }
    }
}

@media (max-width: 767.99px) {
}

@media (max-width: 574.99px) {
    .projects {
        &__item:nth-child(2) {
            order: 5;
        }
        & .projects__item:last-child {
            order: 6;
        }
    }
}

@media (max-width: 399.99px) {
    .projects {
        min-height: 2686px;
        &__item {
            height: 314px;
        }
    }
}
</style>

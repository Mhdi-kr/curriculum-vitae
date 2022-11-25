<template>
    <main class="container mx-auto p-4 md:pt-8 md:px-56">
        <section class="mb-4">
            <h1 class="text-4xl">{{ resume.basics.name }} - {{ resume.basics.label }}</h1>
        </section>
        <hr class="mb-4" />
        <resume-section title="summary">
            {{ resume.basics.summary }}
        </resume-section>
        <resume-section title="experience">
            <ul class="list-disc mb-4" v-for="work in resume.work" :key="String(work.url)">
                <li>
                    <h3 class="mb-1 text-lg">
                        <span class="font-bold">
                            <span v-if="work.url">
                                <a target="_blank" :href="work.url">
                                    {{ work.name }}
                                </a>
                            </span>
                            <span v-else>
                                {{ work.name }}
                            </span>
                        </span>
                        <span class="text-sm"> ({{ work.startDate }} - {{ work.endDate }}) </span>
                    </h3>
                    <ul>
                        <li v-for="highlight in work.highlights">
                            {{ highlight }}
                        </li>
                    </ul>
                </li>
            </ul>
        </resume-section>
        <resume-section title="projects">
            <ul>
                <li class="flex flex-col mb-1" v-for="project in resume.projects">
                    <span class="font-bold">{{ project.name }}</span>
                    <span>{{ project.description }}</span>
                    <ul class="list-disc">
                        <li v-for="highlight in project.highlights">
                            {{ highlight }}
                        </li>
                    </ul>
                </li>
            </ul>
        </resume-section>
        <resume-section title="publications">
            <ul>
                <li class="flex flex-col" v-for="publication in resume.publications">
                    <span class="font-bold">
                        <a v-if="publication.url" :href="publication.url">
                            {{ publication.name }}
                        </a>
                        <span v-else>
                            {{ publication.name }}
                        </span>
                    </span>
                    <span>
                        {{ publication.summary }}
                    </span>
                </li>
            </ul>
        </resume-section>
        <resume-section title="education">
            <ul>
                <li v-for="education in resume.education">
                    <span class="font-bold">
                        {{ education.institution }}
                    </span>
                    <span class="text-sm"> ({{ education.startDate }} - {{ education.endDate }}) </span>
                    <span>{{ education.studyType }}</span>
                </li>
            </ul>
        </resume-section>
        <resume-section title="skills">
            <ul>
                <li v-for="skill in resume.skills[0].keywords">{{ skill }}</li>
            </ul>
        </resume-section>
        <resume-section title="interests">
            <ul>
                <li v-for="interest in resume.interests">{{ interest.name }}</li>
            </ul>
        </resume-section>
        <resume-section title="contact">
            <address>
                {{ resume.basics.location.address }}
            </address>
            <address>
                <a :href="'mailto:' + resume.basics.email">
                    {{ resume.basics.email }}
                </a>
            </address>
        </resume-section>
    </main>
</template>

<script lang="ts" setup>
import resumeJson from "./../assets/resume.json";
import { useHead } from "@vueuse/head";
type ResumeSchema = typeof resumeJson;
const resume: ResumeSchema = resumeJson;

useHead({
    title: "Mahdi Karimi | Resume",
    meta: [
        {
            name: "description",
            content: resume.basics.summary,
        },
    ],
});
</script>

<template>
    <main class="container mx-auto p-8 md:pt-8 md:px-56 text-sm md:text-base">
        <section class="mb-4">
            <h1 class="flex flex-col">
                <span class="text-4xl">
                    {{ resume.basics.name }}
                </span>
                <span class="text-lg">
                    {{ resume.basics.label }}
                </span>
            </h1>
        </section>
        <hr class="mb-4" />
        <resume-section title="summary">
            <span>
                {{ resume.basics.summary }}
            </span>
        </resume-section>
        <resume-section title="experience">
            <ul class="mb-4" v-for="work in resume.work" :key="String(work.url)">
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
                    <ul class="list-disc">
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
        <resume-section title="volunteer">
            <ul>
                <li v-for="vol in resume.volunteer">
                    <div>
                        <span class="font-bold mb-1">{{ vol.organization }}</span>
                        <span class="text-sm"> ({{ vol.startDate }} - {{ vol.endDate }}) </span>
                    </div>
                    <span>{{ vol.summary }}</span>
                    <ul class="list-disc">
                        <li v-for="highlight in vol.highlights">
                            <span>{{ highlight }}</span>
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

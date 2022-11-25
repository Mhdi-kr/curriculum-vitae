import { ViteSSG } from 'vite-ssg'

import './style.css'

import { createMemoryHistory, createRouter } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'

const routes = generatedRoutes
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

import App from './App.vue'

export const createApp = ViteSSG(
    App,
    { routes },
    ({ app, router, routes, isClient, initialState }) => {
      // install plugins etc.
    },
  )
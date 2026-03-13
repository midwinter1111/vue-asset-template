import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'
import SamplePage from '../views/SamplePage.vue'

/**
 * アプリケーション内のパス定義
 * コンポーネント側で router.push(APP_PATH.SAMPLE) のように利用します
 */
export const APP_PATH = {
  ROOT: '/',
  SAMPLE: '/sample',
} as const

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: APP_PATH.ROOT,
      name: 'home',
      component: HelloWorld
    },
    {
      path: APP_PATH.SAMPLE,
      name: 'sample',
      component: SamplePage
    }
  ]
})

export default router

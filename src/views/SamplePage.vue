<script setup lang="ts">
import { useRouter } from 'vue-router'
import { APP_PATH } from '../router'

const router = useRouter()

const goBack = () => {
  router.push(APP_PATH.ROOT)
}

// エラー発生用関数
const triggerError = () => {
  throw new Error('テスト用の意図的なエラーが発生しました。')
}
</script>

<template>
  <div class="about">
    <h1>Sample Page</h1>
  </div>
  <div class="actions">
      <button @click="goBack">Back to Home</button>
      <button @click="triggerError" style="background-color: #ffcccc; margin-left: 10px;">
        Trigger Error
      </button>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.actions {
  margin-top: 20px;
}
</style>

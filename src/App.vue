<template>
  <div>
    <vs-button ref="buttonRef" type="primary">测试按钮</vs-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import VsButton from '@/components/Button/Button.vue'
import type { ButtonInstance } from '@/components/Button/types'
const buttonRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref)
  }
})
</script>

<style scoped></style>

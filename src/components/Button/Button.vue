<template>
  <button
    ref="self"
    :class="{
      [`vs-button`]: true,
      [`vs-button--${type}`]: type === 'default' ? false : true,
      [`vs-button--${size}`]: size === 'default' ? false : true,
      'is-plain': plain,
      'is-circle': circle,
      'is-round': round,
      'is-disabled': disabled
    }"
    :disabled="disabled"
    :type="nativeType"
    :autofocus="autofocus"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonPros } from './types'

const self = ref<HTMLButtonElement>()

defineOptions({
  name: `VsButton`
})

defineExpose({
  ref: self
})

withDefaults(defineProps<ButtonPros>(), {
  type: 'default',
  size: 'default',
  plain: false,
  circle: false,
  round: false,
  disabled: false,
  nativeType: 'button',
  autofocus: false
})
</script>

<style>
.vs-button {
  background: var(--main-bg-color);
}
</style>

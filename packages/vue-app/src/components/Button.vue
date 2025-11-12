<template>
  <button @click="emit('buttonClick')">
    <slot name="children"></slot>
    {{ props.label }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  label: String,
})

const emit = defineEmits(['buttonClick'])
</script>

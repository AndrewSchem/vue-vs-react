<template>
  <Button label="Increment" @button-click="countStore.increment">
    <template #children>
      <span>➕</span>
    </template>
  </Button>

  <Button label="Decrement" @button-click="countStore.decrement">
    <template #children>
      <span>➖</span>
    </template>
  </Button>

  <Button label="Reset" @button-click="countStore.reset">
    <template #children>
      <span>🔄️</span>
    </template>
  </Button>

  <h1>Count: {{ countStore.count }}</h1>
  <h1>Double Count: {{ doubleCount }}</h1>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Button from './Button.vue'
import { useCounterStore } from '@/stores/counter'

const countStore = useCounterStore()
const doubleCount = computed(() => {
  return countStore.count * 2
})
</script>

<script setup lang="ts">
defineProps<{ count: number }>();
</script>

<template>
  <div class="flex">
    <h4>{{ `Currently there are ${count} words in the list` }}</h4>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  gap: 120px;
}
</style>

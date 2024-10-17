<script setup lang="ts">
import Select from "primevue/select";
import { ref } from "vue";

const selectedCity = ref(null);
const cities = ref([
  { name: "RU", code: "ru" },
  { name: "EN", code: "EN" },
]);
</script>

<template>
  <div class="flex">
    <h2>{{ "Pealim words list" }}</h2>
    <Select
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      placeholder="Lang"
    />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  gap: 120px;
}
</style>

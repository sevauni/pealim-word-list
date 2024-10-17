<script setup lang="ts">
import CurrentCount from "./CurrentCount.vue";
import PealimTitle from "./PealimTitle.vue";
import Button from "primevue/button";
import WordTable from "./WordTable.vue";
</script>

<template>
  <div class="main">
    <PealimTitle />
    <CurrentCount :count="0" />
    <WordTable />
    <div>
      <Button label="Download table" />
    </div>
  </div>
</template>

<style scoped>
.main {

  height: 100%;
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>

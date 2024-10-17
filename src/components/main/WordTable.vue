<script setup lang="ts">
import CurrentCount from "./CurrentCount.vue";
import PealimTitle from "./PealimTitle.vue";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row"; // optional
import { ref } from "vue";

const customers = ref([
  {
    name: "John",
    country: { name: "USA" },
    company: "Company A",
    representative: { name: "John Doe" },
  },
  {
    name: "Jane",
    country: { name: "Canada" },
    company: "Company B",
    representative: { name: "Jane Doe" },
  },
]);
</script>

<template>
  <DataTable
    :value="customers"
    paginator
    :rows="10"
    :rowsPerPageOptions="[5, 10, 20, 50]"
    tableStyle="min-width: 50rem"
  >
    <Column field="name" header="Name" style="width: 25%"></Column>
    <Column field="country.name" header="Country" style="width: 25%"></Column>
    <Column field="company" header="Company" style="width: 25%"></Column>
    <Column
      field="representative.name"
      header="Representative"
      style="width: 25%"
    ></Column>
  </DataTable>
</template>

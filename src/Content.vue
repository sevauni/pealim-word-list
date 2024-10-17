<script setup lang="ts">
import Button from "primevue/button";

import { useToast } from "primevue/usetoast";
import { ref } from "vue";
import { ADD_BUTTON_TEXT, ADD_BUTTON_TEXT_COPIED } from "./const/title.const";
import { getInfo } from "./utils/content.utils";
const toast = useToast();
const isCopied = ref(false);
const onClick = async () => {
  toast.add({ severity: "success", summary: "Success", detail: "Added" });
  getInfo();
  isCopied.value = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  isCopied.value = false;
};
</script>

<template>
  <div>
    <Button
      :label="isCopied ? ADD_BUTTON_TEXT_COPIED : ADD_BUTTON_TEXT"
      @click="onClick"
      :disabled="isCopied"
    />
  </div>
</template>

// import { getInfo } from "./utils/content.utils";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import Content from "./Content.vue";
import { createApp } from "vue";
import ToastService from 'primevue/toastservice';

console.log("Content script loaded!");
const MAX_ATTEMPTS = 30;

const mountButton = async () => {
  let leadElement: Element | null;
  let attempts = 0;

  do {
    attempts++;
    if (attempts > MAX_ATTEMPTS) {
      console.log("Max attempts reached, aborting");
      return;
    }
    leadElement = document.querySelector(".lead");
    await new Promise((resolve) => setTimeout(resolve, 200));
    console.log("Waiting for lead element Attempt: ", attempts);
  } while (!leadElement);

  if (!leadElement) {
    console.log("Lead element not found");
    return;
  }

  const app = createApp(Content);
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  });
  app.use(ToastService);
  const appElement = document.createElement("div");
  appElement.id = "app";
  leadElement.appendChild(appElement);
  app.mount("#app");
};

//////////////
mountButton();

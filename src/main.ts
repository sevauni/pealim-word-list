import "./style.css";
import App from "./App.vue";

// createApp(App).mount('#app')
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.mount("#app");

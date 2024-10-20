import { ADD_BUTTON_TEXT } from "./const/title.const";
import { getInfo } from "./utils/content.utils";
import Toastify from "toastify-js";
const MAX_ATTEMPTS = 30;

const mountButton = async () => {
  let leadElement: Element | null;
  let attempts = 0;

  do {
    attempts++;
    if (attempts > MAX_ATTEMPTS) {
      console.warn("Max attempts reached, aborting");
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
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css";
  document.head.appendChild(link);

  //create a button with the title Copy to clipboard
  const button = document.createElement("button");
  button.innerText = ADD_BUTTON_TEXT;
  button.id = "copyButton";
  button.style.backgroundColor = "#4CAF50";
  button.style.color = "white";
  button.style.padding = "10px 24px";
  button.style.fontSize = "16px";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.borderRadius = "5px";
  button.style.margin = "10px";

  //append the button to the lead element

  leadElement.appendChild(button);
  button.addEventListener("click", () => {
    getInfo();

    Toastify({
      text: "Copied!",
      duration: 2000,
      style: {
        background: "#4CAF50",
        color: "white",
        borderRadius: "5px",
        
      },
    }).showToast();
  });
};

//////////////
mountButton();

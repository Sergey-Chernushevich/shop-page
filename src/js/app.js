import * as flsFunctions from "./modules/functions.js";
import * as burgerFunctions from "./burger.js";
import { createHeaderHideOnScroll } from "./header-scroll-behavior.js";
import { initCounter } from "./basket.js";
import Modal from "./modal.js";
import { fetchData } from "./fetch.js";

flsFunctions.isWebp();
burgerFunctions.burgerFunction();

const header = document.getElementById("header");
const hideOnScroll = new createHeaderHideOnScroll(header);
hideOnScroll.init();

document.addEventListener("DOMContentLoaded", () => {
  initCounter("basket-amount", "add-to-basket");
});

document.addEventListener("DOMContentLoaded", () => {
  Modal.init("modal");

  document.getElementById("info-button").addEventListener("click", async () => {
    const data = await fetchData();
    let content = '<table style="width: 100%; border-collapse: collapse;">';
    for (const [key, value] of Object.entries(data)) {
      content += `
        <tr>
          <td style="border: 1px solid #ccc; padding: 8px; font-weight: bold;">${key}</td>
          <td style="border: 1px solid #ccc; padding: 8px;">${
            Array.isArray(value) ? value.join(", ") : value
          }</td>
        </tr>
      `;
    }

    Modal.open(content);
  });
});

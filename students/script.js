const id = new URLSearchParams(location.search).get("id") || 22

const aboutTemplate = ""

import { loadData } from "./data-handler.js";

document.getElementById("back").addEventListener("click", () => {
    window.location.href = "../index.html";
    console.log("back")
})

const data = await loadData(id)

console.log(data)
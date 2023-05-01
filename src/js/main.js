// Import our custom CSS
import "../scss/styles.scss"

// or, specify which plugins you need:
import { Tooltip } from "bootstrap"

console.log("Get boots")
console.log("Add things")

const tooltipTriggerList = document.querySelectorAll("[data-bs-toggle=\"tooltip\"]")
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
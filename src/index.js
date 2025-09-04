// CSS imports
import '../node_modules/modern-normalize/modern-normalize.css'
import "./assets/css/fonts.css"
import "./assets/css/main.css"
import "./assets/css/header-footer.css"

// Script imports
import { main as mainSection } from "./scripts/mainSection"
import { home } from "./scripts/home"

// Append elements to the home section
const homeSection = document.querySelector("main section#home-section div.container");
homeSection.appendChild(home.heading);
homeSection.appendChild(home.headingDescription);
homeSection.appendChild(home.divCard);
homeSection.appendChild(home.asideCard);
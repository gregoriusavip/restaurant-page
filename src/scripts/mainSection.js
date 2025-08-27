import { headerButtons as header } from "./headerButtons";

export const main = (() => {
    const sections = document.getElementById('main').getElementsByTagName('section');   // Get all sections
    let activeSection = getSectionFromButton(header.activeButton);  // Current active button/section

    const onLoad = (() => {
        // Default state of the page on load
        header.onLoad();
        activeSection.classList.toggle("enabled");
    })()

    const setHeaderButtonEvents = (() => {
        const buttons = header.buttonGenerator();
        for (let button of buttons) {
            button.addEventListener("click", (function () {
                header.toggleActive(this);
                const currentSection = getSectionFromButton(this);
                toggleSection(currentSection);
            }));
        }
    })();

    function getSectionFromButton(button) {
        return sections.namedItem(`${button.id}-section`);
    }

    function toggleSection(section) {
        activeSection.classList.toggle("enabled");
        section.classList.toggle("enabled");
        activeSection = section;
    }
})()
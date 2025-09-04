export const headerButtons = (() => {
    const buttons = document.getElementById('header').getElementsByTagName('button');   // Get all header nav button elements
    let activeButton = buttons.namedItem('home');

    const onLoad = (() => {
        // Default state of the page on load
        activeButton.classList.add("active");   // Set home as the activated tab
    });

    function* buttonGenerator() {
        for (let button of buttons) {
            yield button;
        }
    }

    function toggleActive(button) {
        // Toggle button active class
        activeButton.classList.toggle("active");
        button.classList.toggle("active");
        activeButton = button;
    };

    return { activeButton, buttons, onLoad, buttonGenerator, toggleActive };
})();
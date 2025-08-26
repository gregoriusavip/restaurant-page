export const headerButtons = (() => {
    const buttons = document.getElementById('header').getElementsByTagName('button');   // Get all header nav button elements

    let activeButton = buttons.namedItem('home');
    activeButton.classList.add("active");   // Set home as the activated tab when the page is loaded

    for (let button of buttons) {
        button.addEventListener("click", function () {
            // Add on click event handler for each header nav button
            toggleActive(this);
        });
    }

    function getActiveButton() {
        return activeButton;
    }

    function setActiveButton(button) {
        activeButton = button;
    }

    function toggleActive(button) {
        getActiveButton().classList.toggle("active");
        button.classList.toggle("active");
        setActiveButton(button);
    };
})();
export class Card {
    // Create a card element 
    constructor(containerElement, headingText, paragraphText) {
        this.containerElement = document.createElement(containerElement);
        this.containerElement.classList.add("card");
        this.headingText = headingText;
        this.paragraphText = paragraphText;
        this.hElement = document.createElement("h2");
        this.pElement = document.createElement("p");
    }

    get heading() {
        return this.hElement;
    }

    get paragraph() {
        return this.pElement;
    }

    get container() {
        this.#appendToContainer();
        return this.containerElement;
    }

    #appendToContainer() {
        this.hElement.appendChild(document.createTextNode(this.headingText));
        this.pElement.appendChild(document.createTextNode(this.paragraphText));
        this.containerElement.appendChild(this.hElement);
        this.containerElement.appendChild(this.pElement);
    }
}
import "../assets/css/home.css"
import { Card } from "./card.js"

const heading = (() => {
    const element = document.createElement("h1");
    const text = document.createTextNode("WELCOME TO MY FOOD WEBSITE");
    element.appendChild(text);
    element.classList.add("heading")

    return element;
})()

const headingDescription = (() => {
    const element = document.createElement("p");
    const firstPartText = document.createTextNode("Where I put several of my favorite");

    const boldedSecondPartText = document.createElement("span");
    boldedSecondPartText.classList.add("bold");
    boldedSecondPartText.appendChild(document.createTextNode(" Indonesian "));
    const lastPartText = document.createTextNode("food recipes");

    element.appendChild(firstPartText);
    element.appendChild(boldedSecondPartText);
    element.appendChild(lastPartText);
    element.classList.add("heading-description")

    return element;
})()

const divCard = (() => {
    const headingText = "What is this?"
    const paragraphText = ("This page was supposed to be a restaurant page as part of Odin Project course, where I learned how to make websites.\n\n"
        + "But since I had the chance, I thought why not make something a bit more meaningful other than a fake restaurant. This recipe page is what I ended up picking.");

    const card = (new Card("div", headingText, paragraphText)).container;

    return card;
})()

const asideCard = (() => {
    const headingText = "";
    const paragraphText = "If you somehow stumble upon this website, I hope you learn a new favorite recipe :]";

    const card = (new Card("aside", headingText, paragraphText)).container;

    return card
})()

export const home = (() => {
    return { heading, headingDescription, divCard, asideCard }
})()
import { qs } from "./util";

document.addEventListener('DOMContentLoaded', function() {
    const textElem = qs('#textOriginalArea');
    const outputArea = qs('#sentenceListArea');
    const buttonElem = qs('#breakBtn');

    buttonElem.addEventListener('click', function(event) {
        event.preventDefault(); // stop the button from submitting
        
        const text = textElem.value;
        const regex = /[^.!?]+[.!?]+/g;  //not start with .!? but end with .!?
        const sentences = text.match(regex) || [];

        const trimmedsentences = sentences.map((sentence) => sentence.trim());
        outputArea.value = trimmedsentences.join('\n');
    })
    
})
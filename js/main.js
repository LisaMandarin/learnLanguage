import { qs } from "./util";

document.addEventListener('DOMContentLoaded', function() {
    
    // ----- Clear the textarea -----
    const clearOriginalBtn = qs('#clearOriginalBtn');
    const textOriginalArea = qs('#textOriginalArea');
    clearOriginalBtn.addEventListener('click', () => textOriginalArea.innerHTML = "");

    const clearListBtn = qs('#clearListBtn');
    const sentenceListArea = qs('#sentenceListArea');
    clearListBtn.addEventListener('click', () => sentenceListArea.innerHTML = "");

    const clearTranslationBtn = qs('#clearTranslationBtn');
    const translationArea = qs('#translationArea');
    clearTranslationBtn.addEventListener('click', () => translationArea.innerHTML = "");

    const clearNotesBtn = qs('#clearNotesBtn');
    const notesArea = qs('#notesArea');
    clearNotesBtn.addEventListener('click', () => notesArea.innerHTML = "");
    // ----- End of clear the textarea -----

});
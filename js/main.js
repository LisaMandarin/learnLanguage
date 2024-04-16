import { qs } from "./util";

document.addEventListener('DOMContentLoaded', function() {
    
    // ----- Clear the textarea -----
    const clearOriginalBtn = qs('#clearOriginalBtn');
    const textOriginalArea = qs('#textOriginalArea');
    clearOriginalBtn.addEventListener('click', () => textOriginalArea.textContent = "");

    const clearListBtn = qs('#clearListBtn');
    const sentenceListArea = qs('#sentenceListArea');
    clearListBtn.addEventListener('click', () => sentenceListArea.textContent = "");

    const clearTranslationBtn = qs('#clearTranslationBtn');
    const translationArea = qs('#translationArea');
    clearTranslationBtn.addEventListener('click', () => translationArea.textContent = "");

    const clearNotesBtn = qs('#clearNotesBtn');
    const notesArea = qs('#notesArea');
    clearNotesBtn.addEventListener('click', () => notesArea.textContent = "");
    // ----- End of clear the textarea -----

    // ----- Show the hint -----
    const originalHint = qs('#originalHint');
    const originalQ = qs('#originalQ');

    originalQ.addEventListener('click', () => {
        if (originalHint.style.display === 'block') {
            originalHint.style.display = 'none';
        } else {
            originalHint.style.display = 'block';
        }
    });
    // ----- End of show the hint -----


});
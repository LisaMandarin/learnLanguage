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

    // ----- Toggle the hint -----
    const originalHint = qs('#originalHint');
    const originalQ = qs('#originalQ');
    const listHint = qs('#listHint');
    const listQ = qs('#listQ');
    const translationHint = qs('#translationHint');
    const translationQ = qs('#translationQ');
    const notesHint = qs('#notesHint');
    const notesQ = qs('#notesQ');

    originalQ.addEventListener('click', () => {
        if (originalHint.style.display === 'block') {
            originalHint.style.display = 'none';
        } else {
            originalHint.style.display = 'block';
        }
    });

    listQ.addEventListener('click', () => {
        if (listHint.style.display === 'block') {
            listHint.style.display = 'none';
        } else {
            listHint.style.display = 'block';
        }
    });

    translationQ.addEventListener('click', () => {
        if (translationHint.style.display === 'block') {
            translationHint.style.display = 'none';
        } else {
            translationHint.style.display = 'block';
        }
    });

    notesQ.addEventListener('click', () => {
        if (notesHint.style.display === 'block') {
            notesHint.style.display = 'none';
        } else {
            notesHint.style.display = 'block';
        }
    });
    // ----- End of show the hint -----


});
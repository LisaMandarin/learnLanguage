import { qs } from "./util";

document.addEventListener('DOMContentLoaded', function() {
    
    // ----- Clear the textarea -----
    const clearOriginalBtn = qs('#clearOriginalBtn');
    const textOriginalArea = qs('#textOriginalArea');
    clearOriginalBtn.addEventListener('click', () => textOriginalArea.value = "");

    const clearListBtn = qs('#clearListBtn');
    const sentenceListArea = qs('#sentenceListArea');
    clearListBtn.addEventListener('click', () => sentenceListArea.value = "");

    const clearTranslationBtn = qs('#clearTranslationBtn');
    const translationArea = qs('#translationArea');
    clearTranslationBtn.addEventListener('click', () => translationArea.textContent = "");
    // ----- End of clear the textarea -----

});
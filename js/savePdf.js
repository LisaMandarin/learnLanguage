import { qs } from "./util";

const { jsPDF } = window.jspdf;
const saveBtnElem = qs('#saveBtn');

function saveAsPDF() {
    const pdf = new jsPDF();
    
    // get translation area
    const translationContent = qs('#translationArea').innerText;
    pdf.text('Translations:', 10, 10);
    pdf.text(translationContent, 10, 20);

    // calculate translation length and notes starting point
    const translationlines = translationContent.split('\n').length;
    const noteStatePosition = 20 + (translationlines * 20); // 20px padding + 20px per line of translation

    // get notes area
    const notesContent = qs('#notesArea').innerText;
    pdf.text('Notes:', 10, noteStatePosition);
    pdf.text(notesContent, 10, (noteStatePosition+10));

    pdf.save('句句通.pdf');
}

saveBtnElem.addEventListener('click', saveAsPDF)
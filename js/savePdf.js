import { qs } from "./util";
import { jsPDF } from "jspdf";

const saveBtnElem = qs('#saveBtn');

function saveAsPDF() {
    
    const pdf = new jsPDF({
        lineHeight: 1.5 
    });

    pdf.setFont('NotoSansTC-VariableFont_wght');  // set Chinese font

    // Set maximum width for text
    const pageWidth = pdf.internal.pageSize.width;
    const margins = {left: 10, right: 10};
    const maxWidth = pageWidth - (margins.left + margins.right);

    const translationContent = qs('#translationArea').innerText;
    const splitTranslation = pdf.splitTextToSize(translationContent, maxWidth);

    pdf.text('Translations:', margins.left, 10);
    pdf.text(splitTranslation, margins.left, 20);

    // calculate translation length and notes starting point
    const translationLines = translationContent.split('\n').length;
    const noteStateY = 5 + (translationLines * 20); // 5mm padding + 20mm per line of translation

    // get notes area
    const notesContent = qs('#notesArea').innerText;
    const splitNotes = pdf.splitTextToSize(notesContent, maxWidth);
    pdf.text('Notes:', margins.left, noteStateY);
    pdf.text(splitNotes, margins.left, (noteStateY+10));

    pdf.save('句句通.pdf');
    
}



saveBtnElem.addEventListener('click', saveAsPDF)
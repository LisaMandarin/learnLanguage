import { qs } from "./util";

document.addEventListener('DOMContentLoaded', function() {
  const textElem = qs('#sentenceListArea');
  const buttonElem = qs('#translateBtn');
  const outputArea = qs('#translationArea');

  buttonElem.addEventListener('click', async (event) => {
    event.preventDefault();  // stop the button from submitting

    const htmlContent = textElem.innerHTML;
    const parts = htmlContent.split('<br>');
    const sentences = [];

    parts.forEach(part => {
      const trimmedPart = part.trim();
      if (trimmedPart) {
        sentences.push(part);
      }
    });

    outputArea.innerHTML = ""; // clear output area before retrieving new data

    for (let sentence of sentences) {
      await translate(sentence);
    }
  });
  
  async function translate(sentence) {
    // ----- api information -----
    const url = 'https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=zh-Hant&api-version=3.0&profanityAction=NoAction&textType=plain';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '1b58f68877msh09e7f1c9031ff15p14b078jsnbd682f41b858',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      },
      body: JSON.stringify([
        {
          Text: sentence
        }
      ])
    };
    // ----- end of api information -----

    try {
    const response = await fetch(url, options);
    const result = await response.json();
    
    outputArea.innerHTML += `<span class="original-text">${sentence}</span><br>` + `<span class="translated-text">${result[0].translations[0].text}</span><hr>`;

    // outputArea.innerHTML += sentence + "<br>" + result[0].translations[0].text + "<hr>";
    
    } catch (error) {
      console.error("Translation error: ", error);
      outputArea.innerHTML += `<span class="translate-error">Error translating sentence: ${sentence}</span>`;
    }
  }
});



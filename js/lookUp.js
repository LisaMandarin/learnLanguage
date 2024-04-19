import { qs } from "./util";

document.addEventListener('DOMContentLoaded', function() {
    const buttonElem = qs('#lookUpBtn');
    const outputArea = qs('#notesArea');
    const checkboxChinese = qs('#chinese-meaning');
    const checkboxEnglish = qs('#english-meaning');
    const checkboxExample = qs('#example-sentence');


    buttonElem.addEventListener('click', async (event) => {
        event.preventDefault();  // stop the button from submitting
    
        var selection = document.getSelection().toString().trim();
        console.log(selection);
        console.log(buttonElem);
        if (!selection) {
            alert('請先選取字再查單詞');
            return;
        }

        if (!checkboxChinese.checked && !checkboxEnglish.checked && !checkboxExample.checked) {
            // await lookUp(selection);
            alert('勾選「中文」、「English」、「例句」');
            return;
        }

        let divElem = null; // note section
        if (checkboxChinese.checked) {
            divElem = await chineseMeaning(selection);
        };

        if (checkboxEnglish.checked && divElem) {
            await englishMeaning(selection, divElem);
        }

    });
    
    async function chineseMeaning(word) {
        const url = 'https://microsoft-translator-text.p.rapidapi.com/Dictionary/Lookup?to=zh-Hans&api-version=3.0&from=en';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '1b58f68877msh09e7f1c9031ff15p14b078jsnbd682f41b858',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: JSON.stringify([{ Text: word }])
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();

            if (result[0].displaySource && result[0].translations.length > 0) {
                const divElem = document.createElement('div');
                divElem.classList.add('note');
                divElem.setAttribute('contenteditable', 'true');

                const selectedWord = result[0].displaySource;
                let translations = result[0].translations;
                let meanings = translations.map(translation => translation.displayTarget);

                divElem.innerHTML = `
                    <strong>${selectedWord}</strong><br>
                    ${meanings.join(', ')}
                `;
                outputArea.appendChild(divElem);
                return divElem;
                
            } else {
                alert('請完整選擇一個字詞')
            }
        } catch (error) {
            console.error('Error: ', error.message);
            outputArea.textContent = "找不到相關翻譯"
        }
    }

    async function englishMeaning(word, divElem) {
        const url = `https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=${word}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1b58f68877msh09e7f1c9031ff15p14b078jsnbd682f41b858',
                'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
            }
        };  
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error!  Status: ${response.status}`);
            }
            const result = await response.json();
            const meanings = result.meaning || {};
            console.log("result: ", result);
            console.log("result-meaning: ", result.meaning);
            const englishMeanings = Object.entries(meanings)
                .map(([key, value]) => `${key}: ${value}`)
                .join(', ');
            divElem.innerHTML += `
                <br>${englishMeanings}
            `;

        } catch (error) {
            console.error(error);
        }
    }
});


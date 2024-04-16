import { qs } from "./util";

document.addEventListener('DOMContentLoaded', function() {
    const buttonElem = qs('#lookUpBtn');
    const outputArea = qs('#notesArea');

    buttonElem.addEventListener('click', async (event) => {
        event.preventDefault();  // stop the button from submitting

        var selection = document.getSelection().toString();
        if (selection) {
            await lookUp(selection);
        } else {
            alert("Please select some text to look up.") ;
        }
    });
    
    async function lookUp(word) {
        const url = 'https://microsoft-translator-text.p.rapidapi.com/Dictionary/Lookup?to=zh-Hans&api-version=3.0&from=en';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '1b58f68877msh09e7f1c9031ff15p14b078jsnbd682f41b858',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: JSON.stringify([
                {
                    Text: word
                }
            ])
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            // outputArea.innerHTML = ''; // clear previous data

            if (result[0].displaySource && result[0].translations.length > 0) {
                const word = result[0].displaySource;
                let translations = result[0].translations;
                
                const pElem = document.createElement('p');
                pElem.classList.add('note');
                pElem.setAttribute('contenteditable', 'true');

                let meanings = [word];

                translations.forEach(translation => {
                    const meaning = translation.displayTarget;
                    const partOfSpeech = translation.posTag;
                    meanings.push(`${meaning} (${partOfSpeech})`);
                });

                pElem.innerHTML = meanings.join('<br>');
                outputArea.appendChild(pElem);
                
            } else {
                alert('Please select a entire word')
            }
        } catch (error) {
            console.error('Error: ', error.message);
            outputArea.textContent = "Unable to look up!"
        }
    }
})


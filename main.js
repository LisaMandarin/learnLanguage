document.addEventListener('DOMContentLoaded', function() {
// ------ api information ----
  const textOriginalElem = document.querySelector('form textarea');
  const buttonElem = document.querySelector('form button');
  const textTranslated = document.querySelector('p');

  buttonElem.addEventListener('click', function(event) {
    event.preventDefault();  // stop the button from submitting
    
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
          Text: textOriginalElem.value
        }
      ])
    };
    // ----- end of api information -----

    async function translate() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        
        textTranslated.textContent = result[0].translations[0].text;
        
      } catch (error) {
        console.error(error);
      }
    }
    translate();
  })
});

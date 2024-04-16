import { qs } from "./util";

const lookUpBtn = qs('#lookUpBtn');
const notesArea = qs('#notesArea');
lookUpBtn.addEventListener('click', () => {
    var selection = document.getSelection();
    notesArea.innerHTML = selection.toString();
    // console.log('selected text: ', selection.toString());
})




// const url = 'https://microsoft-translator-text.p.rapidapi.com/Dictionary/Lookup?to=zh-Hans&api-version=3.0&from=en';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': '1b58f68877msh09e7f1c9031ff15p14b078jsnbd682f41b858',
// 		'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
// 	},
// 	body: [
// 		{
// 			Text: 'mischievous'
// 		}
// 	]
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
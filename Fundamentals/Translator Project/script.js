import { translate } from './translate.js';

function translateText() {
  const inputText = document.getElementById('inputText').value;
  const outputText = document.getElementById('outputText');
  const language = document.getElementById('language').value;
  const translated = translate(language, inputText);
  const translatedText = document.getElementById('translatedText');
  
  if (translated !== 'not found') {
    outputText.value = translated;
    translatedText.innerHTML = '';
  } else {
    outputText.value = '';
    translatedText.innerHTML = `Translation: ${translated}`;
  }
}

window.translateText = translateText;
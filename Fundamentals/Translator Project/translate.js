const translations = {
  "malay": {
    "morning": "pagi"
  },
  "spanish": {
    "morning": "buenos días"
  }
}

export function translate(language, inputText) {
  const word = translations[language][inputText]
  if (word) {
    return word;
  } else {
    return 'not found';
  }
}
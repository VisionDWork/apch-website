function updateContentPage(language, data) {
    const translations = data[language];

    document.getElementById('about-top-title1').innerHTML = translations.title;
    document.getElementById('about-top-title2').innerHTML = translations.title2;
    document.getElementById('about-right-title').innerHTML = translations.textRight.title;
    document.getElementById('about-right-title2').innerHTML = translations.textRight.title2;
    
    const textAll = document.querySelectorAll('.about-left-text');
    textAll.forEach((text, index) => {
      const textItems = Object.keys(translations.textLeft);
      const textItem = textItems[index];
      text.textContent = translations.textLeft[textItem];
    });

    const textRAll = document.querySelectorAll('.about-right-text');
    textRAll.forEach((text, index) => {
      const textItems = Object.keys(translations.textRight.text);
      const textItem = textItems[index];
      text.textContent = translations.textRight.text[textItem];
    });
}

function loadDataPage(language) {
    fetch('./text.json')
      .then(response => response.json())
      .then(data => {
        updateContentPage(language, data);
    })
    .catch(error => {
        console.error('Error fetching JSON file:', error);
    });
}

loadDataPage(getSelectedLanguage());
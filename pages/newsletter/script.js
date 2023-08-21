function updateContentPage(language, data) {
    const translations = data[language];
    
    let textAll = document.querySelectorAll('.newsletter-title');
    textAll.forEach((text, index) => {
      text.innerHTML = translations.titles[index];
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
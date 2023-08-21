function updateContentPage(language, data) {
    const translations = data[language];
    
    let textAll = document.querySelectorAll('.events-title');
    textAll.forEach((text, index) => {
      text.innerHTML = translations.titles[index];
    });

    textAll = document.querySelectorAll('.events-list-text');
    textAll.forEach((text, index) => {
      text.innerHTML = translations.list1[index];
    });

    textAll = document.querySelectorAll('.events-list-text2');
    textAll.forEach((text, index) => {
      text.innerHTML = translations.list1[index];
    });

    textAll = document.querySelectorAll('.events-btn');
    textAll.forEach((text, index) => {
      text.innerHTML = translations.btns[index];
    });

    textAll = document.querySelectorAll('.events-texts');
    textAll.forEach((text, index) => {
      text.textContent = translations.text[index];
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
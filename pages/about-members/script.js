function updateContentPage(language, data) {
    const translations = data[language];
    
    let textAll = document.querySelectorAll('.about-members-title');
    textAll.forEach((text, index) => {
      text.innerHTML = translations.titles[index];
    });

    textAll = document.querySelectorAll('.about-members-text');
    textAll.forEach((text, index) => {
      text.innerHTML = translations.text[index];
    });

    textAll = document.querySelectorAll('.about-members-btn');
    textAll.forEach((text, index) => {
      text.innerHTML = translations.btns[index];
    });

    textAll = document.querySelectorAll('.about-members-list');
    textAll.forEach((text, index) => {
      text.textContent = translations.list1[index];
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
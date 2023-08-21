function updateContentPage(language, data) {
    const translations = data[language];
    
    let textAll = document.querySelectorAll('.members-title');
    textAll.forEach((text, index) => {
      text.innerHTML = translations.titles[index];
    });

    textAll = document.querySelectorAll('.members-text');
    textAll.forEach((text, index) => {
      text.innerHTML = translations.text[index];
    });

    textAll = document.querySelectorAll('.members-btn');
    textAll.forEach((text, index) => {
      text.innerHTML = translations.btns[index];
    });

    textAll = document.querySelectorAll('.members-list1');
    textAll.forEach((text, index) => {
      text.textContent = translations.list1[index];
    });

    textAll = document.querySelectorAll('.members-list2');
    textAll.forEach((text, index) => {
      text.textContent = translations.list2[index];
    });

    if (language === 'pt') {
      document.getElementById('table-pt').style.display = 'flex';
      document.getElementById('table-en').style.display = 'none';
    } else {
      document.getElementById('table-pt').style.display = 'none';
      document.getElementById('table-en').style.display = 'flex';
    }
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
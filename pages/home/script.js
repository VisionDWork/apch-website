function updateContentPage(language, data) {
    const translations = data[language];

    document.getElementById('home-text-left-h1').innerHTML = translations.home.title;
    document.getElementById('home-text-left-p').innerHTML = translations.home.text.one + translations.home.text.two;
    document.getElementById('home-text-right-p').innerHTML = translations.home.text.three + translations.home.text.four;
    
    const btns = document.querySelectorAll('.home-btn');
    btns.forEach((link, index) => {
      const btnsList = Object.keys(translations.home.btns);
      const btnIndex = btnsList[index];
      link.textContent = translations.home.btns[btnIndex];
    });
}

function loadDataPage(language) {
    fetch('./pages/home/text.json')
      .then(response => response.json())
      .then(data => {
        updateContentPage(language, data);
    })
    .catch(error => {
        console.error('Error fetching JSON file:', error);
    });
}

loadDataPage(getSelectedLanguage());


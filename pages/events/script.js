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

const cardBoxes = document.querySelectorAll('.events-card-box');

cardBoxes.forEach(cardBox => {
  cardBox.addEventListener('click', function() {
    // Reset styles for all cards
    cardBoxes.forEach(box => {
        box.querySelector('.events-card-img').style.filter = '';
        box.querySelector('.events-card-img').style.transform = '';
        box.querySelector('.events-text-top').style.opacity = '';
    });

    const cardImg = cardBox.querySelector('.events-card-img');
    const cardTextTop = cardBox.querySelector('.events-text-top');

    cardImg.style.filter = 'brightness(.8)';
    cardImg.style.transform = 'scale(1.1)';
    cardTextTop.style.opacity = '1';
  });
});

function resetCardStyles() {
  cardBoxes.forEach(box => {
      box.querySelector('.events-card-img').style.filter = '';
      box.querySelector('.events-card-img').style.transform = '';
      box.querySelector('.events-text-top').style.opacity = '';
  });
}

document.body.addEventListener('click', function() {
  resetCardStyles(); 
});

loadDataPage(getSelectedLanguage());
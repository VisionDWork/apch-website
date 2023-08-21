function updateContentPage(language, data) {
    const translations = data[language];
    
    let textAll = document.querySelectorAll('.news-titles');
    textAll.forEach((text, index) => {
      text.innerHTML = translations.titles[index];
    });

    textAll = document.querySelectorAll('.news-title');
    textAll.forEach((text, index) => {
      text.innerHTML = translations.news[index].title;
    });

    textAll = document.querySelectorAll('.news-date');
    textAll.forEach((text, index) => {
      text.innerHTML = translations.news[index].date;
    });

    textAll = document.querySelectorAll('.news-text');
    textAll.forEach((text, index) => {
      text.innerHTML = translations.news[index].text;
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

// Move news to the left or right

const newsCards = document.getElementById("news-cards-container");
const newsTotalCards = document.querySelectorAll('.news-card');
const btnLeft = document.getElementById("news-cards-btn-left");
const btnRight = document.getElementById("news-cards-btn-right");

function moveLeft() {
  if (newsTotalCards.length <= 3 || newsCards.classList.contains('one')) {
    return ;
  }
  if (newsCards.classList.contains('two')) {
    newsCards.classList.remove('two');
    newsCards.classList.add('one');
  } else if (newsCards.classList.contains('three')) {
    newsCards.classList.remove('three');
    newsCards.classList.add('two');
  }
  // Remove button if there isn't more news
  if (newsTotalCards.length <= 3 || (newsTotalCards.length <= 6 && newsCards.classList.contains('two')) || newsCards.classList.contains('three')) {
    btnRight.style.display = 'none';
  } else {
    btnRight.style.display = 'flex';
  }
  if (newsTotalCards.length <= 3 || newsCards.classList.contains('one')) {
    btnLeft.style.display = 'none';
  } else {
    btnLeft.style.display = 'flex';
  }
}

function moveRight() {
  if (newsTotalCards.length <= 3 || newsCards.classList.contains('three')) {
    return ;
  }
  if (newsCards.classList.contains('two')) {
    newsCards.classList.remove('two');
    newsCards.classList.add('three');
  } else if (newsCards.classList.contains('one')) {
    newsCards.classList.remove('one');
    newsCards.classList.add('two');
  }
  // Remove button if there isn't more news
  if (newsTotalCards.length <= 3 || (newsTotalCards.length <= 6 && newsCards.classList.contains('two')) || newsCards.classList.contains('three')) {
    btnRight.style.display = 'none';
  } else {
    btnRight.style.display = 'flex';
  }
  if (newsTotalCards.length <= 3 || newsCards.classList.contains('one')) {
    btnLeft.style.display = 'none';
  } else {
    btnLeft.style.display = 'flex';
  }
}

btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);

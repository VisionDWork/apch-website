// Open menu

function openMenu() {
  let menuBtn = document.getElementById('navbar-header-menu');
  let navbar = document.getElementById('navbar');

  menuBtn.classList.toggle('open');
  navbar.classList.toggle('open');
}

// Handle Languages

function updateContent(language, data) {
  const translations = data[language];

  const navbarLinks = document.querySelectorAll('.nav-link');
  navbarLinks.forEach((link, index) => {
    const navbarItems = Object.keys(translations.navbar);
    const navbarItem = navbarItems[index];
    link.textContent = translations.navbar[navbarItem];
  });

  document.getElementById('footer-name').innerHTML = translations.footer.name;
}

function loadData(language) {
  fetch('/geral/text.json')
    .then(response => response.json())
    .then(data => {
      updateContent(language, data);
  })
  .catch(error => {
      console.error('Error fetching JSON file:', error);
  });
}

function langButtons() {
  const enBtns = document.querySelectorAll('.en-btn');
  const ptBtns = document.querySelectorAll('.pt-btn');

  if (localStorage.getItem('selectedLanguage') === 'pt') {
    ptBtns.forEach((btn) => {
      btn.classList.add("selected");
    });

    enBtns.forEach((btn) => {
      btn.classList.remove("selected");
    });
  } else if (localStorage.getItem('selectedLanguage') === 'en') {
    ptBtns.forEach((btn) => {
      btn.classList.remove("selected");
    });

    enBtns.forEach((btn) => {
      btn.classList.add("selected");
    });
  }

  enBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
      loadData('en');
      loadDataPage('en');
      enBtns.forEach((btn2) => {
        btn2.classList.add("selected");
        localStorage.setItem('selectedLanguage', 'en');
      })
      ptBtns.forEach((btn2) => {
        btn2.classList.remove("selected");
      })
    });
  });

  ptBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
      loadData('pt');
      loadDataPage('pt');
      ptBtns.forEach((btn2) => {
        btn2.classList.add("selected");
        localStorage.setItem('selectedLanguage', 'pt');
      });
      enBtns.forEach((btn2) => {
        btn2.classList.remove("selected");
      })
    });
  });
}

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.remove('open');
  document.getElementById('navbar-header-menu').classList.remove('open');
});

function getSelectedLanguage() {
  return localStorage.getItem('selectedLanguage');
}

document.addEventListener('DOMContentLoaded', () => {
  const selectedLanguage = getSelectedLanguage();
  if (selectedLanguage) {
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }
});

// Load navbar and footer

$('#footer').load('/geral/footer.html', function() {
  $('#navbar').load('/geral/navbar.html', function() {

  langButtons();

  loadData(getSelectedLanguage());

  // Active navbar link

  var currentUrl = window.location.href;
  var navbarLinks = document.querySelectorAll('.nav-link');

  navbarLinks.forEach(function(link) {
    if (link.href === currentUrl) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
  });
    
  });
});

$('#header').load('/geral/header.html', function() {
  let time = Math.floor(Math.random() * 180000);

  let header = document.getElementById('header-all');

  if (header !== null) {
    header.style.animationDelay = "-" + time + "ms";
  }
});
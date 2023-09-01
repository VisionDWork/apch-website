function loadDataPage(language) {
  if (language === "pt") {
    document.getElementById('newsletter-title').innerHTML = "Subscreve a nossa newsletter";
    document.getElementById('newsletter-text').innerHTML = "Publicamos notícias e novidades sobre a APCH";
    document.getElementById('newsletter-form-btn').innerHTML = "Enviar";
  } else {
    document.getElementById('newsletter-title').innerHTML = "Subscribe to our newsletter";
    document.getElementById('newsletter-text').innerHTML = "We publish news and PAHH updates";
    document.getElementById('newsletter-form-btn').innerHTML = "Send";
  }
}

function submit() {

}

loadDataPage(getSelectedLanguage());
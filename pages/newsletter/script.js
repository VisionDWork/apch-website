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
  let email = document.getElementById('newsletter-form-input');
  let msg = document.getElementById('newsletter-form-msg-text');
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.value === "" || !email.value.match(emailPattern)) {
    // Mensagem de erro
    msg.innerHTML = 'Por favor escreva um email válido';
    msg.style.color = 'red';
    return ;
  }
  
  // Guardar email
  
  // Mensagem de sucesso
  msg.style.color = 'black';
  msg.innerHTML = 'Subscrição registada. Verifique o seu email para confirmar.';
  setTimeout(() => msg.innerHTML = '', 6000);
  email.value = '';
}

loadDataPage(getSelectedLanguage());
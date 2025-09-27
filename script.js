// Atualiza ano automaticamente
document.getElementById('year').textContent = new Date().getFullYear();

// Abrir link de exemplo
function openSample(url){
  window.open(url,'_blank');
}

// Copiar e-mail
function copyEmail(){
  const txt = document.getElementById('emailText').textContent;
  navigator.clipboard?.writeText(txt)
    .then(()=>alert('E-mail copiado: '+txt))
    .catch(()=>alert('Copiar manualmente: '+txt));
}

// Enviar contato
function sendContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const subject = encodeURIComponent('Contato - '+name);
  const body = encodeURIComponent(message + "\n\n" + "Email: " + email);
  window.location.href = `mailto:seu.email@exemplo.com?subject=${subject}&body=${body}`;
}

// Newsletter simples
function subscribe(){
  const e = document.getElementById('newsletterEmail').value;
  if(!e.includes('@')){
    document.getElementById('newsletterMsg').textContent = 'Digite um e-mail válido.';
    return;
  }
  const list = JSON.parse(localStorage.getItem('newsletter')||'[]');
  if(list.includes(e)){
    document.getElementById('newsletterMsg').textContent = 'Já inscrito.';
    return;
  }
  list.push(e);
  localStorage.setItem('newsletter',JSON.stringify(list));
  document.getElementById('newsletterMsg').textContent = 'Obrigado! Você está inscrito.';
}

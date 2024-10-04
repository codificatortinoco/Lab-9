
const chatBox = document.querySelector('.chat-box');

function agregarMensaje(usuario, mensaje) {
  const mensajeHTML = `
    <div class="message ${usuario}">
      <p>${mensaje}</p>
    </div>
  `;
  chatBox.innerHTML += mensajeHTML;
  chatBox.scrollTop = chatBox.scrollHeight; 
}
const buttonUser1 = document.querySelector('.input-box.user1 button');
const buttonUser2 = document.querySelector('.input-box.user2 button');

buttonUser1.addEventListener('click', () => {
  const mensaje = inputUser1.value.trim();
  if (mensaje !== '') {
    agregarMensaje('user1', mensaje);
    inputUser1.value = ''; 
  }
});

buttonUser2.addEventListener('click', () => {
  const mensaje = inputUser2.value.trim();
  if (mensaje !== '') {
    agregarMensaje('user2', mensaje);
    inputUser2.value = '';
  }
});

const inputUser1 = document.querySelector('.input-box.user1 input[type="text"]');
const inputUser2 = document.querySelector('.input-box.user2 input[type="text"]');

inputUser1.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    buttonUser1.click();
  }
});

inputUser2.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    buttonUser2.click();
  }
});
// const nombre = document.querySelector('#nombre');
// const apellido = document.querySelector('#apellido');
// const email = document.querySelector('#email');
// const telefono = document.querySelector('#telefono');
// const provincia = document.querySelector('#provincia');
// const mensaje = document.querySelector('#mensaje');

const formulario = document.querySelector('#formulario_contacto');


formulario.addEventListener('submit', validarFormulario);

function validarFormulario() {

  console.log('hola')

  // if(nombre == '' || apellido == '' || email == '' || telefono == '' || provincia == '' || mensaje == '') {
  //   mostrarAlerta('Todos los campos son obligatorios');
  //   return;
  // }

}

function mostrarAlerta(msg) {
      const divMensaje = document.createElement('div');
      divMensaje.classList.add('error');

      // Mensaje error
      divMensaje.textContent = msg;
      formulario.appendChild(msg);
      
      setTimeout(() => {
        divMensaje.remove();
    }, 3000);
}

/* When your mouse cursor enter the background, the fading won't pause and keep playing */
$(".carousel").carousel({
  pause:
    "false" /* Change to true to make it paused when your mouse cursor enter the background */,
});
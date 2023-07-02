// Añadir la clase selected cuando se seleccione un item de la barra de navegación. Usando jquery
$(document).ready(function () {
  $(".nav-link").on("click", function () {
    $(".nav-link").removeClass("selected");
    $(this).addClass("selected");
  });
});

// Validaciones
(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Formulario, no redirigir a otra página
const $form = document.querySelector("#form");
$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData($form);
  fetch($form.action, {
    method: $form.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error en la solicitud");
      }
    })
    .then((data) => {
      Swal.fire({
        title: "¡Formulario enviado!",
        text: "Nos pondremos en contacto contigo lo antes posible",
        icon: "success",
      }).then(() => {
        $form.reset();
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

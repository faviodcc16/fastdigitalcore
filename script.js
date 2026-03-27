document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const negocio = document.getElementById("negocio").value;
  const correo = document.getElementById("correo").value;

  if (!nombre || !negocio || !correo) {
    alert("Completa los campos");
    return;
  }

  alert("Mensaje enviado 🚀");
});

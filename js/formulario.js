document.getElementById("form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const asunto = document.getElementById("asunto").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  const errores = [];

  if (nombre === "") errores.push("El nombre es obligatorio.");
  if (!email.includes("@") || !email.includes(".")) errores.push("El correo electrónico no es válido.");
  if (asunto === "") errores.push("El asunto no puede estar vacío.");
  if (mensaje === "") errores.push("El mensaje no puede estar vacío.");

  if (errores.length > 0) {
    alert("Por favor corrija lo siguiente:\n\n" + errores.join("\n"));
  } else {
    alert(`Gracias por su contacto, ${nombre}.\nEn breve le estaré respondiendo.`);
    this.reset();
  }
});
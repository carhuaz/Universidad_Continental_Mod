const form = document.getElementById("contactForm");
const alertOk = document.getElementById("alertSuccess");
const alertErr = document.getElementById("alertError");
const alertErrMsg = document.getElementById("alertErrorMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alertOk.classList.add("d-none");
    alertErr.classList.add("d-none");

    const nombre = document.getElementById("nombre");
    const dni = document.getElementById("dni");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const carrera = document.getElementById("carrera");
    const mensaje = document.getElementById("mensaje");
    const terminos = document.getElementById("terminos");

    if (
        nombre.value.trim() === "" ||
        dni.value.trim() === "" ||
        email.value.trim() === "" ||
        telefono.value.trim() === "" ||
        carrera.value === "" ||
        mensaje.value.trim() === ""
    ) {
        alertErrMsg.textContent = "Por favor completa todos los campos obligatorios.";
        alertErr.classList.remove("d-none");
        alertErr.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
    }

    if (!email.checkValidity()) {
        alertErrMsg.textContent = "Ingresa un correo electrónico válido.";
        alertErr.classList.remove("d-none");
        alertErr.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
    }

    if (!terminos.checked) {
        alertErrMsg.textContent = "Debes aceptar los términos y condiciones.";
        alertErr.classList.remove("d-none");
        alertErr.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
    }

    console.log("Datos enviados:", {
        nombre: nombre.value,
        dni: dni.value,
        email: email.value,
        telefono: telefono.value,
        carrera: carrera.value,
        mensaje: mensaje.value
    });

    alertOk.classList.remove("d-none");
    alertOk.scrollIntoView({ behavior: "smooth", block: "center" });

    form.reset();
});
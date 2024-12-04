// Mostrar el aviso de privacidad al cargar la página
window.onload = function () {
    document.getElementById("privacy-modal").style.display = "flex";
};

// Ocultar el aviso de privacidad
function closePrivacyModal() {
    document.getElementById("privacy-modal").style.display = "none";
}

// Confirmar la captura de datos
function submitForm() {
    alert("Gracias por proporcionar tus datos. Han sido registrados correctamente.");
}

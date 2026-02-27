function toggleContenido(id, boton) {
    var elemento = document.getElementById(id);
    
    if (elemento.classList.contains('visible')) {
        // Si está visible, lo ocultamos
        elemento.style.opacity = "0";
        setTimeout(function() {
            elemento.classList.remove('visible');
            elemento.style.display = "none";
        }, 500); // Espera a que termine la animación para quitar el bloque
        boton.innerHTML = "Leer más";
    } else {
        // Si está oculto, lo mostramos
        elemento.style.display = "block";
        // Pequeño retraso para que el navegador detecte el cambio y anime la opacidad
        setTimeout(function() {
            elemento.classList.add('visible');
            elemento.style.opacity = "1";
        }, 10);
        boton.innerHTML = "Leer menos";
    }
}

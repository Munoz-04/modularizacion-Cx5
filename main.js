import { convertirMayusculas, contarCaracteres } from "./texto.js";

document.getElementById('procesar').addEventListener('click', () => {
    const texto = document.getElementById('texto').value;
    const mayusculas = convertirMayusculas(texto);
    const caracteres = contarCaracteres(texto);

    document.getElementById('resultadoMayuscula').textContent = `Texto en mayúsculas: ${mayusculas}`;
    document.getElementById('resultadoCaracteres').textContent = `Número de caracteres: ${caracteres}`;
});

// Función para calcular la edad y los meses automáticamente
function calcularEdad() {
    let fechaNacimiento = new Date(document.getElementById('fecha-nacimiento').value);
    let hoy = new Date();
    
    let edadAnios = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let edadMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if (edadMeses < 0 || (edadMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edadAnios--;
        edadMeses += 12;
    }
    
    document.getElementById('edad').value = edadAnios;
    document.getElementById('meses').value = edadMeses;
}

// Función para calcular el IMC y mostrar mensaje dentro del textarea
function calcularIMC() {
    // Obtener los valores de peso, talla, hemoglobina y edad
    let peso = parseFloat(document.getElementById('peso').value);
    let talla = parseFloat(document.getElementById('talla').value);
    let hemoglobina = parseFloat(document.getElementById('hemog').value);
    let edad = parseInt(document.getElementById('edad').value);

    // Validar que los valores ingresados sean numéricos y mayores que cero
    if (isNaN(peso) || isNaN(talla) || isNaN(hemoglobina) || isNaN(edad) || peso <= 0 || talla <= 0 || hemoglobina <= 0 || edad <= 0) {
        document.getElementById('IMC').value = 'Por favor ingresar valores válidos para la edad, peso, talla y la hemoglobina.';
        return;
    }

    // Calcular el IMC
    let imc = peso / (talla * talla);
    imc = imc.toFixed(2); // Redondear el IMC a dos decimales

    // Determinar el mensaje según el IMC calculado
    let mensaje = '';
    if (imc < 18.5) {
        mensaje = `Tu IMC es ${imc}, indica bajo peso y desnutrición.`;
    } else if (imc >= 18.5 && imc < 25) {
        mensaje = `Tu IMC es ${imc}, indica un peso de rango saludable.`;
    } else if (imc >= 25 && imc < 30) {
        mensaje = `Tu IMC es ${imc}, indica sobrepeso fuera del rango saludable.`;
    } else {
        mensaje = `Tu IMC es ${imc}, indica sobrepeso y obesidad.`;
    }

    // Determinar si hay anemia basado en los niveles de hemoglobina
    if (edad < 6 && hemoglobina < 11.0) {
        mensaje += ` Además, con un nivel de hemoglobina de ${hemoglobina}, se indica anemia.`;
    }

    // Mostrar el mensaje en el textarea
    document.getElementById('IMC').value = mensaje;

     // Actualizar el gráfico con el nuevo punto
     const edadAnios = document.getElementById('edad').value;
     const edadMeses = document.getElementById('meses').value;
     const altura = talla; // Suponemos que la talla es igual a la altura para este caso
 
     actualizarGrafico(parseInt(edadAnios), parseFloat(altura));
     if (typeof window.actualizarPunto === 'function') {
        window.actualizarPunto(edad, altura);
    }
}

// // Función para actualizar el gráfico en persentil.js
// function actualizarGrafico(edadAnios, altura) {
//     if (typeof window.actualizarPunto === 'function') {
//         window.actualizarPunto(edadAnios, altura);
//     }
// }
function actualizarGrafico(edadAnios, altura) {
    if (typeof window.actualizarPunto === 'function') {
        window.actualizarPunto(edadAnios, altura);
    }
}




const ctx = document.getElementById('growthChart').getContext('2d');

const growthChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['0', '1', '2', '3', '4', '5'],

        datasets: [
            //lineas de colores
            {   label:'Black',
                borderColor: 'black',
                borderWidth: 2,
                data: [
                    { x:0, y: 55 },
                    { x: 1, y: 77 },
                    { x: 2, y: 90 },
                    { x: 3, y: 103 },
                    { x: 4, y: 114 },
                    { x: 5, y: 125 },

                ],
                tension: 0.2,
                fill: false,
                pointRadius:0
            },

            {   label:'red',
                borderColor: 'red',
                borderWidth: 2,
                data: [
                    { x:0, y: 54 },
                    { x: 1, y: 73 },
                    { x: 2, y: 86},
                    { x: 3, y: 99 },
                    { x: 4, y: 110 },
                    { x: 5, y: 120},

                ],
                tension: 0.2,
                fill: false,
                pointRadius:0
            },
            
            {   label:'green',
                borderColor: 'green',
                borderWidth: 2,
                data: [
                    { x:0, y: 50 },
                    { x: 1, y: 68 },
                    { x: 2, y: 80},
                    { x: 3, y: 90 },
                    { x: 4, y: 100 },
                    { x: 5, y: 110},

                ],
                tension: 0.2,
                fill: false,
                pointRadius:0
            },
            {   label:'red',
                borderColor: 'red',
                borderWidth: 2,
                data: [
                    { x:0, y: 46 },
                    { x: 1, y: 62 },
                    { x: 2, y: 71},
                    { x: 3, y: 80 },
                    { x: 4, y: 90 },
                    { x: 5, y: 100},

                ],
                tension: 0.2,
                fill: false,
                pointRadius:0
            },
            {   label:'Black',
                borderColor: 'black',
                borderWidth: 2,
                data: [
                    { x:0, y: 44 },
                    { x: 1, y: 58 },
                    { x: 2, y: 67 },
                    { x: 3, y: 76},
                    { x: 4, y: 86},
                    { x: 5, y: 96 },

                ],
                tension: 0.2,
                fill: false,
                pointRadius:0
            },
                // Dataset para puntos calculados
                {
                    label: 'Punto Calculado',
                    borderColor: 'blue',
                    borderWidth: 2,
                    data: [], // Inicialmente vacío
                    tension: 0.2,
                    fill: false,
                    pointRadius: 5, // Mostrar el punto
                    pointBackgroundColor: 'blue'
                }
            
            
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Edad (años y meses)'
                },
                ticks: {
                    stepSize: 1,
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Longitud/Estatura (cm)'
                },
                ticks: {
                    stepSize: 5,
                    callback: function (value) {
                        return Number.isInteger(value) ? value : '';
                    }
                },
                min: 40,
                max: 125
            },
            y1: {
                position: 'right',
                title: {
                    display: true
                },
                ticks: {
                    stepSize: 5,
                    callback: function (value) {
                        return Number.isInteger(value) ? value : '';
                    }
                },
                min: 40,
                max: 125
            },
        }
    }
});
//  // Función para actualizar el gráfico con un nuevo punto
// window.actualizarPunto = function(edad, altura) {
//     // Asegúrate de ajustar las coordenadas del punto según tus necesidades
//     const nuevoPunto = { x: edad, y: altura };

//     // Suponiendo que el gráfico de crecimiento tiene un dataset adicional para los puntos
//     growthChart.data.datasets.push({
//         label: 'Nuevo Punto',
//         borderColor: 'blue',
//         borderWidth: 2,
//         data: [nuevoPunto],
//         fill: false,
//         pointRadius: 5, // Mostrar el punto en el gráfico
//         pointBackgroundColor: 'blue'
//     });

//     growthChart.update();
// };
// Función para actualizar el gráfico con un nuevo punto
window.actualizarPunto = function(edad, altura) {
    // Asegúrate de ajustar las coordenadas del punto según tus necesidades
    const nuevoPunto = { x: edad, y: altura };

    // Encuentra el dataset 'Punto Calculado' y añade el nuevo punto
    const datasetPuntoCalculado = growthChart.data.datasets.find(ds => ds.label === 'Punto Calculado');
    
    // Limpiar los datos anteriores si se desea
    datasetPuntoCalculado.data = [];
    
    // Añadir el nuevo punto
    datasetPuntoCalculado.data.push(nuevoPunto);

    // Actualizar el gráfico
    growthChart.update();
};
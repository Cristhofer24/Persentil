

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
                    { x:0, y: 56 },
                    { x: 1, y: 83 },
                    { x: 2, y: 97 },
                    { x: 3, y: 107.5 },
                    { x: 4, y: 116 },
                    { x: 5, y: 124},

                ],
                tension: 0.2,
                fill: false,
                pointRadius:2
            },

            {   label:'red',
                borderColor: 'red',
                borderWidth: 2,
                data: [
                    { x:0, y: 54 },
                    { x: 1, y: 80.5 },
                    { x: 2, y: 94},
                    { x: 3, y: 103.5 },
                    { x: 4, y: 112 },
                    { x: 5, y: 119.5},

                ],
                tension: 0.2,
                fill: false,
                pointRadius:2
            },
            
            {   label:'green',
                borderColor: 'green',
                borderWidth: 2,
                data: [
                    { x:0, y: 50 },
                    { x: 1, y: 76},
                    { x: 2, y: 87.5},
                    { x: 3, y: 96},
                    { x: 4, y: 103.5 },
                    { x: 5, y: 110},

                ],
                tension: 0.2,
                fill: false,
                pointRadius:2
            },
            {   label:'red',
                borderColor: 'red',
                borderWidth: 2,
                data: [
                    { x:0, y: 46 },
                    { x: 1, y: 71 },
                    { x: 2, y: 81.5},
                    { x: 3, y: 88.5 },
                    { x: 4, y: 95 },
                    { x: 5, y: 101},

                ],
                tension: 0.2,
                fill: false,
                pointRadius:2
            },
            {   label:'Black',
                borderColor: 'black',
                borderWidth: 2,
                data: [
                    { x:0, y: 44 },
                    { x: 1, y: 68.5},
                    { x: 2, y: 78.5 },
                    { x: 3, y: 85},
                    { x: 4, y: 91},
                    { x: 5, y: 96 },

                ],
                tension: 0.2,
                fill: false,
                pointRadius:2
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
const ctx = document.getElementById('growthChart').getContext('2d');

const growthChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [
            // Líneas de colores
            {
                label: 'Black',
                borderColor: 'black',
                borderWidth: 2,
                data: [
                    { x: 0, y: 56 },
                    { x: 1, y: 83 },
                    { x: 2, y: 97 },
                    { x: 3, y: 107.5 },
                    { x: 4, y: 116 },
                    { x: 5, y: 124 }
                ],
                showLine: true,
                fill: false,
                pointRadius: 0
            },
            // Otros datasets aquí...
            {
                label: 'Red',
                borderColor: 'red',
                borderWidth: 2,
                data: [
                    { x: 0, y: 54 },
                    { x: 1, y: 80.5 },
                    { x: 2, y: 94 },
                    { x: 3, y: 103.5 },
                    { x: 4, y: 112 },
                    { x: 5, y: 119.5 }
                ],
                showLine: true, // Mostrar línea
                fill: false,
                pointRadius: 0
            },
            {
                label: 'Green',
                borderColor: 'green',
                borderWidth: 2,
                data: [
                    { x: 0, y: 50 },
                    { x: 1, y: 76 },
                    { x: 2, y: 87.5 },
                    { x: 3, y: 96 },
                    { x: 4, y: 103.5 },
                    { x: 5, y: 110 }
                ],
                showLine: true, // Mostrar línea
                fill: false,
                pointRadius: 0
            },
            {
                label: 'Red',
                borderColor: 'red',
                borderWidth: 2,
                data: [
                    { x: 0, y: 46 },
                    { x: 1, y: 71 },
                    { x: 2, y: 81.5 },
                    { x: 3, y: 88.5 },
                    { x: 4, y: 95 },
                    { x: 5, y: 101 }
                ],
                showLine: true, // Mostrar línea
                fill: false,
                pointRadius: 0
            },
            {
                label: 'Black',
                borderColor: 'black',
                borderWidth: 2,
                data: [
                    { x: 0, y: 44 },
                    { x: 1, y: 68.5 },
                    { x: 2, y: 78.5 },
                    { x: 3, y: 85 },
                    { x: 4, y: 91 },
                    { x: 5, y: 96 }
                ],
                showLine: true, // Mostrar línea
                fill: false,
                pointRadius: 0
            },
            {
                label: 'Punto Calculado',
                borderColor: 'blue',
                borderWidth: 2,
                data: [], // Inicialmente vacío
                showLine: false,
                pointRadius: 5,
                pointBackgroundColor: 'blue'
            },
            // {
            //     label: 'Punto en X',
            //     borderColor: 'green',
            //     borderWidth: 2,
            //     data: [],
            //     showLine: false,
            //     pointRadius: 5,
            //     pointBackgroundColor: 'green'
            // }
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
                type: 'linear',
                position: 'bottom',
                ticks: {
                    stepSize: 0.1, // Mostrar valores decimales
                    callback: function(value) {
                        return value.toFixed(1);//muestra el numero de decimales
                    }
                },
                grid: {
                    display: true,
                    drawBorder: false,
                    drawOnChartArea: true,
                    drawTicks: true,
                    lineWidth: 1,
                    color: function(context) {
                        if (context.tick.value % 1 === 0){
                            return '#000';
                        }
                        return '#aaa'; // Línea principal para años y secundaria para meses
                    }
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Longitud/Estatura (cm)'
                },
                ticks: {
                    stepSize: 5,
                    callback: function(value) {
                        return Number.isInteger(value) ? value : '';
                    }
                },
                min: 40,
                max: 125
            }
        }
    }
});

// Función para actualizar el gráfico con un nuevo punto
function actualizarGrafico(edad, altura) {
    const nuevoPunto = { x: edad, y: altura };

    // Encuentra el dataset 'Punto Calculado' y añade el nuevo punto
    const datasetPuntoCalculado = growthChart.data.datasets.find(ds => ds.label === 'Punto Calculado');
    datasetPuntoCalculado.data = [nuevoPunto];

    // Actualizar el gráfico
    growthChart.update();
}

// Función para actualizar el gráfico con el punto en el eje X
function actualizarPuntoX(edad, altura) {
    const nuevoPuntoX = { x: edad, y: altura };
    const datasetPuntoX = growthChart.data.datasets.find(ds => ds.label === 'Punto en X');
    datasetPuntoX.data = [nuevoPuntoX];
    growthChart.update();
}

const ctx = document.getElementById('growthChart').getContext('2d');
const growthChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['0', '1', '2', '3', '4', '5'],
        datasets: [
            {
                label: '97th Percentile',
                data: [
                    { x: 3,y:45 },
                    { x: 1.5,y:50},
                    { x: 1.5,y:50},
                    { x: 1.5,y:50},
                    { x: 1.5,y:50},
                    { x: 1.5,y:50},
                 
                  
                ], 
                borderColor: 'rgba(255, 159, 64, 1)',
                fill: false
            },
            {
                label: 'prueba 2',
                data: [
                    {y:125 , x:2},
                    { x: 1.5,y:50},
                    { x: 1.5,y:50},
                    { x: 1.5,y:50},
                    { x: 1.5,y:50},
                    { x: 1.5,y:50},
                 
                  
                ], 
                borderColor: 'rgba(255, 159, 64, 1)',
                fill: false
            },
            
            
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
                    autoSkip: false, // Evita que se omitan las etiquetas
                    maxRotation: 0, // Evita la rotación de etiquetas
                    callback: function (value) {
                        return value; // Mostrar las etiquetas tal como están definidas
                    }
                },
                stepSize: 1,
                min: 0,
                max: 5
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
                min: 45,
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
                min: 45,
                max: 125
            },
        }
    }
});

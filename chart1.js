var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Temperature', 'Humidity', 'CO2', 'H2S', 'Ammonia', 'Methane'],
        datasets: [{
            label: 'Temperature(°C)',
            label: 'Humidity (Moisture)',
            label: 'CO2(PPM)',
            label: 'H2S(PPM)',
            label: 'Ammonia(PPM)',
            label: 'Methane (PPM)',
            data: [10, 19, 34,27,30,20],
            backgroundColor: [
                'rgba(85,85,85, 1)'

            ],
            borderColor: 'rgb(239, 22, 22)',

            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
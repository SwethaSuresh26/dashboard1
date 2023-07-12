var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Chick Day Count', 'Chick Count', 'Feed', 'Average Weight'],

        datasets: [{
            label: 'Employees',
            data: [30, 42, 40, 25],
            backgroundColor: [
                'rgb(255, 255, 128)',
                'rgb(239, 22, 22)',
                'rgb(111, 220, 111)',
                'rgb(102, 179, 255)'

            ],
            borderColor: [
                'rgb(255, 255, 128)',
                'rgb(239, 22, 22)',
                'rgb(111, 220, 111)',
                'rgb(102, 179, 255)'


            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});
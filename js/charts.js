const newChart = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(newChart, {
    type: 'bar',
    data: {
        labels: ['HTML5', 'CSS3', 'JS', 'SASS', 'Bootstrap', "UX/UI", "Sous-Chef"],
        
        datasets: [{
            label: "How I Enjoy Using These Technologies",
         
            data: [2, 3, 4, 3, 2, 2, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(235, 151, 78, 1, .7)',
                'rgba(50, 205, 50, .7)'
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(235, 151, 78, 1, )',
                'rgba(50, 205, 50, .7)',
            
            ],
            fontColor: "white",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  fontColor: "white",
                },
                ticks: {
                  min: 0,
                  max: 5,
                  fontColor: "white",
                  stepSize: 1,
                  suggestedMin: 0.5,
                  suggestedMax: 5.5,
                  callback: function(label, index, labels) {
                    switch (label) {
                      case 0:
                        return 'What is a http?';
                      case 1:
                        return 'Box Model?';
                      case 2:
                        return 'I know some stuff';
                      case 3:
                        return 'I made this work by googling';
                      case 4:
                        return 'Knowledge is Power';
                      case 5:
                        return 'Rockstar or Johnny Depp?';
                    }
                  }
                },
                gridLines: {
                  display: true,
                }
              }],
              xAxes: [{
                ticks: {
                    fontColor: "white",
                }
            }]
        }
    }
    });
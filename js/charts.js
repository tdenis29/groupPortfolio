const newChart = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(newChart, {
    type: 'bar',
    data: {
        labels: ['HTML5', 'CSS3', 'JS', 'SASS', 'Bootstrap', "UX/UI", "Pizza Maker"],
        
        datasets: [{
            label: "How I Enjoy Using These Technologies",
            fontColor: "white",
         
            data: [3, 3, 4, 3, 2, 2, 0],
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
            fontSize: 18,
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: "white",
                fontSize: 18
            }
        },
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
                  fontSize: 16,
                  stepSize: 1,
                  suggestedMin: 0.5,
                  suggestedMax: 5.5,
                  callback: function(label, index, labels) {
                    switch (label) {
                      case 0:
                        return 'I actually hate this.';
                      case 1:
                        return 'Its ok, I guess.';
                      case 2:
                        return 'Beats Cooking!';
                      case 3:
                        return 'Rock and Roll! ';
                      case 4:
                        return 'Knowledge is Power';
                  
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
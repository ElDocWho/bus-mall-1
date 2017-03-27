'use strict'; //this is final draft

var ctx = document.getElementById('chart').getContext('2d');

function renderChart(){
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nameArray,
      datasets: [{
        label: '# of Votes',
        data: countClickedArray,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 3
      },
      {label: '# x Shown',
        data: countShownArray,
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 3
      },
      {label: '% of Votes',
        data: countClickedArray,
        backgroundColor: 'blue',
        borderColor: 'black',
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
};

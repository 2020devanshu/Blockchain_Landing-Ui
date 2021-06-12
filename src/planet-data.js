export const planetChartData = {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "August"],
      datasets: [
        {
          label: "Market Growth in last FY",
          data: [0, 10, 8, 12, 35, 50, 27, 14],
          backgroundColor: "rgba(26,35,126, 0.4)",
          borderColor: "#36495d",
          borderWidth: 3
        },
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default planetChartData;
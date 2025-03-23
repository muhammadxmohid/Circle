const bar2 = document.getElementById('bar2');

new Chart(bar2, {
  type: 'bar',
  data: {
    labels: ['', '', '', '', '', ''], // Empty labels
    datasets: [{
      label: 'Expenses',
      data: [12, 10, 20, 36, 12, 23],
      backgroundColor: '#ff6493', // Bars are now #ff6493

      borderWidth: 1,
      borderRadius: 50, // Ensures full rounded bars
      barThickness: 20, // Controls bar width
      borderSkipped: false // Prevents bars from being cut off
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false // Hide Y-axis labels
        },
        grid: {
          drawBorder: false, // Remove Y-axis border line
          drawOnChartArea: false, // Ensure no grid lines
          drawTicks: false, // Remove tick marks
          display: false // Completely remove Y-axis
        },
        border: {
          display: false, // Ensure border is removed
          color: 'transparent' // Force hide Y-axis line
        }
      },
      x: {
        ticks: {
          display: false // Hide X-axis labels
        },
        grid: {
          drawBorder: false, // Remove X-axis border line
          drawOnChartArea: false, // Ensure no grid lines
          drawTicks: false, // Remove tick marks
          display: false
        },
        border: {
          display: false, // Ensure border is removed
          color: 'transparent' // Force hide X-axis line
        }
      }
    },
    plugins: {
      legend: {
        position: 'top', // Move label to top-left
        align: 'start',
        labels: {
          font: {
            size: 18, // Make "Revenue" larger
            weight: 'bold' // Keep it bold
          },
          usePointStyle: false, // Prevents a circle/box appearing next to "Revenue"
          boxWidth: 0, // Hides the legend box completely
          boxHeight: 0 // Ensures no container shows
        }
      },
      tooltip: {
        enabled: false // Remove tooltips
      }
    }
  }
});

const bar1 = document.getElementById('bar1');

new Chart(bar1, {
  type: 'bar',
  data: {
    labels: ['', '', '', '', '', ''], // Empty labels
    datasets: [{
      label: 'Revenue',
      data: [12, 29, 13, 15, 12, 13],
      backgroundColor: '#635fff', // Bars are now #635fff
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

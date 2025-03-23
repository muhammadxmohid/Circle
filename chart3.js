const lineCanvas = document.getElementById('line');
const line = lineCanvas.getContext('2d');

// Function to create a vertical gradient
function createGradient(ctx, height) {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#635fff'); // Start color (Top)
  gradient.addColorStop(1, '#ff6493'); // End color (Bottom)
  return gradient;
}

// Initialize chart
const chart = new Chart(line, {
  type: 'line', 
  data: {
    labels: ['', '', '', '', '', ''],
    datasets: [{
      label: 'Revenue',
      data: [4, 6, 10, 12, 16, 20],
      borderWidth: 3, 
      pointRadius: 0, // Hides points
      pointHoverRadius: 0, // Prevents points from showing on hover
      tension: 0.4, 
      fill: false 
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { display: false },
        grid: { drawBorder: false, drawOnChartArea: false, drawTicks: false, display: false },
        border: { display: false, color: 'transparent' }
      },
      x: {
        ticks: { display: false },
        grid: { drawBorder: false, drawOnChartArea: false, drawTicks: false, display: false },
        border: { display: false, color: 'transparent' }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          font: { size: 18, weight: 'bold' },
          usePointStyle: false,
          boxWidth: 0,
          boxHeight: 0
        }
      },
      tooltip: { enabled: false } 
    }
  }
});

// Apply gradient dynamically after chart is created
chart.data.datasets[0].borderColor = createGradient(line, lineCanvas.height);
chart.update();

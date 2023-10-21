// Function to get the index of the lowest amount in the data
function getLowestAmountIndex(data) {
  if (data.length === 0) {
    return null;
  }
  let lowestIndex = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i].amount < data[lowestIndex].amount) {
      lowestIndex = i;
    }
  }
  return lowestIndex;
}

// Function to get the index of the highest amount in the data
function getHighestAmountIndex(data) {
  if (data.length === 0) {
    return null;
  }
  let highestIndex = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i].amount > data[highestIndex].amount) {
      highestIndex = i;
    }
  }
  return highestIndex;
}

// Get the canvas element with the ID 'myChart'
const ctx = document.getElementById('myChart');

// const lowestAmountDisplay = document.getElementById('lowestAmountDisplay');
// const highestAmountDisplay = document.getElementById('highestAmountDisplay');

// Fetch data from the 'data.json' file using the fetch API
fetch('data.json')
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
      // Find indices of lowest and highest amounts
    const lowestIndex = getLowestAmountIndex(data);
    const highestIndex = getHighestAmountIndex(data);
     // Update lowest and highest amount displays
     const lowestAmountDisplay = document.getElementById('lowestAmountDisplay');
     const highestAmountDisplay = document.getElementById('highestAmountDisplay');
     lowestAmountDisplay.textContent = `Lowest Amount: $${data[lowestIndex].amount}`;
     highestAmountDisplay.textContent = `Highest Amount: $${data[highestIndex].amount}`;

    //create a new Chart.js chart
    new Chart(ctx, {
      type: 'bar',
      options: {
          responsive: true, // Make the chart responsive to window resizing
          animation: false,
          scales: {
              y: {
                  display: false, // Hide Y-axis display
                  beginAtZero: true
              },
              x: {
                  grid: {
                      display: false // Hide X-axis grid lines
                  }
              }
              },
              plugins: {
                  legend: {
                      display: false // Hide legend
              },
          },
          tooltip: {
              enabled: true,
              callbacks: {
                  title: function(tooltipItems, data) {
                    // Display only the amount in the tooltip
                    return '$' + tooltipItems[0].raw;
                  },
                  label: function(tooltipItem, data) {
                    return null; // Hide data labels in the tooltip
                  }
                }
          }
          },
      data: {
        // Data to be displayed in the chart
        labels: data.map(item => item.day),
        datasets: [{
          label: '',
          data: data.map(item => item.amount),
          backgroundColor: data.map((item, index) => {
            if (index === lowestIndex) {
              return '#06d6a0'; // Green color for the lowest amount
            } else if (index === highestIndex) {
              return '#c1121f'; // Red color for the highest amount
            } else {
              return 'hsl(10, 79%, 65%)'; // Default color for other bars
            }
          }),
          borderRadius: 5,
          borderWidth: 1
        }]
      }
    });
  })
  .catch(error => {
    // Handle errors if there are any during the fetch operation
    console.error('Error:', error);
  });
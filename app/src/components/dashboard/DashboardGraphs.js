import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DashboardGraphs = () => {
  const [alertData, setAlertData] = useState([]);
  const [transactionData, setTransactionData] = useState([]);

  // Fetch alert data from the mock API
  const fetchAlerts = async () => {
    try {
      const response = await fetch('http://localhost:3001/alerts');
      const data = await response.json();
      setAlertData(data);
    } catch (error) {
      console.error("Error fetching alert data:", error);
    }
  };

  // Fetch transaction data from the mock API
  const fetchTransactions = async () => {
    try {
      const response = await fetch('http://localhost:3001/transactions');
      const data = await response.json();
      setTransactionData(data);
    } catch (error) {
      console.error("Error fetching transaction data:", error);
    }
  };

  useEffect(() => {
    fetchAlerts();
    fetchTransactions();
  }, []);

  // Prepare data for the graph
  const prepareGraphData = () => {
    const alertCountByDate = {};
    
    alertData.forEach(alert => {
      // Assuming we want to aggregate alerts by the transaction date
      const date = transactionData.find(transaction => transaction.id === alert.transactionId)?.date;
      if (date) {
        if (!alertCountByDate[date]) {
          alertCountByDate[date] = 0;
        }
        alertCountByDate[date]++;
      }
    });

    const labels = Object.keys(alertCountByDate).sort(); // Sort the dates
    const data = labels.map(label => alertCountByDate[label]);

    return {
      labels,
      datasets: [
        {
          label: 'Flagged Transactions',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Flagged Transactions Over Time</h2>
      <Bar 
        data={prepareGraphData()} 
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Alerts',
                color: '#333',
                font: {
                  size: 14,
                },
              },
            },
            x: {
              title: {
                display: true,
                text: 'Date',
                color: '#333',
                font: {
                  size: 14,
                },
              },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10, // Limits the number of ticks to avoid clutter
              },
            },
          },
        }} 
      />
    </div>
  );
};

export default DashboardGraphs;

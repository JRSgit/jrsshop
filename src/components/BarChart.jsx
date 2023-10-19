import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const [barChart, setBarChart] = useState({
    datasets: []
  })
  const [barOptions, setBarOptions] = useState({})

  useEffect(() => {
    setBarChart({
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
      datasets: [{
        label: 'Vendas R$',
        data: [1234, 567, 2314, 3432, 3256, 2145],
        borderColor: 'rgba(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.4)'

      }]
    })
    setBarOptions({
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Vendas Mensais'
        },
      },
      maintainAspectRation: false,
      responsive: true
    })
  }, [])

  return (
    <div className='w-full md:col-span-2  lg:h-full h-[50vh] m-auto p-4 border rounded-lg bg-white'>
      <Bar data={barChart} options={barOptions} />
    </div>
  )
}

export default BarChart
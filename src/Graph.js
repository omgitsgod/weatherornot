import React, {useRef, useEffect} from 'react';
import './css/Graph.css'
import Chart from 'chart.js';

function Graph(props) {
  const chartRef = useRef(null)
  Chart.defaults.global.defaultFontColor = 'white';
  useEffect(()=>{
   const myChartRef = chartRef.current.getContext('2d');
   const pointBackgroundColors = []
   const radiusArr = []

   const x = new Chart(myChartRef, {
      type: props.type,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (e) => {console.log(e.target)}
      },
      data: {
        labels: props.x,
        datasets: [
          {
            label: props.label,
            data: props.data,
            borderColor: '#61dafb',
            backgroundColor: pointBackgroundColors,
            radius: radiusArr,
            pointHoverRadius: 10,
            pointBackgroundColor: pointBackgroundColors,
            fill: false,
          }
        ]
      }
    })
  for (let i = 0; i < x.data.datasets[0].data.length; i++) {
    if (i === props.selected) {
        pointBackgroundColors.push("#61dafb");
        radiusArr.push(5)
    } else {
        pointBackgroundColors.push("#25393e");
        radiusArr.push(2)
    }
  }
  x.update()
}, [props.selected, props.data, props.label, props.type, props.x])


  return (
    <div>
      <canvas
        id='myChart'
        ref={chartRef}
      />
    </div>
  )
}

export default Graph;

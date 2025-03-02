import React from 'react';
import Chart from './chart';

export default function Dashboard() {
  return (
    <div>
      <h3 style={{ margin: '15px 0 0 30px' }}>My Dashboard</h3>
      <br/>
      <div style={style.chartContainer}>
        <Chart style={style.chart} />
        <Chart style={style.chart} />
        <Chart style={style.chart} />
        <Chart style={style.chart} />
        <Chart style={style.chart} />
        <Chart style={style.chart} />
        <Chart style={style.chart} />
        <Chart style={style.chart} />
        <Chart style={style.chart} />
        <Chart style={style.chart} />
      </div>
    </div>
  );
}

const style = {
  chartContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
  },
  chart: {
    width: '300px',
    height: '200px'
  },
}

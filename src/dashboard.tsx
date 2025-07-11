import React, { useEffect, useState }  from 'react';
import Chart from './chart';
// import { useThemeMode } from './theme-context';

export default function Dashboard() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(() => {
    document.title = 'My Test - Dashboard';
  }, []);

   useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );


  return (
    <div>
      <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>
      <h3 style={{ margin: '15px 0 0 30px' }}>My Dashboard</h3>
      <br/>
      <div style={chartContainer}>
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
        <CustomChart style={chartStyle} />
      </div>
    </div>
  );
}

function CustomChart({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={style}>
      <Chart />
    </div>
  );
}

const chartContainer: React.CSSProperties = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'left',
};

const chartStyle: React.CSSProperties = {
  width: '300px',
  height: '200px'
};

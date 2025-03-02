import React, { useState, useEffect } from 'react';
import Header from './header'
import Chart from './chart';

export default function ArticleList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=apple&from=2025-02-23&to=2025-02-23&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h3 style={{ margin: '15px 0 0 30px' }}>My Dashboard</h3>
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
          <Chart style={style.chart} />
        </div>
      </div>
      {data?.articles.map((a, index) => (
        <div
          style={style.div}
          key={index}
        >
          <a
            style={style.article}
            href={a.url}
          >
            <img
              style={style.avatar}
              className="avatar"
              src={a.urlToImage}
              alt={'Photo of ' + a.description}
            />
            <div>
              <h1>{a.title}</h1>
              <p>{a.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

const style = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
  },
  chartContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
  },
  chart: {
    width: '300px',
    height: '200px'
  },
  article: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  avatar: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
  },
}

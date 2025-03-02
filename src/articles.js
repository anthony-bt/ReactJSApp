import React, { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';

export default function Articles() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=apple&from=2025-02-23&to=2025-02-23&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (isLoading) {
    return (
      <Spinner style={style.spinner} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <div>
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
  spinner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
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

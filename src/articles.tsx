import React, { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';

export default function Articles() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'My Test - Articles';

    fetch(`https://newsapi.org/v2/everything?q=apple&from=2025-07-06&to=2025-07-06&sortBy=popularity&apiKey=dcd28e9ccba4430996d1818e88df2c4a`)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center mt-5">
        <CircularProgress size="30px" color="primary" />
      </div>
    );
  } else {
    return (
      <div className="lg:columns-3 md:columns-2 sm:columns-1 m-5 gap-5">
        {data?.articles.map((a, index) => (
          <div
            className="rounded-xl shadow-xl border-1 border-sky-500 break-inside-avoid-column mb-5"
            key={index}
          >
            <a
              className="flex flex-row items-center gap-10 p-5"
              href={a.url}
            >
              <img
                className="size-24 rounded-full"
                src={a.urlToImage}
                alt={'Photo of ' + a.description}
              />
              <div>
                <h1 className="text-xl font-bold mb-2">{a.title}</h1>
                <p className="text-base">{a.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

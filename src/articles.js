import React, { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';

export default function Articles() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'My Test - Articles';

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
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <div class="lg:columns-3 md:columns-2 sm:columns-1 m-5 gap-5">
        {data?.articles.map((a, index) => (
          <div
            class="rounded-xl shadow-xl border-1 border-sky-500 break-inside-avoid-column mb-5"
            key={index}
          >
            <a
              class="flex flex-row items-center gap-10 p-5"
              href={a.url}
            >
              <img
                class="size-24 rounded-full"
                src={a.urlToImage}
                alt={'Photo of ' + a.description}
              />
              <div>
                <h1 class="text-xl font-bold mb-2">{a.title}</h1>
                <p class="text-base">{a.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  }
}
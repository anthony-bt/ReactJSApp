import React from "react";

export default function ErrorPage() {
  return (
    <div style={style.container}>
      <h1>404 - Page Not Found</h1>
      <p>We're sorry, but the page you are looking for does not exist.</p>
    </div>
  );
}

const style = {
  container: {
    height: 'calc(100vh - 56px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
};
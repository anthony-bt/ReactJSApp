import React, { useEffect } from "react";

export default function Contact() {

  useEffect(() => {
    document.title = 'My Test - Contact';
  }, []);

  return (
    <div style={style.container}>
      <h1>Contact us!</h1>
      <p>We're sorry, but the page is in building.</p>
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
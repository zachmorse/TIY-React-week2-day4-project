import React from "react";

const Contact = () => {
  function scrollWin() {
    window.scrollTo(0, 0);
  }

  scrollWin();

  return (
    <div
      style={{
        textAlign: "center",
        color: "white"
      }}
    >
      <h1 style={{ color: "#f0db4f" }}>Get In Touch.</h1>
      <h3>nevernude@gmail.org</h3>
      <h3>615-487-3096</h3>

      <p>
        <a href="https://github.com/">GitHub</a>
        {" | "}
        <a href="https://facebook.com/">Facebook</a>
        {" | "}
        <a href="https://linkedin.com/">LinkedIn</a>
      </p>
    </div>
  );
};

export default Contact;

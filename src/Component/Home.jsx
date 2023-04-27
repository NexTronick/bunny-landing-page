import React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

function Home() {
  //useEffect
  //run navbar-toggler collapsed
  const [styleValues, setStyleValues] = useState({
    top: "6.5%",
    height: "93.5vh",
  });
  const [collapsing, setCollapsing] = useState(false);
  useEffect(() => {
    setInterval(() => {
      const query1 = document.querySelector(".navbar-collapse.collapse.show");
      const collapseQuery = document.querySelector(
        ".navbar-collapse.collapsing"
      );

      if (query1 != null || (collapseQuery != null && !collapsing)) {
        setStyleValues({
          top: "18.5%",
          height: "81.5vh",
        });
        setCollapsing(true);
      } else if (query1 == null || (collapseQuery == null && collapsing)) {
        setStyleValues({
          top: "6.5%",
          height: "93.5vh",
        });
        setCollapsing(false);
      }
    }, 1);
  }, []);
  return (
    <div className="home">
      <div className="bg-image" style={styleValues}></div>
      <div className="container text-white">
        <p className="glitch">
          <span aria-hidden="true">Chimutans</span>
          Chimutans
          <span aria-hidden="true">Chimutans</span>
        </p>
        <p>
          This is a Chimutans Year Of The Rabbits collections. Inspired by the
          Chimutans. To see the full Gallery click bellow.
        </p>
        <Button
          variant="dark"
          style={{
            backgroundColor: "rgba(105, 4, 97, 1)",
            paddingLeft: "50px",
            paddingRight: "50px",
            fontSize: "17px",
            marginTop: "15px",
          }}
          href="/gallery"
        >
          Gallery
        </Button>
      </div>
    </div>
  );
}

export default Home;

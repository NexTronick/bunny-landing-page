import React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import {
  FaTwitter,
  FaTelegram,
  FaDiscord,
  FaMedium,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
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
          top: "24%",
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
      <div className="row float-end" style={{ zIndex: "100" }}>
        <div className="social_box">
          <ul>
            <li>
              <Link to="#">
                <FaTwitter size={35} />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaTelegram size={35} />
              </Link>
            </li>
            <li>
              <Link to="https://discord.gg/GSzsnGKYz4" target="_blank">
                <FaDiscord size={35} />{" "}
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaMedium size={35} />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaYoutube size={35} />
              </Link>
            </li>
            <div className="text">Follow</div>
          </ul>
        </div>
      </div>
      <div className="container text-white">
        <p className="glitch">
          <span aria-hidden="true">Chimutans</span>
          Chimutans
          <span aria-hidden="true">Chimutans</span>
        </p>
        <p>
          This is Year of the Rabbit Chimutans: School Collection. Inspired by
          the Chimutans. To see the full Gallery click below.
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

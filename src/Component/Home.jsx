import Button from "react-bootstrap/Button";
function Home() {
  return (
    <div className="home">
      <div className="bg-image"></div>
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

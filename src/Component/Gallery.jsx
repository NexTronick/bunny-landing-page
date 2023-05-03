import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Gallery() {
  function AddImages() {
    const list = [];

    for (let i = 0; i <= 14; i++) {
      var imageSrc = "images/Chimutans School/download (" + i + ").png";
      var title = `Chimutans, no-${i}`;
      var id = `No. ${i}`;
      var display = {
        i: i,
        imageSrc: imageSrc,
        title: title,
        id: id,
      };

      list.push(display);
    }
    return list;
  }
  return (
    <div className="gallery-div">
      <h1 className="glitch text-center">Gallery</h1>
      <h3 className="gallery-sub">Chimutans minting page</h3>
      <div className="w-75 mx-auto mt-5">
        <Container>
          <Row>
            {AddImages().map((item) => {
              return (
                <Col>
                  <div id={item.id} title={item.title}>
                    <img
                      height="200px"
                      src={item.imageSrc}
                      alt={item.title + " Image"}
                    />
                    <div className="img-txt w-80 px-2" style={{ width: "80%" }}>
                      <span className="w-75 mx-auto">Student chimutan </span>
                      <br />
                      <span>
                        {item.i >= 10
                          ? "#00" + String(item.i + 1)
                          : "#000" + String(item.i + 1)}
                      </span>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Gallery;

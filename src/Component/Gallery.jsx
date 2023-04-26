import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Gallery() {
  function AddImages() {
    const list = [];

    for (let i = 0; i <= 9; i++) {
      var imageSrc = "images/Chimutans/download (" + i + ").png";
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
                    <div class="img-txt w-90 mx-auto">
                      <span>Chimutans</span>
                      <br />
                      <span>{item.id}</span>
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

import Navigation from "./Navigation";
function About() {
  return (
    <div>
      <div className="about w-75 mx-auto">
        <h1 className="glitch text-center">About</h1>
        <div className="glitch-main mt-5">
          <div class="glitch__layers">
            <div class="glitch__layer"></div>
            <div class="glitch__layer"></div>
            <div class="glitch__layer"></div>
          </div>
        </div>
      </div>
      <div className="main-texts w-75 mx-auto py-1">
        <h3>Chimutan</h3>
        <p>
          This is a Chimutans Year Of The Rabbits collections. Inspired by the
          Chimutans.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

export default About;

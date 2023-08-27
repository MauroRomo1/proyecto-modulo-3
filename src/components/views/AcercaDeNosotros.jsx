import "../../css/acercadenosotros.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function GroupExample() {
  return (
    <>
      <div className="backg">
        <h2 className="text-white text-center"> ¿QUIENES SOMOS?🧐</h2>
        <div>
          <h3 className="containerdos text-white text-center">
            Nuestro empresa cuenta con un equipo de profesionales altamente
            capacitados en el área de desarrollo web y diseño gráfico. Con una
            amplia experiencia en la industria quienes han trabajado en una
            variedad de proyectos web alrededeor del mundo. El equipo está
            liderado por un scrum master experimentado que asegura que el
            trabajo se realice de manera eficiente y efectiva. Además, el equipo
            está formado por desarrolladores front-end y back-end que trabajan
            juntos para crear una página web dinámica y atractiva para nuestros
            usuarios.
          </h3>
        </div>
        <CardGroup className="m-3 p-3">
          <Card>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/nzskmBg6/photo-2016-10-23-23-01-20.jpg"
              alt="foto o avatar del scrum master"
            />
            <Card.Body className="text-center">
              <Card.Title>Matias Nicolas Ortega</Card.Title>
              <Card.Text>Student RollingCode School.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Scrum Master</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/PrqqQy2p/se-ores-del-tablero.jpg"
              alt="Imagen los maestros del tablero"
            />
            <Card.Body className="text-center">
              <Card.Title>Los Maestros del Tablero</Card.Title>
              <Card.Text>Nuestro Escudo 😁. </Card.Text>
            </Card.Body>
            <Card.Footer className=" text-center">
              <small className="text-muted">The masters of the board </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/25STzPwj/avatar-agustin-jpeg.jpg"
              alt="foto o avatar del tech led"
            />
            <Card.Body>
              <Card.Title>Mauro Agustin Romo</Card.Title>
              <Card.Text>Student RollingCode School.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Tech Led</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup className="p-3 m-3">
          <Card>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/13hwCbT7/mauricio-aguierre.jpg"
              alt="foto o avatar del developer mauricio aguirre"
            />
            <Card.Body>
              <Card.Title>Mauricio Aguirre</Card.Title>
              <Card.Text>Student RollingCode School.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Developer</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/2SKTS0X4/Whats-App-Image-2023-08-23-at-00-38-24-1.jpg"
              alt="foto o avatar del developer nicolas almiron"
            />
            <Card.Body>
              <Card.Title>Nicolas Almiron</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/VLjW8YjP/Jose-rivadeneira.jpg"
              alt="foto o avatar del developer jose rivadeneira"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  );
}

export default GroupExample;

//  {
//    /* <img
//           src="https://i.postimg.cc/261sTkHM/se-ores-del-tablero.jpg"
//           alt=""
//         ></img> */
// //  }

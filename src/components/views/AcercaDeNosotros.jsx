import "../../css/acercadenosotros.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function AcercaDeNosotros() {
  return (
    <>
      <div className="backg">
        <h2 className="text-white text-center"> ¿QUIENES SOMOS?🧐</h2>
        <div>
          <h3 className="containerdos text-white text-center">
            Nuestro equipo llamado los "Maestros del Tablero" esta conformado
            por un grupo de estudiantes de RollingCode School. El equipo esta
            liderado por un Scrum Master y Tech Led para que el trabajo se
            realice de manera eficiente y efectiva. Juntos buscamos crear una
            pagina ecommerce gamer dinamica y atractiva para nuestros usuarios.
          </h3>
        </div>
        <div className="containerdos">
          <CardGroup className="m-3  floating col-md-5">
            <Card>
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/nzskmBg6/photo-2016-10-23-23-01-20.jpg"
                alt="foto o avatar del scrum master"
              />
              <Card.Body className="text-center bg-dark">
                <Card.Title className="text-white">
                  Matias Nicolas Ortega
                </Card.Title>
                <Card.Text className="text-white">
                  Student RollingCode School.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-dark text-center">
                <small className="text-white">Scrum Master</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/PrqqQy2p/se-ores-del-tablero.jpg"
                alt="Imagen los maestros del tablero"
              />
              <Card.Body className="text-center bg-dark">
                <Card.Title className="text-white">
                  Los Maestros del Tablero
                </Card.Title>
                <Card.Text className="text-white">Nuestro Escudo</Card.Text>
              </Card.Body>
              <Card.Footer className=" text-center bg-dark">
                <small className="text-white">The masters of the board </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/25STzPwj/avatar-agustin-jpeg.jpg"
                alt="foto o avatar del tech led"
              />
              <Card.Body className="bg-dark text-center">
                <Card.Title className="text-white">
                  Mauro Agustin Romo
                </Card.Title>
                <Card.Text className="text-white">
                  Student RollingCode School.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center bg-dark">
                <small className="text-white">Tech Led</small>
              </Card.Footer>
            </Card>
          </CardGroup>

          <CardGroup className="m-3 col-md-5 floating ">
            <Card>
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/13hwCbT7/mauricio-aguierre.jpg"
                alt="foto o avatar del developer mauricio aguirre"
              />
              <Card.Body className="text-center bg-dark">
                <Card.Title className="text-white">Mauricio Aguirre</Card.Title>
                <Card.Text className="text-white">
                  Student RollingCode School.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center bg-dark">
                <small className="text-white">Developer</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/2SKTS0X4/Whats-App-Image-2023-08-23-at-00-38-24-1.jpg"
                alt="foto o avatar del developer nicolas almiron"
              />
              <Card.Body className="text-center bg-dark">
                <Card.Title className="text-white">Nicolas Almiron</Card.Title>
                <Card.Text className="text-white">
                  Student RollingCode School.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center bg-dark">
                <small className="text-white">Developer</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/VLjW8YjP/Jose-rivadeneira.jpg"
                alt="foto o avatar del developer jose rivadeneira"
              />
              <Card.Body className="text-center bg-dark">
                <Card.Title className="text-white">Jose Rivadeneira</Card.Title>
                <Card.Text className="text-white">
                  Student RollingCode School.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center bg-dark">
                <small className="text-white">Developer</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>
    </>
  );
}

export default AcercaDeNosotros;

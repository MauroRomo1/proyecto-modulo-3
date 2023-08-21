import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const Login = () => {
  return (
    <>
      <div className="d-flex justify-content-center bg-secondary bgLogin" style={{ minHeight: '100vh', paddingTop: '4vh' }}>
        <Container className="bg-light mb-auto rounded-4 shadow" style={{ maxWidth: '452px', padding: '30px 52px 29px' }}>
          <h4 className="fw-bold titulo-page-login">
            Acceder o crear una cuenta
          </h4>
          <form className="mt-3">
            <FloatingLabel label="Correo electronico" className="mb-3">
              <Form.Control type="email" placeholder="nombre@ejemplo.com" />
            </FloatingLabel>
            <Button variant="primary" type="submit" style={{ display: 'block', width: '100%' }} className="shadow">
              Continuar
            </Button>
            <h5 className="mt-4 mb-3 subtitulo-page-login">
              Acceso rapido con:
            </h5>

            <div className="conteiner px-3 py-1">
              <Row className="gx-3 py-1 gy-2 justify-content-center">
                <Col xs={12} md={4} lg={4} className="text-center px-1">
                  <Button variant="light" type="submit" className="fuente-boton-social shadow" style={{ width: '100%', paddingRight: '0', paddingLeft: '0' }}>
                    <img src="/public/google.svg" alt="logo google" style={{ paddingRight: '8px' }}></img>
                    Google
                  </Button>
                </Col>
                <Col xs={12} md={4} lg={4} className="text-center px-1">
                  <Button variant="light" type="submit" className="fuente-boton-social shadow" style={{ width: '100%', paddingRight: '0', paddingLeft: '0' }}>
                    <img src="/public/facebook.svg" alt="logo google" style={{ paddingRight: '8px' }}></img>
                    Facebook
                  </Button>
                </Col>
                <Col xs={12} md={4} lg={4} className="text-center px-1">
                  <Button variant="light" type="submit" className="fuente-boton-social shadow" style={{ width: '100%', paddingRight: '0', paddingLeft: '0' }}>
                    <img src="/public/paypal.svg" alt="logo google" style={{ paddingRight: '8px' }}></img>
                    PayPal
                  </Button>
                </Col>
              </Row>

              <Row className="gx-3 py-1 gy-2 justify-content-center">
                <Col xs={12} md={4} lg={4} className="text-center px-1">
                  <Button variant="light" type="submit" className="fuente-boton-social shadow" style={{ width: '100%', paddingRight: '0', paddingLeft: '0' }}>
                    <img src="/public/tiktok.svg" alt="logo google" style={{ paddingRight: '8px' }}></img>
                    TikTok
                  </Button>
                </Col>
                <Col xs={12} md={4} lg={4} className="text-center px-1">
                  <Button variant="light" type="submit" className="fuente-boton-social shadow" style={{ width: '100%', paddingRight: '0', paddingLeft: '0' }}>
                    <img src="/public/twitch.svg" alt="logo google" style={{ paddingRight: '8px' }}></img>
                    Twitch
                  </Button>
                </Col>
                <Col xs={12} md={4} lg={4} className="text-center px-1">
                  <Button variant="light" type="submit" className="fuente-boton-social shadow" style={{ width: '100%', paddingRight: '0', paddingLeft: '0' }}>
                    <img src="/public/twitter.svg" alt="logo google" style={{ paddingRight: '8px' }}></img>
                    Twitter
                  </Button>
                </Col>
              </Row>

              <Row className="gx-3 py-1 gy-2 justify-content-center">
                <Col xs={12} md={4} lg={4} className="text-center px-1">
                  <Button variant="light" type="submit" className="fuente-boton-social shadow" style={{ width: '100%', paddingRight: '0', paddingLeft: '0' }}>
                    <img src="/public/apple.svg" alt="logo google" style={{ paddingRight: '8px' }}></img>
                    Apple
                  </Button>
                </Col>
                <Col xs={12} md={8} lg={8} className="text-center px-1">
                  <Button variant="light" type="submit" className="fuente-boton-social shadow" style={{ width: '100%', paddingRight: '0', paddingLeft: '0' }}>
                    <img src="/public/telefono.svg" alt="logo google" style={{ paddingRight: '8px' }}></img>
                    Teléfono-sólo vendedores
                  </Button>
                </Col>
              </Row>

            </div>
          </form>
        </Container>
      </div >
    </>
  );
};

export default Login;

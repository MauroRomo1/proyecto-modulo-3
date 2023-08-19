import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const Login = () => {
  return (
    <>
      <div className="row justify-content-center bg-dark" style={{ height: '100vh', paddingTop: '48px' }}>
        <Card style={{ width: '460px', padding: '30px 52px 29px', maxHeight: '70vh' }}>
          <h4>Acceder o crear una cuenta</h4>
          <form className="mt-3" >
            <FloatingLabel label="Introduce tu correo electronico" className="mb-3">
              <Form.Control type="email" placeholder="nombre@ejemplo.com" />
            </FloatingLabel>
            <Button variant="primary" type="submit" style={{ display: 'block', width: '100%' }}>
              Continuar
            </Button>
          </form>

        </Card>
      </div >

    </>
  );
};

export default Login;

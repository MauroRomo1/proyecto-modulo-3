import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../helpers/queries";
import Swal from "sweetalert2";


const AltaUsuario = () => {
  //Hook de React-Router-Dom para redireccionar a otras paginas
  const navegacion = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = () => {
    console.log('Los Datos del Formulario cumplen las validaciones.')
    login(usuarioNuevo).then((respuestaNueva) => {
      console.log(respuestaNueva)
      if (respuestaNueva) {
        Swal.fire(
          '¡Felicitaciones ' + respuestaNueva.nombreUsuario + '!',
          'Ya eres parte de nuestro Team!',
          'success'
        )
        //Envio al usuario nuevo a Login:
        navegacion('/login');
      } else {
        Swal.fire(
          'Oops!',
          'Hay algun error en los datos ingresados. Prueba nuevamente!',
          'error'
        )
      }
    })
  }

  return (
    <>
      <div className="d-flex justify-content-center bg-secondary bgLogin" style={{ minHeight: '100vh', paddingTop: '4vh' }}>
        <Container className="bg-light mb-auto rounded-4 shadow" style={{ maxWidth: '452px', padding: '30px 52px 29px' }}>

          <h4 className="fw-bold titulo-page-login">
            Cree una cuenta con nosotros:
          </h4>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
            <FloatingLabel label="Nombre de usuario" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Mario Bross"
                {
                ...register('nombreUsuario', {
                  required: 'El nombre es un dato obligatorio',
                  pattern: {
                    value: /^(?:[a-zA-Z0-9]{2,16}\s*){1,}$/,
                    message: 'El nombre debe tener entre 2 y 16 caracteres'
                  }
                })
                }
              />
              <Form.Text className="text-danger">
                {errors.nombreUsuario?.message}
              </Form.Text>
            </FloatingLabel>

            <FloatingLabel label="Correo electronico" className="mb-3">
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                {
                ...register('email', {
                  required: 'El email es un dato obligatorio',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'El email debe cumplir con un formato valido, ej: nombre@mail.com'
                  }
                })
                }
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </FloatingLabel>

            <FloatingLabel label="password" className="mb-3">
              <Form.Control
                type="password"
                placeholder="password"
                {
                ...register('password', {
                  required: 'El password es un dato obligatorio',
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message: 'El password debe contener al menos una letra mayuscula, una minuscula, un numero y entre 8 y 16 caracteres'
                  }
                })
                }
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </FloatingLabel>

            <Button variant="primary" type="submit" style={{ display: 'block', width: '100%' }} className="shadow">
              Crear cuenta!
            </Button>

          </form>
        </Container>
      </div >
    </>
  );
};

export default AltaUsuario;

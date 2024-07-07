import { Container } from 'react-bootstrap';

export default function NotFound() {
  return (
    <Container className="text-center pt-5">
      <p className='fs-2 fw-bold'>No podemos cargar la URL</p>
    </Container>
  );
}
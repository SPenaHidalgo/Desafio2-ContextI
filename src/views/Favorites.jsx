import { Container, Row } from 'react-bootstrap';
import Gallery from '../components/Gallery'

export default () => {
  return (
    <Container className="text-center pt-5">
      <h1 className='mb-2 fw-bold'>Favoritos</h1>
    <Row xs={1} md={2} lg={4} className="g-3 mb-3">
      <Gallery filtro={'favorites'}/>
    </Row>
    </Container>
  );
};
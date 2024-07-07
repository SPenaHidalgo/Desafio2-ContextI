import { Col, Card } from 'react-bootstrap';
import { useContext } from 'react';
import { Context } from '../context/PhotoContext';
import Select from './Select';

export default function Gallery({ filtro = 'home' }) {
  const { fotos } = useContext(Context);

  const filteredFotos = filtro === 'favorites'
    ? fotos.filter(foto => foto.liked)
    : fotos;

  return (
    <>
      {filteredFotos.map(foto => (
        <Col key={foto.id}>
          <Card className="text-white">
            <Card.Img src={foto.src} alt={foto.alt} />
            <Card.ImgOverlay>
              <Card.Text className="text-end">
                <Select id={foto.id} />
              </Card.Text>
              <Card.Text>{foto.alt}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      ))}
    </>
  );
}

import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const contato = ({
  id,
  nome,
  telefone,
  email,
  datadenacimento,
  handleRemovecontato
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="contato">
      <Card.Body>
        <Card.Title className="book-title">{nome}</Card.Title>
        <div className="book-details">
          <div>ser humano: {nome}</div>
          <div>numero que era ngm liga: {email} </div>
          <div>email: {telefone} </div>
          <div>Data que ngm lembra: {new Date(datadenacimento).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemovecontato(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from './Button';
import cardsData from '../data/CardsData.json'; // Adjust path as necessary

function CardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const card = cardsData.find((card) => card.id === parseInt(id, 10));

  if (!card) {
    return (
      <div>
        <h1>Card not found!</h1>
        <Button onClick={() => navigate('/user/dashboard')}>Back to Dashboard</Button>
      </div>
    );
  }

  return (
    <div>
      <h1>{card.title}</h1>
      <p>{card.content}</p>
      <Button onClick={() => navigate('/user/dashboard')}>Back to Dashboard</Button>
    </div>
  );
}

export default CardDetail;



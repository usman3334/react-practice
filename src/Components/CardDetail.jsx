import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../Components/Button';

function CardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const cardsData = [
    { id: 1, title: 'Card 1', content: 'This is the content for Card 1.' },
    { id: 2, title: 'Card 2', content: 'This is the content for Card 2.' },
    { id: 3, title: 'Card 3', content: 'This is the content for Card 3.' },
    { id: 4, title: 'Card 4', content: 'This is the content for Card 4.' },
    { id: 5, title: 'Card 5', content: 'This is the content for Card 5.' },
  ];

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

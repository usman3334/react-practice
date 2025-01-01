import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';

function UserDashboard() {
  const cardsData = [
    { id: 1, title: 'Card 1', content: 'This is the content for Card 1.' },
    { id: 2, title: 'Card 2', content: 'This is the content for Card 2.' },
    { id: 3, title: 'Card 3', content: 'This is the content for Card 3.' },
    { id: 4, title: 'Card 4', content: 'This is the content for Card 4.' },
    { id: 5, title: 'Card 5', content: 'This is the content for Card 5.' },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <h1>User Dashboard</h1>
      <div>
        {cardsData.map((card) => (
          <div key={card.id}>
            <h2>{card.title}</h2>
            <p>Click below to view more.</p>
            <Button onClick={() => navigate(`/user/dashboard/card/${card.id}`)}>
              View Content
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;

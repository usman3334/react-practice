import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import cardsData from '../../data/CardsData.json'; // Adjust path as necessary

function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-red-500">User Dashboard</h1>
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


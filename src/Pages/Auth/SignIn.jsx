import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import Checkbox from '../../Components/Checkbox';

function SignIn() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (isAdmin) {
      navigate('/admin/dashboard');
    } else {
      navigate('/user/dashboard');
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
        <Checkbox
          id="isAdmin"
          checked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)}
        />
        <Button
          onClick={handleSignIn}
        >
          Sign In
        </Button>
      </div>
  );
}

export default SignIn;


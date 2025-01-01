import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';

function SignIn() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = React.useState(false); // Checkbox to toggle admin/user

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent form default submission
    if (isAdmin) {
      navigate('/admin/dashboard');
    } else {
      navigate('/user/dashboard');
    }
  };


  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSignIn}>
          <InputField
            label="Email address"
            type="email"
            placeholder="Enter your email"
            required
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
          />

          <div className="flex items-center space-x-2">
            <Checkbox
              label="Sign in as Admin"
              id="isAdmin"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
            <label htmlFor="isAdmin" className="text-sm text-gray-900">
              For Admin Dashboard
            </label>
          </div>

          <div>
            <Button type="submit" className="w-full bg-indigo-600 text-white">
              Sign In
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Button onClick={() => navigate('/signup')} 
          className="font-semibold bg-white px-0 py-0 m-0 text-indigo-600 hover:text-indigo-500"
          >
            Sign up here
          </Button>

        </p>
      </div>
    </div>
  );
}

export default SignIn;

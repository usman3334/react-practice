import React from 'react';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign Up for an Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <InputField
            label="First Name"
            type="text"
            placeholder="Enter your first name"
            required
          />

          <InputField
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
            required
          />

          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            required
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Create a password"
            required
          />

          <div>
            <Button type="submit" className="w-full bg-indigo-600 text-white">
              Sign Up
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Button 
            onClick={() => navigate('/')} 
            className="font-semibold bg-white px-0 py-0 m-0 text-indigo-600 hover:text-indigo-500"
          >
            Sign in here
          </Button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;




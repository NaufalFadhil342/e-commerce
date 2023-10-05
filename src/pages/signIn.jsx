import React from 'react';
import '../styles/signIn.css';
import { SignForm } from '../components/form';

const SignIn = () => {
  return (
    <div className="signIn">
      <h3>Sign In</h3>
      <SignForm />
    </div>
  );
};

export default SignIn;

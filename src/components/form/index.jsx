import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/form.css';
import { FcGoogle } from 'react-icons/fc';

export const SignForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSignIn = async (e) => {
    e.preventDefault();

    if (username.length === 0 || password.length === 0) {
      alert('You should complete the form');
    } else {
      alert('Congrats! you currently have an account');
      navigate('/');
    }

    const users = {
      username,
      password,
    };

    localStorage.setItem('users', JSON.stringify(users));
  };

  return (
    <>
      <form onSubmit={onSignIn}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="login">Sign In</button>
      </form>
      <button className="withGoogle">
        <FcGoogle />
        Sign In with Google
      </button>
    </>
  );
};

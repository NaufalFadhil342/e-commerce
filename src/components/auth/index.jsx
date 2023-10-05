import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';
import { BiLogoInstagram, BiLogoTwitter, BiLogoFacebook, BiLogoYoutube } from 'react-icons/bi';
import { useAuth } from '../hooks/useAuth';
import { useSignOut } from '../hooks/userSignOut';

const followUs = [
  {
    name: 'Instagram',
    logo: <BiLogoInstagram />,
  },
  {
    name: 'Twitter',
    logo: <BiLogoTwitter />,
  },
  {
    name: 'Facebook',
    logo: <BiLogoFacebook />,
  },
  {
    name: 'Youtube',
    logo: <BiLogoYoutube />,
  },
];

const Auth = () => {
  const { signout } = useSignOut();
  const { user } = useAuth();

  const renderedIcons = followUs.map((icon, index) => {
    return <span key={index}>{icon.logo}</span>;
  });

  const Helper = () => {
    return (
      <div className="helper">
        <Link to="/call-center">Call Center</Link>|<Link>Download</Link>
      </div>
    );
  };

  const UserNotSignIn = () => {
    return (
      <>
        <Link to="/signin">Sign In</Link> | <Link to="/signup">Sign Up</Link>
      </>
    );
  };

  const UserSignIn = () => {
    return (
      <div className="userSignin">
        <p>Hi, {user.username}</p>
        <button onClick={() => signout()}>Logout</button>
      </div>
    );
  };

  return (
    <div className="auth">
      <p>
        <Helper /> | Ikuti kami di {renderedIcons}
      </p>
      <div className="sign">{user ? <UserSignIn /> : <UserNotSignIn />}</div>
    </div>
  );
};

export default Auth;

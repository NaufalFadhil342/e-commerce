import { useAuth } from './useAuth';

export const useSignOut = () => {
  const { dispatch } = useAuth();

  const signout = () => {
    localStorage.removeItem('users');

    dispatch({ type: 'SIGNOUT' });
  };

  return { signout };
};

import { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return { user: action.payload };
    case 'SIGNOUT':
      return { user: null };
    default:
      return state;
  }
};

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('users'));

    if (user) {
      dispatch({ type: 'SIGNIN', payload: user });
    }
  }, []);

  console.log('AuthContext state: ', state);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{props.children}</AuthContext.Provider>;
};

import {createContext, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {useLocation, useNavigate} from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {postLogin} = useAuthentication();
  const {getUserByToken, postUser} = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  // login, logout and autologin functions are here instead of components
  const handleLogin = async (credentials) => {
    try {
      const loginResult = await postLogin(credentials);
      console.log('loginResult', loginResult);

      setUser(loginResult.user);

      // save login token to local storage
      localStorage.setItem('token', loginResult.token);

      // redirect to home if login successful
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.clear();
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
  const handleAutoLogin = async () => {
    const token = localStorage.getItem('token');

    try {
      if (token) {
        const userResponse = await getUserByToken(token);
        setUser(userResponse.user);

        navigate(location.pathname);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // register and log in
  const handleRegister = async (user) => {
    try {
      const userLogin = {username: user.username, password: user.password};
      await postUser(user);
      await handleLogin(userLogin);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <UserContext.Provider
      value={{handleLogin, handleLogout, handleAutoLogin, handleRegister, user}}
    >
      {children}
    </UserContext.Provider>
  );
};
export {UserProvider, UserContext};

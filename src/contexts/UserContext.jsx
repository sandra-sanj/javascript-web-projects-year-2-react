import {createContext, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {useLocation, useNavigate} from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {postLogin} = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  // login, logout and autologin functions are here instead of components
  const handleLogin = async (credentials) => {
    try {
      // TODO: post login credentials to API
      // TODO: set token to local storage
      // TODO: set user to state
      // TODO: navigate to home
      // TODO: add login functionalities here

      const loginResult = await postLogin(credentials);
      console.log('loginResult', loginResult);

      setUser(loginResult.user);
      console.log(loginResult, loginResult.user);

      // save login token to local storage
      localStorage.setItem('token', loginResult.token);
      //console.log(localStorage.getItem('token'));

      // redirect to home if login successful
      /*if (loginResult?.token) {
        navigate('/');
      }*/
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogout = () => {
    try {
      // TODO: remove token from local storage
      // TODO: set user to null
      // TODO: navigate to home or login page
      localStorage.clear();
      setUser(null);
      navigate('/login');
    } catch (e) {
      console.log(e.message);
    }
  };

  // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
  const handleAutoLogin = async () => {
    const token = localStorage.getItem('token');

    try {
      // TODO: get token from local storage
      // TODO: if token exists, get user data from API
      // TODO: set user to state
      // TODO: navigate to home
      if (token) {
        const userResponse = await getUserByToken(token);
        setUser(userResponse.user);

        console.log('location', location);
        navigate(location.pathname);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <UserContext.Provider
      value={{handleLogin, handleLogout, handleAutoLogin, user}}
    >
      {children}
    </UserContext.Provider>
  );
};
export {UserProvider, UserContext};

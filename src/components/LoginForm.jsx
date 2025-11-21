import useForm from '../hooks/formHooks';
import {postLogin} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

const LoginForm = () => {
  const navigate = useNavigate();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    console.log(inputs);

    try {
      // TODO: add login functionalities here
      const loginResult = await postLogin(inputs);
      console.log('loginResult', loginResult);

      // save login token to local storage
      localStorage.setItem('token', loginResult.token);
      //console.log(localStorage.getItem('token'));

      // redirect to home if login successful
      if (loginResult?.token) {
        navigate('/');
      }
    } catch (error) {
      console.log('login error', error);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues,
  );
  //console.log(inputs);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{width: '400px', margin: 'auto'}}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;

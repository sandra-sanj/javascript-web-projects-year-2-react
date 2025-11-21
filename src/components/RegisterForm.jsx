import useForm from '../hooks/formHooks';
import {postUser} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

const RegisterForm = () => {
  return <div>RegisterForm</div>;

  /*const navigate = useNavigate();

  const initValues = {
    username: '',
    password: '',
    email: '',
  };

  const doRegister = async () => {
    console.log(inputs);

    try {
      // TODO: add login functionalities here
      const registerResult = await postUser(inputs);
      console.log('registerResult', registerResult);

      // save login token to local storage
      localStorage.setItem('token', registerResult.token);
      //console.log(localStorage.getItem('token'));

      // redirect to home if login successful
      if (registerResult?.token) {
        navigate('/');
      }
    } catch (error) {
      console.log('register error', error);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    initValues,
  );

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} style={{width: '400px', margin: 'auto'}}>
        <div>
          <label htmlFor="registeruser">Username</label>
          <input
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="registerpassword">Password</label>
          <input
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <div>
          <label htmlFor="registeremail">Email</label>
          <input
            name="email"
            type="email"
            id="registeremail"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );*/
};

export default RegisterForm;

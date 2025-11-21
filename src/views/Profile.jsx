import {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const {getUserByToken} = useUser();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userResponse = await getUserByToken(
          localStorage.getItem('token'),
        );
        setUser(userResponse.user);
      } catch (error) {
        setError(error.message);
        console.log('getUserData error', error);
      }
    };
    getUserData();
  }, []);
  console.log('user', user);

  return (
    <>
      <h2>Profile</h2>
      <hr />
      {user && (
        <>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Registered at: {user.created_at}</p>
        </>
      )}
      {error && (
        <>
          <p>Profile information loading failed. {error}</p>
        </>
      )}
    </>
  );
};

export default Profile;

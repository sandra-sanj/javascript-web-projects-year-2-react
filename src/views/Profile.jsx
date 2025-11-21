import {useState} from 'react';
import {useUserContext} from '../hooks/contextHooks';

const Profile = () => {
  const [error, setError] = useState('');
  const {user} = useUserContext();

  console.log('user', user);

  return (
    <>
      <h2>Profile</h2>
      <hr />
      {user ? (
        <>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Registered at: {user.created_at}</p>
        </>
      ) : (
        <p>Loading profile information...</p>
      )}
      {error && (
        <>
          <p>Loading profile information failed. {error}</p>
        </>
      )}
    </>
  );
};

export default Profile;

import {useState} from 'react';
import {useUserContext} from '../hooks/contextHooks';

const Profile = () => {
  const [error, setError] = useState('');
  const {user} = useUserContext();

  //console.log('user', user);

  return (
    <>
      <h2 className="bg-green-700 text-cyan-200 w-auto hover:bg-amber-200 hover:text-amber-900 text-3xl">
        Profile
      </h2>

      <hr />
      {user ? (
        <>
          <div className="p-7 ps-20 h-screen">
            <div className="card justify-self-center border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
                Username: {user.username}
              </h5>
              <p className="text-body">Email: {user.email}</p>
              <p className="text-body">Registered at: {user.created_at}</p>
            </div>
          </div>
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

import {useUserContext} from '../hooks/contextHooks';

export const Logout = () => {
  const {handleLogout} = useUserContext();
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Logout;

import {useUserContext} from '../hooks/contextHooks';

export const Logout = () => {
  const {handleLogout} = useUserContext();
  return (
    <>
      <div className="h-screen">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Logout;

import {useLocation, useNavigate} from 'react-router';
import Likes from '../components/Likes';

const Single = () => {
  const navigate = useNavigate();

  const {state} = useLocation();
  const item = state;

  if (item) {
    return (
      <div className="single-view-dialog">
        {}

        {item.media_type.includes('image') ? (
          <img src={item.thumbnail} alt={item.title} />
        ) : (
          <video width="80%" controls>
            <source src={item.filename} type={item.media_type} />
            Your browser does not support the video tag.
          </video>
        )}

        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>User: {item.username}</p>
          <p>
            Created at{' '}
            {new Date(item.created_at).toLocaleString('fi', {
              dateStyle: 'long',
              timeStyle: 'short',
            })}
          </p>
          <Likes mediaId={item.media_id} />
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }
  return <div></div>;
};

export default Single;

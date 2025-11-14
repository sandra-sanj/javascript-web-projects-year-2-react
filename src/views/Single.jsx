import PropTypes from 'prop-types';
import {useLocation, useNavigate} from 'react-router';

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
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }
  return <div></div>;
};

Single.propTypes = {};

export default Single;

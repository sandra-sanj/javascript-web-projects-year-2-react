import {useNavigate} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import {useState} from 'react';
import EditDialog from './EditDialog';

const MediaRow = (props) => {
  const {item, modifyMedia, deleteMedia} = props;
  const navigate = useNavigate();

  const {user} = useUserContext();
  const token = localStorage.getItem('token');

  const [showEdit, setShowEdit] = useState(false);

  //console.log(user);
  //console.log(item);

  //console.log(user.user_id, item.user_id);

  // test if user is logged in and can modify item
  const isLoggedIn = Boolean(user);
  const isOwner = isLoggedIn && user.user_id === item.user_id ? true : false;
  const isAdmin = user.level_name === 'Admin';
  //console.log(isLoggedIn, isOwner, isAdmin);
  const canEdit = isOwner || isAdmin;

  const handleModify = () => {
    console.log('clicked modify, open dialog');
    setShowEdit(true);
  };

  const handleDelete = () => {
    console.log('clicked delete, delete element');
    if (confirm('Are you sure you want to delete this media?')) {
      deleteMedia(item.media_id, token);
    }
  };

  //console.log(item);

  return (
    <tr key={item.media_id}>
      <td>
        <img
          src={item.thumbnail}
          alt={item.title}
          onClick={() => {
            navigate('/single', {state: item});
          }}
        />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.username}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td className="*:bg-amber-200 cursor-pointer *:hover:bg-amber-300 *:text-center *:p-1.5">
        <div
          onClick={() => {
            navigate('/single', {state: item});
          }}
        >
          Show
        </div>

        {canEdit && (
          <>
            <div onClick={handleModify}>Modify</div>
            <div onClick={handleDelete}>Delete</div>
            {showEdit && (
              <EditDialog
                item={item}
                modifyMedia={modifyMedia}
                onClose={() => setShowEdit(false)}
              />
            )}
          </>
        )}
      </td>
    </tr>
  );
};

export default MediaRow;

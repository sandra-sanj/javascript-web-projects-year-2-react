import {useState} from 'react';
import MediaRow from '../components/MediaRow';
import {useMedia} from '../hooks/apiHooks';
import SingleView from '../components/SingleView';

const MEDIA_API = import.meta.env.VITE_MEDIA_API + '/media';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const {mediaArray, modifyMedia, deleteMedia} = useMedia();
  return (
    <>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Username</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Open</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((mediaItem) => (
            <MediaRow
              key={mediaItem.media_id}
              item={mediaItem}
              setSelectedItem={setSelectedItem}
              modifyMedia={modifyMedia}
              deleteMedia={deleteMedia}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;

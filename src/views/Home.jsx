import {useEffect, useState} from 'react';
import MediaRow from '../components/MediaRow';

const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    if (json.message) {
      throw new Error(json.message);
    }
    throw new Error(`Error ${response.status} occured`);
  }
  return json;
};

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const getMediaWithUsername = (mediaItems) => {
    return Promise.all(
      mediaItems.map(async (item) => {
        const result = await fetchData(
          import.meta.env.VITE_AUTH_API + '/users/' + item.user_id,
        );
        // add username to media items array
        return {...item, username: result.username};
      }),
    );
  };

  const getMedia = async () => {
    try {
      const mediaJson = await fetchData(
        import.meta.env.VITE_MEDIA_API + '/media',
      );

      // combine username to media json
      const mediaJsonWithUsername = await getMediaWithUsername(mediaJson);
      console.log(mediaJsonWithUsername);

      setMediaArray(mediaJsonWithUsername);
    } catch (error) {
      console.log('error', error.message);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);
  console.log(mediaArray);

  const [selectedItem, setSelectedItem] = useState(null);
  const updateSelectedItem = (newItem) => {
    setSelectedItem(newItem);
    console.log(selectedItem);
  };

  return (
    <>
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
          {mediaArray &&
            mediaArray.map((item) => (
              <MediaRow
                key={item.media_id}
                item={item}
                updateSelectedItem={updateSelectedItem}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;

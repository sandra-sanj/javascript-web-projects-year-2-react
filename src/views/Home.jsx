import {useEffect, useState} from 'react';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';

const fetchData = async (url, options = {}) => {
  // console.log('fetching data from url: ', url);
  const response = await fetch(url, options);
  const json = await response.json();
  if (!response.ok) {
    // console.log('json', json);
    if (json.message) {
      throw new Error(json.message);
    }
    throw new Error(`Error ${response.status} occured`);
  }
  return json;
};

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      const json = await fetchData(`/test.json`);
      setMediaArray(json);
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
      {selectedItem !== null ? (
        <SingleView
          key={selectedItem?.media_id}
          item={selectedItem}
          updateSelectedItem={updateSelectedItem}
        />
      ) : (
        console.log('Could not open dialog as selectedItem is null')
      )}
    </>
  );
};
export default Home;

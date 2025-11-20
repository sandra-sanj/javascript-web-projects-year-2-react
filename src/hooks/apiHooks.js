import {useEffect, useState} from 'react';
import fetchData from '../utils/fetchData';

const MEDIA_API = import.meta.env.VITE_MEDIA_API + '/media/';
const AUTH_API = import.meta.env.VITE_AUTH_API + '/users/';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const getMediaWithUsername = (mediaItems) => {
    return Promise.all(
      mediaItems.map(async (item) => {
        const result = await fetchData(AUTH_API + item.user_id);
        // add username to media items array
        return {...item, username: result.username};
      }),
    );
  };

  const getMedia = async () => {
    try {
      const mediaJson = await fetchData(MEDIA_API);

      // combine username to media json
      const mediaJsonWithUsername = await getMediaWithUsername(mediaJson);

      setMediaArray(mediaJsonWithUsername);
    } catch (error) {
      console.log('error', error.message);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);
  console.log('mediaArray', mediaArray);

  return {mediaArray};
};

export {useMedia};

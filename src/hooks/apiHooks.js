import {useEffect, useState} from 'react';
import fetchData from '../utils/fetchData';

const MEDIA_API = import.meta.env.VITE_MEDIA_API;
const AUTH_API = import.meta.env.VITE_AUTH_API;
const UPLOAD_API = import.meta.env.VITE_UPLOAD_SERVER;

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const getMediaWithUsername = (mediaItems) => {
    return Promise.all(
      mediaItems.map(async (item) => {
        const result = await fetchData(AUTH_API + '/users/' + item.user_id);
        // add username to media items array
        return {...item, username: result.username};
      }),
    );
  };

  const getMedia = async () => {
    try {
      const mediaJson = await fetchData(MEDIA_API + '/media/');

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

  const postMedia = async (fileData, inputs, token) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...inputs, ...fileData}),
    };

    const mediaResponse = await fetchData(MEDIA_API + '/media/', fetchOptions);
    console.log('postResponse', mediaResponse);
    return mediaResponse;
  };

  const modifyMedia = async (itemId, itemData, token) => {
    const fetchOptions = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...itemData}),
    };
    console.log(fetchOptions);

    const modifyResponse = await fetchData(
      MEDIA_API + '/media/' + itemId,
      fetchOptions,
    );
    console.log('putResponse', modifyResponse);
    return modifyResponse;
  };

  const deleteMedia = async (itemId, token) => {
    const fetchOptions = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    const deleteResponse = await fetchData(
      MEDIA_API + '/media/' + itemId,
      fetchOptions,
    );
    console.log('deleteResponse', deleteResponse);
    return deleteResponse;
  };

  return {mediaArray, postMedia, modifyMedia, deleteMedia};
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    try {
      const fetchOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      };

      const loginResult = await fetchData(
        `${AUTH_API}/auth/login`,
        fetchOptions,
      );
      console.log('login result', loginResult);
      return loginResult;
    } catch (error) {
      console.log('error', error.message);
      return null;
    }
  };

  return {postLogin};
};

const useUser = () => {
  const getUserByToken = async (token) => {
    const fetchOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    const tokenResult = await fetchData(
      `${AUTH_API}/users/token`,
      fetchOptions,
    );
    return tokenResult;
  };

  const postUser = async (user) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const registerResult = await fetchData(`${AUTH_API}/users`, fetchOptions);
    return registerResult;
  };

  return {getUserByToken: getUserByToken, postUser: postUser};
};

const useFile = () => {
  const postFile = async (file, token) => {
    const formData = new FormData();
    formData.append('file', file);

    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    const uploadResponse = await fetchData(
      `${UPLOAD_API}/upload`,
      fetchOptions,
    );
    return uploadResponse;
  };
  return {postFile};
};

const useLike = () => {
  const postLike = async (mediaId, token) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({media_id: mediaId}),
    };
    const likeResponse = await fetchData(MEDIA_API + '/likes', fetchOptions);
    return likeResponse;
  };

  const deleteLike = async (likeId, token) => {
    const fetchOptions = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const likeResponse = await fetchData(
      `${MEDIA_API}/likes/${likeId}`,
      fetchOptions,
    );
    return likeResponse;
  };

  const getLikeCountByMediaId = async (mediaId) => {
    return await fetchData(`${MEDIA_API}/likes/count/${mediaId}`);
  };

  const getLikeByUser = async (mediaId, token) => {
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return await fetchData(
      `${MEDIA_API}/likes/bymedia/user/${mediaId}`,
      fetchOptions,
    );
  };

  return {postLike, deleteLike, getLikeCountByMediaId, getLikeByUser};
};

export {useMedia, useAuthentication, useUser, useFile, useLike};

import {useState, useEffect} from 'react';
import {useLike} from '../hooks/apiHooks';
import {useUserContext} from '../hooks/contextHooks';

const Likes = ({mediaId}) => {
  const {postLike, deleteLike, getLikeCountByMediaId, getLikeByUser} =
    useLike();

  const {user} = useUserContext();
  const token = localStorage.getItem('token');

  const [likeCount, setLikeCount] = useState(0);
  const [userLike, setUserLike] = useState(false);

  // load likes to ui
  const loadLikes = async () => {
    try {
      const count = await getLikeCountByMediaId(mediaId);
      setLikeCount(count.count);

      const like = await getLikeByUser(mediaId, token);
      console.log(like);
      // set user like as true if no error
      setUserLike(like.like_id);
    } catch (error) {
      //console.log(error.message);
      console.log('User has not liked this item');
      setUserLike(false);
    }
  };

  useEffect(() => {
    loadLikes();
  }, []);

  //console.log('mediaId', mediaId);
  console.log('likeCount', likeCount);
  console.log('userLike', userLike);

  const handleLike = async () => {
    if (!userLike) {
      // like media
      await postLike(mediaId, token);
    } else {
      // unlike media
      await deleteLike(userLike, token);
    }
    await loadLikes();
  };

  return (
    <>
      <p>{likeCount} likes</p>
      {user && (
        <button onClick={handleLike}>{userLike ? 'Unlike' : 'Like'}</button>
      )}
    </>
  );
};

export default Likes;

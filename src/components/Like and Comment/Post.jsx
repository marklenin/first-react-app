import React, { useState } from 'react';

const Post = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    setComments([...comments, comment]);
    e.target.comment.value = '';
  };

  return (
    <div>
      <h2>Пост</h2>
      <button onClick={handleLike}>Лайк</button>
      <p>Лайков: {likes}</p>

      <form onSubmit={handleComment}>
        <input type="text" name="comment" placeholder="Добавить комментарий" />
        <button type="submit">Комментировать</button>
      </form>

      <h3>Комментарии</h3>
      {comments.length === 0 ? (
        <p>Нет комментариев</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Post;

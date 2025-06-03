import React, { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    setLiked(!liked);
    setCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #aaa', width: '200px', borderRadius: '10px' }}>
      <button onClick={toggleLike}>
        {liked ? '👎' : '👍'}
      </button>
      <p>Total Likes: {count}</p>
    </div>
  );
}

export default LikeButton;

import React from 'react';

const PostCard = ({ post }) => (
  <div className="post-card">
    <img src={post.avatar} alt={`${post.firstName} ${post.lastName}`} />
    <h3>{post.firstName} {post.lastName}</h3>
    <p>{post.writeup}</p>
    <img src={post.image} alt="Post" />
  </div>
);

export default PostCard;

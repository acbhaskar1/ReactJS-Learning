import React from 'react';

function UserCard(props) {
  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: "5px 5px #ccc" }}>
      <h2>Hello, {props.name}!</h2>
      <p>Job: {props.job}</p>
    </div>
  );
}

export default UserCard;

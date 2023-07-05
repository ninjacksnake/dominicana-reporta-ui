import React from 'react';
import { Avatar, Image } from 'antd';
import avatar from '../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'

const UserProfileBox = ({ name, email, avatarUrl }) => {


  return (
    
    <div style={{ textAlign: 'center' , backgroundColor:" rgb(2, 26, 46)", padding: "10"}}>
      <Image size={128} src={avatar} style={{borderRadius:"50%", scale:"70%", }} />
      <h2 style={{ margin: '10px 0', fontWeight: 'bold' }}>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default UserProfileBox;
import React from 'react';
import { useParams } from 'react-router-dom';

const  Post = () => {
  const param = useParams();
  console.log(param.id)
  return (
    <div> 
      Post
    </div>
  )
}

export default  Post
import React from 'react'
import { Container, List } from 'reactstrap'
import data from '../../data/posts.json';
import PostItem from './PostItem';

const Posts = () => {
  return (
    <Container style={{ paddingTop: "70px" }}>
      Posts
      <List>
        {data.posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </List>
    </Container>
  )
}

export default Posts
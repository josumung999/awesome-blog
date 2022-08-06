import React from 'react'
import { Container, List } from 'reactstrap'
import data from '../../data/posts.json';

const Posts = () => {
  return (
    <Container style={{ paddingTop: "70px" }}>
      Posts
      <List>
        {data.posts.map((post) => (
          <li>
            {post.title}
          </li>
        ))}
      </List>
    </Container>
  )
}

export default Posts
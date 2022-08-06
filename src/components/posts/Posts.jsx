import React from 'react'
import { Container, List } from 'reactstrap'
import data from '../../data/posts.json';
import PostItem from './PostItem';

// setting up pagination
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useEffect } from 'react';

const Posts = ({itemsPerPage}) => {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  let limit = 3;


  return (
    <Container style={{ paddingTop: "70px" }}>
      <h2 className='my-4'>Latest Posts</h2>
      <List>
        {currentItems.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </List>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </Container>
  )
}

export default Posts
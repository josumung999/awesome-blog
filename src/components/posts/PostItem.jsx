import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap'

const PostItem = (props) => {
  return (
    <Card className='my-2'>
      <CardBody>
        <CardTitle tag="h5">
          {props.post.title}
        </CardTitle>
        <CardText>
          <small className='text-muted'>
            {props.post.date}
          </small>
        </CardText>
        <Link to={`/post/${props.post.id}`}>
          <Button color='primary'>
            Read More
          </Button>
        </Link>
      </CardBody>
    </Card>
  )
}

export default PostItem
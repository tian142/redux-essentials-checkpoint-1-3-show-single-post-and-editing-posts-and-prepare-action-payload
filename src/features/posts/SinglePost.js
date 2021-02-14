import React from 'react'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

export const SinglePost = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link>Edit</Link>
    </div>
  )
}

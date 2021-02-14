import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { postEdited } from './postsSlice'

import { useHistory } from 'react-router-dom'

export const EditPost = ({ match }) => {
  const { postId } = match.params

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)

  const dispatch = useDispatch()

  const history = useHistory()

  const onEditSubmit = () => {
    dispatch(
      postEdited({
        id: postId,
        title,
        content,
      })
    )
    history.push(`/post/${postId}`)
  }

  return (
    <div>
      <h1>Edit Post</h1>
      <form>
        <p>Title:</p>
        <input value={title} onChange={onTitleChange} />
        <p>Content:</p>
        <input value={content} onChange={onContentChange} />
        <button onClick={onEditSubmit} type="button">
          Save Edit
        </button>
      </form>
    </div>
  )
}

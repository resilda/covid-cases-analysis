import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import commentsActions from '../../../../modules/comments/commentsActions'
import { CommentsContainer } from './styles/CommentsContainer'
import Navbar from '../../../main/navbar/Navbar'
import TextField from '@material-ui/core/TextField'

function Posts() {
  const comment = useSelector((state) => state.commentsReducer.comment)
  const defaultId = useSelector((state) => state.commentsReducer.comment.id)
  const defaultTitle = useSelector(
    (state) => state.commentsReducer.comment.title,
  )
  const defaultBody = useSelector((state) => state.commentsReducer.comment.body)
  const dispatch = useDispatch()

  const [titleInput, setTitleInput] = useState(defaultTitle)
  const [bodyInput, setBodyInput] = useState(defaultBody)
  const [showDeleteButton, setShowDeleteButton] = useState(false)

  function addPostOnSubmit() {
    dispatch(commentsActions.fetchNewComment(defaultId, titleInput, bodyInput))
  }

  function deletePostOnClick() {
    dispatch(commentsActions.fetchNewCommentRemoved(defaultId))
  }

  return (
    <div>
      <Navbar isGlobeFilterAvailable={false} />
      <CommentsContainer>
        <div className="comments-page-wrapper">
          <div className="comments-description">
            <h2 className="comments-text">Comments Section</h2>
            <p className="comments-paragraph">
              Everywhere around the globe is sharing their comments and
              experience, related to Covid-19 cases. Be a part of this
              "comments-blog", to get informed with the latest information you
              need when it comes to Covid-19.
            </p>
          </div>
          <div className="comments-wrapper">
            <div
              className="post-wrapper"
              onClick={() => {
                deletePostOnClick()
                setShowDeleteButton(false)
                setTitleInput('')
                setBodyInput('')
              }}
            >
              <div className="elements-wrapper">
                <h4>{comment.title}</h4>
                <h3 className="body">{comment.body}</h3>
              </div>
              {showDeleteButton ? (
                <button className="delete-button">Delete</button>
              ) : null}
            </div>
            <div className="text-field-wrapper">
              <TextField
                variant="standard"
                onChange={(e) => setTitleInput(e.target.value)}
                placeholder="Insert your comment in here"
                className="text-field"
              />
              <button
                onClick={() => {
                  addPostOnSubmit()
                  setShowDeleteButton(!showDeleteButton)
                }}
                className="button"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </CommentsContainer>
    </div>
  )
}

export default Posts

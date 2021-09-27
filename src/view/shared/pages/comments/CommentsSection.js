import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import commentsActions from '../../../../modules/comments/commentsActions'
import { CommentsContainer } from './styles/CommentsContainer'
import Navbar from '../../../main/navbar/Navbar'
import sharedComments from './sharedComments'
import TextField from '@material-ui/core/TextField'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

function CommentsSection() {
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
            <h2 className="comments-text">
              the come-share-your-opinion section
            </h2>
            <p className="comments-paragraph">
              Everywhere around the globe is sharing their comments and
              experience, related to Covid-19 cases. Be a part of this
              "comments-blog", to get informed with the latest information you
              need when it comes to Covid-19.
            </p>
            <p className="comments-paragraph" style={{ marginBottom: '50px' }}>
              The best thing about this blog, is the level of anonymity. You
              don't need to worry about being discovered or feel bad while
              sharing your experience. Here we value your opinions and want to
              create a safe and comfortable environment, for all of us, as a
              place "to-go-to", while feeling not at our best.
            </p>
          </div>
          <div className="comments-wrapper">
            <div className="previous-comments-wrapper">
              {sharedComments.map((item) => (
                <div className="previous-comment">{item.comment}</div>
              ))}
            </div>
            <div
              onClick={() => {
                deletePostOnClick()
                setShowDeleteButton(false)
                setTitleInput('')
                setBodyInput('')
              }}
            >
              <div className={comment.title ? `elements-wrapper` : ``}>
                {comment.title}
                {showDeleteButton ? (
                  <DeleteForeverIcon className="delete-icon" />
                ) : null}
              </div>
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

export default CommentsSection

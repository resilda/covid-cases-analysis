import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import commentsActions from '../../../../modules/comments/commentsActions'
import Navbar from '../../../main/navbar/Navbar'
import { FeedbackContainer } from './styled/FeedbackContainer'
import TextField from '@material-ui/core/TextField'

function FeedbackSection() {
  const comment = useSelector((state) => state.commentsReducer.comment)
  const defaultId = useSelector((state) => state.commentsReducer.comment.id)
  const defaultTitle = useSelector(
    (state) => state.commentsReducer.comment.title,
  )
  const defaultBody = useSelector((state) => state.commentsReducer.comment.body)
  const dispatch = useDispatch()

  const [titleInput, setTitleInput] = useState(defaultTitle)
  const [bodyInput] = useState(defaultBody)

  function addPostOnSubmit() {
    dispatch(commentsActions.fetchNewComment(defaultId, titleInput, bodyInput))
  }

  return (
    <div>
      <Navbar isGlobeFilterAvailable={false} />
      <FeedbackContainer>
        <h2 className="feedback-presetation">
          We value your feedback related to our application. Give your honest
          opinion in the input form down below and let us know what we can
          improve to be as close to the community as possible!!!
        </h2>
        <div className="stars-feedback-wrapper">
          <div className="star-feedback" />
          <div className="star-feedback" />
          <div className="star-feedback" />
          <div className="star-feedback" />
          <div className="star-feedback" />
        </div>
        <div className={comment.title ? `elements-feedback-wrapper` : ``}>
          {comment.title ? (
            <p className="p">Thank your for sharing your feedback!</p>
          ) : null}
        </div>
        <div className="text-field-wrapper">
          <TextField
            variant="standard"
            onChange={(e) => setTitleInput(e.target.value)}
            placeholder="Insert your feedback in here"
            className="text-field"
          />
          <button
            onClick={() => {
              addPostOnSubmit()
            }}
            className="button"
          >
            Add
          </button>
        </div>
      </FeedbackContainer>
    </div>
  )
}

export default FeedbackSection

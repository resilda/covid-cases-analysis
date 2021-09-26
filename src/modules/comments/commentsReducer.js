import commentsActions from './commentsActions'

const initialState = {
  comment: {
    id: 0,
    title: '',
    body: '',
  },
}

function commentsReducer(state = initialState, { type, payload }) {
  if (type === commentsActions.GET_COMMENT_ADDED) {
    return {
      ...state,
      comment: {
        ...state.comment,
        id: Math.random() + 1,
        title: payload.title,
        body: payload.body,
      },
    }
  }

  if (type === commentsActions.GET_COMMENT_REMOVED) {
    return {
      ...state,
      comment: {
        ...state.comment,
        title: '',
        body: '',
      },
    }
  }

  return state
}

export default commentsReducer

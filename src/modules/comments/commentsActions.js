const prefix = 'GET_COMMENT'

const commentsActions = {
  GET_COMMENT_ADDED: `${prefix}_ADDED`,
  GET_COMMENT_REMOVED: `${prefix}_REMOVED`,

  fetchNewComment: (id, title, body) => async (dispatch, getState) => {
    dispatch({
      type: commentsActions.GET_COMMENT_ADDED,
      payload: {
        id: id,
        title: title,
        body: body,
      },
    })
  },

  fetchNewCommentRemoved: (id) => async (dispatch, getState) => {
    dispatch({
      type: commentsActions.GET_COMMENT_REMOVED,
      payload: {
        id: id,
      },
    })
  },
}

export default commentsActions

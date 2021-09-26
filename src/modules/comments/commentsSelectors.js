import { createSelector } from 'reselect'

const selectRaw = (state) => state.commentsReducer

const selectedCommentPosted = createSelector([selectRaw], (dataReducer) => ({
  id: dataReducer.id,
  title: dataReducer.title,
  body: dataReducer.body,
}))

const commentsSelectors = {
  selectedCommentPosted,
}

export default commentsSelectors

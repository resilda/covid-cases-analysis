import { combineReducers } from 'redux'
import dataReducer from './data/dataReducer'
import commentsReducer from './comments/commentsReducer'

const reducers = combineReducers({ dataReducer, commentsReducer })

export default reducers

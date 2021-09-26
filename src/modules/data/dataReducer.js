import dataActions from './dataActions'

const initialState = {
  historyLoading: false,
  historyError: false,
  historyData: [],
  filteredDate: new Date(),
  statisticsLoading: false,
  statisticsError: false,
  statisticsData: [],
  filteredCountry: '',
}

export default function dataReducer(state = initialState, { type, payload }) {
  if (type === dataActions.GET_DATA_HISTORY_REQUEST) {
    return {
      ...state,
      historyLoading: true,
      error: false,
    }
  }

  if (type === dataActions.GET_DATA_HISTORY_SUCCESS) {
    return {
      ...state,
      historyLoading: false,
      historyData: payload,
    }
  }

  if (type === dataActions.GET_DATA_HISTORY_FAILURE) {
    return {
      ...state,
      historyError: payload,
      historyData: [],
    }
  }

  if (type === dataActions.GET_DATA_FOR_FILTERED_DATE) {
    return {
      ...state,
      filteredDate: payload,
    }
  }

  if (type === dataActions.GET_DATA_STATISTICS_REQUEST) {
    return {
      ...state,
      statisticsLoading: true,
    }
  }

  if (type === dataActions.GET_DATA_STATISTICS_SUCCESS) {
    return {
      ...state,
      statisticsLoading: false,
      statisticsData: payload,
    }
  }

  if (type === dataActions.GET_DATA_STATISTICS_FAILURE) {
    return {
      ...state,
      statisticsError: payload,
      statisticsData: [],
    }
  }

  if (type === dataActions.GET_DATA_FOR_FILTERED_COUNTRY) {
    return {
      ...state,
      filteredCountry: payload.toLowerCase(),
    }
  }

  return state
}

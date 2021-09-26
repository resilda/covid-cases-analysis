import { getDataAPI } from './dataApi'

const prefix = 'GET_DATA'

const dataActions = {
  GET_DATA_HISTORY_REQUEST: `${prefix}_HISTORY_REQUEST`,
  GET_DATA_HISTORY_SUCCESS: `${prefix}_HISTORY_SUCCESS`,
  GET_DATA_HISTORY_FAILURE: `${prefix}_HISTORY_FAILURE`,

  GET_DATA_FOR_FILTERED_DATE: `${prefix}_FOR_FILTERED_DATE`,

  GET_DATA_STATISTICS_REQUEST: `${prefix}_STATISTICS_REQUEST`,
  GET_DATA_STATISTICS_SUCCESS: `${prefix}_STATISTICS_SUCCESS`,
  GET_DATA_STATISTICS_FAILURE: `${prefix}_STATISTICS_FAILURE`,

  GET_DATA_FOR_FILTERED_COUNTRY: `${prefix}_FOR_FILTERED_COUNTRY`,

  fetchAllHistoryData: (params) => async (dispatch, getState) => {
    dispatch({
      type: dataActions.GET_DATA_HISTORY_REQUEST,
    })
    try {
      const historyResponse = await getDataAPI.fetchDataHistory(params)
      if (historyResponse.success) {
        dispatch({
          type: dataActions.GET_DATA_HISTORY_SUCCESS,
          payload: historyResponse.payload.data.response,
        })
      } else {
        dispatch({
          type: dataActions.GET_DATA_HISTORY_SUCCESS,
          payload: [],
        })
      }
    } catch (error) {
      dispatch({
        type: dataActions.GET_DATA_HISTORY_FAILURE,
        payload: error,
      })
    }
  },

  fetchFilteredDate: (date) => async (dispatch, getState) => {
    dispatch({
      type: dataActions.GET_DATA_FOR_FILTERED_DATE,
      payload: date,
    })
  },

  fetchAllStatisticsData: (params) => async (dispatch, getState) => {
    dispatch({
      type: dataActions.GET_DATA_STATISTICS_REQUEST,
    })
    try {
      const statisticsResponse = await getDataAPI.fetchDataStatistics(params)
      if (statisticsResponse.success) {
        dispatch({
          type: dataActions.GET_DATA_STATISTICS_SUCCESS,
          payload: statisticsResponse.payload.data.response,
        })
      } else {
        dispatch({
          type: dataActions.GET_DATA_STATISTICS_SUCCESS,
          payload: [],
        })
      }
    } catch (error) {
      dispatch({
        type: dataActions.GET_DATA_STATISTICS_FAILURE,
        payload: error,
      })
    }
  },

  fetchFilteredCountry: (country) => async (dispatch, getState) => {
    dispatch({
      type: dataActions.GET_DATA_FOR_FILTERED_COUNTRY,
      payload: country,
    })
  },
}

export default dataActions

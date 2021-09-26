import { createSelector } from 'reselect'

const selectRaw = (state) => state.dataReducer

const selectedHistoryLoading = createSelector(
  [selectRaw],
  (dataReducer) => dataReducer.historyLoading,
)

const selectedHistoryError = createSelector(
  [selectRaw],
  (dataReducer) => dataReducer.historyError,
)

const selectedHistoryData = createSelector(
  [selectRaw],
  (dataReducer) => dataReducer.historyData,
)

const selectedFilteredDate = createSelector(
  [selectRaw],
  (dataReducer) => dataReducer.filteredDate,
)

const selectedStatisticsLoading = createSelector(
  [selectRaw],
  (dataReducer) => dataReducer.statisticsLoading,
)

const selectedErrorLoading = createSelector(
  [selectRaw],
  (dataReducer) => dataReducer.errorLoading,
)

const selectedStatisticsData = createSelector(
  [selectRaw],
  (dataReducer) => dataReducer.statisticsData,
)

const selectedFilteredCountry = createSelector(
  [selectRaw],
  (dataReducer) => dataReducer.filteredCountry,
)

const dataSelectors = {
  selectedHistoryLoading,
  selectedHistoryError,
  selectedHistoryData,
  selectedFilteredDate,
  selectedStatisticsLoading,
  selectedErrorLoading,
  selectedStatisticsData,
  selectedFilteredCountry,
}

export default dataSelectors

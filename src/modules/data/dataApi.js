import APIRequest from '../../config/request'
import configAPI from '../../config/config'

const config = configAPI()

const { configurationForm } = config

const headers = {
  'x-rapidapi-host': 'covid-193.p.rapidapi.com',
  'x-rapidapi-key': '44b0e040e5mshe4d87ddde9a5398p1832dfjsn608c907816ba',
}

export const getDataAPI = {
  fetchDataHistory: () =>
    APIRequest.createRequest({
      method: 'get',
      url: `${configurationForm.baseUrl}/history?country=albania`,
      headers: headers,
    }),
  fetchDataStatistics: (params) =>
    APIRequest.createRequest({
      method: 'get',
      url: `${configurationForm.baseUrl}/statistics`,
      headers: headers,
      params,
    }),
}

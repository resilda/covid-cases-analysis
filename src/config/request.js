import axios from 'axios'

const api = axios.create({})

class APIRequest {
  static async createRequest(options) {
    try {
      const response = await api(options)
      return { success: true, payload: response }
    } catch (error) {
      return { success: false, payload: error }
    }
  }
}

export default APIRequest

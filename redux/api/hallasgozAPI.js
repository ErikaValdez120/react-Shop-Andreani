import axios from 'axios'

const InstanceHallazgosAxios = axios.create({ baseURL: '' })
const headerConfig = {
  headers: {
    'Content Type': 'application/json',
    accept: 'application/json',
    authorization: 'Bearer' + window.localStorage.getItem('access_token'),
  },
}

export const getHallazgos = (param) => {
  return InstanceHallazgosAxios.get(`/Hallazgos/${param}`, headerConfig)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    })
}

export const getGenerico = () => {
  return InstanceHallazgosAxios.get('/Generic/AllGeneric', headerConfig)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    })
}

export const postHallazgos = (param) => {
  const data = JSON.stringify(param)

  return InstanceHallazgosAxios.post('/Hallazgos', data, headerConfig)
    .then((response) => {
      return response
    })
    .catch((error) => {
      throw error
    })
}

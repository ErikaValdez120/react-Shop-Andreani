import axios from 'axios'

const InstanceHallazgosAxios = axios.create({ baseURL: 'http://localhost:5098/api' })
const headerConfig = {
  headers: {
    'Content Type': 'application/json',
    accept: 'application/json',
  },
}

export const getPais = () => {
  return InstanceHallazgosAxios.get(`/Pais`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    })
}

export const getCiudad = () => {
  return InstanceHallazgosAxios.get('/Ciudad')
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    })
}

export const getProvincia = () => {
  return InstanceHallazgosAxios.get('/Provincia')
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw error
    })
}

export const postUsuario = (param) => {
  const data = JSON.stringify(param)

  return InstanceHallazgosAxios.post('/Usuario', data)
    .then((response) => {
      return response
    })
    .catch((error) => {
      throw error
    })
}

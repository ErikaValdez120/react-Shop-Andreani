import axios from 'axios'
import { ContactForm } from '../../clases/ContactoForm'

const InstanceHallazgosAxios = axios.create({ baseURL: 'http://localhost:5098/api' })
const headerConfig = {
  headers: {
    'Content-Type': 'application/json',

    accept: 'application/json',

    'Access-Control-Allow-Origin': '*',
  },

  mode: 'no-cors',
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

export const postUsuario = (param: ContactForm) => {
  const data = JSON.stringify(param)

  return InstanceHallazgosAxios.post('/Usuario', data, headerConfig)
    .then((response) => {
      return response
    })
    .catch((error) => {
      throw error
    })
}

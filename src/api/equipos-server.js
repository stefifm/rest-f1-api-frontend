import axios from 'axios'

const data = axios.create({
  baseURL: 'https://rest-f1-api.onrender.com/api'
})

const getEquipos = () => data.get('/equipos')

export { getEquipos }

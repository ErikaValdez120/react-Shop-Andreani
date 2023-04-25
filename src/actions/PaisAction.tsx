import { Pais } from '../clases/Pais'

// Definición de ActionTypes como constantes
const ACTUALIZAR_PAIS = 'ACTUALIZAR_PAIS'
const ELIMINAR_PAIS = 'ELIMINAR_PAIS'

export type AGREGAR_PAIS = () => {
  type: 'AGREGAR_PAIS_'
  payload?: 0
}

export type agregarPais = () => {
  type: 'AGREGAR_PAIS'
  payload?: any
}

export type ACTUALIZAR_PAIS = (
  idPais,
  pais
) => {
  type: 'ACTUALIZAR_PAIS'
  payload: idPais
  pais
}
/*
export type ELIMINAR_PAIS = (idPais) => {
  type: 'ELIMINAR_PAIS'
  payload?: idPais
}
*/

/*
// Uso de ActionTypes en una acción
const agregarPais = (Pais) => ({
  type: AGREGAR_PAIS,
  payload: pais,
})

const actualizarPais = (id, pais) => ({
  type: ACTUALIZAR_PAIS,
  payload: { id, pais },
})

const eliminarPais = (id) => ({
  type: ELIMINAR_PAIS,
  payload: id,
})
*/

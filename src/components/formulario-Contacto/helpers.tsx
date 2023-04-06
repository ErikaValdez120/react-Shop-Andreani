import { Ciudad } from '../../clases/Ciudad'
import { ContactForm } from '../../clases/ContactoForm'
import { Paises } from '../../clases/Pais'
import { Provincia } from '../../clases/Provincia'
//import { isEmptyString, isPositiveNumber } from '../../ValidationsLogic/validations'

const isEmptyString = (texto: string) => !texto.trim()
const isPositiveNumber = (digit: number) => digit <= 0

export const validate = (values: ContactForm) => {
  if (isEmptyString(values.nombre)) return 'Incorrecto Ingrese nombre'
  if (isEmptyString(values.apellido)) return 'Incorrecto Ingrese apellido'
  if (isPositiveNumber(values.telefono)) return 'Incorrecto Ingrese un telefono'
  if (!values.email.includes('@')) return 'Incorrecto Ingrese email'
  if (isPositiveNumber(values.idPais)) return 'Seleccione un Pais'
  if (isPositiveNumber(values.idProvincia)) return 'Seleccione un Provincia'
  if (isPositiveNumber(values.idCiudad)) return 'Seleccione  Ciudad'

  return '' // SOLUCION PROVICIONAL
}

export const isValidSelect = (idPais: number, idProvincia: number) =>
  idPais === 0 || idProvincia === 0

export const isInvalidSelect = (idPais: number, idProvincia: number, idCiudad: number) =>
  idPais !== 0 && idProvincia !== 0 && idCiudad !== 0

export const validateSelects = (
  idPais: number,
  idProvincia: number,
  idCiudad: number,
  isValid: setStateBoolean
) => {
  if (isInvalidSelect(idPais, idProvincia, idCiudad)) isValid(true)
  if (isValidSelect(idPais, idProvincia)) isValid(false)
}

//componentes
export const paisMap = () => {
  return Paises.map((pais) => (
    <option key={pais.idPais} value={pais.idPais}>
      {pais.nombre}
    </option>
  ))
}
//puede ser reutilizado

export const provMap = (provincias: Provincia[]) => {
  return provincias.map((provincia) => (
    <option key={provincia.idProvincia} value={provincia.idProvincia}>
      {provincia.nombre}
    </option>
  ))
}

export const ciudadMap = (ciudades: Ciudad[]) => {
  return ciudades.map((ciudad) => (
    <option key={ciudad.idCiudad} value={ciudad.idCiudad}>
      {ciudad.nombre}
    </option>
  ))
}

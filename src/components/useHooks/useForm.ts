import { useState, useEffect, useCallback } from 'react'
import { Ciudad, Ciudades } from '../../clases/Ciudad'
import { ContactForm } from '../../clases/ContactoForm'
import { Provincia, Provincias } from '../../clases/Provincia'
import { validate, validateSelects } from '../formulario-Contacto/helpers'

export const useForm = () => {
  const [values, setValues] = useState<ContactForm>(new ContactForm())
  const [idPais, setIdPais] = useState<number>(0)
  const [idProvincia, setIdProvincia] = useState<number>(0)
  const [idCiudad, setIdCiudad] = useState<number>(0)
  const [isValidSelects, setIsValidSelects] = useState<boolean>(false)
  const [provincias, setProvincias] = useState<Provincia[]>(new Array<Provincia>())
  const [ciudades, setCiudades] = useState<Ciudad[]>(new Array<Ciudad>())

  const errorMessage = validate(values)

  const handleInputChange = (event: changeEvent) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleChangeSelectedPais = (evt: changeEvent) => {
    const { name, value } = evt.target
    setValues({
      ...values,
      [name]: value,
    })
    setIdPais(parseInt(value))
    setIdProvincia(0)
    setIdCiudad(0)
  }

  const handleChangeSelectedProvincia = (evt: changeEvent) => {
    const { name, value } = evt.target
    setValues({
      ...values,
      [name]: value,
    })
    setIdProvincia(parseInt(value))
    setIdCiudad(0)
  }

  const handleChangeSelectedCiudad = (evt: changeEvent) => {
    const { name, value } = evt.target
    setValues({
      ...values,
      [name]: value,
    })
    setIdCiudad(parseInt(evt.target.value))
  }

  const handleForm = (event: EventSubmit) => {
    event.preventDefault()

    console.log('fix warning', idCiudad)
    console.log('Values=', values)

    alert('FORMULARIO ENVIADO')
  }

  // useEffect((), []) NO RENDERIZA, CONTROLA **EFECTOS SECUNDARIOS**
  // useMemo((), []) // GUARDA EN MEMORIA UN VALOR (CUALQUIER VALOR)
  // useCallback((), []) // GUARDA EN MEMORIA UNA FUNCION

  const FilterProvincia = useCallback(
    () => Provincias.filter((provincia) => provincia.idPais === idPais),
    [idPais]
  )

  const FilterCiudad = useCallback(
    () => Ciudades.filter((ciudad) => ciudad.idProvincia === idProvincia),
    [idProvincia]
  )

  useEffect(() => {
    setProvincias(FilterProvincia)
  }, [FilterProvincia])

  useEffect(() => {
    setCiudades(FilterCiudad)
  }, [FilterCiudad, FilterProvincia])

  useEffect(() => {
    validateSelects(idPais, idProvincia, idCiudad, setIsValidSelects)
  }, [idPais, idProvincia, idCiudad])

  return {
    values,
    errorMessage,
    isValidSelects,
    provincias,
    ciudades,
    handleInputChange,
    handleChangeSelectedPais,
    handleChangeSelectedProvincia,
    handleChangeSelectedCiudad,
    handleForm,
  }
}

import { useState, useEffect, useCallback } from 'react'
import { Ciudad, Ciudades } from '../../clases/Ciudad'
import { ContactForm } from '../../clases/ContactoForm'
import { Provincia, Provincias } from '../../clases/Provincia'
import { validate, validateSelects } from '../formulario-Contacto/helpers'
import { getCiudad, getPais, getProvincia, postUsuario } from '../../redux/action/formularioAction'
import { useDispatch, useSelector } from 'react-redux'
import { Pais } from '../../clases/Pais'

export const useForm = () => {
  const [values, setValues] = useState<ContactForm>(new ContactForm())
  const [idPais, setIdPais] = useState<number>(0)
  const [idProvincia, setIdProvincia] = useState<number>(0)
  const [idCiudad, setIdCiudad] = useState<number>(0)
  const [isValidSelects, setIsValidSelects] = useState<boolean>(false)
  const [provinciasFiltradas, setProvinciasFiltradas] = useState<Provincia[]>(
    new Array<Provincia>()
  )
  const [ciudadesFiltradas, setCiudadesFiltradas] = useState<Ciudad[]>(new Array<Ciudad>())

  const dispatch = useDispatch()
  //const [filas,setFilas] =useState<ContactForm[]>( new Array<ContactForm> ())
  const paises: Array<Pais> = useSelector((state: any) => state.formularioReducers.paises)
  const provincias: Array<Provincia> = useSelector(
    (state: any) => state.formularioReducers.provincias
  )
  const ciudades: Array<Ciudad> = useSelector((state: any) => state.formularioReducers.ciudades)
  useEffect(() => {
    dispatch(getPais())
    dispatch(getProvincia())
    dispatch(getCiudad())
  }, [])

  useEffect(() => {
    if (paises.length > 0) {
      console.log(paises)
    }
  }, [paises])

  useEffect(() => {
    if (provincias !== undefined && provincias.length > 0) {
      console.log(provincias)
    }
  }, [provincias])

  useEffect(() => {
    if (ciudades !== undefined && ciudades.length > 0) {
      console.log(ciudades)
    }
  }, [ciudades])

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
    () => provincias.filter((provincia) => provincia.idPais === idPais),
    [idPais]
  )

  const FilterCiudad = useCallback(
    () => ciudades.filter((ciudad) => ciudad.idProvincia === idProvincia),
    [idProvincia]
  )

  useEffect(() => {
    setProvinciasFiltradas(FilterProvincia)
  }, [FilterProvincia])

  useEffect(() => {
    setCiudadesFiltradas(FilterCiudad)
  }, [FilterCiudad])

  useEffect(() => {
    validateSelects(idPais, idProvincia, idCiudad, setIsValidSelects)
  }, [idPais, idProvincia, idCiudad])

  return {
    values,
    errorMessage,
    isValidSelects,
    paises,
    provinciasFiltradas,
    ciudadesFiltradas,
    handleInputChange,
    handleChangeSelectedPais,
    handleChangeSelectedProvincia,
    handleChangeSelectedCiudad,
    handleForm,
  }
}
/*
function dispatch(arg0: { type: string; payload: any }) {
  throw new Error('Function not implemented.')
}
*/

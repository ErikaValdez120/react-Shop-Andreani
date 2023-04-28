import Select from '../formulario/Select'
import Input from '../formulario/Input'
import { paisMap, provMap, ciudadMap } from './helpers'
import { useForm } from '../useHooks/useForm'
import '../../styles/Form.scss'
import { isEmptyString } from '../../ValidationsLogic/validations'
import { useEffect } from 'react'
//import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getCiudad, getPais, getProvincia } from '../../redux/action/formularioAction'
import { ContactForm } from '../../clases/ContactoForm'
import { formularioReducers } from '../../redux/reducers/FormularioReducers'

const Form = () => {
  // const dispatch = useDispatch()
  // const filas: Array<ContactForm> = useSelector((state:any)=>
  //   (state: any )=> state.formularioReducers);

  const {
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
  } = useForm()

  // useEffect(() => {
  //   dispatch(getPais())
  //   dispatch(getProvincia())
  //   dispatch(getCiudad())
  // }, [])

  // useEffect(()=>{
  //   if(filas !== undefined){
  //     if(filas.length > 1){
  //       set (filas);
  //     }
  //   }
  // },[filas]);
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /*
  useEffect(() => {
    fetch('http://localhost:5098/api/usuario')
      .then((response) => response.json())
      .then((data) => console.log('Peticion fetch:', data))
  }, [])
*/

  /*¿Qué hace useEffect? Al usar este Hook, le estamos indicando a React que el componente 
tiene que hacer algo después de renderizarse.*/

  /*
  useEffect(() => {
    axios('http://localhost:5098/api/usuario').then(({ data }) =>
      console.log('Peticion Axios', data)
    )
  }, [])

  */

  return (
    <div>
      <div className='formulario'>
        <h1 className='titleForm'>Formulario</h1>
        <form action='' onSubmit={handleForm}>
          <div className='container'>
            <div>
              <Input
                title='Nombre'
                name='nombre'
                placeholder='Ingrese su nombre'
                value={values.nombre}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Input
                title='Apellido'
                name='apellido'
                placeholder='Ingrese su apellido'
                value={values.apellido}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Input
                title='telefono'
                type='number'
                name='telefono'
                placeholder='Ingrese su telefono'
                value={values.telefono}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Input
                title='Email'
                name='email'
                placeholder='Ingrese su email'
                value={values.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Select
                title='Pais'
                name='idPais'
                defaultValue={0}
                TitleoptionDefault='Seleccione un Pais'
                onChange={handleChangeSelectedPais}
                disabled={values.idPais}
              >
                {paisMap(paises)}
              </Select>
            </div>

            <div>
              <Select
                title='Provincia'
                name='idProvincia'
                defaultValue={0}
                TitleoptionDefault='Seleccione una Provincia'
                onChange={handleChangeSelectedProvincia}
                disabled={values.idProvincia}
              >
                {provMap(provinciasFiltradas)}
              </Select>
            </div>

            <div>
              <Select
                title='Ciudad'
                name='idCiudad'
                defaultValue={0}
                TitleoptionDefault='Seleccione una Ciudad'
                onChange={handleChangeSelectedCiudad}
                disabled={values.idCiudad}
              >
                {ciudadMap(ciudadesFiltradas)}
              </Select>
            </div>

            <br />
            <p>{errorMessage}</p>
            <div>
              <button
                className='buttonForm'
                type='submit'
                disabled={!(isEmptyString(errorMessage) && isValidSelects)}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Form

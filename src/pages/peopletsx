/*
import React from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { selectPerson } from './store/features/person'
import { getAll } from 'store/features/person/asyncActions'
import Skeleton from '@mui/material/Skeleton'
import { store } from '..store'

export default function PeoplePage() {
  const dispatch = useAppDispatch()
  const { data: people, isLoading } = useAppSelector(selectPerson)

  React.useEffect(() => {
    dispatch(getAll())
  }, [dispatch])

  // Si está cargando mostramos un skeleton o un loader.
  if (isLoading) {
    return <Skeleton />
  }

  return (
    <ul>
      {people.map((person, i) => (
        <li>Name: {person.name}</li>
      ))}
    </ul>
  )
}

//...omitido por brevedad

export default function PeoplePage2() {
  const dispatch = useAppDispatch()
  const { data: people, isLoading } = useAppSelector(selectPerson)

  React.useEffect(() => {
    const promise = dispatch(getAll())

    return () => {
      promise.abort()
    }
  }, [dispatch])

  //...omitido por brevedad
}
*/

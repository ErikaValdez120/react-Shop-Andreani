export class Provincia {
  idProvincia: number
  idPais: number
  nombre: string

  constructor(idProvincia: number, idPais: number, nombre: string) {
    this.idProvincia = idProvincia
    this.idPais = idPais
    this.nombre = nombre
  }
}

const provArg1 = new Provincia(1, 1, 'Buenos Aires')
const provArg2 = new Provincia(2, 1, 'Cordoba')
const provArg3 = new Provincia(3, 1, 'Mendoza')

const provBr1 = new Provincia(4, 2, 'San Pablo')
const provBr2 = new Provincia(5, 2, 'Janeiro')
const provBr3 = new Provincia(6, 2, 'Brasilia')

const provJp1 = new Provincia(7, 3, 'Tokyo')
const provJp2 = new Provincia(8, 3, 'Okinawa')
const provJp3 = new Provincia(9, 3, 'Osaka')

export const Provincias = [
  provArg1,
  provArg2,
  provArg3,
  provBr1,
  provBr2,
  provBr3,
  provJp1,
  provJp2,
  provJp3,
]

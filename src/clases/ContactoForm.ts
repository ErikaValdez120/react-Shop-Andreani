export class ContactForm {
  nombre: string
  apellido: string
  email: string
  telefono: number
  idPais: number
  idProvincia: number
  idCiudad: number
  idUser: number
  constructor() {
    this.nombre = ''
    this.apellido = ''
    this.email = ''
    this.telefono = 0
    this.idPais = 0
    this.idProvincia = 0
    this.idCiudad = 0
    this.idUser = 0
  }
}

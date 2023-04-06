export class Pais {
  idPais: number
  nombre: string

  constructor(idPais: number, nombre: string) {
    this.idPais = idPais
    this.nombre = nombre
  }
}

const argentina = new Pais(1, 'Argentina')
const brasil = new Pais(2, 'Brasil')
const japon = new Pais(3, 'Japon')

export const Paises = [argentina, brasil, japon]

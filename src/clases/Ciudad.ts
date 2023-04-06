export class Ciudad {
  idCiudad: number
  idProvincia: number
  nombre: string

  constructor(idCiudad: number, idProvincia: number, nombre: string) {
    this.idCiudad = idCiudad
    this.idProvincia = idProvincia
    this.nombre = nombre
  }
}

const ciudadBsAs1 = new Ciudad(1, 1, 'Lanus')
const ciudadBsAs2 = new Ciudad(2, 1, 'Quilmes')

const ciudadCor1 = new Ciudad(3, 2, 'Cosquin')
const ciudadCor2 = new Ciudad(4, 2, 'Cruz Alta')

const ciudadMen1 = new Ciudad(5, 3, 'Las Heras')
const ciudadMen2 = new Ciudad(6, 3, 'Gral Alvear')

////////////////////////////////////////////////////////////////////

const ciudadSP1 = new Ciudad(7, 4, 'Region Sur')
const ciudadSP2 = new Ciudad(8, 4, 'Region Central')

const ciudadJro1 = new Ciudad(9, 5, 'Rio')
const ciudadJro2 = new Ciudad(10, 5, 'Sebastiao')

const ciudadBr1 = new Ciudad(11, 6, 'Golas')
const ciudadBr2 = new Ciudad(12, 6, 'Piquiri')

////////////////////////////////////////////////////////////////////

const ciudadTk1 = new Ciudad(13, 7, 'Kioto')
const ciudadTk2 = new Ciudad(14, 7, 'Nipon')

const ciudadOki1 = new Ciudad(15, 8, 'Sensei')
const ciudadOki2 = new Ciudad(16, 8, 'Awuaki')

const ciudadOsa1 = new Ciudad(17, 9, 'Naruto')
const ciudadOsa2 = new Ciudad(18, 9, 'Kakaroto')

export const Ciudades = [
  ciudadBsAs1,
  ciudadBsAs2,
  ciudadCor1,
  ciudadCor2,
  ciudadMen1,
  ciudadMen2,
  ciudadSP1,
  ciudadSP2,
  ciudadJro1,
  ciudadJro2,
  ciudadBr1,
  ciudadBr2,
  ciudadTk1,
  ciudadTk2,
  ciudadOki1,
  ciudadOki2,
  ciudadOsa1,
  ciudadOsa2,
]

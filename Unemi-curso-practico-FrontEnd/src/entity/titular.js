class Persona {
  constructor(cedula, nombres, apellidos, genero, direcccion, ciudad) {
    this.cedula = cedula
    this.nombres = nombres
    this.apellidos = apellidos
    this.genero = genero
    this.direcccion = direcccion
    this.ciudad = ciudad
  }

}

class Titular extends Persona {
  constructor(cedula, nombres, apellidos, genero, direcccion, ciudad) {
    super(cedula, nombres, apellidos, genero, direcccion, ciudad)
  }

}

export default Titular

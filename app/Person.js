class Person {
  constructor (nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
  }

  toString () {
    return `${this.nombre} ${this.apellido}`
  }
}

export default Person
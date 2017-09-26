import Person from './Person'

const p1 = new Person('Isaac', 'Jarquin')

const container = document.getElementById('container')
container.innerHTML = `<h1>${p1.toString()}</h1>`
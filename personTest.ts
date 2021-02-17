import {Person, ProfessionOptions} from './person'



let persona1:Person=new Person('Pepa','Spanish',ProfessionOptions.DEVELOPER,18)
let persona4:Person=new Person('Pepa','Spanish',ProfessionOptions.DEVELOPER,18)
let persona2:Person=new Person('Juanito','Danish',ProfessionOptions.DIRECTOR,10)
let persona3:Person=new Person('Maria','Mexican',ProfessionOptions.MANAGER,5)

persona1.print()
console.log(persona1.getExperienceYears())
console.log(persona1.getName())
console.log(persona1.getNationality())
console.log(persona1.getProfession())
console.log(persona1.isSame(persona4))
console.log(persona1.toString())


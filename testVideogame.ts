import {Person,ProfessionOptions} from './person';
import { Platform,Devices } from './platform';
import { Scores, Videogame } from './videogame';


let play1:Platform=new Platform('PlayStation',1994,'Sony',32,1,false,null,false,Devices.cd,'gray')
let play3:Platform=new Platform('PlayStation 3',2006,'Sony',64,3,true,1080,true,Devices.bluray,'black')
let xbox:Platform=new Platform('Xbox 360',2005,'Microsoft',10000,360,true,1080,true,Devices.dvd,'white')
let alex:Person=new Person('Alex Hastings','American',ProfessionOptions.DEVELOPER,5)
let pepper:Person=new Person('Pepper Potts','Irish',ProfessionOptions.DEVELOPER,6)
let ted:Person=new Person('Ted Price','American',ProfessionOptions.DIRECTOR,10)
let cerny:Person=new Person('Mark Cerny','Australian',ProfessionOptions.MANAGER,7)
let videojuego:Videogame=new Videogame('Spyro',1998,[alex,cerny],'American',ted,
    ['English','Spanish','Japanese'],[play1,play3,xbox],43,Scores.s8)


console.log(videojuego.getTitle())
console.log(videojuego.getReleaseYear())
console.log(videojuego.getDevelopers())
console.log(videojuego.getNationality())
console.log(videojuego.getDirector())
console.log(videojuego.getLanguages())
console.log(videojuego.getPlatforms())
console.log(videojuego.getPrice())
console.log(videojuego.getScore())
videojuego.inLanguage('Italian')
videojuego.byDeveloper(pepper)
videojuego.forPlatform(play1)
videojuego.print()

videojuego.setTitle('RandomGame')
videojuego.setReleaseYear(2009)
videojuego.setDevelopers([pepper,alex])
videojuego.setNationality('Swedish')
videojuego.setDirector(ted)
videojuego.setLanguages(['Chinese','Italian'])
videojuego.setPlatforms([play3])
videojuego.setPrice(35)
videojuego.setScore(4)


videojuego.inLanguage('Italian')
videojuego.byDeveloper(pepper)
videojuego.forPlatform(play1)
console.log(videojuego.toString())
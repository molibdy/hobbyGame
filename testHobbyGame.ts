import {HobbyGame} from './hobbyGame';
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
let videojuego2:Videogame=new Videogame('RandomGame',1998,[pepper,alex],'Swedish',ted,
    ['Chinese','Russian','Italian'],[play3,xbox],35,Scores.s4)


let biblioteca:HobbyGame= new HobbyGame([videojuego,videojuego2])

console.log(biblioteca.getVideogames())
console.log(biblioteca.gamesByDeveloper(pepper))
console.log(biblioteca.gamesByDeveloper(alex))
console.log(biblioteca.gamesForPlatAndLanguage(xbox,'Chinese'))
console.log(biblioteca.gamesInLanguage('Spanish'))
console.log(biblioteca.gamesInLanguage('Portuguese'))
console.log(biblioteca.priceByPlatform(play3))
console.log(biblioteca.priceByPlatform(play1))
console.log(biblioteca.totalPrice())
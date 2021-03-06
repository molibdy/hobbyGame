import {Devices, Platform} from './platform';

let plataforma1:Platform= new Platform('platapatata', 2017, 'compatata', 64, 3, true, 4000,true, Devices.bluray,'blue');
let plataforma2:Platform= new Platform('plataconejo', 2020, 'comconejo', 32, 2, true, 1080,false, Devices.dvd,'red')

console.log(plataforma1.getName())
console.log(plataforma1.getReleaseYear())
console.log(plataforma1.getCompany())
console.log(plataforma1.getNBits())
console.log(plataforma1.getGeneration())
console.log(plataforma1.getHasHD())
console.log(plataforma1.getHdSize())
console.log(plataforma1.getHasInternetConnection())
console.log(plataforma1.getStorageDevice())
console.log(plataforma1.getColor())
plataforma1.print()

plataforma1.setName('plataconejo')
plataforma1.setReleaseYear(2020)
plataforma1.setCompany('comconejo')
plataforma1.setNBits(32)
plataforma1.setGeneration(2)
plataforma1.setHasHD(true)
plataforma1.setHdSize(1080)
plataforma1.setHasInternetConnection(false)
plataforma1.setStorageDevice(Devices.dvd)
plataforma1.setColor('red')

console.log(plataforma1.toString())
console.log(plataforma1.isSame(plataforma2))

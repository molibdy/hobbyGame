import {Videogame} from './videogame';
import {Platform} from './platform';
import {Person} from './person'

export class HobbyGame{
    private videogames:Videogame[];

    constructor (videogames:Videogame[]){
        this.videogames=videogames;
    }

    public getVideogames():Videogame[]{
        return this.videogames;
    }

    public setVideogames(videogames:Videogame[]){
        this.videogames=videogames
    }

    public priceByPlatform(platform:Platform):number{
        let totalPrice:number=0
        for (let i=0; i<this.videogames.length;i++){
            if (this.videogames[i].forPlatform(platform)){
                totalPrice+=this.videogames[i].getPrice();
            }
        }
        return totalPrice;
    }

    public totalPrice():number{
        let totalPrice:number=0
        for (let i=0; i<this.videogames.length;i++){
            totalPrice+=this.videogames[i].getPrice();
        }
        return totalPrice;
    }

    public gamesInLanguage(language:string):Videogame[]{
        let gamesInLanguage:Videogame[]=[];
        for (let i=0; i<this.videogames.length;i++){
            if (this.videogames[i].inLanguage(language)){
                gamesInLanguage.push(this.videogames[i])
            }
        }
        return gamesInLanguage;
    }

    public gamesByDeveloper(developer:Person):Videogame[]{
        let gamesByDeveloper:Videogame[]=[];
        for (let i=0; i<this.videogames.length;i++){
            if (this.videogames[i].byDeveloper(developer)){
                gamesByDeveloper.push(this.videogames[i])
            }
        }
        return gamesByDeveloper
    }

    public gamesForPlatAndLanguage(platform:Platform,language:string):Videogame[]{
        let gamesForPlatAndLang:Videogame[]=[];
        for (let i=0; i<this.videogames.length;i++){
            if (this.videogames[i].forPlatform(platform) && this.videogames[i].inLanguage(language)){
                gamesForPlatAndLang.push(this.videogames[i])
            }
        }
        return gamesForPlatAndLang
    }
    
    public gamesHighScore():Videogame[]{
        let gamesHighScore:Videogame[]=[];
        for (let i=0; i<this.videogames.length;i++){
            if (this.videogames[i].getScore()>=5){
                gamesHighScore.push(this.videogames[i])
            }
        }
        return gamesHighScore
    }
}
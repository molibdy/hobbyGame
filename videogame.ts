import {Person} from './person';
import { Platform } from './platform';

export enum Scores{
    s0,
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
    s7,
    s8,
    s9,
    s10
}


export class Videogame{

    private title:string;
    private releaseYear:number;
    private developers:Person[];
    private nationality:string;
    private director:Person;
    private languages:string[];
    private platforms:Platform[];
    private price:number;
    private score:Scores 

    constructor(title:string,releaseYear:number, developers:Person[],nationality:string,
        director:Person,languages:string[],platforms:Platform[],price:number,score:Scores){
        this.title=title;
        this.releaseYear=releaseYear;
        this.developers=developers;
        this.nationality=nationality;
        this.director=director;
        this.languages=languages;
        this.platforms=platforms;
        this.price=price;
        this.score=score;
    }

    public getTitle():string{
        return this.title;
    }
    public getReleaseYear():number{
        return this.releaseYear;
    }
    public getDevelopers():Person[]{
        return this.developers;
    }
    public getNationality():string{
        return this.nationality;
    }
    public getDirector():Person{
        return this.director;
    }
    public getLanguages():string[]{
        return this.languages;
    }
    public getPlatforms():Platform[]{
        return this.platforms;
    }
    public getPrice():number{
        return this.price;
    }
    public getScore():Scores{
        return this.score
    }

    public setTitle(title:string){
         this.title=title;
    }
    public setReleaseYear(releaseYear:number){
         this.releaseYear=releaseYear;
    }
    public setDevelopers(developers:Person[]){
         this.developers=developers;
    }
    public setNationality(nationality:string){
         this.nationality=nationality;
    }
    public setDirector(director:Person){
        this.director=director;
    }
    public setLanguages(languages:string[]){
         this.languages=languages;
    }
    public setPlatforms(platforms:Platform[]){
        this.platforms=platforms;
    }
    public setPrice(price:number){
         this.price=price;
    }
    public setScore(score:Scores){
         this.score=score;
    }

    public forPlatform(platform:Platform):boolean{
        return this.platforms.includes(platform);
    }

    public byDeveloper(developer:Person):boolean{
        return this.developers.includes(developer);
    }
    
    public inLanguage(language:string):boolean{
        return this.languages.includes(language);
    }
    
    public print(){
        console.log (this.toString());
    }

    public toString():string{
        let attributes:string='';
        for(let i=0;i<this.iterate().length;i++){
            attributes+=`${this.iterate()[i]}: ${this[this.iterate()[i]]}\n`;
        }
        return attributes;
    }

    private iterate():string[]{
        return Object.keys(this)
    }
}

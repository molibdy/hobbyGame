
export enum ProfessionOptions{
        DEVELOPER='developer',
        TESTER='tester',
        MANAGER='manager',
        DIRECTOR='director'
    }

export class Person{
    private name:string;
    private nationality:string;
    private profession:ProfessionOptions;
    private experienceYears:number;

    constructor(name:string,nationality:string,profession:ProfessionOptions,experienceYears:number){
  
        this.name=name;
        this.nationality=nationality;
        this.profession=profession;
        this.experienceYears=experienceYears;
    }

    public getName():string{
        return this.name;
    }
    public getNationality():string{
        return this.nationality;
    }
    public getProfession():ProfessionOptions{
        return this.profession;
    }
    public getExperienceYears():number{
        return this.experienceYears;
    }

    public setName(name){
        this.name=name;
    }
    public setNationality(nationality){
        this.nationality=nationality;
    }
    public setProfession(profession){
        this.profession=profession;
    }
    public setExperienceYears(experienceYears){
        this.experienceYears=experienceYears;
    }

    public isSame(person:Person):boolean{
        let isSame:boolean=false;
        let sameCount:number=0;
        for(let i=0;i<this.iterate().length;i++){
            if(this[this.iterate()[i]]==person[person.iterate()[i]]){
                sameCount++
            }
        }
        if(sameCount==this.iterate().length){
            isSame=true;
        }
        return isSame;
    }
    public print(){
            console.log (this.toString());
    }

    public toString():string{
        let attributes:string='';
        for(let i=0;i<this.iterate().length;i++){
            attributes+=`${this[this.iterate()[i]]}\n`;
        }
        return attributes;
    }

    private iterate():string[]{
        return Object.keys(this)
    }

}
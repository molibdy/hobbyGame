export enum Devices{
    cartucho='cartucho',
    tarjeta='tarjeta',
    cd='cd',
    dvd='dvd',
    bluray='bluray'
}

export class Platform{
    private name:string;
    private releaseYear:number;
    private company:string;
    private nBits:number;
    private generation:number;
    private hasHD:boolean;
    private hdSize:number;
    private hasInternetConnection:boolean;
    private storageDevice:Devices;
    private color:string;

    constructor(name:string, releaseYear:number, company:string, nBits:number, generation:number, 
        hasHD:boolean, hdSize:number, hasInternetConnection:boolean, storageDevice:Devices, color:string){
            this.name=name;
            this.releaseYear=releaseYear;
            this.company=company;
            this.nBits=nBits;
            this.generation=generation;
            this.hasHD=hasHD;
            this.hdSize=hdSize;
            this.hasInternetConnection=hasInternetConnection;
            this.storageDevice=storageDevice;
            this.color=color;
    }

    public getName():string{
        return this.name;
    }
    public getReleaseYear():number{
        return this.releaseYear;
    }
    public getCompany():string{
        return this.company;
    }
    public getNBits():number{
        return this.nBits;
    }
    public getGeneration():number{
        return this.generation;
    }
    public getHasHD():boolean{
        return this.hasHD;
    }
    public getHdSize():number{
        return this.hdSize;
    }
    public getHasInternetConnection():boolean{
        return this.hasInternetConnection;
    }
    public getStorageDevice():Devices{
        return this.storageDevice;
    }
    public getColor():string{
        return this.color;
    }

    public setName(name:string){
        this.name=name;
    }
    public setReleaseYear(releaseYear:number){
        this.releaseYear=releaseYear;
    }
    public setCompany(company:string){
        this.company=company;
    }
    public setNBits(nBits:number){
        this.nBits=nBits;
    }
    public setGeneration(generation:number){
        this.generation=generation;
    }
    public setHasHD(hasHD:boolean){
        this.hasHD=hasHD;
    }
    public setHdSize(hdSize:number){
        this.hdSize=hdSize;
    }
    public setHasInternetConnection(hasInternetConnection:boolean){
        this.hasInternetConnection=hasInternetConnection;
    }
    public setStorageDevice(storageDevice:Devices){
        this.storageDevice=storageDevice;
    }
    public setColor(color:string){
        this.color=color;
    }

    public isSame(platform:Platform):boolean{
        let isSame:boolean=false;
        let sameCount:number=0;
        for(let i=0;i<this.iterate().length;i++){
            if(this[this.iterate()[i]]==platform[platform.iterate()[i]]){
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
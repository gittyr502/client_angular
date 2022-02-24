export class PicturesCollection{
    id:number;
    bacteriumId: number;
    linkToImage:string|undefined;
    constructor(id:number,bacteriumId: number,linkToImage:string|undefined){
this.id=id;
this.bacteriumId=bacteriumId;
this.linkToImage=linkToImage;
    }
}
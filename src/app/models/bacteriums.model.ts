export class Bacteriums{
    id:number ;
    bacteriumName: string ;
    bacteriumOfInformation: string;
    medicine: string ;
    constructor(id:number,  bacteriumName: string, bacteriumOfInformation: string, medicine: string ) {
            this.id=id;
            this.bacteriumName=bacteriumName;
            this.bacteriumOfInformation=bacteriumOfInformation;
            this.medicine=medicine;

    }
}
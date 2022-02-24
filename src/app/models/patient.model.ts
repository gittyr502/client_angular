export class Patient{
    id:number;
    userId:number;
    medicalInformatin:string| undefined;
    birthDate:Date;
    HMOId:number;
    constructor(id:number,userId:number,medicalInformatin:string| undefined,birthDate:Date,HMOId:number){
this.id=id;
this.userId=userId;
this.medicalInformatin=medicalInformatin;
this.birthDate=birthDate;
this.HMOId=HMOId;
    }
}
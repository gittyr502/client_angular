export class Patient{
    id:number|undefined;
    userId:number;
    birthDate:Date;
    HMOId:number;
    constructor(id:number|undefined,userId:number,birthDate:Date,HMOId:number){
this.id=id;
this.userId=userId;
this.birthDate=birthDate;
this.HMOId=HMOId;
    }
}
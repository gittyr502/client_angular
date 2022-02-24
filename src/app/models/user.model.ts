export class User{
    id:number;
    idNumber:number;
    firstName:string;
    lastName:string;
    userKindId: number;
    email: string|undefined;
    phone:string|undefined;
    password:string|undefined;
    constructor(id:number, idNumber:number,firstName:string, lastName:string,userKindId: number, email: string, phone:string,password:string){
        this.id=id;
        this.idNumber=idNumber;
        this.firstName=firstName;
        this.lastName=lastName;
        this.userKindId=userKindId;
        this.email=email;
        this.phone=phone;
        this.password=password;
    }
}
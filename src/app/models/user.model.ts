export class User{
    id:number;
    idNumber:number;
    firstName:string;
    lastName:string;
    userKindId: any;
    email: string|undefined;
    phone:string|undefined;
    password:string|undefined;
    constructor( idNumber:number,firstName:string, lastName:string,userKindId: number, email: string, phone:string,password:string){
        this.idNumber=idNumber;
        this.firstName=firstName;
        this.lastName=lastName;
        this.userKindId=userKindId;
        this.email=email;
        this.phone=phone;
        this.password=password;
    }
}

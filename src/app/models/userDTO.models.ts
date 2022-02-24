export class UserDTO{
    id:string | undefined;
    password:string|undefined;
    
    constructor()
    {
        this.id="";
        this.password="";
    }
}
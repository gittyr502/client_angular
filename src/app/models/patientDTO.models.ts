export class patientDTO {
    patientId: number;
    idNumber: string;
    userId: number;
    birthDate: Date;
    firstName: string;
    lastName: string;
    constructor(patientId: number, idNumber: string, userId: number,birthDate: Date,
        firstName: string,
        lastName: string) {
            this.patientId=patientId;
            this.idNumber= idNumber; 
            this.userId=userId; 
            this.birthDate=birthDate;
        this.firstName=firstName;
        this.lastName=lastName;

    }
}
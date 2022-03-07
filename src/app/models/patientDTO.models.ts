import { EmailValidator } from "@angular/forms";

export class patientDTO {
    patientId: number;
    idNumber: string;
    userId: number;
    birthDate: Date;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    constructor(patientId: number, idNumber: string, userId: number, birthDate: Date,
        firstName: string,
        lastName: string, email: string,
        password: string) {
        this.patientId = patientId;
        this.idNumber = idNumber;
        this.userId = userId;
        this.birthDate = birthDate;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;

    }
}
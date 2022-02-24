export class Examination{
  id:number;
  patientId:number;
  examinationDate: Date;
  doctorId: number;
  computerDiagnosis: string|undefined;
  doctorDiagnosis:string| undefined;
  prescriptionName:string| undefined;
  linkToFile:string| undefined;
  tissueCultureResult:string| undefined;
  comments : string| undefined;
  constructor(id:number,patientId:number,examinationDate: Date,doctorId: number,computerDiagnosis: string|undefined,doctorDiagnosis:string| undefined,prescriptionName:string| undefined,linkToFile:string| undefined,tissueCultureResult:string| undefined,comments : string| undefined){
      this.id=id;
      this.patientId=patientId;
      this.examinationDate=examinationDate;
      this.doctorId=doctorId;
      this.computerDiagnosis=computerDiagnosis;
      this.doctorDiagnosis=doctorDiagnosis;
      this.prescriptionName=prescriptionName;
      
      
  }
}
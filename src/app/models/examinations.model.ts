export class Examination{
  id:number;
  patientId:number;
  examinationDate: Date;
  doctorId: number;
  computerDiagnosis: string|undefined;
  doctorDiagnosis:string| undefined;
  prescriptionName:string| undefined;
  linkToFile:string| undefined;
 
  labyrinthDiagnosis:string|undefined;
  computerComments:string|undefined;
  probability:Float32Array|undefined;
  constructor(id:number,patientId:number,examinationDate: Date,doctorId: number,computerDiagnosis: string|undefined,doctorDiagnosis:string| undefined,prescriptionName:string| undefined,linkToFile:string| undefined,tissueCultureResult:string| undefined,comments : string| undefined
    ,labyrinthDiagnosis:string|undefined,computerComments:string|undefined, probability:Float32Array|undefined
){
      this.id=id;
      this.patientId=patientId;
      this.examinationDate=examinationDate;
      this.doctorId=doctorId;
      this.computerDiagnosis=computerDiagnosis;
      this.doctorDiagnosis=doctorDiagnosis;
      this.prescriptionName=prescriptionName;
      this.labyrinthDiagnosis=labyrinthDiagnosis;
  this.computerComments=computerComments;
 this.probability=probability;
      
      
  }
}
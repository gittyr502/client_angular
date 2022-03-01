export class Examination {
  id: number;
  patientId: number;
  examinationDate: Date;
  doctorId: number;
  computerDiagnosis: boolean;
  linkToImage: string;
  labyrinthDiagnosis: boolean;
  computerComments: string;
  labComments: string
  probability: number;

  constructor(id: number, patientId: number, examDate: Date, doctorId: number, computerDiagnosis: boolean, linkToImage: string, labyrinthDiagnosis: boolean, computerComments: string, labComments: string, probability: number) {
    this.id = id;
    this.patientId = patientId;
    this.examinationDate = examDate;
    this.doctorId = doctorId;
    this.computerDiagnosis = computerDiagnosis;
    this.linkToImage = linkToImage;
    this.labyrinthDiagnosis = labyrinthDiagnosis;
    this.computerComments = computerComments;
    this.labComments = labComments;
    this.probability = probability;
  }
}
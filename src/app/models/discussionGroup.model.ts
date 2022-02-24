export class DiscussionGroup{
    id: number;
    examinationId: number ;
    diagnosis:number ;
    constructor( id: number,examinationId: number, diagnosis:number )
    {
        this.id=id;
        this.examinationId=id;
        this.diagnosis=diagnosis;
    }
}
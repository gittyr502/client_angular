export class DoctorsInDiscussion{
    id:number ;
    doctorId:number ;
    discussionGroupId: number;
    doctorsOpinion:string;
comment:string | undefined;
linkToImage: string| undefined;
constructor(id:number, doctorId:number,discussionGroupId: number,doctorsOpinion:string, comment:string | undefined,linkToImage: string| undefined){
this.id=id;
this.doctorId=doctorId;
this.discussionGroupId=discussionGroupId;
this.doctorsOpinion=doctorsOpinion;
}

}
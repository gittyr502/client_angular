import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';





@Component({ 
  selector:'reset-password',
  templateUrl: 'reset-password.component.html',
styleUrls:['./reset-password.component.css']})

export class ResetPasswordComponent implements OnInit {
    
    show:boolean=false;
    emailForm: FormGroup = new FormGroup({
        email: new FormControl(),
   
      });

      resetForm:FormGroup = new FormGroup({
        code: new FormControl(),
        newPass:new FormControl(),
        newPass2:new FormControl()
   
      });
    constructor(private _userService:UserService) {
       //this.userId=id;
     }

    ngOnInit() {

    }
    sendMail(email:string)
    {
            this._userService.sendMail(email)
            .subscribe(
              (userId)=>{

              this._userService.userId=userId;
              this.show=true;
            });
              
                    // data => {console.log(data)
                    //   ;
                    // },
                    // err => console.log(err))      
    }

    updatePassword(code:string,newPass:string, newPass2:string){
          if (newPass==newPass)
          this._userService.updatePassword(code,newPass);
    }
 }


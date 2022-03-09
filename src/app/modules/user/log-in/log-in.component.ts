import { Component, OnInit } from '@angular/core';
import {  UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDTO } from 'src/app/models/userDTO.models';
import { Router } from '@angular/router';




@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  hide = true;
  
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  userDTO!: UserDTO;

  constructor(private _loginService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userDTO = new UserDTO();
  }
  LogIn(id: string, password: string) {
    this.userDTO.id = id;
    this.userDTO.password = password;
    this._loginService.getUser(this.userDTO).subscribe(data => {
      if (data) {
        this._loginService.userId=data.id;
        console.log("hello" + " " + data.firstName + " " + data.lastName);
        if (data.userKindId == 4) {
          this.router.navigate(['/patient', { id: data.id }]);
        }
        if (data.userKindId == 1) {
          this.router.navigate(['/manager', { id: data.id }]);
        }
        if (data.userKindId == 2) {
          this.router.navigate(['/doctor', { id: data.id }]);
        }
        if (data.userKindId == 3) {
          this.router.navigate(['/lab', { id: data.id }]);
        }

      }
      else { console.log("no such user"); }
    });
  }
}


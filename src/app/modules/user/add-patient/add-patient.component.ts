import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  temp: any;
  users: string[] = [];
  selected = 'option2';
  value: any;

  constructor(private _userService: UserService) {

  }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(data => {
      this.temp = data;
      this.temp.forEach((element: any) => {
        if (element.userKindId == 4) {
          this.users.push(element.firstName + " " + element.lastName);

        }
      });

    })
    console.log("users: " + this.users);
  }

}

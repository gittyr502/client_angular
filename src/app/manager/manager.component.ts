import { HttpHandler } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../modules/user/add-user/add-user.component';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  links: [];
  activeLink: string;
  constructor(public dialog: MatDialog, private _userService: UserService) {}
  dataSource!: any;
  users!:User[];

  openDialog(): void {
    const dialogRef = this.dialog.open(
      AddUserComponent
      //   , {
      //   width: '30%',
      //   height:'80%',
      //   data: {},
      // }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe((data) => {
      if (data) {
        this.users=data;
        this.dataSource = new MatTableDataSource(this.users);
      }
    });
  }

  navigator() {}
}

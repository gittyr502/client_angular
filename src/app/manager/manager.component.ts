import { HttpHandler } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../modules/user/add-user/add-user.component';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

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
  users!: User[];
  displayedColumns: string[] = [
    'index',
    'userName',
    'userKindId',
    'deleteUser',
    'updateUser',
  ];
  @ViewChild(MatSort) sort!: MatSort;

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '30%',
      height: '80%',
      data: {},
    });
    this.getusers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getusers();
  }

  deleteUser(ele: any) {
    this._userService.deleteUser(ele).subscribe((data:any) => {
      if (data) {
        this.users = data;
        this.users.forEach((element) => {
        });
      }
    });
    this.getusers();
  }
  updateUser(ele:any){

  }

  getusers() {
    this._userService.getAllUsers().subscribe((data) => {
      if (data) {
        this.users = data;
        this.users.forEach((element) => {
          switch (element.userKindId) {
            case 1:
              element.userKindId = 'manager';
              break;
            case 2:
              element.userKindId = 'doctor';
              break;
            case 3:
              element.userKindId = 'lab';
              break;
            default:
              element.userKindId = 'patient';
              break;
          }
        });
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.sort = this.sort;
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-manager-id',
  templateUrl: './by-manager-id.component.html',
  styleUrls: ['./by-manager-id.component.css']
})\
export class ByManagerIdComponent implements OnInit {
  links = ['Drs. list', 'labs list'];
  activeLink = this.links[0];
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  navigator(){
    this.route.navigate(["/"+this.activeLink]);
  }

}

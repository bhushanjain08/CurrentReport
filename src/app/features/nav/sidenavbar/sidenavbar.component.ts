import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  width: number = 250;
  isCollapsed: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  closeNav() {
    this.width = 0;
  }
  openNav() {
    this.width = 250;

  }

}

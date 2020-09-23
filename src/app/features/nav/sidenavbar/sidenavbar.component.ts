import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  width: number = 250;
  isCollapsed: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.closeNav();
  }

  closeNav() {
    this.width = 0;
  }
  openNav() {
    this.width = 250;
  }

  navigate(route: string) {
    this.router.navigate(['/' + route + '/']);
    this.closeNav();
  }

}

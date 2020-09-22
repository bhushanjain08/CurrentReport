import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'reporter';

  isCollapsed: boolean ;

  ngOnInit() {
    // $(document).ready(function() {
    //   alert('I am Called From jQuery');
    // });
  }

  // toggleNavbar() {

  //   this.isCollapsed = !this.isCollapsed;
  // }
}

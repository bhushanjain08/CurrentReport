import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('contactForm') contactForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.contactForm.reset();
  }

}

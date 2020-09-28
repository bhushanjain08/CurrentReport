import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppError } from 'src/app/core/models/Error';
import { UtilityService } from 'src/app/core/services/utility.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

// @Component({selector: 'ngbd-alert-basic', templateUrl: './alert-basic.html'})
export class AlertComponent implements OnInit,AfterViewInit {

  error: AppError;
  showAlert:boolean;
  constructor(private errorInter: UtilityService) {   

  }


  ngOnInit(): void {
    this.error = new AppError();
    this.showAlert =true;

    // this.errorInter.getErrorBSubject().subscribe(data => {
    this.errorInter.getErroSubject().subscribe(data => {                  
      this.setAlert(data);
    });
  }

  ngAfterViewInit(){

    console.log(this.showAlert+"after")
  }
  setAlert(data:any){

    this.error.code = data.code;
    this.error.message = data.message;
    this.error.isError = data.isError;
    this.showAlert =false;
    setTimeout(this.alertFunc,2000);
  }

  alertFunc() {
    console.log("alert"+this.showAlert);
    this.showAlert =true;
  }
}

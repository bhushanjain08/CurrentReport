import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppError } from '../models/Error';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  public error = new BehaviorSubject<AppError>({
    code: 404,
    message: '',
    isError: false
  });

  constructor() { }

  getErroSubject(){
    return this.error.asObservable();
  }

  showError(err: HttpErrorResponse) {
    var er: AppError = new AppError();
    er.message = err.message;
    er.isError = true;
    er.code = err.status;
    this.error.next(er);
  }
}

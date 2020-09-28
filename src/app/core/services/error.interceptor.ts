import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import { UtilityService } from './utility.service';
import { AppError } from '../models/Error';
import { UtilityService } from './utility.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private utilityServ:UtilityService) { }

  public error = new BehaviorSubject<AppError>(
    {
      code: 404,
      message: '',
      isError: false
    }
  );


  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        // retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
          }
          this.utilityServ.showError(error);
          console.log(errorMessage);
          return throwError(errorMessage);
        })
      )
  }


  // showError(err: HttpErrorResponse) {
  //   var er: AppError = new AppError();
  //   er.message = err.message + " ::custom";
  //   er.isError = true;
  //   er.code = err.status;
  //   // console.log(er);
  //   this.error.next(er);
  //   //this.error.lift(er);// next(er);

  //   console.log("observe" + this.error.value.message)
  // }

  // getErrorBSubject() {
  //   return this.error.asObservable();
  // }
}

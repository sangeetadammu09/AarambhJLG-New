import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
     return error.error.status;
  }
}

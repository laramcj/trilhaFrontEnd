import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Local } from './local.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocalFormService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }

  apiPath = environment.baseUrl;

  constructor(private http: HttpClient) {}
  getAll(): Observable<Local[]> {
    return this.http
      .get(this.apiPath)
      .pipe(catchError(this.handleError), map(this.jsonDataToLocals));
  }

  getById(id: number): Observable<Local> {
    return this.http
      .get(this.apiPath)
      .pipe(catchError(this.handleError), map(this.jsonDataToLocal));
  }

  create(local: Local): Observable<Local> {
    return this.http
      .post(this.apiPath, local)
      .pipe(catchError(this.handleError), map(this.jsonDataToLocal));
  }

  // PRIVATE METHODS

  private jsonDataToLocals(jsonData: any): Local[] {
    const locals: Local[] = [];
    jsonData.forEach((element: any) => locals.push(element as Local));
    return locals;
  }

  private jsonDataToLocal(jsonData: any): Local {
    return jsonData as Local;
  }

  private handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO => ', error);
    return throwError(error);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Client } from './client.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientFormService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }

  apiPath = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Client[]> {
    return this.http
      .get(this.apiPath)
      .pipe(catchError(this.handleError), map(this.jsonDataToClients));
  }

  getById(id: number): Observable<Client> {
    return this.http
      .get(this.apiPath)
      .pipe(catchError(this.handleError), map(this.jsonDataToClient));
  }

  create(client: Client): Observable<Client> {
    return this.http
      .post(this.apiPath, client)
      .pipe(catchError(this.handleError), map(this.jsonDataToClient));
  }

  // PRIVATE METHODS

  private jsonDataToClients(jsonData: any): Client[] {
    const clients: Client[] = [];
    jsonData.forEach((element: any) => clients.push(element as Client));
    return clients;
  }

  private jsonDataToClient(jsonData: any): Client {
    return jsonData as Client;
  }

  private handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO => ', error);
    return throwError(error);
  }
}

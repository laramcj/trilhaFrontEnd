import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ImovelFormComponent, Simulacao } from './imovel-form.component';
import { Observable, of } from 'rxjs';
import { Imovel } from './imovel.model';

@Injectable({
  providedIn: 'root',
})
export class ImovelService {
  showMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }

  baseUrl = 'http://localhost:3000/financeiro';

  constructor(private http: HttpClient) {}

  enviar(simulacao: any): Observable<Simulacao> {
    console.log('Serviço respondendo!', simulacao);
    return this.http.post<Simulacao>(this.baseUrl, simulacao);
  }
}

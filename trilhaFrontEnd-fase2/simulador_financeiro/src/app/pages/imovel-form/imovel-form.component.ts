import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ClientStorageService } from '../client-form/client-storage.service';
import { Client } from '../client-form/client.model';
import { Imovel } from './imovel.model';
import { ImovelValidator } from './imovel-validator';
import { Router } from '@angular/router';
import { ImovelStorageService } from './imovel-storage.service';
import { ImovelService } from './imovel.service';
import { ThisReceiver } from '@angular/compiler';

export interface Simulacao {
  client: Client;
  imovel: Imovel;
}
@Component({
  selector: 'app-imovel-form',
  templateUrl: './imovel-form.component.html',
  styleUrls: ['./imovel-form.component.css'],
})
export class ImovelFormComponent implements OnInit {
  imovelForm!: FormGroup;
  client!: Client;
  totalValue!: number;
  entryValue!: number;

  constructor(
    private fb: FormBuilder,
    private clientStorage: ClientStorageService,
    private imovelStorage: ImovelStorageService,
    private router: Router,
    private service: ImovelService
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
    this.client = this.clientStorage.getClient();
    console.log(this.client);
  }

  imovel() {}

  blablabla() {
    const imovel: Imovel = new Imovel(
      this.imovelForm.get('type')?.value,
      this.imovelForm.get('income')?.value,
      this.imovelForm.get('value')?.value,
      this.imovelForm.get('entry')?.value,
      this.imovelForm.get('installments')?.value
    );

    
    const approvedValue = imovel.value! - imovel.entry!;
    console.log('approvedValue ' + approvedValue);

    const parcela = this.imovelForm.get('installments')?.value;
    const taxAccount = 0.08;

    const initialInstallment =
      (approvedValue * (100 + taxAccount * (parcela / 12))) / 100 / parcela;

    imovel.initialInstallment = initialInstallment;
    imovel.approvedValue = approvedValue;
    console.log('ENTRADA ' + initialInstallment);
    console.log('VALOR APROVADO ' + approvedValue);

    console.log(imovel);
    this.imovelStorage.setImovel(imovel);

    this.router.navigate(['approved']);
  }

  simulacao: Simulacao = {
    client: {
      name: '',
      job: '',
      cpf: '',
      email: '',
      datebirth: '',
      zipcode: '',
      celphone: '',
    },
    imovel: {
      type: '',
      income: 1,
      value: 1,
      entry: 1,
      installments: 1,
    },
  };

  // onSubmit() {
  //   this.service.enviar(this.simulacao.value).subscribe({
  //     next: (response: Simulacao) => {
  //       this.simulacao.reset();
  //     },
  //     error: (error: any) => {
  //       alert(
  //         'Não conseguimos o envio das informações do seu formulário, pois estamos sem contato com o banco de dados. Tente novamente!'
  //       );
  //     },
  //   });
  // }

  private criarFormulario() {
    this.imovelForm = this.fb.group({
      type: new FormControl('', [Validators.required]),
      income: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
      entry: new FormControl('', [
        Validators.required,
        ImovelValidator.entryValue,
      ]),
      installments: new FormControl('', [
        Validators.required,
        ImovelValidator.installmentsNumber,
      ]),
    });
  }
}

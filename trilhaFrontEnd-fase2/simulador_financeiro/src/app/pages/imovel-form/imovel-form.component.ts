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

@Component({
  selector: 'app-imovel-form',
  templateUrl: './imovel-form.component.html',
  styleUrls: ['./imovel-form.component.css'],
})
export class ImovelFormComponent implements OnInit {
  imovel!: FormGroup;
  client!: Client;

  constructor(
    private fb: FormBuilder,
    private clientStorage: ClientStorageService
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
    this.client = this.clientStorage.getClient();
    console.log(this.client);
  }

  private criarFormulario() {
    this.imovel = this.fb.group({
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

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ClientStorageService } from '../client-form/client-storage.service';
import { Client } from '../client-form/client.model';

import { Local } from './local.model';
@Component({
  selector: 'app-local-form',
  templateUrl: './local-form.component.html',
  styleUrls: ['./local-form.component.css'],
})
export class LocalFormComponent implements OnInit {
  private useNumber = '[0-9]*';

  local!: FormGroup;
  client!:Client 

  constructor(private fb: FormBuilder, private clientStorage : ClientStorageService) {}

  ngOnInit(): void {
    this.criarFormulario();
    this.client = this.clientStorage.getClient()
    console.log(this.client)
  }

  private criarFormulario() {
    this.local = this.fb.group({
      id: new FormControl(''),
      type: new FormControl('', [Validators.required]),
      income: new FormControl('', [
        Validators.required,
        Validators.pattern(this.useNumber),
      ]),
      value: new FormControl('', [
        Validators.required,
        Validators.pattern(this.useNumber),
      ]),
      entry: new FormControl('', [
        Validators.required,
        Validators.pattern(this.useNumber),
      ]),
      installments: new FormControl('', [
        Validators.required,
        Validators.pattern(this.useNumber),
      ]),
    });
  }
}

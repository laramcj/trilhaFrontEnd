import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Client } from './client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  private useNumber = '[0-9]*';
  private letters = '[a-zA-Z]*';

  client!: FormGroup;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  private criarFormulario() {
    this.client = this.formbuilder.group({
      id: new FormControl(''),
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(this.letters),
        Validators.minLength(3),
      ]),
      job: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.pattern(this.useNumber),
        Validators.minLength(11),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dateBirth: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [
        Validators.required,
        Validators.pattern(this.useNumber),
        Validators.minLength(8),
      ]),
      celPhone: new FormControl('', [
        Validators.required,
        Validators.pattern(this.useNumber),
        Validators.minLength(11),
      ]),
    });
  }
}

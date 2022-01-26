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
      id: new FormControl(null),
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.letters),
        Validators.minLength(3),
      ]),
      job: new FormControl(null, [Validators.required]),
      cpf: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.useNumber),
        Validators.minLength(11),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      datebirth: new FormControl(null, [Validators.required]),
      zipcode: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.useNumber),
        Validators.minLength(8),
      ]),
      celphone: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.useNumber),
        Validators.minLength(11),
      ]),
    });
  }
}

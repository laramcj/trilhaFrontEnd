import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Local } from './local.model';
@Component({
  selector: 'app-local-form',
  templateUrl: './local-form.component.html',
  styleUrls: ['./local-form.component.css'],
})
export class LocalFormComponent implements OnInit {
  private useNumber = '[0-9]*';
  private letters = '[a-zA-Z]*';

  local!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  private criarFormulario() {
    this.local = this.fb.group({
      id: new FormControl(null),
      type: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.useNumber),
      ]),
      income: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.useNumber),
      ]),
      value: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.useNumber),
      ]),
      entry: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.useNumber),
      ]),
      installments: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.useNumber),
      ]),
    });
  }
}

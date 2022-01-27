import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

import { PagesRoutingModule } from './pages-routing.module';
import { InicialComponent } from './inicial/inicial.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { LocalFormComponent } from './local-form/local-form.component';
import { DeniedComponent } from './denied/denied.component';
import { ApprovedComponent } from './approved/approved.component';
import { ExemploComponent } from './exemplo/exemplo.component';

@NgModule({
  declarations: [
    InicialComponent,
    ClientFormComponent,
    LocalFormComponent,
    DeniedComponent,
    ApprovedComponent,
    ExemploComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
  ],
})
export class PagesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { PagesRoutingModule } from './pages-routing.module';
import { InicialComponent } from './inicial/inicial.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { LocalFormComponent } from './local-form/local-form.component';
import { DeniedComponent } from './denied/denied.component';
import { ApprovedComponent } from './approved/approved.component';

@NgModule({
  declarations: [
    InicialComponent,
    ClientFormComponent,
    LocalFormComponent,
    DeniedComponent,
    ApprovedComponent,
  ],
  imports: [CommonModule, MatButtonModule, PagesRoutingModule],
  exports: [MatButtonModule],
})
export class PagesModule {}

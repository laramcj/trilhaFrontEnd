import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';

const routes: Routes = [
  { path: 'lista', component: ListaNumerosComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

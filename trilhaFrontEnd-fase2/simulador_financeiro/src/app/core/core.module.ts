import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, CoreRoutingModule, MatToolbarModule],
  exports: [ToolbarComponent],
})
export class CoreModule {}

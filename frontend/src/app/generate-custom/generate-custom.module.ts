import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateCustomRoutingModule } from './generate-custom-routing.module';
import { GenerateCustomComponent } from './components/generate-custom/generate-custom.component';


@NgModule({
  declarations: [GenerateCustomComponent],
  imports: [
    CommonModule,
    GenerateCustomRoutingModule
  ]
})
export class GenerateCustomModule { }

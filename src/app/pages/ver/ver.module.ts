import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerRoutingModule } from './ver-routing.module';
import { VerComponent } from './ver.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VerComponent
  ],
  imports: [
    CommonModule,
    VerRoutingModule,
FormsModule
  ]
})
export class VerModule { }

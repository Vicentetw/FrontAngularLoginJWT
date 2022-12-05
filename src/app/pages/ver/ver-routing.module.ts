import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerComponent } from './ver.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
const routes: Routes = [{ path: '', component: VerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class VerRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { unaPage } from './una.page';

const routes: Routes = [
  {
    path: '',
    component: unaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class unaPageRoutingModule {}

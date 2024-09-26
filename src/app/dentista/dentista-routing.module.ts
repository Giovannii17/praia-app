import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dentistaPage } from './dentista.page';

const routes: Routes = [
  {
    path: '',
    component: dentistaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class dentistaPageRoutingModule {}

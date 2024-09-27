import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentistaPage } from './dentista.page';

const routes: Routes = [
  {
    path: '',
    component: DentistaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistaPageRoutingModule {}

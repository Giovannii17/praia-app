import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampechePage } from './campeche.page';

const routes: Routes = [
  {
    path: '',
    component: CampechePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampechePageRoutingModule {}

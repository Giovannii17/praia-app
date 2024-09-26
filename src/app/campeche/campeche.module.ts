import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CampechePage } from './campeche.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CampechePageRoutingModule } from './campeche-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CampechePageRoutingModule
  ],
  declarations: [CampechePage]
})
export class CampechePageModule {}

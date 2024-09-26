import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { unaPage } from './una.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { unaPageRoutingModule } from './una-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    unaPageRoutingModule
  ],
  declarations: [unaPage]
})
export class unaPageModule {}

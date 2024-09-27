import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UnaPage } from './una.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { UnaPageRoutingModule } from './una-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    UnaPageRoutingModule
  ],
  declarations: [UnaPage]
})
export class UnaPageModule {}

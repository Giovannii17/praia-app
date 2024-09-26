import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { dentistaPage } from './dentista.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { dentistaPageRoutingModule } from './dentista-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    dentistaPageRoutingModule
  ],
  declarations: [dentistaPage]
})
export class dentistaPageModule {}

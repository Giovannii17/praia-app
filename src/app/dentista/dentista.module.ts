import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DentistaPage } from './dentista.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DentistaPageRoutingModule } from './dentista-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DentistaPageRoutingModule
  ],
  declarations: [DentistaPage]
})
export class DentistaPageModule {}

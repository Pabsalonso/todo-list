import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareaDetailPageRoutingModule } from './tarea-detail-routing.module';

import { TareaDetailPage } from './tarea-detail.page';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareaDetailPageRoutingModule,
    MatRadioModule
  ],
  declarations: [TareaDetailPage]
})
export class TareaDetailPageModule {}

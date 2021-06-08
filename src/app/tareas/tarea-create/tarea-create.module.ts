import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareaCreatePageRoutingModule } from './tarea-create-routing.module';

import { TareaCreatePage } from './tarea-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareaCreatePageRoutingModule
  ],
  declarations: [TareaCreatePage]
})
export class TareaCreatePageModule {}

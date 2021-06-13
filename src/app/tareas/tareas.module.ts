import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareasPageRoutingModule } from './tareas-routing.module';

import { TareasPage } from './tareas.page';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareasPageRoutingModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [TareasPage]
})
export class TareasPageModule {}

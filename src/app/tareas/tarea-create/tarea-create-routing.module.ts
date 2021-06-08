import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareaCreatePage } from './tarea-create.page';

const routes: Routes = [
  {
    path: '',
    component: TareaCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareaCreatePageRoutingModule {}

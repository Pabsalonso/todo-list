import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasPage } from './tareas.page';

const routes: Routes = [
  {
    path: '',
    component: TareasPage
  },
  {
    path: 'tarea-detail',
    loadChildren: () => import('./tarea-detail/tarea-detail.module').then( m => m.TareaDetailPageModule)
  },
  {
    path: 'tarea-create',
    loadChildren: () => import('./tarea-create/tarea-create.module').then( m => m.TareaCreatePageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareasPageRoutingModule {}

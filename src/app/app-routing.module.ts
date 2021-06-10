import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tareas',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tareas',
    children: [
      {
        path: '',
        loadChildren: () => import('./tareas/tareas.module').then( m => m.TareasPageModule)
      },
      {
        path: ':tareaId',
        loadChildren: () => import('./tareas/tarea-detail/tarea-detail.module').then( m => m.TareaDetailPageModule)
      }
    ]
  },
  {
    path: 'newTask',
    loadChildren: () => import('./tareas/tarea-create/tarea-create.module').then( m => m.TareaCreatePageModule)
  },
  {
    path: 'historico',
    children: [
      {
        path: '',
        loadChildren: () => import('./tareas/historico/historico-routing.module').then( m => m.HistoricoPageRoutingModule)
      },
      {
        path: ':tareaId',
        loadChildren: () => import('./tareas/tarea-detail/tarea-detail.module').then( m => m.TareaDetailPageModule)
      }
    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

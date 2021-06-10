import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TareasService } from '../tareas.service';
import {Tarea}  from '../tarea-interface';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tarea-detail',
  templateUrl: './tarea-detail.page.html',
  styleUrls: ['./tarea-detail.page.scss'],
})

export class TareaDetailPage implements OnInit {
  tarea: Tarea;

  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private tareasService: TareasService,
    private alertCtlr: AlertController) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('tareaId');
      this.tarea= this.tareasService.getTask(id);
    });
  }

  async deleteTask(){

    const alerta = await this.alertCtlr.create({
      header: '¿Seguro que desea eliminar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.tareasService.deleteTask(this.tarea.id);
            this.route.navigate(['/tareas']);
          }
        }
      ]
    });
    await alerta.present();
  }

}

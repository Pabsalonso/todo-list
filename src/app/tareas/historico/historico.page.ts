import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {
  historico = [];

  constructor(
    private tareasService: TareasService
  ) { }

  ngOnInit() {
    this.historico = this.tareasService.getCompleted();
  }

  ionViewWillEnter(){
    this.historico = this.tareasService.getCompleted();
  }

}

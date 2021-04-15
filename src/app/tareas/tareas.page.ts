import { Component, OnInit } from '@angular/core';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {
  lista = [];

  constructor(private tareasService: TareasService ) {}

  ngOnInit() {
    this.lista = this.tareasService.getTasks();
  }

}
